# Lista com os nomes dos estados disponíveis para analise
listaCidades = ["Sao Paulo", "Rio de Janeiro", "Bahia", "Parana", "Pernambuco"]
chuvaSuportado = [70, 60, 55, 80 , 50]  # Limites por estado


# Funcoes para exibir os mapas ASCII

def logoFloodGuard():
    logo = r"""                              
                                                  
                                                                                
          /&@@@@@@@@@@&*                                                        
   /@@@@@@@@@@&#((#&@@@@@@@@@@.                                                 
  /@@@                     .@@@%                                                
  %@@&                      &@@&     @@@@@@& @@                         @@*     
  %@@@       &@@@@@@@.      @@@&     @@      @@   @@@@%    &@@@&    @@@&@@*     
  (@@@@@@@@@@@@    /@@@@@@@@@@@#     @@@@@@  @@ &@#   @@ (@&   @@**@@   @@*     
  .@@@                      @@@      @@      @@ (@@   @@ ,@@   @@ ,@@   @@/     
   @@@(      @@@@@@@@.     (@@@                    ((*      /(/      (/         
    @@@@@@@@@@&    /@@@@@@@@@@        &@@@@.                               %@@  
     @@@                  @@@       @@/    @@/            ,*        *   ,, %@@  
      @@@@   &@@@@@@&   &@@@       %@@   @@@@@ @@   @@, ##   @@ @@@.  @@,  @@@  
       *@@@@@@@    &@@@@@@*         @@/    @@/ @@   @@, @@.  @@ @@/   @@   #@@  
          @@@@@    @@@@@              @@@@@&    @@@@%@, @@@@*@@ &@/    @@@@ @@  
             &@@@@@@&                                                           
                                                                                                  
    """
    print(logo)
def mostrarMapaSaoPaulo():
    mapa = r"""                              
                                                  
                @@%                               
             @@@@@@@@@@@ @@@@@@@*                 
           /@@@@@@@@@@@@@@@@@@@@@                 
          @@@@@@@@@@@@@@@@@@@@@@@@                
         @@@@@@@@@@@@@@@@@@@@@@@@@@&              
       @@@@@@@@@@@@@@@@@@@@@@@@@@@@               
              @@@@@@@@@@@@@@@@@@@@@@@   @@@@@@@   
                     @@@@@@@@@@@@@@@@@@@@@@@      
                     *@@@@@@@@@@@@@@@@@@@(        
                      .@@@@@@@@@@@@               
                       &@@@@@@@@                  
                            @*                    
    """
    print(mapa)

def mostrarMapaRioDeJaneiro():
    mapa = r"""
                                                  
                                     @@@@         
                                   @@@@@@         
                                  @@@@@@@@@@@@@@  
                                 @@@@@@@@@@@@@@@  
                                 @@@@@@@@@@@@@@   
                             @@@@@@@@@@@@@@@@@@   
             /@@@@@@@@ .@@@@@@@@@@@@@@@@@@@@@@@   
     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@          
       ,   @@@@@@@@@@@@@@@@@@@@@@@@@@             
        %@@@@@@@@@@@@@@@@@@@@@@@@@@*              
    @@@  /@    @@@@@@@#@@@@@@@@@@@@@              
    """
    print(mapa)

def mostrarMapaBahia():
    mapa = r"""
                                      
                      @@@@   @@@@&      
                @@@@@@@@@@@@@@@@@@@@    
       @@@  &@@@@@@@@@@@@@@@@@@@@@@@.   
     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@     
      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   
       @@@@@@@@@@@@@@@@@@@@@@@@@@@@     
       @@@@@@@@@@@@@@@@@@@@@@@@/        
      ,@@@@@@@@@@@@@@@@@@@@@@@@         
       @@      @  @@@@@@@@@@@@@         
                      @@@@@@@@@         
                          #@@@@         
                          @@@@          
                         &@@@           
                          @@*           
    """
    print(mapa)

def mostrarMapaParana():
    mapa = r"""
         @@@@@@@@@@@@@#  @               
       ,@@@@@@@@@@@@@@@@@@@@@           
      &@@@@@@@@@@@@@@@@@@@@@@           
     @@@@@@@@@@@@@@@@@@@@@@@@@*         
     @@@@@@@@@@@@@@@@@@@@@@@@@          
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(%    
    @ #@@@@@@@@@@@@@@@@@@@@@@@@@@@      
       %@@@@@@@@@@@@@@@@@@@@@@@&@       
                @@@@                     
    """
    print(mapa)

def mostrarMapaPernambuco():
    mapa = r"""
                                        
                                        
     @@@@@@@@   @    @@@@         @@@@@ 
     @@@@@@@@@@@@@@@@@@@@%  &@@@@@@@@@@ 
  ,@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  
    @@@@@@      (.@@@&@@@@@@@@@@        
    .@@                   @             
    """
    print(mapa)

# Exibe o menu com as opcoes de estados
def mostrarMenu():
    logoFloodGuard()
    print("\n==============================")
    print(" Selecione um estado para analise de chuvas:")
    print(" 1 - Sao Paulo")
    print(" 2 - Rio de Janeiro")
    print(" 3 - Bahia")
    print(" 4 - Parana")
    print(" 5 - Pernambuco")
    print("==============================")

# Validacao generica de numero
def validarNumero(texto_input, tipo=float, minimo=0, maximo=None):
    validado = False
    while not validado:
        valor_str = input(texto_input)

        if tipo == int:
            if valor_str.isdigit():
                valor = int(valor_str)
            else:
                print("Entrada invalida! Digite um numero inteiro positivo valido.\n")
                continue

        elif tipo == float:
            partes = valor_str.split('.')
            if len(partes) > 2:
                print("Entrada invalida! Digite um numero decimal positivo valido.\n")
                continue
            if all(p.isdigit() for p in partes):
                valor = float(valor_str)
            else:
                print("Entrada invalida! Digite um numero decimal positivo valido.\n")
                continue
        else:
            print("Tipo invalido para validacao.")
            return None

        if valor < minimo:
            print(f"Valor invalido! Deve ser maior ou igual a {minimo}.\n")
            continue

        if maximo is not None and valor > maximo:
            print(f"Valor invalido! Deve ser menor ou igual a {maximo}.\n")
            continue

        validado = True
    return valor

# Verificacao de risco de enchente
def verificarEnchente(estado_num, chuva, nivel_rio, dias_chuva):
    limite_chuva = chuvaSuportado[estado_num - 1]

    crit1 = chuva > limite_chuva
    crit2 = nivel_rio > 4
    crit3 = dias_chuva > 2

    total_criticos = sum([crit1, crit2, crit3])

    if total_criticos >= 2:
        return "ALERTA: Ha risco de enchente na regiao!"
    else:
        return "Situacao sob controle. Nenhum risco de enchente detectado."

# Funcao principal
def main():
    mostrarMenu()

    estado_valido = False
    while not estado_valido:
        estado_num = int(input("\nDigite o numero do estado: "))
        if 1 <= estado_num <= 5:
            estado_valido = True
        else:
            print("Opcao invalida. Digite um valor de 1 a 5.\n")

    if estado_num == 1:
        estado = "Sao Paulo"
        mostrarMapaSaoPaulo()
    elif estado_num == 2:
        estado = "Rio de Janeiro"
        mostrarMapaRioDeJaneiro()
    elif estado_num == 3:
        estado = "Bahia"
        mostrarMapaBahia()
    elif estado_num == 4:
        estado = "Parana"
        mostrarMapaParana()
    elif estado_num == 5:
        estado = "Pernambuco"
        mostrarMapaPernambuco()

    print("\n---------------------------------------")
    print(f"Estado selecionado: {estado}")
    chuva = validarNumero(f"Digite a quantidade de chuva registrada em {estado} (em mm): ", float, 0, 500)
    nivel_rio = validarNumero("Digite o nivel do rio (em metros): ", float, 0, 20)
    dias_chuva = validarNumero("Digite a quantidade de dias de chuva continua: ", int, 0, 30)
    print("-------------------------------------yo--\n")

    resultado = verificarEnchente(estado_num, chuva, nivel_rio, dias_chuva)

    print(resultado)
    print("\n=======================================")

# Executa o programa
main()
