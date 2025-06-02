export const campaignPhasesData = [
  {
    id: "phase-1-landing",
    name: "Fase 1: O Desembarque",
    subtitle: "Establishing Footholds",
    duration: "Semanas 1-4",
    description:
      "As forças iniciais chegam a Sangua Terra e estabelecem cabeças de ponte em território hostil.",

    phase_rules: [
      {
        title: "Primeiras Posições",
        description:
          "Todos os Sites Estratégicos começam em Control Level 0. Cada aliança escolhe 1 site para começar com Control Level 2.",
      },
      {
        title: "Reconhecimento Limitado",
        description:
          "Surgical Deep Strike sofre -1 nos testes (terreno desconhecido). Agendas de 'Search' concedem +1SAP adicional.",
      },
      {
        title: "Recursos Iniciais",
        description:
          "Cada jogador começa com 3RP adicionais e todas as Crusade forces ganham +2XP em sua primeira batalha.",
      },
    ],

    special_events: [
      {
        trigger: "Início da Fase",
        name: "Arribada",
        description:
          "Cada aliança seleciona 2 Strategic Goals iniciais. Essas goals custam -3SAP para completar durante esta fase.",
      },
      {
        trigger: "Meio da Fase",
        name: "Primeiros Conflitos",
        description:
          "A aliança com mais vitórias ganha 2CVP. Todas as alianças ganham 1RP por Site Estratégico controlado.",
      },
      {
        trigger: "Final da Fase",
        name: "Consolidação",
        description:
          "Sites Estratégicos com Control Level 4+ não podem ser reduzidos abaixo de 2 na próxima fase.",
      },
    ],

    strategic_objectives: [
      "Estabelecer presença em todos os Sites Estratégicos",
      "Completar pelo menos 1 Strategic Goal",
      "Vencer primeira batalha de cada jogador da aliança",
      "Acumular 15+ SAP coletivamente",
    ],

    victory_conditions: {
      major: "Controlar 2+ Sites Estratégicos no final da fase",
      minor: "Ter Control Level 3+ em pelo menos 1 Site Estratégico",
    },

    lore: "O céu de Sangua Terra escurece com as naves de guerra de três alianças poderosas. Cada uma traz suas próprias ambições e métodos, mas todas sabem que apenas uma emergirá vitoriosa do Nachmund Gauntlet. Os primeiros disparos ecoam através de Urbanosprawl Alpha enquanto comandantes rivais testam as defesas uns dos outros e estabelecem suas primeiras posições estratégicas.",
  },

  {
    id: "phase-2-escalation",
    name: "Fase 2: A Escalada",
    subtitle: "War Intensifies",
    duration: "Semanas 5-8",
    description:
      "As hostilidades se intensificam enquanto cada aliança luta para expandir sua influência e controlar pontos-chave.",

    phase_rules: [
      {
        title: "Guerra Total",
        description:
          "Todas as penalidades de Surgical Deep Strike são removidas. Unidades ganham +1XP adicional por destruir inimigos em Sites Estratégicos.",
      },
      {
        title: "Recursos de Guerra",
        description:
          "Cada aliança ganha 1RP por Site Estratégico controlado no início de cada turno de campanha.",
      },
      {
        title: "Veteranos Endurecidos",
        description:
          "Unidades com 3+ Battle Traits ganham habilidade especial: re-role teste de Morale failed.",
      },
    ],

    special_events: [
      {
        trigger: "Início da Fase",
        name: "Chamada às Armas",
        description:
          "Cada aliança pode recrutar 1 nova Crusade force (máx. 1000 pontos) com 2RP grátis.",
      },
      {
        trigger: "Meio da Fase",
        name: "Ponto de Virada",
        description:
          "A aliança com menos CVP ganha evento especial: todos os jogadores ganham 1 Mighty Champion grátis.",
      },
      {
        trigger: "Final da Fase",
        name: "Preparação Final",
        description:
          "Todas as alianças podem trocar até 2 Strategic Goals por outros da mesma dificuldade.",
      },
    ],

    strategic_objectives: [
      "Controlar pelo menos 1 Site Estratégico com Control Level 6+",
      "Completar 3+ Strategic Goals durante a fase",
      "Ter pelo menos 1 Mighty Champion em Heroic rank",
      "Vencer 60% das batalhas jogadas na fase",
    ],

    victory_conditions: {
      major: "Controlar 3+ Sites Estratégicos simultaneamente",
      minor: "Liderar em CVP no final da fase",
    },

    lore: "A guerra se intensifica conforme as três alianças estabelecem suas estratégias. Os Guardiões fortificam posições defensivas, os Usurpadores lançam ataques brutais, e os Saqueadores exploram oportunidades onde as encontram. Cada batalha agora tem consequências que ecoam através de toda Sangua Terra, e heróis começam a emergir do caos.",
  },

  {
    id: "phase-3-endgame",
    name: "Fase 3: O Confronto Final",
    subtitle: "Destiny Awaits",
    duration: "Semanas 9-12",
    description:
      "O destino de Sangua Terra e do Nachmund Gauntlet será decidido nos combates finais desta campanha épica.",

    phase_rules: [
      {
        title: "Tudo ou Nada",
        description:
          "Battle Points valem o dobro para aumentar Control Levels. Strategic Goals concedem +2CVP adicionais ao serem completadas.",
      },
      {
        title: "Lendas da Guerra",
        description:
          "Mighty Champions em Legendary rank concedem +1RP por turno. Unidades Legendary ganham re-role completo em 1 teste por batalha.",
      },
      {
        title: "Recursos Desesperados",
        description:
          "Crusade forces podem usar RP de outras forces da mesma aliança. Máximo de 5RP pode ser transferido por fase.",
      },
    ],

    special_events: [
      {
        trigger: "Início da Fase",
        name: "Hora da Verdade",
        description:
          "Cada aliança declara sua Strategic Goal final (escolha livre, custo dobrado em SAP). Completar garante vitória automática.",
      },
      {
        trigger: "Meio da Fase",
        name: "Batalha Decisiva",
        description:
          "A aliança líder em CVP deve defender contra as outras duas em batalla épica. Resultado define os últimos turnos.",
      },
      {
        trigger: "Final da Fase",
        name: "Destino Selado",
        description:
          "Contagem final de CVP. Em caso de empate, aliança com mais Sites Estratégicos em Control Level 7 vence.",
      },
    ],

    strategic_objectives: [
      "Atingir Control Level 7 em pelo menos 1 Site Estratégico",
      "Completar Strategic Goal final da aliança",
      "Ter pelo menos 1 Legendary Mighty Champion",
      "Acumular mais CVP que as outras alianças combinadas",
    ],

    victory_conditions: {
      major:
        "Completar Strategic Goal final OU ter mais CVP que todas as outras alianças",
      minor: "Controlar pelo menos 2 Sites Estratégicos com Control Level 5+",
    },

    lore: "O clímax se aproxima. Sangua Terra treme sob o peso dos exércitos em conflito, suas torres antigas testemunhando a luta final pelo controle do Nachmund Gauntlet. Heróis lendários lideram cargas desesperadas, comandantes apostam tudo em estratégias ousadas, e o destino de milhões pende na balança. Apenas uma aliança emergirá vitoriosa deste cadinho de guerra.",
  },
];

export const campaignTurnStructure = {
  duration: "1-2 semanas por turno de campanha",
  steps: [
    {
      order: 1,
      name: "Strategic Planning",
      description: "Alianças selecionam Strategic Goals e distribuem recursos",
      actions: [
        "Declarar novos Strategic Goals (máx. 3 ativos)",
        "Distribuir RP entre jogadores da aliança",
        "Planejar ataques aos Sites Estratégicos",
        "Resolução de eventos especiais da fase",
      ],
    },
    {
      order: 2,
      name: "Campaign Battles",
      description: "Jogadores lutam batalhas para ganhar Battle Points e SAP",
      actions: [
        "Organizar batalhas entre alianças",
        "Aplicar bônus de Sites Estratégicos",
        "Registrar vitórias e derrotas",
        "Distribuir recompensas (XP, RP, SAP)",
      ],
    },
    {
      order: 3,
      name: "Strategic Resolution",
      description:
        "Resolução dos resultados das batalhas nos Sites Estratégicos",
      actions: [
        "Gastar Battle Points para aumentar Control Levels",
        "Verificar completamento de Strategic Goals",
        "Distribuir CVP por controle de sites",
        "Atualizar status geral da campanha",
      ],
    },
    {
      order: 4,
      name: "Narrative Development",
      description:
        "Desenvolvimento de histórias e preparação para próximo turno",
      actions: [
        "Registrar eventos narrativos significativos",
        "Promover unidades que atingiram marcos",
        "Preparar eventos especiais do próximo turno",
        "Atualizar ranking de alianças",
      ],
    },
  ],
};

export const phaseTransitionEvents = [
  {
    from_phase: "phase-1-landing",
    to_phase: "phase-2-escalation",
    event: "O Grande Despertar",
    description:
      "Sangua Terra desperta totalmente para a guerra. Todos os sistemas defensivos planetários são ativados.",
    mechanical_effect:
      "Todas as batalhias agora incluem 1 Planetary Defense asset aleatório que pode ser ativado uma vez por batalha.",
  },
  {
    from_phase: "phase-2-escalation",
    to_phase: "phase-3-endgame",
    event: "A Convergência Final",
    description:
      "As três alianças reconhecem que apenas uma pode controlar Sangua Terra. Negociações cessam.",
    mechanical_effect:
      "Não há mais batalhas 'neutras'. Todas as batalhas devem ser entre alianças diferentes.",
  },
];
