#include <Wire.h>
#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 20, 4);

const int TRIG_PIN = 2;
const int ECHO_PIN = 3;
const int MAX_DISTANCE_CM = 50;

const int SENSOR_CHUVA_PIN = A2;
const int SENSOR_VENTO_PIN = A1; 
const int SENSOR_PRESSAO_PIN = A3;

const unsigned long INTERVALO_LEITURA = 2000;
const unsigned long TEMPO_TELA = 3000;

unsigned long tempoUltimaLeitura = 0;
unsigned long tempoUltimaTrocaTela = 0;
bool mostrarAlertas = true;

float pressaoAnterior = 0.0;

void setup() {
  Serial.begin(9600);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  pinMode(SENSOR_CHUVA_PIN, INPUT);
  pinMode(SENSOR_VENTO_PIN, INPUT);
  pinMode(SENSOR_PRESSAO_PIN, INPUT);

  lcd.init();
  lcd.backlight();
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Inicializando...");
  delay(1500);
}

long medirDistancia() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  long duracao = pulseIn(ECHO_PIN, HIGH, 30000);
  if (duracao == 0) return MAX_DISTANCE_CM + 1;
  return duracao / 58;
}

void loop() {
  unsigned long tempoAtual = millis();

  if (tempoAtual - tempoUltimaTrocaTela >= TEMPO_TELA) {
    mostrarAlertas = !mostrarAlertas;
    tempoUltimaTrocaTela = tempoAtual;
    lcd.clear();
  }

  if (tempoAtual - tempoUltimaLeitura >= INTERVALO_LEITURA) {
    tempoUltimaLeitura = tempoAtual;

    long distancia = medirDistancia();
    float volume_litros = 8.48 * (MAX_DISTANCE_CM - distancia) / MAX_DISTANCE_CM;
    if (distancia > MAX_DISTANCE_CM) volume_litros = 0;

    int chuvaValor = analogRead(SENSOR_CHUVA_PIN);
    bool estaChovendo = (chuvaValor < 500);

    int ventoValor = analogRead(SENSOR_VENTO_PIN);
    float velocidadeVento = ventoValor * 100.0 / 1023.0;

    int potValor = analogRead(SENSOR_PRESSAO_PIN);
    float pressao = map(potValor, 0, 1023, 980, 1050);

    String riscoPressao = "Normal";
    String alertaTempestade = "";
    if (pressaoAnterior > 0 && (pressaoAnterior - pressao) > 5.0) {
      riscoPressao = "Alerta";
      alertaTempestade = "Tempestade";
    }
    pressaoAnterior = pressao;

    String riscoEnchente = "BAIXO ✅";
    if (volume_litros >= 6.2 || riscoPressao == "Alerta") {
      riscoEnchente = estaChovendo ? "ALTO ⚠️⚠️" : "ALTO ⚠️";
    } else if (volume_litros >= 2.65) {
      riscoEnchente = "MEDIO ⚠";
    }

    String riscoVento = "Baixo";
    if (velocidadeVento >= 60) {
      riscoVento = "Alto ⚠️⚠️";
    } else if (velocidadeVento >= 30) {
      riscoVento = "Medio ⚠";
    }

    // --- Serial Debug ---
    Serial.println("-----");
    Serial.print("Volume: "); Serial.println(volume_litros, 2);
    Serial.print("Vento: "); Serial.println(velocidadeVento);
    Serial.print("Pressao: "); Serial.println(pressao);
    Serial.print("Risco enchente: "); Serial.println(riscoEnchente);
    Serial.print("Risco Queda de Árvore: "); Serial.println(riscoVento);
    if (alertaTempestade != "") Serial.println("⚠️ Alerta de tempestade");

    // --- LCD ---
    if (mostrarAlertas) {
      lcd.setCursor(0, 0);
      lcd.print("R. Enchente:");
      lcd.print(riscoEnchente);

      lcd.setCursor(0, 1);
      lcd.print("R. Queda arv:");
      lcd.print(riscoVento);

      lcd.setCursor(0, 2);
      lcd.print("Chuva: ");
      lcd.print(estaChovendo ? "Sim" : "Nao");

      lcd.setCursor(0, 3);
      lcd.print(alertaTempestade != "" ? "Alerta: Tempestade" : "Pressao OK");
    } else {
      lcd.setCursor(0, 0);
      lcd.print("Volume: ");
      lcd.print(volume_litros, 1);
      lcd.print(" L");

      lcd.setCursor(0, 1);
      lcd.print("Vento: ");
      lcd.print(velocidadeVento, 1);
      lcd.print(" km/h");

      lcd.setCursor(0, 2);
      lcd.print("Pressao: ");
      lcd.print(pressao, 1);
      lcd.print(" hPa");

      lcd.setCursor(0, 3);
      lcd.print("Chuva: ");
      lcd.print(estaChovendo ? "Sim" : "Nao");
    }
  }
}
