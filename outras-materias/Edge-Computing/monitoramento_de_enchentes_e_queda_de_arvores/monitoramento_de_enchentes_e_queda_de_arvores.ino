#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// Inicializa o LCD no endereço I2C 0x27 com 20 colunas e 4 linhas
LiquidCrystal_I2C lcd(0x27, 20, 4);

// Pinos do sensor ultrassônico
const int TRIG_PIN = 2;
const int ECHO_PIN = 3;
const int MAX_DISTANCE_CM = 50; // Limite máximo de leitura do sensor

// Pinos dos sensores analógicos
const int SENSOR_CHUVA_PIN = A2;
const int SENSOR_VENTO_PIN = A1;  // Anemômetro (sensor de vento)
const int SENSOR_PRESSAO_PIN = A3; // Simulando pressão com potenciômetro

// Intervalos de tempo para leituras e troca de tela
const unsigned long INTERVALO_LEITURA = 2000; // Leitura a cada 2s
const unsigned long TEMPO_TELA = 3000;        // Troca de tela a cada 3s

// Variáveis para controlar tempo e alternar entre telas
unsigned long tempoUltimaLeitura = 0;
unsigned long tempoUltimaTrocaTela = 0;
bool mostrarAlertas = true;

float pressaoAnterior = 0.0;

void setup() {
  Serial.begin(9600);

  // Define os modos dos pinos
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  pinMode(SENSOR_CHUVA_PIN, INPUT);
  pinMode(SENSOR_VENTO_PIN, INPUT);
  pinMode(SENSOR_PRESSAO_PIN, INPUT);

  // Inicia o LCD com mensagem de inicialização
  lcd.init();
  lcd.backlight();
  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("Inicializando...");
  delay(1500);
}

// Função para medir a distância usando o sensor ultrassônico
long medirDistancia() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  long duracao = pulseIn(ECHO_PIN, HIGH, 30000);
  if (duracao == 0) return MAX_DISTANCE_CM + 1;
  return duracao / 58; // Converte microsegundos para centímetros
}

void loop() {
  unsigned long tempoAtual = millis();

  // Alterna entre mostrar alertas e mostrar dados a cada 3 segundos
  if (tempoAtual - tempoUltimaTrocaTela >= TEMPO_TELA) {
    mostrarAlertas = !mostrarAlertas;
    tempoUltimaTrocaTela = tempoAtual;
    lcd.clear();
  }

  // Realiza leituras a cada 2 segundos
  if (tempoAtual - tempoUltimaLeitura >= INTERVALO_LEITURA) {
    tempoUltimaLeitura = tempoAtual;

    // Mede altura da água e calcula volume proporcional (baseado no máximo de 8.48L)
    long distancia = medirDistancia();
    float volume_litros = 8.48 * (MAX_DISTANCE_CM - distancia) / MAX_DISTANCE_CM;
    if (distancia > MAX_DISTANCE_CM) volume_litros = 0;

    // Lê sensor de chuva (quanto mais molhado, mais baixo o valor analógico)
    int chuvaValor = analogRead(SENSOR_CHUVA_PIN);
    bool estaChovendo = (chuvaValor < 500); // Considera chuva se < 500

    // Lê o valor do sensor de vento (simulado com potenciômetro)
    int ventoValor = analogRead(SENSOR_VENTO_PIN);
    float velocidadeVento = ventoValor * 100.0 / 1023.0;

    // Lê o valor da pressão (simulado com potenciômetro e convertido)
    int potValor = analogRead(SENSOR_PRESSAO_PIN);
    float pressao = map(potValor, 0, 1023, 980, 1050);

    // Detecta queda de pressão para possível tempestade
    String riscoPressao = "Normal";
    String alertaTempestade = "";
    if (pressaoAnterior > 0 && (pressaoAnterior - pressao) > 5.0) {
      riscoPressao = "Alerta";
      alertaTempestade = "Tempestade";
    }
    pressaoAnterior = pressao;

    // Define risco de enchente com base no volume e na chuva/pressão
    String riscoEnchente = "BAIXO ✅";
    if (volume_litros >= 6.2 || riscoPressao == "Alerta") {
      riscoEnchente = estaChovendo ? "ALTO ⚠️⚠️" : "ALTO ⚠️";
    } else if (volume_litros >= 2.65) {
      riscoEnchente = "MEDIO ⚠";
    }

    // Classificação do risco de vento
    String riscoVento = "Baixo";
    if (velocidadeVento >= 60) {
      riscoVento = "Alto ⚠️⚠️";
    } else if (velocidadeVento >= 30) {
      riscoVento = "Medio ⚠";
    }

    // --- Serial Debug para visualizar no monitor ---
    Serial.println("-----");
    Serial.print("Volume: "); Serial.println(volume_litros, 2);
    Serial.print("Vento: "); Serial.println(velocidadeVento);
    Serial.print("Pressao: "); Serial.println(pressao);
    Serial.print("Risco enchente: "); Serial.println(riscoEnchente);
    Serial.print("Risco Queda de Árvore: "); Serial.println(riscoVento);
    if (alertaTempestade != "") Serial.println("⚠️ Alerta de tempestade");

    // --- Mostra as informações no LCD ---
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
