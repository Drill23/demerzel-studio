/* =====================================================================
   DEMERZEL STUDIO — TODO O CONTEÚDO DO SITE MORA AQUI
   ---------------------------------------------------------------------
   Para atualizar o site, mude só este arquivo e faça o push:
   - versão nova de um app  → mude "versao" do projeto e ponha uma
                              linha nova no "diario" (lá embaixo)
   - projeto novo           → copie um bloco de "projetos" e ajuste
   - data do topo           → "atualizadoEm"
   O resto (desenho, animações, ordem) se ajusta sozinho.
   ===================================================================== */

window.SITE = {
  atualizadoEm: "24/11/2026",
  estudio: "Demerzel Studio",
  credito: "Desenvolvido por A.A · Demerzel Studio",
  github: "https://github.com/Drill23",

  hero: {
    kicker: "Portfólio vivo · 2026",
    titulo: "Uma pessoa com ideias.<br><em>Uma equipe de IAs</em> pra tirar do papel.",
    texto:
      "Aqui ficam os apps, jogos, robôs e canais que o Adriano cria junto com o Claude, o Codex, o Gemini e o Hermes. Tudo feito por conversa, testado em aparelho de verdade e atualizado quase todo dia."
  },

  numeros: [
    { valor: "~60", rotulo: "versões do Lume TV em 33 dias" },
    { valor: "6", rotulo: "plataformas: TV, Fire Stick, Android, iPhone, Windows e web" },
    { valor: "233", rotulo: "jogos na Video Game for All" },
    { valor: "6", rotulo: "IAs trabalhando juntas" }
  ],

  /* ---------------------------------------------------------------
     PROJETOS — a ordem aqui é a ordem no site.
     mock = desenho animado do lado do texto. Opções:
       tv | music | sopro | vgfa | chat | pipeline | canal | grafico | orquestra
     cor  = cor de destaque do projeto (qualquer cor CSS)
     --------------------------------------------------------------- */
  projetos: [
    {
      id: "lume-tv",
      nome: "Lume TV",
      categoria: "Apps",
      tagline: "Filmes, séries, desenhos e TV ao vivo — em português, em qualquer tela.",
      cor: "#f5a524",
      cor2: "#ff6a3d",
      status: "No ar",
      versao: "2.0.1 · Windows 2.1.1",
      plataformas: ["Fire Stick", "Android TV", "Celular Android", "iPhone", "Windows", "Windows 7 (32 bits)"],
      descricao:
        "O carro-chefe. Um app de streaming completo, com cara de Netflix na TV e cara de iPhone no iPhone. Abre em segundos, lembra onde você parou, separa a família em perfis e põe o português do Brasil sempre na frente — dublado primeiro, sinopses traduzidas, trailers dublados.",
      destaques: [
        { t: "Abre e já toca", d: "Início instantâneo e pré-carregamento: o filme começou a tocar em 1,7 s nos testes (antes eram 9,9 s)." },
        { t: "Perfis da família", d: "Até 6 perfis com PIN, perfil infantil só com desenhos e limite de tempo por dia." },
        { t: "Continuar assistindo", d: "Volta de onde parou em qualquer aparelho, com opção de começar do início." },
        { t: "Séries sem esforço", d: "Pula a abertura, conta o próximo episódio e avisa quando sai episódio novo." },
        { t: "Coleções e sagas", d: "Filmes da mesma saga juntos, na ordem certa, e a aba Em breve com lembrete." },
        { t: "Ao vivo e guia", d: "Canais ao vivo com guia de programação das próximas 12 horas." },
        { t: "Player caprichado", d: "Áudio noturno, timer para dormir, legenda e áudio memorizados, PiP no iPhone." },
        { t: "Celular vira controle", d: "Escolha o filme no celular e mande tocar na TV." },
        { t: "Atualiza sozinho", d: "Versão nova chega pelo próprio app, sem reinstalar e sem perder nada." }
      ],
      numeros: [
        { valor: "1,7 s", rotulo: "para começar a tocar" },
        { valor: "6", rotulo: "perfis por conta" },
        { valor: "7 dias", rotulo: "de teste com código" }
      ],
      feitoPor: ["Adriano", "Claude", "Codex", "Gemini"],
      mock: "tv",
      especial: true,

      /* Bloco do YouTube Premium grátis (aparece só no Lume TV) */
      youtube: {
        titulo: "Tem YouTube Premium de graça aqui dentro.",
        texto:
          "Pouca gente sabe: dentro do Lume tem um YouTube completo, sem anúncios, sem pagar assinatura. É o YouTube de sempre — só que do jeito Premium.",
        passos: [
          { t: "Abra o Lume", d: "Na TV, no celular ou no iPhone — entre com a sua conta normalmente." },
          { t: "Abra o menu do seu perfil", d: "No celular e no iPhone, toque nos três pontinhos (•••) lá em cima, ao lado da lupa. Na TV, desça com o controle até o seu perfil, no fim do menu lateral." },
          { t: "Encontre o YouTube", d: "Toque em YouTube e pronto: vídeos sem propaganda, à vontade." }
        ],
        obs: "Não aparece no perfil infantil — de propósito."
      },

      /* Como conseguir acesso */
      acesso:
        "O Lume funciona com conta. Quem quiser conhecer recebe um código de teste: digita no app, ganha uma conta nova e usa à vontade por 7 dias."
    },

    {
      id: "lume-music",
      nome: "Lume Music",
      categoria: "Apps",
      tagline: "Um player de música que parece objeto de vidro.",
      cor: "#f7a8b8",
      cor2: "#9fb8ff",
      status: "No iPhone",
      versao: "3.0 “Prisma”",
      plataformas: ["iPhone"],
      descricao:
        "O catálogo inteiro do YouTube Music com capas bonitas de verdade, letras sincronizadas e um visual “Liquid Glass” do iOS 26. A tela Tocando agora pinta o fundo com as cores da capa do disco, e o estilo do player — vinil, fita K7 ou ondas — você escolhe nos Ajustes.",
      destaques: [
        { t: "Capas de verdade", d: "Busca a capa oficial na Apple e na Deezer em vez do print do vídeo." },
        { t: "Letras que acompanham", d: "Cinco fontes de letra, em ordem, até achar a sincronizada." },
        { t: "Descobrir", d: "Lançamentos, Top Brasil, Top Mundo e novidades dos artistas que você ouve." },
        { t: "Visualizador real", d: "As ondas mexem com o som de verdade (análise de frequência ao vivo)." }
      ],
      numeros: [
        { valor: "5", rotulo: "fontes de letras" },
        { valor: "3", rotulo: "estilos de player" }
      ],
      feitoPor: ["Adriano", "Gemini", "Claude"],
      mock: "music"
    },

    {
      id: "sopro",
      nome: "Sopro",
      categoria: "Apps",
      tagline: "O teclado do iPhone que entende o que você quis dizer.",
      cor: "#5b8cff",
      cor2: "#ffb48a",
      status: "No iPhone",
      versao: "3.1",
      plataformas: ["iPhone", "Dynamic Island", "Central de Controle"],
      descricao:
        "Um teclado com inteligência artificial. Você fala e ele escreve já corrigido; você diz “apaga tudo” ou “troca reunião por almoço” e ele edita o texto. No modo escuta, basta dizer a palavra de ativação. E quando você digita com os dois polegares correndo, ele conserta os erros sem atrapalhar.",
      destaques: [
        { t: "Fala vira texto limpo", d: "O ditado passa por uma IA que corrige o que o reconhecedor errou." },
        { t: "Edição por voz", d: "Apagar, trocar palavras, reescrever — várias trocas numa frase só." },
        { t: "Modo escuta", d: "Dois “ouvidos” ao mesmo tempo: acordou 49 de 54 vezes, com 2 alarmes falsos." },
        { t: "Corretor de polegar", d: "Aprende os seus erros e prevê a próxima palavra com 145 milhões de palavras de base." }
      ],
      numeros: [
        { valor: "67%", rotulo: "dos erros rápidos consertados" },
        { valor: "41 mil", rotulo: "palavras no dicionário" },
        { valor: "0,4 s", rotulo: "pior demora para acordar" }
      ],
      feitoPor: ["Adriano", "Claude", "Codex", "Gemini"],
      mock: "sopro"
    },

    {
      id: "vgfa",
      nome: "Video Game for All",
      categoria: "Jogos",
      tagline: "Uma central de videogame retrô que roda no navegador.",
      cor: "#ff4fd8",
      cor2: "#38e1ff",
      status: "No ar",
      versao: "0.8 “Universal”",
      plataformas: ["Navegador", "TV", "Celular como controle"],
      descricao:
        "Abra o site e jogue. Clássicos de PS1, PS2 e jogos independentes, com a cara do Lume TV: Top 10, perfis e navegação pelas setas do controle. O celular vira controle por um código, o jogo pode ir para a TV sem servidor no meio, e o save fica guardado sozinho.",
      destaques: [
        { t: "Celular = controle", d: "Pareia por código e joga — sem instalar nada." },
        { t: "Qualquer controle", d: "8BitDo, PlayStation, Xbox, Switch: reconhece e deixa configurar na mão." },
        { t: "Continuar de onde parou", d: "Saves automáticos por jogo, no próprio aparelho." },
        { t: "Minha Central", d: "Seus próprios jogos guardados no navegador, com botão de apagar." }
      ],
      numeros: [
        { valor: "233", rotulo: "jogos" },
        { valor: "112", rotulo: "de PS2" },
        { valor: "~3 s", rotulo: "para conectar o celular" }
      ],
      feitoPor: ["Adriano", "Gemini", "Claude"],
      link: { url: "https://drill23.github.io/video-game-for-all/", rotulo: "Jogar agora" },
      mock: "vgfa"
    },

    {
      id: "hermes",
      nome: "Hermes",
      categoria: "IA & automação",
      tagline: "Um assistente que mora no Mac e atende pelo Telegram.",
      cor: "#e8c26a",
      cor2: "#4fd1c5",
      status: "Ligado",
      versao: "Agente pessoal",
      plataformas: ["Mac", "Telegram"],
      descricao:
        "O Hermes é um agente de IA que fica rodando no Mac o tempo todo. O Adriano manda mensagem do celular e ele executa: pesquisa, organiza, roda tarefas e gerencia a fábrica de vídeos. Só obedece a uma pessoa.",
      destaques: [
        { t: "Sempre ligado", d: "Liga sozinho com o Mac e responde de qualquer lugar." },
        { t: "Gerente da fábrica", d: "Coordena roteiro, imagens, narração e montagem dos vídeos." }
      ],
      numeros: [{ valor: "24 h", rotulo: "de plantão" }],
      feitoPor: ["Adriano", "Hermes", "Claude"],
      mock: "chat"
    },

    {
      id: "fabrica",
      nome: "Fábrica de Vídeos",
      categoria: "IA & automação",
      tagline: "Do roteiro ao vídeo publicado, numa linha de montagem de IAs.",
      cor: "#ff5a5f",
      cor2: "#ffb03a",
      status: "Pronta para ligar",
      versao: "Instalada",
      plataformas: ["Mac", "YouTube"],
      descricao:
        "Uma linha de produção: o Hermes escreve o roteiro e gera as imagens, o Instinct grava a narração, o Quest revisa, e a montagem sai pronta com legendas. Está instalada e testada — começa a produzir quando o Adriano der a largada.",
      destaques: [
        { t: "Equipe de agentes", d: "Cada IA com seu papel, conversando por uma pasta compartilhada." },
        { t: "Legendas automáticas", d: "Transcrição local, palavra por palavra, sem serviço pago." }
      ],
      numeros: [{ valor: "5", rotulo: "etapas automáticas" }],
      feitoPor: ["Adriano", "Hermes", "Claude"],
      mock: "pipeline"
    },

    {
      id: "arquivo-curioso",
      nome: "O Arquivo Curioso",
      categoria: "Conteúdo",
      tagline: "História como se você estivesse lá.",
      cor: "#d9a066",
      cor2: "#8c5a3c",
      status: "No YouTube",
      versao: "Canal",
      plataformas: ["YouTube", "Shorts"],
      descricao:
        "Um canal de história narrado em segunda pessoa — “você acorda em Roma, no ano 64…” — com ilustrações em cartoon. A cada vídeo novo, o agente Quest e o Claude montam o pacote: título, três capas diferentes para testar e ajustes no roteiro.",
      destaques: [
        { t: "Você no centro", d: "Narração imersiva, foco em Roma Antiga." },
        { t: "Capas testadas", d: "Três versões por vídeo para descobrir qual chama mais." }
      ],
      numeros: [{ valor: "3", rotulo: "capas por vídeo" }],
      feitoPor: ["Adriano", "Quest", "Claude"],
      link: { url: "https://www.youtube.com/@ArquivoCuriosoReal", rotulo: "Ver o canal" },
      mock: "canal"
    },

    {
      id: "estudio-curtas",
      nome: "Estúdio de Curtas",
      categoria: "Conteúdo",
      tagline: "Personagens, edits e objetos 3D feitos sob encomenda.",
      cor: "#7ddc6f",
      cor2: "#3fa7ff",
      status: "Sob demanda",
      versao: "Coleção de receitas",
      plataformas: ["Shorts", "Web"],
      descricao:
        "Receitas prontas para criar conteúdo na hora: “Os Três do Brejo” (Sapo, Raposa e Coruja em episódios animados), edits de mundo de blocos com música techno, objetos 3D desmontáveis da Oficina 3D e vídeos documentais feitos a partir de um áudio.",
      destaques: [
        { t: "Os Três do Brejo", d: "Episódio animado com história, efeitos e trilha original." },
        { t: "Oficina 3D", d: "Qualquer coisa vira um objeto 3D que se desmonta peça por peça." }
      ],
      numeros: [{ valor: "4", rotulo: "formatos prontos" }],
      feitoPor: ["Adriano", "Claude"],
      mock: "orquestra"
    },

    {
      id: "laboratorio",
      nome: "Laboratório Quant",
      categoria: "Laboratório",
      tagline: "Robôs de mercado estudados com matemática — e honestidade.",
      cor: "#8fe3a0",
      cor2: "#e3d38f",
      status: "Só simulação",
      versao: "13 versões estudadas",
      plataformas: ["Mac", "Painel web"],
      descricao:
        "Dois robôs de pesquisa: um para memecoins e outro para velas de 5 e 15 minutos. Cada versão nasce dos erros da anterior e só “sobe” se vencer em dados que nunca viu. Tem motor que simula 256 jogadas à frente, como xadrez, e memória com 1,2 milhão de cenários. Ainda roda só em simulação: nenhuma estratégia provou lucro consistente.",
      destaques: [
        { t: "Régua dura", d: "Versão só é promovida se ganhar fora da amostra." },
        { t: "Motor de antecipação", d: "256 continuações simuladas para cada decisão." }
      ],
      numeros: [
        { valor: "256", rotulo: "futuros simulados por decisão" },
        { valor: "0 R$", rotulo: "de dinheiro real em jogo" }
      ],
      feitoPor: ["Adriano", "Claude", "Codex"],
      mock: "grafico"
    }
  ],

  /* ---------------------------------------------------------------
     EQUIPE
     --------------------------------------------------------------- */
  equipe: [
    { nome: "Adriano", papel: "Ideia, direção e teste", texto: "Tem as ideias, decide o que fica, testa tudo no Fire Stick e no iPhone dele e devolve o veredito sem rodeio.", sigla: "A" },
    { nome: "Claude", papel: "Design e engenharia", texto: "Opus planeja e revisa, Sonnet e Haiku executam. Desenhou o Lume, o Sopro, o Prisma e este site.", sigla: "C" },
    { nome: "Codex", papel: "Fundação e painel", texto: "Começou o Lume TV, cuida do painel de acessos e entrega versões quando o Claude descansa.", sigla: "X" },
    { nome: "Gemini", papel: "Primeiros passos", texto: "Pelo Antigravity, começou o Lume Music, a Video Game for All e o Lume para Windows.", sigla: "G" },
    { nome: "Hermes", papel: "Agente de plantão", texto: "Mora no Mac, atende pelo Telegram e gerencia a fábrica de vídeos.", sigla: "H" },
    { nome: "Quest e Instinct", papel: "Conteúdo", texto: "Quest revisa e pede as capas; Instinct grava as narrações.", sigla: "Q" }
  ],

  /* ---------------------------------------------------------------
     DIÁRIO DE BORDO — mais recente no topo.
     Para registrar uma novidade, copie uma linha e ajuste.
     --------------------------------------------------------------- */
  diario: [
    { data: "24/11", projeto: "Demerzel Studio", texto: "Nasce este site, com tudo num lugar só.", quem: "Claude" },
    { data: "24/11", projeto: "Lume TV", texto: "Versão 2.0.1 no celular, TV e iPhone; Windows 2.1.1, agora também no Windows 7 de 32 bits.", quem: "Codex" },
    { data: "23/11", projeto: "Lume TV", texto: "Códigos de teste: 7 dias de conta nova, e cada conta com seus próprios perfis.", quem: "Claude + Codex" },
    { data: "23/11", projeto: "Video Game for All", texto: "Versão 0.8 “Universal”: 233 jogos, controles Bluetooth de todo tipo e saves automáticos.", quem: "Claude" },
    { data: "22/11", projeto: "Lume Music", texto: "Versão 3.0 “Prisma”: vidro do iOS 26, capas oficiais e fundo com as cores do disco.", quem: "Claude" },
    { data: "22/11", projeto: "Video Game for All", texto: "Versão 0.7: o celular vira controle e o jogo vai para a TV sem servidor.", quem: "Claude" },
    { data: "20/11", projeto: "Lume TV", texto: "O Lume chega ao Windows, com instalador e atualização automática.", quem: "Gemini + Claude" },
    { data: "19/11", projeto: "Sopro", texto: "Versão 3.1: modo escuta com dois ouvidos e edição por voz.", quem: "Claude" },
    { data: "19/11", projeto: "O Arquivo Curioso", texto: "Parceria com o agente Quest para títulos e capas de cada vídeo.", quem: "Quest + Claude" },
    { data: "17/11", projeto: "Sopro", texto: "Versão 2.0: digitação muito mais leve, deslizar para escrever e intenções por voz.", quem: "Claude" },
    { data: "17/11", projeto: "Lume TV", texto: "Versão 1.6: revisão geral, com o Opus orquestrando outros modelos.", quem: "Claude" },
    { data: "09/11", projeto: "Lume TV", texto: "Versões 1.4 e 1.5: abertura nova, início instantâneo, coleções, sagas e Em breve.", quem: "Claude" },
    { data: "08/11", projeto: "Hermes", texto: "O Hermes chega ao Mac e passa a atender pelo Telegram.", quem: "Hermes + Claude" },
    { data: "06/11", projeto: "Lume TV", texto: "Versões 1.2 e 1.3: o visual do celular que virou marca registrada e a TV reformada.", quem: "Claude" },
    { data: "03/11", projeto: "Laboratório Quant", texto: "Madrugada de pesquisa: da v6 à v13, cada uma testada em dados novos.", quem: "Claude + Codex" },
    { data: "30/10", projeto: "Sopro", texto: "Nasce o teclado de voz, instalado no iPhone pelo SideStore.", quem: "Claude" },
    { data: "24/10", projeto: "Lume TV", texto: "Versão 0.6: o filme passa a tocar em 1,7 s; áudio noturno e controle pelo celular.", quem: "Claude" },
    { data: "23/10", projeto: "Lume TV", texto: "Versões 0.4 e 0.5: interface reescrita, abertura de cinema, perfis da família e trailers dublados.", quem: "Claude" },
    { data: "22/10", projeto: "Lume TV", texto: "Primeira versão: Android, iPhone e o painel de acessos.", quem: "Codex" }
  ]
};
