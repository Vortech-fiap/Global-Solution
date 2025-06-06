
<p align="center">
  <img src="https://github.com/user-attachments/assets/12f5ccd6-ce4e-4aff-a49c-10239b080087" alt="FloodGuard" width="250"/>
</p>

# 🌧️ Projeto de Monitoramento de Enchentes e Queda de Árvores

Este projeto utiliza sensores conectados ao Arduino para monitorar **risco de enchentes** e **queda de árvores** em tempo real. As informações são exibidas em um display LCD I2C, alternando entre telas com **valores dos sensores** e **níveis de alerta**, com base em critérios definidos.


<p align="center">
  <img src="https://github.com/user-attachments/assets/23f321d5-2401-493f-aab2-a47e0c0a5161" alt="FloodGuard" width="250"/>
</p>

## 🔧 Componentes Utilizados

- Sensor ultrassônico (HC-SR04) – altura da água
- Sensor de chuva (analógico)
- Potenciômetro para simular velocidade do vento
- Potenciômetro para simular pressão atmosférica
- Display LCD I2C 20x4
- Arduino UNO (ou compatível)

---

## 📊 Lógica da Solução

### 🌊 Risco de Enchente

A altura da água é medida com um sensor ultrassônico. O volume é calculado proporcionalmente, considerando 8,48 litros como volume máximo (altura mínima de 2 cm).

| Nível   | Altura da água (cm)      | Volume aproximado (litros) | Descrição                                      |
|---------|---------------------------|-----------------------------|------------------------------------------------|
| **Baixo**   | até 15 cm                  | 0 a ~2.65 litros            | Pouca água acumulada, risco baixo              |
| **Médio**   | >15 cm a 35 cm             | ~2.65 a ~6.2 litros         | Atenção, volume moderado, risco médio          |
| **Alto**    | >35 cm a 48 cm (máximo)    | ~6.2 a ~8.48 litros         | Volume alto, risco alto de enchente            |

> 💡 O risco de enchente aumenta em caso de queda brusca da pressão atmosférica, indicando possível tempestade.

---

### 🌬️ Risco de Queda de Árvore

Calculado com base na **velocidade do vento** e presença de **chuva**.

| Condição                          | Alerta      |
|----------------------------------|-------------|
| Chuva acumulada + vento moderado | Médio ⚠     |
| Chuva forte + vento forte        | Alto ⚠⚠     |

---

### ☔ Sensor de Chuva – Funcionamento

- Quando o sensor está **molhado** (chovendo), o sinal analógico **fica baixo** (próximo de 0).
- Quando está **seco** (sem chuva), o sinal analógico **fica alto** (próximo de 1023).

---

## 📺 Interface no LCD

O LCD alterna automaticamente entre duas telas a cada 3 segundos:

### 🟥 Tela de Risco
- **Risco de enchente** (baixo, médio ou alto)
- **Risco de queda de árvore**
- Estado atual da **chuva**
- **Alerta de tempestade**, se aplicável

### 🟩 Tela de Valores
- Volume da água em **litros**
- Velocidade do **vento (km/h)**
- **Pressão atmosférica (hPa)**
- Estado atual da **chuva**

---

## 🧪 Como Usar

1. Monte o circuito com os sensores e o LCD no Arduino.
2. Faça o upload do código `.ino` para a placa.
3. Observe as leituras no **Serial Monitor** ou no **display LCD**.
4. Acompanhe os alertas de risco em tempo real.
5. Ou, se preferir, **acesse o projeto simulado no Wokwi**:  
   👉 [Simular no Wokwi](https://wokwi.com/projects/432789054081228801)


---

## 👥 Equipe do Projeto

| Nome   | RM       | E-mail                     |
|--------|----------|----------------------------|
| Luara Martins de Oliveira Ramos  | 565573   | rm565573@fiap.com.br       |
| Kaio Victtor Santos Andrade Galvão   | 566536   | rm566536@fiap.com.br       |
| Jean Pierre Andrade Feltran   | 566534   | rm566534@fiap.com.br       |

---
