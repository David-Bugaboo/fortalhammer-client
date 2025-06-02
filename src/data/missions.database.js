export const missionsData = {
  incursion: [
    {
      id: "mission-1-strategic-strike",
      name: "Golpe Estratégico",
      d6_number: 1,
      lore: "Um local estratégico crucial está vulnerável a ataques, mas o assalto deve ocorrer agora, com o tempo se esgotando. As hostilidades se intensificam rapidamente enquanto comandantes rivais disputam a zona de desembarque e guerreiros entram em combate.",
      mission_rules: [
        {
          title: "Zona de Desembarque Segura",
          description:
            "Cada vez que uma unidade realiza um Surgical Deep Strike, se essa unidade for posicionada totalmente dentro de sua própria Zona de Desdobramento, adicione 2 ao teste de Deep Strike da unidade.",
        },
      ],
      victor_bonus: {
        description:
          "O vencedor pode selecionar uma unidade de sua Crusade army que esteja totalmente dentro da zona de desdobramento do oponente no final da batalha.",
        reward: "Essa unidade ganha 5XP.",
      },
      actions: null,
      image: "https://wahapedia.ru/wh40k10ed/img/maps/ng/StrategicStrike.png",
      gamesize: "incursion",
      objectives: [
        {
          id: "objective-seize-ground",
          title: "Conquistar Terreno",
          type: "Progressive Objective",
          scoring: [
            {
              timing: "Fase de Comando (rodadas 2+)",
              condition: "Controlar marcadores de objetivo",
              points: "1VP por marcador (máx. 3VP)",
            },
            {
              timing: "5ª rodada (apenas segundo jogador)",
              condition: "Controlar marcadores de objetivo",
              points: "1VP por marcador (máx. 3VP)",
            },
          ],
        },
        {
          id: "objective-breakthrough-push",
          title: "Investida Decisiva",
          type: "Progressive Objective",
          scoring: [
            {
              condition: "1+ unidades não-Battle-shocked na DZ do oponente",
              points: "1VP",
            },
            {
              condition: "1+ unidades BATTLELINE na DZ do oponente",
              points: "+1VP",
            },
          ],
        },
      ],
    },
    {
      id: "mission-2-nachmund-gauntlet",
      name: "Garra de Nachmund: Dominação",
      d6_number: 2,
      lore: "Após um caótico assalto aéreo, invasores e defensores estão dispersos. O primeiro comandante a garantir uma posição decisiva no campo de batalha poderá derrotar os inimigos e consolidar sua força.",
      mission_rules: [
        {
          title: "Posto Avançado",
          description:
            "Os jogadores só ganham 1CP durante seu turno se controlarem o marcador de objetivo dentro de sua zona de desdobramento.",
        },
      ],
      victor_bonus: {
        description:
          "O vencedor pode selecionar uma unidade adicional de sua Crusade army para ser Marked for Greatness.",
      },
      actions: null,
      image: "https://wahapedia.ru/wh40k10ed/img/maps/ng/Stranglehold.png",
      gamesize: "incursion",
      objectives: [
        {
          id: "objective-ruthless-aggression",
          title: "Agressão Implacável",
          type: "Progressive Objective",
          scoring: [
            {
              condition:
                "Controlar objetivos previamente controlados pelo oponente",
              points: "1VP",
            },
            {
              condition: "Controlar objetivos na DZ do oponente",
              points: "+1VP",
            },
          ],
        },
        {
          id: "objective-domination",
          title: "Dominação",
          type: "Progressive Objective",
          scoring: [
            {
              timing: "Fase de Comando (rodadas 2+)",
              condition: "Controlar 1+ objetivos",
              points: "1VP",
            },
            {
              condition: "Controlar mais objetivos que o oponente",
              points: "2VP",
            },
          ],
        },
      ],
    },
    {
      id: "mission-3-supply-raid",
      name: "Saque de Suprimentos",
      d6_number: 3,
      lore: "Um rico estoque de equipamentos vitais foi deixado exposto após o colapso das defesas orbitais locais. O cenário está armado para um banho de sangue enquanto exércitos rivais correm para garantir esse prêmio valioso.",
      mission_rules: [
        {
          title: "Zona de Desembarque Esgotada",
          description:
            "No início da primeira rodada, os jogadores selecionam aleatoriamente 3 objetivos diferentes em Terra de Ninguém (Alpha, Beta, Gamma). O objetivo Alpha é removido no 3º turno, Beta no 4º e Gamma no 5º.",
        },
      ],
      victor_bonus: {
        reward:
          "Aumenta o limite de suprimentos da Crusade force em 250 pontos.",
      },
      actions: null,
      image: "https://wahapedia.ru/wh40k10ed/img/maps/ng/SupplyRaid.png",
      gamesize: "incursion",
      objectives: [
        {
          id: "objective-secure-supplies",
          title: "Garantir Suprimentos",
          type: "Progressive Objective",
          scoring: [
            {
              timing: "Rodadas 2-3",
              condition: "Controlar objetivos",
              points: "1VP por marcador",
            },
            {
              timing: "Rodada 4",
              condition: "Controlar objetivos",
              points: "2VP por marcador",
            },
            {
              timing: "Rodada 5",
              condition: "Controlar objetivos",
              points: "4VP por marcador",
            },
          ],
        },
      ],
    },
    {
      id: "mission-4-purge-after-inload",
      name: "Purga Pós-Inload",
      d6_number: 4,
      lore: "Info-shrines Cogitator neste local contêm inteligência vital que deve ser acessada e erradicada para negá-la ao inimigo. As forças devem desembarcar rapidamente, inloadar todos os dados essenciais e depois purgar os shrines por qualquer meio necessário.",
      mission_rules: null,
      victor_bonus: {
        description:
          "Selecione uma unidade que purgou objetivos para ganhar um Battle Trait.",
        additional_effect: "Se purgado na DZ do oponente, ganha 1SAP.",
      },
      actions: [
        {
          id: "action-infopurge",
          name: "Infopurge",
          phase: "Fase de Disparo",
          timing: "A partir da 2ª rodada",
          requirements:
            "Unidade dentro do alcance de objetivo fora da própria DZ",
          description:
            "Remove o objetivo se o controle for mantido até o final do turno do oponente ou da batalha.",
        },
      ],
      image: "https://wahapedia.ru/wh40k10ed/img/maps/ng/PurgeAfterInload.png",
      gamesize: "incursion",
      objectives: [
        {
          id: "objective-info-shrine-inload",
          title: "Inload do Info-shrine",
          type: "Progressive Objective",
          scoring: [
            {
              timing: "Fase de Comando (rodadas 2+)",
              condition: "Controlar objetivos",
              points: "1VP por marcador (máx. 2VP)",
            },
          ],
        },
        {
          id: "objective-infopurge",
          title: "Infopurge",
          type: "Progressive Objective",
          scoring: [
            {
              condition: "Purgar objetivo no próprio território",
              points: "2VP",
            },
            {
              condition: "Purgar objetivo no território do oponente",
              points: "3VP",
            },
          ],
        },
      ],
    },
    {
      id: "mission-5-front-line-warfare",
      name: "Guerra na Linha de Frente",
      d6_number: 5,
      lore: "Enquanto hosts de guerreiros lutam para defender ou derrubar os mundos do Sanctus Wall, frentes de guerra se espalham por continentes. Buscando quebrar o impasse, generais lançam ataques rápidos contra essas máquinas de moer carne.",
      mission_rules: [
        {
          title: "Campo de Batalha Escolhido",
          description:
            'Jogadores alternam a colocação de 6 objetivos (1 por DZ, o resto em Terra de Ninguém), não podendo estar a menos de 6" de bordas/outros objetivos.',
        },
      ],
      victor_bonus: {
        reward:
          "Cada unidade dentro do alcance de um objetivo controlado no final da batalha ganha 1XP.",
      },
      actions: null,
      image: "https://wahapedia.ru/wh40k10ed/img/maps/ng/FrontLineWarfare.png",
      gamesize: "incursion",
      objectives: [
        {
          id: "objective-line-of-advance",
          title: "Linha de Avanço",
          type: "End Game Objective",
          scoring: [
            {
              condition: "Controlar objetivos em ambas as DZs",
              points: "3VP",
            },
          ],
        },
        {
          id: "objective-commanding-position",
          title: "Posição de Comando",
          type: "Progressive Objective",
          scoring: [
            {
              condition: "Controlar objetivos em Terra de Ninguém",
              points: "1VP por marcador",
            },
            {
              condition: "Controlar objetivo na DZ do oponente",
              points: "2VP",
            },
          ],
        },
      ],
    },
    {
      id: "mission-6-heralds-of-vengeance",
      name: "Arautos da Vingança",
      d6_number: 6,
      lore: "Ameaças ominosas estão prontas para serem desencadeadas, sejam ataques de teletransporte em massa, bombardeios orbitais ou superarmas ritualísticas malignas. Esses ativos decisivos devem ser guiados manualmente, exigindo guerreiros corajosos para servir como seus arautos.",
      mission_rules: null,
      victor_bonus: {
        reward: "Ganha 1RP e 1SAP.",
      },
      actions: [
        {
          id: "action-guide-strike-beacon",
          name: "Guiar Sinal de Ataque",
          phase: "Fase de Disparo",
          requirements:
            "1+ unidades cada uma perto de objetivos controlados diferentes",
          description: 'Move cada objetivo até 6" (não pode sobrepor).',
        },
      ],
      image:
        "https://wahapedia.ru/wh40k10ed/img/maps/ng/HeraldsOfVengeance.png",
      gamesize: "incursion",
      objectives: [
        {
          id: "objective-strike-triangulation",
          title: "Triangulação de Ataque Concluída",
          type: "Progressive Objective",
          scoring: [
            {
              condition: "Objetivo totalmente dentro da DZ do oponente",
              points: "3VP por marcador",
            },
            {
              condition: 'Objetivo dentro de 6" da DZ do oponente',
              points: "2VP por marcador",
            },
            {
              condition: 'Objetivo dentro de 12" da DZ do oponente',
              points: "1VP por marcador",
            },
          ],
        },
      ],
    },
  ],
  strikeforce: [
    {
      id: "mission-1-final-stand",
      name: "Último Reduto",
      d6_number: 1,
      lore: "Empurrados por repetidos ataques, um exército agora deve se entrincheirar e tentar resistir enquanto os últimos de seus reservas dispersas correm em seu auxílio. Seus inimigos têm a chance de esmagá-los de vez se conseguirem quebrar esta determinada resistência final.",
      mission_rules: [
        {
          title: "Ofensiva Estratégica",
          description: "O Atacante decide qual jogador tem o primeiro turno.",
        },
        {
          title: "Reservas Atrasadas",
          description:
            "As ondas de Reforço do Defensor chegam na etapa de Reforços de sua Fase de Movimento no 3º e 4º turno, em vez do 2º e 3º turno.",
        },
      ],
      victor_bonus: {
        description:
          "Cada unidade da Crusade army do vencedor que terminou a batalha totalmente dentro da zona de desdobramento do Defensor ganha 1XP.",
        additional_effect:
          "Se o vencedor controlar o marcador de objetivo na zona do Defensor no final da batalha, ganha 1SAP.",
      },
      actions: null,
      image: "https://wahapedia.ru/wh40k10ed/img/maps/ng/FinalStand.png",
      gamesize: "strikeforce",
      objectives: [
        {
          id: "objective-stand-firm",
          title: "Manter a Posição",
          type: "Progressive Objective",
          scoring: [
            {
              condition:
                "Defensor controla objetivo em sua DZ no final do turno",
              points: "1VP",
            },
            {
              condition:
                "Atacante controla objetivo em Terra de Ninguém no final de seu turno",
              points: "1VP",
            },
          ],
        },
        {
          id: "objective-no-quarter",
          title: "Sem Quartel",
          type: "Progressive Objective",
          scoring: [
            {
              condition:
                "Defensor: 1+ unidades do Atacante destruídas no turno",
              points: "1VP",
            },
            {
              condition:
                "Atacante: destruir mais unidades do Defensor que as próprias no turno",
              points: "1VP",
            },
          ],
        },
      ],
    },
    {
      id: "mission-2-saboteurs",
      name: "Sabotadores",
      d6_number: 2,
      lore: "A augúria estratégica revelou a localização de uma base oculta usada por uma facção para lançar ataques contra território inimigo. Seus inimigos agora enviam invasores para sabotar este reduto e deixá-lo incapaz de apoiar mais ofensivas.",
      mission_rules: [
        {
          title: "Ofensiva Estratégica",
          description: "O Atacante decide qual jogador tem o primeiro turno.",
        },
      ],
      victor_bonus: {
        reward: "A Crusade force do vencedor ganha 1RP e 1SAP.",
      },
      actions: [
        {
          id: "action-supply-sabotage",
          name: "Sabotagem de Suprimentos",
          phase: "Fase de Disparo",
          requirements: "1+ unidades, cada uma perto de objetivo diferente",
          description:
            "Remove o objetivo se controle for mantido até o turno seguinte do oponente ou final da batalha.",
        },
      ],
      image: "https://wahapedia.ru/wh40k10ed/img/maps/ng/Saboteurs.png",
      gamesize: "strikeforce",
      objectives: [
        {
          id: "objective-safeguard-supplies",
          title: "Proteger Suprimentos",
          type: "Progressive Objective",
          scoring: [
            {
              timing: "Fim do turno do Defensor (rodadas 2+)",
              condition: "Controlar 1 objetivo",
              points: "1VP",
            },
            {
              condition: "Controlar 2-3 objetivos",
              points: "2VP",
            },
            {
              condition: "Controlar 4-5 objetivos",
              points: "3VP",
            },
          ],
        },
        {
          id: "objective-supplies-destroyed",
          title: "Suprimentos Destruídos",
          type: "Progressive Objective",
          scoring: [
            {
              condition: "Sabotar objetivo",
              points: "3VP",
            },
            {
              condition: "Sabotar 2+ objetivos no mesmo turno",
              points: "+1VP",
            },
          ],
        },
      ],
    },
    {
      id: "mission-3-retrieval",
      name: "Resgate",
      d6_number: 3,
      lore: "Com a traição abundante no Sanctus Wall, inteligência vital deve ser frequentemente confiada a mensageiros diretos para evitar sua corrupção ou interceptação. Um desses mensageiros se escondeu nesta região e deve ser resgatado ou capturado.",
      mission_rules: null,
      victor_bonus: {
        description:
          "Selecione uma unidade que completou a ação Search Site para ganhar 3XP (5XP se descobriu o mensageiro).",
        additional_effect: "O vencedor ganha 1 Strategic Asset Point.",
      },
      actions: [
        {
          id: "action-search-site",
          name: "Buscar Local",
          phase: "Fase de Disparo",
          requirements: "Unidade dentro do alcance de objetivo",
          description:
            "Rola 1D6 (+1 se Defensor, +1 por ação anterior). Em 6+, descobre o mensageiro (remove outros objetivos). Senão, remove este objetivo.",
        },
      ],
      image: "https://wahapedia.ru/wh40k10ed/img/maps/ng/Retrieval.png",
      gamesize: "strikeforce",
      objectives: [
        {
          id: "objective-area-searched",
          title: "Área Buscada",
          type: "Progressive Objective",
          scoring: [
            {
              condition: "Completar ação Search Site",
              points: "1VP",
            },
            {
              condition: "Descobrir local do mensageiro",
              points: "1VP",
            },
          ],
        },
        {
          id: "objective-courier-secured",
          title: "Mensageiro Protegido",
          type: "Progressive Objective",
          scoring: [
            {
              timing: "Fase de Comando",
              condition: "Controlar objetivo do mensageiro",
              points: "3VP",
            },
          ],
        },
      ],
    },
    {
      id: "mission-4-beachhead-offensive",
      name: "Ofensiva de Cabeça de Praia",
      d6_number: 4,
      lore: "Encarregado de garantir a posição a partir da qual uma invasão mais abrangente pode ser lançada, um comandante reúne todos os seus guerreiros e desfere um ataque desesperado. Seu oponente busca repelí-los, defendendo seu território no processo.",
      mission_rules: [
        {
          title: "Cabeça de Praia",
          description:
            "O Atacante coloca todas as unidades de sua Primary Wave primeiro, seguido pelo Defensor.",
        },
        {
          title: "Ofensiva Estratégica",
          description: "O Atacante decide qual jogador tem o primeiro turno.",
        },
      ],
      victor_bonus: {
        description:
          "O vencedor pode selecionar uma unidade adicional de sua Crusade army para ser Marked for Greatness.",
      },
      actions: null,
      image:
        "https://wahapedia.ru/wh40k10ed/img/maps/ng/BeachheadOffensive.png",
      gamesize: "strikeforce",
      objectives: [
        {
          id: "objective-secure-beachhead",
          title: "Garantir Cabeça de Praia",
          type: "Progressive Objective",
          scoring: [
            {
              condition: "Controlar objetivos",
              points: "1VP por marcador",
            },
            {
              condition:
                "Atacante controlar objetivo em sua DZ + outros objetivos",
              points: "+1VP por objetivo adicional",
            },
          ],
        },
      ],
    },
    {
      id: "mission-5-the-gauntlet",
      name: "O Desafio",
      d6_number: 5,
      lore: "Seja conduzindo um ataque contra um reduto lealista ou buscando eliminar uma base herege exposta, muitas ofensivas fazem os atacantes enfrentarem uma série de defesas inimigas potentes.",
      mission_rules: [
        {
          title: "Ofensiva Estratégica",
          description: "O Atacante decide qual jogador tem o primeiro turno.",
        },
        {
          title: "Romper as Defesas",
          description:
            "Objetivos controlados pelo Atacante são removidos no final de seu turno.",
        },
        {
          title: "Pelo Meio",
          description:
            "Unidades do Atacante em Reservas Táticas não podem ser posicionadas na DZ do Defensor.",
        },
      ],
      victor_bonus: {
        reward: "A Crusade force do vencedor ganha 1RP e 1SAP.",
      },
      actions: null,
      image: "https://wahapedia.ru/wh40k10ed/img/maps/ng/TheGauntlet.png",
      gamesize: "strikeforce",
      objectives: [
        {
          id: "objective-layered-defence",
          title: "Defesa em Camadas",
          type: "Progressive Objective",
          scoring: [
            {
              condition: "Defensor controlar 3+ objetivos",
              points: "1VP",
            },
            {
              condition: "Nenhuma unidade inimiga na Zona Gamma",
              points: "1VP",
            },
            {
              condition: "Destruir 1+ unidades inimigas no turno",
              points: "1VP",
            },
          ],
        },
        {
          id: "objective-run-the-gauntlet",
          title: "Enfrentar o Desafio",
          type: "Progressive Objective",
          scoring: [
            {
              condition: "Controlar objetivos",
              points: "1VP por marcador",
            },
            {
              condition: "Unidades da Primary Wave na Zona Alpha",
              points: "1VP",
            },
            {
              condition: "Unidades da Primary Wave na Zona Beta",
              points: "2VP",
            },
            {
              condition: "Unidades da Primary Wave na Zona Gamma",
              points: "3VP",
            },
          ],
        },
      ],
    },
    {
      id: "mission-6-vital-stronghold",
      name: "Reduto Vital",
      d6_number: 6,
      lore: "Enquanto o ataque planetário continua, uma força isolada foi empurrada para um enclave defensivo pivotal. Eles resistirão aqui tempo suficiente para serem reforçados, ou grupos de assalto inimigos convergentes os esmagarão e reivindicarão seu esconderijo?",
      mission_rules: [
        {
          title: "Ataque em Pinça",
          description:
            "No 2º turno, o Defensor deve posicionar 2 ondas de reforço em Attack Zones específicas, com uma unidade podendo fazer Surgical Deep Strike.",
        },
        {
          title: "Reduto",
          description:
            'O Defensor coloca 5 objetivos adicionais (2+ em Terra de Ninguém, com espaçamento mínimo de 6").',
        },
      ],
      victor_bonus: {
        description:
          'O vencedor pode selecionar uma unidade totalmente dentro de 6" do centro do campo de batalha para ganhar 5XP.',
      },
      actions: null,
      image: "https://wahapedia.ru/wh40k10ed/img/maps/ng/VitalStronghold.png",
      gamesize: "strikeforce",
      objectives: [
        {
          id: "objective-the-fortress-claimed",
          title: "Fortaleza Conquistada",
          type: "Progressive Objective",
          scoring: [
            {
              condition: "Controlar objetivos",
              points: "1VP por marcador (máx. 4VP)",
            },
          ],
        },
        {
          id: "objective-central-strongpoint",
          title: "Ponto Forte Central",
          type: "End Game Objective",
          scoring: [
            {
              condition: "Defensor controlar objetivo Central",
              points: "2VP",
            },
            {
              condition: "Atacante controlar objetivo Central",
              points: "3VP",
            },
          ],
        },
      ],
    },
  ],
  onslaught: [
    {
      id: "mission-1-opportune-moment",
      name: "Momento Oportuno",
      d6_number: 1,
      lore: "Com grupos de ataque e forças de desembarque orbital duelando em múltiplos mundos devastados pela guerra, os ataques às vezes devem ser lançados durante breves janelas de oportunidade em resposta a chances súbitas e passageiras.",
      mission_rules: [
        {
          title: "Janela Estreita",
          description:
            "Nas rodadas 2 e 4, apenas objetivos marcados como A podem ser controlados. Nas rodadas 3 e 5, apenas objetivos marcados como B podem ser controlados.",
        },
      ],
      victor_bonus: {
        reward:
          "A Crusade force do vencedor ganha 1RP e o vencedor ganha 1SAP.",
      },
      actions: null,
      image: "https://wahapedia.ru/wh40k10ed/img/maps/ng/OpportuneMoment.png",
      gamesize: "onslaught",
      objectives: [
        {
          id: "objective-seize-your-chance",
          title: "Aproveite Sua Chance",
          type: "Progressive Objective",
          scoring: [
            {
              timing: "Fase de Comando (rodadas 2+)",
              condition: "Controlar objetivos",
              points: "1VP por marcador",
            },
            {
              condition: "Controlar mais objetivos que o oponente",
              points: "1VP",
            },
          ],
        },
      ],
    },
    {
      id: "mission-2-all-out-war",
      name: "Guerra Total",
      d6_number: 2,
      lore: "Enquanto forças massivas entram em combate e naves de guerra escurecem os céus, uma das batalhas verdadeiramente cataclísmicas surge neste campo de batalha devastado.",
      mission_rules: [
        {
          title: "Barragem Orbital",
          description:
            'No início de cada Fase de Disparo, o jogador pode selecionar um objetivo. Role 1D6 para cada unidade inimiga a 6": 4+ causa D3 ferimentos mortais e teste de Battle-shock.',
        },
      ],
      victor_bonus: {
        description:
          "Cada unidade da Crusade army do vencedor que terminou a batalha dentro do alcance de um objetivo controlado ganha 1XP.",
      },
      actions: null,
      image: "https://wahapedia.ru/wh40k10ed/img/maps/ng/AllOutWar.png",
      gamesize: "onslaught",
      objectives: [
        {
          id: "objective-surround-and-secure",
          title: "Cercar e Garantir",
          type: "Progressive Objective",
          scoring: [
            {
              condition: "Controlar 2+ objetivos",
              points: "1VP",
            },
            {
              condition: "Controlar 3+ objetivos",
              points: "1VP",
            },
            {
              condition: "Controlar mais objetivos que o oponente",
              points: "1VP",
            },
            {
              condition:
                "Controlar ambos objetivos na própria DZ + objetivos na DZ oponente",
              points: "1VP por objetivo",
            },
          ],
        },
      ],
    },
    {
      id: "mission-3-at-any-price",
      name: "A Qualquer Custo",
      d6_number: 3,
      lore: "Um ativo estratégico classe alpha foi detectado nesta área - seja um portal estável da Webway, um portal protegido ou outra tecnologia antiga que permita ataques remotos com surpresa total. Nenhum custo é alto demais para garantir este prêmio.",
      mission_rules: null,
      victor_bonus: {
        description:
          "Selecione uma unidade da Primary Wave que completou a ação Search the Area para ganhar 5XP.",
        additional_effect: "O vencedor ganha 1SAP.",
      },
      actions: [
        {
          id: "action-search-the-area",
          name: "Buscar na Área",
          phase: "Fase de Disparo",
          requirements:
            "1 unidade da Primary Wave totalmente dentro da Área de Busca",
          description:
            "Investiga a Área de Busca se completada até o final do turno.",
        },
      ],
      image: "https://wahapedia.ru/wh40k10ed/img/maps/ng/AtAnyPrice.png",
      gamesize: "onslaught",
      objectives: [
        {
          id: "objective-master-the-asset",
          title: "Dominar o Ativo",
          type: "Progressive Objective",
          scoring: [
            {
              condition: "Investigar a Área de Busca",
              points: "1VP por objetivo controlado dentro da área",
            },
          ],
        },
        {
          id: "objective-conduits-of-power",
          title: "Condutores de Poder",
          type: "Progressive Objective",
          scoring: [
            {
              condition: "Controlar 1+ objetivos",
              points: "1VP",
            },
            {
              condition: "Controlar mais objetivos que o oponente",
              points: "2VP",
            },
          ],
        },
      ],
    },
  ],
};
