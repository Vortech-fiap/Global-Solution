const perguntasAdulto = [
    {
      q: "O que deve ser feito antes de uma enchente, ao perceber que há risco iminente?",
      opcoes: [
        { texto: "Desligar eletricidade e gás, mover itens importantes para locais altos, preparar evacuação.", correta: true },
        { texto: "Aguardar as águas baixarem sem fazer nada.", correta: false },
        { texto: "Sair para filmar a enchente de perto.", correta: false }
      ]
    },
    {
      q: "Quais documentos são importantes de reunir antes de uma enchente?",
      opcoes: [
        { texto: "Documentos pessoais, cartões bancários, receitas médicas, guardados em sacos impermeáveis.", correta: true },
        { texto: "Contas de água e luz.", correta: false },
        { texto: "Cartões de visita e panfletos.", correta: false }
      ]
    },
    {
      q: "O que não se deve fazer durante uma enchente em relação à energia elétrica?",
      opcoes: [
        { texto: "Nunca tocar em equipamentos molhados ou com as mãos molhadas; desligar energia.", correta: true },
        { texto: "Ligar todos os eletrodomésticos para secar.", correta: false },
        { texto: "Manter a energia ligada para carregar o celular.", correta: false }
      ]
    },
    {
      q: "Durante a enchente, é seguro caminhar por áreas alagadas?",
      opcoes: [
        { texto: "Não. A água pode estar contaminada, esconder buracos e ser perigosa.", correta: true },
        { texto: "Sim, se estiver usando calçados fechados.", correta: false },
        { texto: "Sim, se a água estiver limpa.", correta: false }
      ]
    },
    {
      q: "O que deve ser feito caso seja necessário sair de casa durante a enchente?",
      opcoes: [
        { texto: "Ir para local seguro e alto, evitar áreas alagadas, seguir a Defesa Civil.", correta: true },
        { texto: "Seguir o fluxo da água até sair do bairro.", correta: false },
        { texto: "Esperar a água abaixar e sair correndo.", correta: false }
      ]
    },
    {
      q: "Quais cuidados devem ser tomados ao retornar para casa após uma enchente?",
      opcoes: [
        { texto: "Verificar estrutura da casa, limpar com água sanitária, descartar itens contaminados.", correta: true },
        { texto: "Voltar normalmente e ligar todos os aparelhos elétricos.", correta: false },
        { texto: "Apenas secar os móveis e usar tudo normalmente.", correta: false }
      ]
    },
    {
      q: "É seguro consumir alimentos ou água que tiveram contato com a enchente?",
      opcoes: [
        { texto: "Não. Podem estar contaminados e devem ser descartados.", correta: true },
        { texto: "Sim, se forem cozidos depois.", correta: false },
        { texto: "Sim, se forem lavados apenas com água corrente.", correta: false }
      ]
    },
    {
      q: "Que tipo de roupas e equipamentos são recomendados ao limpar a casa após a enchente?",
      opcoes: [
        { texto: "Luvas, botas impermeáveis e máscara. Evitar contato direto com a lama.", correta: true },
        { texto: "Chinelo, bermuda e pano de chão.", correta: false },
        { texto: "Camisa regata, sem luvas, para facilitar a movimentação.", correta: false }
      ]
    },
    {
      q: "O que fazer em relação à saúde após uma enchente?",
      opcoes: [
        { texto: "Ir à unidade de saúde, tomar vacinas se necessário, monitorar sintomas.", correta: true },
        { texto: "Ficar em casa e esperar os sintomas desaparecerem.", correta: false },
        { texto: "Tomar medicamentos antigos que tiver em casa.", correta: false }
      ]
    },
    {
      q: "Qual a importância de seguir orientações da Defesa Civil em situações de enchente?",
      opcoes: [
        { texto: "Seguir instruções pode salvar vidas e indicar abrigos e medidas de segurança.", correta: true },
        { texto: "A Defesa Civil exagera nos alertas, então não é necessário seguir.", correta: false },
        { texto: "As orientações são apenas para grandes cidades.", correta: false }
      ]
    }
  ];

  const perguntasCrianca = [
    {
      q: "O que eu devo fazer se a minha casa começar a encher de água?",
      opcoes: [
        { texto: "Avise um adulto, junte suas coisas importantes e vá para um lugar mais alto.", correta: true },
        { texto: "Ficar brincando com os brinquedos na água.", correta: false },
        { texto: "Ir sozinho procurar ajuda na rua.", correta: false }
      ]
    },
    {
      q: "Quais coisas importantes devo guardar bem antes da enchente chegar?",
      opcoes: [
        { texto: "Documentos, remédios, brinquedos especiais e roupa seca em sacos plásticos.", correta: true },
        { texto: "A bola e o controle da TV.", correta: false },
        { texto: "Só roupas velhas.", correta: false }
      ]
    },
    {
      q: "Se a rua estiver cheia de água, posso brincar na enchente?",
      opcoes: [
        { texto: "Não! A água é suja e perigosa.", correta: true },
        { texto: "Sim! Parece divertido!", correta: false },
        { texto: "Só se for com um adulto.", correta: false }
      ]
    },
    {
      q: "O que devo fazer se precisar sair de casa quando está alagando?",
      opcoes: [
        { texto: "Ficar com um adulto e ir para um lugar seco e alto.", correta: true },
        { texto: "Sair correndo para a rua.", correta: false },
        { texto: "Voltar para pegar brinquedos.", correta: false }
      ]
    },
    {
      q: "Posso usar eletrônicos ou ligar a luz com as mãos molhadas?",
      opcoes: [
        { texto: "Não! Pode dar choque. Deixe para os adultos.", correta: true },
        { texto: "Sim, se for rápido.", correta: false },
        { texto: "Sim, se secar a mão na roupa.", correta: false }
      ]
    },
    {
      q: "Depois da enchente posso voltar para casa e brincar?",
      opcoes: [
        { texto: "Só depois que um adulto disser que é seguro.", correta: true },
        { texto: "Sim, se a água já secou.", correta: false },
        { texto: "Sim, se meus brinquedos estiverem lá.", correta: false }
      ]
    },
    {
      q: "Posso comer os alimentos que ficaram molhados com a água da enchente?",
      opcoes: [
        { texto: "Não! Eles podem fazer mal à saúde.", correta: true },
        { texto: "Sim, se passar na água limpa.", correta: false },
        { texto: "Sim, se for chocolate.", correta: false }
      ]
    },
    {
      q: "Que roupas devo usar para ajudar a limpar depois da enchente?",
      opcoes: [
        { texto: "Luvas, botas e roupas que protejam. Mas quem limpa são os adultos!", correta: true },
        { texto: "Chinelo e bermuda.", correta: false },
        { texto: "Sem camisa para não sujar a roupa.", correta: false }
      ]
    },
    {
      q: "Se eu ficar doente depois da enchente, o que devo fazer?",
      opcoes: [
        { texto: "Contar para um adulto e ir ao médico se precisar.", correta: true },
        { texto: "Tomar remédio escondido.", correta: false },
        { texto: "Esperar melhorar sozinho.", correta: false }
      ]
    },
    {
      q: "Quem pode me ajudar em momentos de enchente?",
      opcoes: [
        { texto: "Pais, vizinhos, professores e a Defesa Civil.", correta: true },
        { texto: "Somente os bombeiros.", correta: false },
        { texto: "Somente os policiais.", correta: false }
      ]
    }
  ];

  let perguntas = [];
  let current = 0;
  let score = 0;

  function iniciarQuiz() {
    const idade = parseInt(document.getElementById("idade").value);
    if (isNaN(idade) || idade < 1) return alert("Por favor, insira uma idade válida.");

    perguntas = idade < 14 ? perguntasCrianca : perguntasAdulto;
    current = 0;
    score = 0;

    document.getElementById("idade-form").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    carregarPergunta();
  }

  function carregarPergunta() {
    const p = perguntas[current];
    document.getElementById("question").textContent = `Pergunta ${current + 1}: ${p.q}`;

    const optionsHTML = p.opcoes
      .map(
        (op) => `
      <label>
        <input type="radio" name="answer" value="${op.correta ? 1 : 0}">
        ${op.texto}
      </label>`
      )
      .join("");

    document.getElementById("options").innerHTML = optionsHTML;
  }

  function nextQuestion() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) return alert("Selecione uma resposta!");

    if (selected.value === "1") score++;

    current++;
    if (current < perguntas.length) {
      carregarPergunta();
    } else {
      document.getElementById("quiz").style.display = "none";
      document.getElementById("result").innerHTML = `
        Você acertou <strong>${score}</strong> de <strong>${perguntas.length}</strong> perguntas.
      `;
    }
  }

    function setTheme(theme) {
    const body = document.body;
    const input = document.querySelector('.input-idade input');
    const labels = document.querySelectorAll('label');
    const question = document.querySelector('.question');
    const options = document.querySelectorAll('.options label');
    const radios = document.querySelectorAll('.options input[type="radio"]');

    let bgColor, textColor;

    if (theme === 'claro') {
      bgColor = '#FFF9C4';
      textColor = '#333333';
    } else if (theme === 'escuro') {
      bgColor = '#2C2C2C';
      textColor = '#f0f0f0';
    } else if (theme === 'clean') {
      bgColor = '#E9D8B3';
      textColor = '#2a1d34';
    }

    body.style.backgroundColor = bgColor;
    body.style.color = textColor;

    if (input) {
      input.style.borderBottom = `3px solid ${textColor}`;
      input.style.color = textColor;
    }

    labels.forEach(label => {
      label.style.color = textColor;
    });

    if (question) {
      question.style.color = textColor;
    }

    options.forEach(option => {
      option.style.color = textColor;
    });

    radios.forEach(radio => {
      radio.style.borderColor = textColor;
      radio.style.setProperty('--radio-color', textColor);
    });
  }