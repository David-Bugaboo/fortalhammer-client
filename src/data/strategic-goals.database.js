export const strategicGoalsData = [
  // FASE 1
  {
    id: "sg-phase1-counter-strategies",
    title: "CONTRA-ESTRATÉGIAS",
    phase: 1,
    alliance_restriction: "Guardiões",
    description: "Aplique pressão onde quer que o inimigo mostre sua mão.",
    requirements: {
      condition: "Sua aliança ganhou mais SAP que uma ou mais outras alianças.",
    },
    rewards: {
      effect: "+1 CONTROL LEVEL",
      description:
        "Esta recompensa é reivindicada após todas as outras alianças terem reivindicado suas recompensas de Strategic Goals desta fase. Sua aliança ganha +1 Control Level em cada site estratégico que uma ou mais alianças opostas aumentaram seu Control Level nesta fase da campanha.",
    },
  },
  {
    id: "sg-phase1-bloody-winnings",
    title: "GANHOS SANGRENTOS",
    phase: 1,
    alliance_restriction: "Usurpadores",
    description:
      "Expulse o inimigo dos territórios escolhidos e decore o campo de batalha com troféus sangrentos.",
    requirements: {
      condition:
        "Selecione dois sites estratégicos. Sua aliança atribuiu mais SAP a esses sites estratégicos que uma ou mais outras alianças (não precisa ser a mesma aliança para cada site selecionado).",
    },
    rewards: {
      effect: "+1 CONTROL LEVEL",
      description:
        "Sua aliança ganha +1 Control Level em um site estratégico onde você está Estabelecendo Base, e +1 Control Level em um site estratégico onde uma ou mais alianças opostas estão Estabelecendo Base.",
    },
  },
  {
    id: "sg-phase1-unopposed-gains",
    title: "GANHOS SEM OPOSIÇÃO",
    phase: 1,
    alliance_restriction: "Saqueadores",
    description:
      "Enquanto seus inimigos batalham uns contra os outros em outro lugar, promova seus próprios objetivos insidiosos nas sombras.",
    requirements: {
      condition:
        "Sua aliança atribuiu 1 ou mais SAP a um site estratégico onde uma ou mais outras alianças não atribuíram SAP.",
    },
    rewards: {
      effect: "+1 CONTROL LEVEL",
      description:
        "Sua aliança ganha +1 Control Level em cada site estratégico onde sua aliança atribuiu SAP e onde todas as outras alianças não têm Presença.",
    },
  },
  {
    id: "sg-phase1-decisive-first-strike",
    title: "PRIMEIRO GOLPE DECISIVO",
    phase: 1,
    alliance_restriction: null,
    description: "Um golpe rápido e decisivo alcança dominância.",
    requirements: {
      condition:
        "Selecione um site estratégico. Sua aliança atribuiu mais SAP a esse site estratégico que o SAP combinado atribuído a esse site estratégico de todas as outras alianças.",
    },
    rewards: {
      effect: "+1 CONTROL LEVEL",
      description: "Sua aliança ganha +1 Control Level nesse site estratégico.",
    },
  },
  {
    id: "sg-phase1-recon-in-force",
    title: "RECONHECIMENTO EM FORÇA",
    phase: 1,
    alliance_restriction: null,
    description:
      "Coleta ampla de inteligência permite decisões estratégicas mais informadas enquanto a guerra se intensifica.",
    requirements: {
      condition: "Sua aliança atribuiu um ou mais SAP a cada site estratégico.",
    },
    rewards: {
      effect: "+1 CONTROL LEVEL",
      description:
        "Sua aliança ganha +1 Control Level em cada site estratégico onde sua aliança não tem Presença.",
    },
  },

  // FASE 2
  {
    id: "sg-phase2-consolidate-position",
    title: "CONSOLIDAR POSIÇÃO",
    phase: 2,
    alliance_restriction: "Guardiões",
    description:
      "Construa sobre seus sucessos fortificando o terreno que já conquistou.",
    requirements: {
      condition:
        "Selecione dois sites estratégicos onde seu Control Level está Protegendo Posições ou melhor. Sua aliança atribuiu mais SAP a esses sites estratégicos que uma ou mais outras alianças (não precisa ser a mesma aliança para cada site selecionado).",
    },
    rewards: {
      effect: "+1 CONTROL LEVEL",
      description:
        "Sua aliança ganha +1 Control Level em ambos esses sites estratégicos.",
    },
  },
  {
    id: "sg-phase2-wrest-control",
    title: "ARREBATAR CONTROLE",
    phase: 2,
    alliance_restriction: "Usurpadores",
    description:
      "Aquilo que seus inimigos prezam deve ser arrancado de suas garras sem misericórdia.",
    requirements: {
      condition:
        "Selecione um site estratégico controlado por uma outra aliança. Este Strategic Goal é alcançado se sua aliança atribuiu mais SAP a ele que essa aliança.",
    },
    rewards: {
      effect: "+2 CONTROL LEVEL",
      description: "Sua aliança ganha +2 Control Level nesse site estratégico.",
    },
  },
  {
    id: "sg-phase2-daring-raids",
    title: "ATAQUES OUSADOS",
    phase: 2,
    alliance_restriction: "Saqueadores",
    description:
      "Atacando e desaparecendo, você deve assediar seus inimigos para pilhar seus suprimentos e enfraquecer seu moral.",
    requirements: {
      condition:
        "Sua aliança atribuiu pelo menos 1 SAP por jogador em sua aliança a três ou mais sites estratégicos. Por exemplo, se sua aliança tivesse três jogadores, sua aliança precisaria atribuir pelo menos três Strategic Asset points a pelo menos três sites estratégicos diferentes para alcançar este Strategic Goal.",
    },
    rewards: {
      effect: "+1 CONTROL LEVEL",
      description:
        "Sua aliança ganha +1 Control Level em cada site estratégico onde uma ou mais alianças opostas têm Estabelecendo Base (ou melhor).",
    },
  },
  {
    id: "sg-phase2-raid-supply-lines",
    title: "ATACAR LINHAS DE SUPRIMENTO",
    phase: 2,
    alliance_restriction: null,
    description:
      "Corte as linhas de suprimento, reforço e comunicação do inimigo para perturbar seus planos.",
    requirements: {
      condition:
        "Selecione um site estratégico. Sua aliança atribuiu mais SAP a esse site estratégico que cada outra aliança, mas o Control Level da sua aliança não aumentou nesse site estratégico.",
    },
    rewards: {
      effect: "-1 CONTROL LEVEL",
      description:
        "Todas as outras alianças perdem -1 Control Level nesse site estratégico.",
    },
  },
  {
    id: "sg-phase2-shifting-priorities",
    title: "PRIORIDADES MUTÁVEIS",
    phase: 2,
    alliance_restriction: null,
    description:
      "Atraia o inimigo e então pivote rapidamente para uma nova disposição, conquistando território vital no processo.",
    requirements: {
      condition:
        "Selecione dois sites estratégicos onde sua aliança tem Estabelecendo Base (ou melhor). Sua aliança tem pelo menos 1 SAP por jogador em sua aliança atribuído a esses sites estratégicos.",
    },
    rewards: {
      effect: "-1 CONTROL LEVEL / +3 CONTROL LEVEL",
      description:
        "Sua aliança perde -1 Control Level em ambos esses sites estratégicos, mas sua aliança ganha +3 Control Level em um outro site estratégico.",
    },
  },

  // FASE 3
  {
    id: "sg-phase3-strategic-gambit",
    title: "ESTRATAGEMA ESTRATÉGICO",
    phase: 3,
    alliance_restriction: null,
    description:
      "Se esta grande aposta der certo, fortalecerá sua posição por toda a extensão urbana.",
    requirements: {
      condition:
        "Selecione dois sites estratégicos. Este Strategic Goal é alcançado se sua aliança atribuiu mais SAP a cada um desses sites estratégicos.",
    },
    rewards: {
      effect: "-2 CONTROL LEVEL / +1 CONTROL LEVEL",
      description:
        "Sua aliança perde -2 Control Level de um dos sites estratégicos selecionados, mas sua aliança ganha +1 Control Level em todos os outros sites estratégicos.",
    },
  },
  {
    id: "sg-phase3-tip-the-scales",
    title: "INCLINAR A BALANÇA",
    phase: 3,
    alliance_restriction: null,
    description:
      "Uma aplicação precisamente medida de força colocará você à frente de seus inimigos no momento crucial.",
    requirements: {
      condition:
        "Selecione um site estratégico. Sua aliança atribuiu mais SAP a esse site estratégico que uma ou mais outras alianças.",
    },
    rewards: {
      effect: "+1 CONTROL LEVEL",
      description:
        "Sua aliança ganha +1 Control Level em todos os sites estratégicos onde você tem o mesmo Control Level que uma ou mais outras alianças.",
    },
  },
  {
    id: "sg-phase3-reinforce-defences",
    title: "REFORÇAR DEFESAS",
    phase: 3,
    alliance_restriction: "Guardiões",
    description:
      "Transforme porções apressadamente conquistadas e reforçadas da paisagem urbana em verdadeiras fortalezas.",
    requirements: {
      condition:
        "Selecione todos os sites estratégicos que estão Fortificados. Sua aliança atribuiu mais SAP a esses sites estratégicos que uma ou mais outras alianças (não precisa ser a mesma aliança para cada site selecionado).",
    },
    rewards: {
      effect: "+1 CONTROL LEVEL",
      description:
        "Sua aliança ganha +1 Control Level em cada site estratégico que sua aliança tem Fortificado.",
    },
  },
  {
    id: "sg-phase3-raze-defences",
    title: "ARRASAR DEFESAS",
    phase: 3,
    alliance_restriction: "Usurpadores",
    description:
      "Destrua os pontos fortes do inimigo e lance suas bandeiras na terra.",
    requirements: {
      condition:
        "Selecione um site estratégico onde uma aliança oposta tem Fortificado. Este Strategic Goal é alcançado se sua aliança atribuiu mais SAP a esse site estratégico.",
    },
    rewards: {
      effect: "-1 CONTROL LEVEL",
      description:
        "Todas as alianças opostas perdem -1 Control Level nesse site estratégico.",
    },
  },
  {
    id: "sg-phase3-cunning-feint",
    title: "FINTA ASTUTA",
    phase: 3,
    alliance_restriction: "Saqueadores",
    description:
      "Com o inimigo convencido de seus objetivos estratégicos, é hora de atacar seu verdadeiro alvo.",
    requirements: {
      condition:
        "Selecione um site estratégico onde sua aliança tem Estabelecendo Base (ou melhor). Este Strategic Goal é alcançado se sua aliança não atribuiu nenhum SAP a esse site estratégico e todas as alianças opostas atribuíram 1 ou mais SAP a esse site estratégico.",
    },
    rewards: {
      effect: "-1 CONTROL LEVEL / +2 CONTROL LEVEL",
      description:
        "Sua aliança perde -1 Control Level nesse site estratégico, mas sua aliança ganha +2 Control Level em qualquer outro site estratégico.",
    },
  },
];

export const campaignMechanics = {
  battlePointsTable: [
    { battleSize: "Incursion", win: 2, draw: 2, loss: 1 },
    { battleSize: "Strike Force", win: 3, draw: 2, loss: 1 },
    { battleSize: "Onslaught", win: 4, draw: 3, loss: 2 },
  ],

  controlLevelRewards: [
    { phase: 1, first: 2, second: 1, third: 0 },
    { phase: 2, first: 2, second: 1, third: 1 },
    { phase: 3, first: 3, second: 2, third: 1 },
  ],

  controlLevelDescriptions: [
    { level: 0, status: "Sem Presença", description: "No Presence" },
    {
      level: "1-2",
      status: "Estabelecendo Base",
      description: "Establishing Foothold",
    },
    {
      level: "3-4",
      status: "Protegendo Posições",
      description: "Securing Positions",
    },
    { level: "5+", status: "Fortificado", description: "Fortified" },
  ],
};

export const campaignPhaseInfo = {
  overview: `Ao longo de uma fase da campanha, jogadores de alianças opostas batalharão uns contra os outros para ganhar Battle points (BP) para sua aliança. O Campaign Master tem algumas opções sobre como os jogadores são combinados para jogos. Eles podem deixar os jogadores organizarem jogos por si mesmos, com desafios lançados e honra em jogo. Alternativamente, pode ser apropriado introduzir mais estrutura nas combinações. Por exemplo, um cronograma de jogos garantirá que todos tenham uma quantidade igual de jogos, ou, em campanhas com um grande número de jogadores, cada aliança pode ser dividida em subgrupos menores que são então combinados uns contra os outros para tornar a organização de jogos ainda mais simples. No entanto, antes que qualquer batalha em uma fase seja travada, cada aliança deve primeiro selecionar um Strategic Goal.`,

  strategicGoals: `Strategic Goals representam uma variedade de estratagemas, intrigas e gambitos que sua aliança pode tentar alcançar além da vitória militar, e ao fazê-lo ganhar uma série de vantagens estratégicas e recompensas durante cada fase da campanha, atribuindo Strategic Asset points (SAP) na tentativa de alcançar a vitória.`,

  strategicAssetPoints: `Algumas Agendas nesta publicação fornecem aos jogadores oportunidades de ganhar Strategic Asset points (SAP), que representam a alocação dos recursos de uma aliança em sua tentativa de alcançar controle sobre os sites estratégicos de Sangua Terra.

No início de cada fase da campanha, cada aliança deve selecionar um Strategic Goal que se aplica a toda a aliança para essa fase. Para este processo, recomendamos eleger um Warmaster para coordenar cada aliança, especialmente em campanhas maiores. Uma vez que cada aliança selecionou seu Strategic Goal, eles devem informar o Campaign Master de sua escolha. Essas escolhas são mantidas em segredo - a escolha de cada aliança é conhecida apenas pelo Campaign Master e pelos outros membros de sua própria aliança.

Cada Strategic Goal tem um conjunto de requisitos; estes exigirão que os jogadores em sua aliança ganhem SAP durante suas batalhas, o que pode ser realizado de várias maneiras. Após cada batalha, cada jogador deve atribuir todos os SAP que ganharam dessa batalha a um dos quatro sites estratégicos de Sangua Terra, e informar o Campaign Master desta decisão.

No final de cada fase da campanha quando as alianças estão recebendo suas recompensas, o Campaign Master revelará o número total de SAP que cada aliança atribuiu a cada um dos quatro sites estratégicos de Sangua Terra, e verificará se essa aliança atendeu aos requisitos listados em seu Strategic Goal; se tiverem, eles também receberão o Bônus de Strategic Goal associado.`,

  battlePoints: `Cada vez que uma batalha é travada, sua aliança ganha uma série de Battle points baseada no tamanho da batalha e qual foi o resultado.

Após cada batalha, cada jogador deve atribuir todos os Battle points que ganharam dessa batalha a um dos quatro sites estratégicos de Sangua Terra; cada jogador deve informar o Campaign Master de sua escolha de site estratégico e quantos Battle points estão atribuindo a ele.`,

  endOfPhase: `Uma vez que a fase da campanha chega ao fim, as alianças receberão recompensas dependendo do número combinado de Battle points que atribuíram a cada site estratégico ao longo dessa fase.

Para cada site estratégico, a aliança com mais Battle points atribuídos a esse site estratégico fica em primeiro lugar e recebe a recompensa de primeiro lugar, a aliança com o segundo maior número de Battle points atribuídos a esse site estratégico fica em segundo lugar e receberá a recompensa de 2º lugar, e - se sua campanha tem três alianças - a aliança com o terceiro maior número de Battle points atribuídos a esse site estratégico recebe a recompensa de 3º lugar. Repita isso para todos os quatro sites estratégicos de Sangua Terra.

No caso de empate para 1º lugar, todas as alianças empatadas recebem a recompensa de 2º lugar e qualquer aliança não empatada recebe a recompensa de 3º lugar. No caso de empate para 2º lugar, as alianças empatadas recebem a recompensa de 3º lugar. Conforme as fases da campanha progridem, as recompensas para cada uma aumentam, garantindo que os vencedores finais não sejam decididos até o final da campanha.

A menos que explicitamente declarado de outra forma, a ordem na qual as alianças recebem suas recompensas de Control Level começa com a aliança que tem mais Battle points gerais, seguida pela aliança com o segundo maior número de Battle points gerais, então finalmente a aliança com o menor número de Battle points gerais. Ao coletar suas recompensas de Battle points, essa aliança resolve todas as premiações ao mesmo tempo, antes da próxima aliança resolver suas recompensas.

Após todas as recompensas de Control Level das alianças terem sido concedidas, todas as alianças que alcançaram o Strategic Goal que selecionaram no início da fase da campanha receberão as recompensas adicionais de seus objetivos completados.

A menos que explicitamente declarado de outra forma, a ordem na qual as alianças recebem suas recompensas de Strategic Goals começa com a aliança que tem mais SAP gerais, seguida pela aliança com o segundo maior número de SAP gerais, então finalmente a aliança com o menor número de SAP gerais. Ao coletar suas recompensas de SAP, essa aliança resolve todas as recompensas ao mesmo tempo, antes da próxima aliança resolver suas recompensas.

Em qualquer caso, no caso de empate ou recompensas que resolveriam ao mesmo tempo, o Campaign Master deve determinar aleatoriamente qual aliança resolve suas recompensas primeiro. Às vezes as alianças terão que tomar decisões ao resolver suas recompensas - mais frequentemente ao selecionar quais sites estratégicos aumentar seu Control Level. Para este processo, recomendamos eleger um Warmaster para coordenar cada aliança, especialmente em campanhas maiores.

Quando a próxima fase da campanha começa, os Battle points e Strategic Asset points de cada aliança são redefinidos para 0, colocando as alianças em pé de igualdade para a próxima fase da campanha.`,

  endOfCampaign: `Após todas as alianças terem recebido suas recompensas no final da fase 3 da campanha, a campanha termina. A aliança com mais CVP toma controle da cidade capital de Sangua Terra e é coroada vitoriosa. Se há empate para mais CVP, e uma das alianças empatadas controla mais sites estratégicos que as outras alianças empatadas, então essa aliança arranca o controle de Urbanosprawl Alpha e é a vencedora. Se isso também for empate, então a aliança com mais SAP no final da fase 3 é a vencedora. Se até isso for empate, então a campanha termina em um empate sangrento, e a batalha por Sangua Terra continua...`,
};
