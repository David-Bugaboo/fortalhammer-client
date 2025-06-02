export const agendasData = [
  {
    id: "3880aaca-b681-453b-9ec4-a16645e74c9e",
    title: "STRIKE AND PURGE",
    lore: "Ataque rapidamente, maximize o fator surpresa e garanta a vitória definitiva.",
    description: "Cada vez que uma unidade com a habilidade Deep Strike do seu exército Cruzada destruir uma unidade inimiga, ela ganha 1XP. Se destruir uma unidade inimiga no mesmo turno em que foi posicionada via Deep Strike, ganha 2XP. Uma unidade não pode ganhar mais de 3XP por batalha com esta Agenda.",
    reward: "No fim da batalha, se quatro ou mais unidades inimigas forem destruídas por unidades com Deep Strike, você ganha 1SAP.",
    action: null,
    type: "any",
    in_records: []
  },
  {
    id: "91279ea9-67d5-459e-884b-bd9a2248767c",
    title: "RAZE AND RUIN",
    lore: "Esta é uma campanha de aniquilação e extermínio. Não deixe nada de pé.",
    description: "Cada vez que uma unidade do seu exército Cruzada destruir uma unidade inimiga a até 3\" de um marcador de objetivo, ela ganha 1XP. Se o marcador estiver na zona de implantação inimiga, ganha 2XP. Uma unidade não pode ganhar mais de 3XP por batalha com esta Agenda.",
    reward: "No fim da batalha, se você controlar todos os marcadores de objetivo na zona de implantação inimiga, ganha 1SAP.",
    action: null,
    type: "attacker",
    in_records: []
  },
  {
    id: "cfde7277-1d27-4d7c-85f4-8a791c819e77",
    title: "REPEL THE FOE",
    lore: "Você deve resistir a cada onda inimiga, repelindo-as com resistência inabalável.",
    description: "Cada vez que uma unidade do seu exército Cruzada destruir uma unidade inimiga vinda de uma onda de Reforços, ela ganha 1XP. Uma unidade não pode ganhar mais de 3XP com esta Agenda.",
    reward: "No fim da batalha, se todas as unidades de pelo menos uma onda de Reforços forem destruídas, você ganha 1SAP.",
    action: null,
    type: "defender",
    in_records: []
  },
  {
    id: "ce69deb1-009c-4ef3-bd06-2660afa3f902",
    title: "CUT OFF THE HEAD",
    lore: "Elimine os campeões inimigos, seus líderes espirituais e de guerra. Faça troféus de seus restos e inspire seus guerreiros ao quebrar o moral do inimigo.",
    description: "Cada vez que um modelo do seu exército Cruzada destrói um modelo inimigo com a palavra-chave CHARACTER, a unidade do seu modelo ganha 2XP. Cada vez que destruir um modelo com as palavras-chave WARLORD ou EPIC HERO, a unidade do seu modelo ganha 2XP adicionais.",
    reward: "No fim da batalha, se o WARLORD inimigo for destruído, você ganha 1SAP.",
    action: null,
    type: "any",
    in_records: []
  },
  {
    id: "4300f7c8-7689-4070-8db2-704b6ee9be3a",
    title: "DRIVE DEEP",
    lore: "Corte as linhas defensivas inimigas, leve suas forças até a retaguarda e cause o caos sangrento.",
    description: "No fim da batalha, você pode selecionar até três unidades do seu exército Cruzada (excluindo AIRCRAFT) que estejam totalmente dentro da zona de implantação do oponente. Cada uma dessas unidades ganha 3XP.",
    reward: "No fim da batalha, se três ou mais unidades do seu exército Cruzada estiverem totalmente dentro da zona de implantação inimiga, você ganha 1SAP.",
    action: null,
    type: "any",
    in_records: []
  },
  {
    id: "0fa06fcc-e050-489e-aa14-922046b75b9f",
    title: "STRATEGIC DOMINANCE",
    lore: "Garanta os objetivos da sua facção reivindicando terreno vital no centro do campo de batalha.",
    description: "No fim do seu turno, selecione uma unidade do seu exército Cruzada a até 3\" do centro do campo de batalha. Essa unidade ganha 1XP.",
    reward: "No fim da batalha, se unidades do seu exército ganharem 4XP ou mais com esta Agenda, você ganha 1SAP.",
    action: null,
    type: "any",
    in_records: []
  },
  {
    id: "ee2e38e3-82cd-4c71-8773-d727fcfbe037",
    title: "SYMBOLIC OBJECTIVES",
    lore: "Este ataque não é apenas conquista, mas também propaganda. Capture esses locais vitais para quebrar o espírito do inimigo.",
    description: "No início da batalha, o oponente seleciona dois marcadores de objetivo diferentes. No fim da batalha, se você controlar um ou ambos, pode selecionar até três unidades do seu exército Cruzada dentro do alcance de um deles. Cada uma ganha 2XP.",
    reward: "No fim da batalha, se você controlar ambos os marcadores selecionados, ganha 1SAP.",
    action: null,
    type: "attacker",
    in_records: []
  },
  {
    id: "48924038-cb68-483b-9ba4-6401bdccea4d",
    title: "DEFIANT TO THE END",
    lore: "Permaneça firme e resista até ser aliviado, não importa o que o inimigo lance no combate.",
    description: "No início da batalha, selecione até três unidades do seu exército Cruzada no campo de batalha.\nPara cada uma, no fim da batalha:\n- Se não for destruída, ganhe 2XP.\n- Se não estiver Abaixo da Meia Força, ganhe 1XP.",
    reward: "No fim da batalha, se uma ou mais dessas unidades estiverem na Força Inicial, você ganha 1SAP.",
    action: null,
    type: "defender",
    in_records: []
  },
  {
    id: "ac5a343e-dfe4-4100-8b4d-12ec6fcc4500",
    title: "SEARCH DROP SITE",
    lore: "Espalhados pelo campo de batalha estão prêmios valiosos, sejam caches de inteligência, recursos ocultos ou outro ativo a ser apreendido.",
    description: "No início da batalha, todos os marcadores de objetivo são considerados como não pesquisados e continuarão assim até serem pesquisados.",
    reward: "No fim da batalha, se três ou mais marcadores de objetivo forem pesquisados por unidades do seu exército Cruzada, você ganha 1SAP.",
    action: {
      name: "SEARCH DROP SITE",
      phase: "Sua fase de Disparos (INÍCIO)",
      units: "Uma unidade do seu exército Cruzada dentro do alcance de um marcador de objetivo não pesquisado",
      conclusion: "Fim do seu turno, se você controlar o marcador",
      effect: "O marcador é considerado pesquisado e a unidade ganha 3XP"
    },
    type: "any",
    in_records: []
  },
  {
    id: "8efa4606-fb6e-4e44-9dae-36709732fb12",
    title: "ACTIVATE DEFENCE PERIMETER",
    lore: "Muitos sistemas de defesa aguardam apenas o despertar de seus espíritos-máquina para cumprir seu dever.",
    description: "Você deve ativar os sistemas defensivos que aguardam despertar para cumprir seu dever.",
    reward: "No fim da batalha, se houver 4 ou mais marcadores de Shield Node no campo, você ganha 1SAP.",
    action: {
      name: "ACTIVATE SHIELD NODE",
      phase: "Sua fase de Disparos (INÍCIO)",
      units: "Uma unidade INFANTRY ou MOUNTED totalmente dentro da sua zona de implantação",
      conclusion: "Fim do próximo turno do oponente ou fim da batalha (o que vier primeiro)",
      effect: "Coloque um marcador de Shield Node a até 1\" da unidade, ganhe 1XP"
    },
    type: "defender",
    in_records: []
  },
  {
    id: "742d547b-e880-4127-93a5-5ceaae8838de",
    title: "PRIME MACRO-ORDNANCE",
    lore: "Armas superpoderosas foram deixadas nesta área. Ativá-las será devastador para o inimigo.",
    description: "Você deve ativar super armas adormecidas localizadas nesta área.",
    reward: "No fim da batalha, se esta Ação for concluída por duas ou mais unidades do seu exército Cruzada, você ganha 1SAP.",
    action: {
      name: "PRIME PLANETQUAKE BOMB",
      phase: "Sua fase de Disparos (INÍCIO)",
      units: "Uma unidade INFANTRY ou MOUNTED totalmente dentro da zona de implantação inimiga",
      conclusion: "Fim do próximo turno do oponente ou fim da batalha (o que vier primeiro)",
      effect: "A unidade ganha 2XP (máx. 3XP por batalha com esta Agenda)"
    },
    type: "attacker",
    in_records: []
  }
];
