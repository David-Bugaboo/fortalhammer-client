"use client";
import CrusadeLayout from "@/components/crusade/CrusadeLayout";
import RuleSection from "@/components/crusade/RuleSection";
import HighlightedTerm from "@/components/crusade/HighlightedTerm";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import DiceIcon from "@/components/crusade/DiceIcon";
import { traitsData } from "@/data/traits.database";
import CrusadeRelicsSection from "@/components/crusade/CrusadeRelicsSection";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Fragment } from "react";
import TableOfContents from "@/components/ui/TableOfContents";

interface BattleTrait {
  id: string;
  type: string;
  description: string;
  title: string;
  game_effect: string;
  units_awarded: string[];
}

// Lista de keywords/regras-chave que NÃO devem ser traduzidas e devem ser destacadas
const KEYWORDS = [
  "STEALTH",
  "DEEP STRIKE",
  "BATTLE-SHOCK",
  "OBJECTIVE",
  "DEPLOYMENT",
  "BATTLELINE",
  "ENGAGEMENT RANGE",
  "CRUSADE",
  "REINFORCEMENT",
  "PRIMARY WAVE",
  "VICTORY POINTS",
  "COMMAND PHASE",
  "BATTLE TRAIT",
  "BATTLE SCAR",
  "WARLORD",
  "OUT OF ACTION",
  "MARKED FOR GREATNESS",
  "RAPID INGRESS",
  "STRATEGIC RESERVE",
  "STRATEGIC GOAL",
  "SURGICAL DEEP STRIKE",
  "SUPPLY LIMIT",
  "CRUSADE POINTS",
  "REQUISITION",
  "ORDER OF BATTLE",
  "ARMY ROSTER",
  "FACTION",
  "CHARACTER",
  "EPIC HERO",
  "DEDICATED TRANSPORT",
  "BODYGUARD",
  "BATTLE READY",
  "CRUSADE ABILITY",
  "CRUSADE BADGE",
  "CRUSADE RELIC",
  "CRUSADE BLESSING",
  "CRUSADE MISSION",
  "CRUSADE FORCE",
  "CRUSADE CARD",
  "CRUSADE ARMY",
  "CRUSADE TALLY",
  "CRUSADE SCAR",
  "CRUSADE TRAIT",
  "CRUSADE REWARD",
  "CRUSADE BONUS",
  "CRUSADE TRACKER",
  "CRUSADE CAMPAIGN",
  "CRUSADE MASTER",
  "CRUSADE CHAMPION",
  "CRUSADE SITE",
  "CRUSADE SITE BONUS",
  "CRUSADE SITE CONTROL",
  "CRUSADE SITE VICTORY",
  "CRUSADE SITE LEVEL",
  "CRUSADE SITE FORTIFIED",
  "CRUSADE SITE PRESENCE",
  "CRUSADE SITE SECURING",
  "CRUSADE SITE ESTABLISHING",
];

// Habilidades de armas e seus textos de tooltip (simplificado)
const WEAPON_ABILITIES: Record<string, string> = {
  ASSAULT:
    "Armas com [ASSAULT] podem ser disparadas mesmo se a unidade Avançou neste turno.",
  "RAPID FIRE":
    "[RAPID FIRE X]: Aumenta o número de ataques em 'X' ao disparar contra alvos a até metade do alcance.",
  "IGNORES COVER":
    "Armas com [IGNORES COVER] ignoram o benefício de cobertura do alvo.",
  "TWIN-LINKED":
    "Armas com [TWIN-LINKED] podem re-rolar a rolagem de Ferida (Wound) de cada ataque.",
  PISTOL:
    "Armas com [PISTOL] podem ser disparadas mesmo se a unidade estiver em Engagement Range.",
  TORRENT:
    "Armas com [TORRENT] acertam automaticamente o alvo (não rola para acertar).",
  "LETHAL HITS":
    "Armas com [LETHAL HITS] causam uma Ferida automática (Wound) ao rolar um Critical Hit.",
  LANCE:
    "Armas com [LANCE] ganham +1 para Ferir (Wound) se o portador fez uma carga neste turno.",
  PRECISION:
    "Armas com [PRECISION] podem alocar ataques diretamente em um CHARACTER visível.",
  BLAST: "Armas com [BLAST] ganham +1 ataque para cada 5 modelos no alvo.",
  MELTA:
    "[MELTA X]: Aumenta o Dano em 'X' ao atacar alvos a até metade do alcance.",
  HEAVY:
    "Armas com [HEAVY] ganham +1 para acertar se a unidade permaneceu estacionária.",
  HAZARDOUS:
    "Após atacar com uma arma [HAZARDOUS], role 1D6: para cada 1, sofre 3 feridas mortais.",
};

// Regex para encontrar habilidades de armas entre colchetes ou isoladas
const WEAPON_ABILITY_REGEX = new RegExp(
  Object.keys(WEAPON_ABILITIES)
    .map((k) => `\\[?${k.replace(/ /g, "[ _-]?")}\\]?`)
    .join("|"),
  "gi"
);

// Função simplificada para renderizar weapon abilities
function renderWeaponAbilities(text: string): React.ReactNode {
  if (!text) return text;

  try {
    // Versão simplificada sem regex complexa
    const weaponAbilityKeys = Object.keys(WEAPON_ABILITIES);
    let processedText: React.ReactNode = text;

    for (const ability of weaponAbilityKeys) {
      if (text.includes(ability)) {
        const parts = text.split(ability);
        if (parts.length > 1) {
          const elements: React.ReactNode[] = [];

          parts.forEach((part, index) => {
            if (part) elements.push(part);
            if (index < parts.length - 1) {
              elements.push(
                <Tooltip key={`${ability}-${index}`}>
                  <TooltipTrigger asChild>
                    <span className="font-conduit font-bold uppercase text-cyan-400 cursor-help border-b border-dotted border-cyan-400 hover:text-yellow-300 transition-colors">
                      {ability}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent
                    sideOffset={8}
                    className="max-w-xs text-left leading-relaxed p-4 bg-gray-900 border-cyan-700 text-cyan-100 shadow-xl"
                  >
                    <span className="block text-cyan-300 font-conduit font-bold mb-2 text-base">
                      {ability}
                    </span>
                    <span className="text-sm text-gray-100 whitespace-pre-line">
                      {WEAPON_ABILITIES[ability]}
                    </span>
                  </TooltipContent>
                </Tooltip>
              );
            }
          });

          return <Fragment>{elements}</Fragment>;
        }
      }
    }

    return processedText;
  } catch (error) {
    console.warn("Error rendering weapon abilities:", error);
    return text;
  }
}

// Mapeamento de palavras-chave para ids de seções
const KEYWORD_LINKS: Record<string, string> = {
  CRUSADE: "#campaign",
  "CRUSADE BADGE": "#crusade-badges",
  "CRUSADE BLESSING": "#crusade-blessings",
  "CRUSADE RELIC": "#crusade-relics",
  "BATTLE TRAIT": "#battle-traits",
  AGENDAS: "#agendas",
  MISSION: "#missions",
  MISSÕES: "#missions",
  "TACTICAL RESERVES": "#tactical-reserves",
  "SURGICAL DEEP STRIKE": "#surgical-deep-strike",
  "VICTORY POINTS": "#campaign-phases",
  "STRATEGIC GOAL": "#strategic-goals",
  "MIGHTY CHAMPIONS": "#mighty-champions",
  "BATTLE SCAR": "#battle-traits",
  REINFORCEMENT: "#tactical-reserves",
  "PRIMARY WAVE": "#tactical-reserves",
  "ORDER OF BATTLE": "#order-of-battle",
  "OUT OF ACTION": "#out-of-action",
  "COMMAND PHASE": "#command-phase",
  OBJECTIVE: "#missions",
  DEPLOYMENT: "#missions",
  "ENGAGEMENT RANGE": "#missions",
  CHARACTER: "#mighty-champions",
  WARLORD: "#mighty-champions",
  "EPIC HERO": "#mighty-champions",
  REQUISITION: "#requisitions",
  "SUPPLY LIMIT": "#supply-limit",
  "BATTLE READY": "#battle-traits",
  "MARKED FOR GREATNESS": "#mighty-champions",
  "STRATEGIC RESERVE": "#tactical-reserves",
  "BATTLE POINTS": "#campaign-phases",
  CAMPAIGN: "#campaign",
  "STRATEGIC SITES": "#strategic-sites",
  "REGISTRO DE MISSÃO": "#mission-record",
  "BÊNÇÃOS DE CRUSADE": "#crusade-blessings",
  "DEEP STRIKE": "#surgical-deep-strike",
  // Adicione mais conforme necessário
};

// Função simplificada para aplicar highlight de keywords
function applyKeywordHighlights(text: string): React.ReactNode {
  if (!text) return text;

  try {
    let result: React.ReactNode = text;

    // Processa apenas algumas keywords principais para evitar complexidade excessiva
    const priorityKeywords = [
      "CRUSADE",
      "BATTLE TRAIT",
      "TACTICAL RESERVES",
      "DEEP STRIKE",
      "STRATEGIC GOAL",
      "VICTORY POINTS",
      "REINFORCEMENT",
    ];

    for (const keyword of priorityKeywords) {
      if (typeof result === "string" && result.includes(keyword)) {
        const parts = result.split(keyword);
        if (parts.length > 1) {
          const elements: React.ReactNode[] = [];

          parts.forEach((part, index) => {
            if (part) elements.push(part);
            if (index < parts.length - 1) {
              const href = KEYWORD_LINKS[keyword];
              const keywordElement = (
                <span
                  key={`${keyword}-${index}`}
                  className="font-conduit font-bold uppercase text-cyan-400"
                >
                  {keyword}
                </span>
              );

              if (href) {
                elements.push(
                  <a
                    key={`link-${keyword}-${index}`}
                    href={href}
                    className="underline underline-offset-2 decoration-cyan-400 hover:text-yellow-300 transition-colors"
                  >
                    {keywordElement}
                  </a>
                );
              } else {
                elements.push(keywordElement);
              }
            }
          });

          result = <Fragment>{elements}</Fragment>;
          break; // Processa apenas a primeira keyword encontrada
        }
      }
    }

    return result;
  } catch (error) {
    console.warn("Error applying keyword highlights:", error);
    return text;
  }
}

// Função de "tradução" simplificada
function traduzirComKeywords(text: string): React.ReactNode {
  if (!text) return text;

  try {
    // Versão simplificada que aplica apenas highlights básicos
    const highlighted = applyKeywordHighlights(text);

    // Se o resultado ainda é string, tenta aplicar weapon abilities
    if (typeof highlighted === "string") {
      return renderWeaponAbilities(highlighted);
    }

    return highlighted;
  } catch (error) {
    console.warn("Error in traduzirComKeywords:", error);
    return text;
  }
}

export default function NachmundGauntletPage() {
  const [selectedPhase, setSelectedPhase] = useState<
    "phase1" | "phase2" | "phase3"
  >("phase1");

  const [selectedType, setSelectedType] = useState<string>("infantry");
  const [selectedRarity, setSelectedRarity] = useState<string>("Common");
  const [missionFilter, setMissionFilter] = useState<string>("Incursion");

  const traitTypes = [
    {
      id: "infantry",
      name: "Infantaria",
      color: "bg-green-600/20 border-green-400",
    },
    {
      id: "mounted",
      name: "Montados",
      color: "bg-blue-600/20 border-blue-400",
    },
    {
      id: "jumppack",
      name: "Jump Pack",
      color: "bg-yellow-600/20 border-yellow-400",
    },
    {
      id: "beast",
      name: "Bestas",
      color: "bg-orange-600/20 border-orange-400",
    },
    {
      id: "monstervehicle",
      name: "Monstro/Veículo",
      color: "bg-red-600/20 border-red-400",
    },
    {
      id: "any",
      name: "Qualquer",
      color: "bg-purple-600/20 border-purple-400",
    },
  ];

  const getTypeColor = (type: string): string => {
    const typeMap: Record<string, string> = {
      infantry: "bg-green-600/20 border-green-400 text-green-300",
      mounted: "bg-blue-600/20 border-blue-400 text-blue-300",
      jumppack: "bg-yellow-600/20 border-yellow-400 text-yellow-300",
      beast: "bg-orange-600/20 border-orange-400 text-orange-300",
      monstervehicle: "bg-red-600/20 border-red-400 text-red-300",
      any: "bg-purple-600/20 border-purple-400 text-purple-300",
    };
    return typeMap[type] || "bg-gray-600/20 border-gray-400 text-gray-300";
  };

  const getTypeLabel = (type: string): string => {
    const labelMap: Record<string, string> = {
      infantry: "Infantaria",
      mounted: "Montados",
      jumppack: "Jump Pack",
      beast: "Bestas",
      monstervehicle: "Monstro/Veículo",
      any: "Qualquer",
    };
    return labelMap[type] || type;
  };

  const getTraitTitle = (title: string): string => {
    const titleMap: Record<string, string> = {
      BEHEMOTH: "BESTA COLOSSAL",
      "CAVALRY OUTRIDERS": "BATEDORES MONTADOS",
      "DROP ZONE DEFENDERS": "DEFENSORES DE ZONA",
      "DROP ZONE VETERANS": "VETERANOS DE ZONA",
      "ENHANCED ENDURANCE": "RESISTÊNCIA APRIMORADA",
      EVASIVE: "EVASIVOS",
      "FIERY DESCENT": "DESCIDA FLAMEJANTE",
      "FLEET OF FOOT": "PÉS LIGEIROS",
      "GRIM SURVIVORS": "SOBREVIVENTES RESILIENTES",
      "HUNTING BEASTS": "BESTAS CAÇADORAS",
      "MONSTROUS MOMENTUM": "ÍMPETO MONSTRUOSO",
      "POUNCING PREDATORS": "PREDADORES SALTITANTES",
      "PRECISION INSERTION": "INSERÇÃO PRECISA",
      "REINFORCED ARMOUR": "BLINDAGEM REFORÇADA",
      "SHOCK CAVALRY": "CAVALARIA DE CHOQUE",
      "SLEEK INTERCEPTORS": "INTERCEPTADORES ÁGEIS",
      "STEALTHY ARRIVAL": "CHEGADA FURTIVA",
      STRIKEMASTERS: "MESTRES DO ATAQUE",
      "TAKE TO THE SKIES": "ALÇAR VÔO",
      TALISMANIC: "TALISMÂNICO",
      "TEMPERED IN BATTLE": "TEMPERADOS EM BATALHA",
      TERRITORIAL: "TERRITORIAIS",
      "TITAN SLAYER": "MATADOR DE TITÃS",
      UNRELENTING: "IMPLACÁVEIS",
    };
    return titleMap[title] || title;
  };

  const filteredTraits = traitsData.filter(
    (trait) => trait.type === selectedType
  );

  const renderTraitCard = (trait: BattleTrait, index: number) => {
    const diceNumber = (index % 6) + 1;

    return (
      <div
        key={trait.id}
        className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6 space-y-4"
      >
        <div className="flex items-start gap-4">
          <DiceIcon number={diceNumber} />
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h4 className="text-xl font-conduit text-cyan-400 uppercase">
                {getTraitTitle(trait.title)}
              </h4>
              <Badge
                variant="outline"
                className={`font-bold ${getTypeColor(trait.type)}`}
              >
                {getTypeLabel(trait.type)}
              </Badge>
            </div>
            <div className="text-gray-300 italic mb-3">{trait.description}</div>
          </div>
        </div>

        <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4">
          <h5 className="text-cyan-300 font-semibold mb-2 uppercase">
            Efeito de Jogo:
          </h5>
          <div className="text-sm text-gray-300">{trait.game_effect}</div>
        </div>

        {trait.units_awarded.length > 0 && (
          <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-3">
            <h5 className="text-yellow-300 font-semibold mb-2 text-sm">
              Unidades Premiadas:
            </h5>
            <div className="text-xs text-gray-300">
              {trait.units_awarded.join(", ")}
            </div>
          </div>
        )}
      </div>
    );
  };

  const pageSections = [
    { id: "#campaign", title: "Campanha" },
    { id: "#battle-traits", title: "Battle Traits" },
    { id: "#crusade-relics", title: "Crusade Relics" },
    { id: "#tactical-reserves", title: "Reservas Táticas" },
    { id: "#mission-record", title: "Registro de Missão" },
    { id: "#surgical-deep-strike", title: "Surgical Deep Strike" },
    { id: "#crusade-blessings", title: "Crusade Blessings" },
    { id: "#agendas", title: "Agendas" },
    { id: "#missions", title: "Missões" },
    { id: "#flowchart", title: "Fluxograma Resumido" },
  ];

  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showIndex, setShowIndex] = useState(false);
  const [isIndexOpen, setIsIndexOpen] = useState(false);

  // Set page title
  useEffect(() => {
    document.title = "Warhammer Fortaleza - Nachmund Gauntlet";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <CrusadeLayout
      title="Nachmund Gauntlet"
      description="Regras completas para a campanha Nachmund Gauntlet"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Nachmund Gauntlet", href: "/nachmund-gauntlet" },
      ]}
    >
      <div className="flex gap-8">
        <div className="flex-1">
          <div className="max-w-7xl mx-auto space-y-12">
            <RuleSection title="Introdução" id="introduction">
              <p className="text-lg text-muted-foreground">
                Bem-vindo ao Nachmund Gauntlet, uma campanha Crusade épica que
                testará suas habilidades táticas e estratégicas.
              </p>
            </RuleSection>

            <RuleSection title="Fluxograma Resumido" id="flowchart">
              <div className="space-y-6">
                <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
                  <h3 className="text-xl font-conduit text-cyan-400 mb-4">
                    Fase 1: Preparação
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Escolha sua facção e Ordem de Batalha</li>
                    <li>Selecione suas unidades iniciais</li>
                    <li>Configure suas Reservas Táticas</li>
                    <li>Escolha seus Battle Traits iniciais</li>
                  </ul>
                </div>

                <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
                  <h3 className="text-xl font-conduit text-cyan-400 mb-4">
                    Fase 2: Campanha
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Jogue missões Crusade</li>
                    <li>Ganhe experiência e Battle Traits</li>
                    <li>Colete Crusade Relics</li>
                    <li>Complete Agendas</li>
                    <li>Use Crusade Blessings</li>
                  </ul>
                </div>

                <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
                  <h3 className="text-xl font-conduit text-cyan-400 mb-4">
                    Fase 3: Desenvolvimento
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Evolua suas unidades</li>
                    <li>Desbloqueie novas habilidades</li>
                    <li>Atualize seu exército</li>
                    <li>Alcance objetivos estratégicos</li>
                  </ul>
                </div>

                <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4">
                  <h4 className="text-yellow-400 font-conduit font-semibold mb-2">
                    Nota do Designer:
                  </h4>
                  <p className="text-sm text-gray-300">
                    O fluxograma acima representa um guia geral para a campanha.
                    Cada jogador pode seguir seu próprio caminho, focando em
                    diferentes aspectos da campanha conforme sua estratégia e
                    preferências.
                  </p>
                </div>
              </div>
            </RuleSection>

            <RuleSection title="Campanha" id="campaign">
              <p className="font-crimson">
                <HighlightedTerm>Crusade</HighlightedTerm> oferece uma
                experiência narrativa fantástica para o jogador de Warhammer
                40,000, permitindo que você leve sua coleção em sua própria
                jornada única. Mas você também pode querer compartilhar essa
                jornada com outros jogadores, tecendo contos combinados de
                heroísmo e vitória conforme você luta tanto com quanto contra
                uns aos outros em uma campanha multi-jogos. As regras abaixo
                fornecem uma estrutura que você pode usar para levar suas forças
                de Crusade em tal caminho, escalando a experiência para qualquer
                duração que você e seus amigos desejarem.
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-conduit text-cyan-400 mb-4">
                  Introduction
                </h3>
                <p className="font-crimson">
                  Uma campanha{" "}
                  <HighlightedTerm>Nachmund Gauntlet</HighlightedTerm> permite
                  que um grupo de jogadores se reúna, forme alianças e jogue uma
                  série de jogos. É dividida em três fases de campanha, cada uma
                  das quais consiste em numerosas batalhas entre as alianças. No
                  final de cada fase de campanha, cada aliança ganha uma série
                  de recompensas baseadas em quantas vitórias elas ganharam
                  durante essa fase, antes de seguir para a próxima fase.
                </p>
                <p className="font-crimson">
                  Essas recompensas incluem aumentar o{" "}
                  <HighlightedTerm>Control Level</HighlightedTerm> que uma
                  aliança tem sobre quatro locais estratégicos-chave em Sangua
                  Terra. Esta é a chave para vencer a campanha Nachmund
                  Gauntlet, pois é garantindo controle sobre esses locais
                  estratégicos que uma aliança ganha{" "}
                  <HighlightedTerm>
                    Campaign Victory points (CVP)
                  </HighlightedTerm>
                  . No final da campanha, é a aliança com mais CVP que conquista
                  a cidade capital de Sangua Terra e é coroada a vitoriosa!
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-conduit text-cyan-400 mb-4">
                  Nachmund Gauntlet Crusade Badges
                </h3>
                <p className="font-crimson">
                  No final de qualquer batalha de campanha Nachmund Gauntlet
                  você pode ganhar um{" "}
                  <HighlightedTerm>Crusade Badge</HighlightedTerm> relevante à
                  aliança da qual você faz parte. Este Crusade Badge pode ser
                  anotado em sua Order of Battle e qualquer unidade incluída em
                  sua força de Crusade pode ser agraciada com o mesmo Crusade
                  Badge. Esta honraria será um lembrete permanente dos esforços
                  valentes de suas unidades nesta campanha!
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-conduit text-cyan-400 mb-4">
                  Campaign Master
                </h3>
                <p className="font-crimson">
                  Uma campanha Nachmund Gauntlet é melhor conduzida com um{" "}
                  <HighlightedTerm>Campaign Master</HighlightedTerm>. Eles
                  assumirão a mobilização e organização da campanha para que os
                  outros jogadores possam focar em jogar. Um Campaign Master
                  pode de fato jogar na campanha, mas seu papel primário é
                  facilitar uma experiência suave e agradável para todos os
                  jogadores envolvidos.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-conduit text-cyan-400 mb-4">
                  Reinforcement Waves
                </h3>
                <p className="font-crimson">
                  Ao jogar uma campanha Nachmund Gauntlet, jogadores terão a
                  oportunidade de utilizar uma nova forma de jogar -{" "}
                  <HighlightedTerm>Reinforcement Waves</HighlightedTerm> - e
                  informações sobre como usá-las serão explicadas em mais
                  detalhes aqui. Ao começar uma nova força de Crusade dentro de
                  uma campanha Nachmund Gauntlet, sugerimos que o Supply Limit
                  inicial para jogadores seja aumentado para que possam fazer
                  uso das regras de Tactical Reserves desde seu primeiro jogo,
                  com três Reinforcement Waves.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-conduit text-cyan-400 mb-4">
                  Forming Alliances
                </h3>
                <p className="font-crimson">
                  Uma vez que um Campaign Master tenha se apresentado, sua
                  primeira tarefa é reunir os jogadores e organizá-los em
                  alianças. O sistema pode suportar desde apenas dois jogadores,
                  até dezenas de jogadores. A campanha funciona particularmente
                  bem com um pequeno grupo de jogadores com ideias afins e
                  entusiastas que podem se encontrar regularmente.
                </p>
                <p className="font-crimson">
                  As alianças devem ser organizadas de forma mais equilibrada
                  possível, e quando viável, baseadas nas Facções sendo jogadas.
                  Uma vez que os jogadores são designados a uma aliança, um{" "}
                  <HighlightedTerm>Warmaster</HighlightedTerm> deve ser eleito
                  para representá-los e será responsável por tomar decisões para
                  sua aliança. As alianças são as seguintes:
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                  {/* Guardians */}
                  <div className="bg-gray-900/50 border border-blue-700/50 rounded-lg overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/alliances/guardians.jpg"
                        alt="Guardians Alliance"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <h4 className="text-blue-400 font-conduit text-xl font-bold">
                          GUARDIANS
                        </h4>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-300 font-crimson">
                        Aqueles que buscam proteger Sangua Terra, repelir os
                        invasores e manter o domínio Imperial sobre o Nachmund
                        Gauntlet. As forças do{" "}
                        <HighlightedTerm>Imperium</HighlightedTerm> seriam mais
                        adequadas para esta aliança.
                      </p>
                    </div>
                  </div>

                  {/* Despoilers */}
                  <div className="bg-gray-900/50 border border-red-700/50 rounded-lg overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/alliances/despoilers.jpg"
                        alt="Despoilers Alliance"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <h4 className="text-red-400 font-conduit text-xl font-bold">
                          DESPOILERS
                        </h4>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-300 font-crimson">
                        Aqueles que desejam conquistar Sangua Terra e os mundos
                        do Sanctus Wall, usando-os como um ponto de apoio para
                        estender seu alcance temível. As forças do{" "}
                        <HighlightedTerm>Chaos</HighlightedTerm> são mais
                        adequadas para esta aliança.
                      </p>
                    </div>
                  </div>

                  {/* Marauders */}
                  <div className="bg-gray-900/50 border border-purple-700/50 rounded-lg overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src="/alliances/marauders.jpg"
                        alt="Marauders Alliance"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <h4 className="text-purple-400 font-conduit text-xl font-bold">
                          MARAUDERS
                        </h4>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-300 font-crimson">
                        Os Marauders vão desde senhores da guerra xenos, até
                        renegados e mercenários buscando usar o conflito em
                        Sangua Terra para promover suas próprias agendas. Esta
                        aliança é mais adequada para aqueles que{" "}
                        <HighlightedTerm>
                          traçam seu próprio caminho
                        </HighlightedTerm>{" "}
                        - mesmo que não estejam todos trabalhando para os mesmos
                        objetivos.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 mt-6">
                  <h4 className="text-yellow-400 font-conduit text-lg mb-3">
                    Allies of Convenience
                  </h4>
                  <p className="text-sm text-gray-300 font-crimson mb-3">
                    Note que essas são diretrizes sobre como organizar jogadores
                    em uma aliança, ao invés de um requisito. Se convém melhor
                    ao grupo organizar as alianças de forma diferente, o
                    Campaign Master deve se sentir livre para fazê-lo.
                  </p>
                  <p className="text-sm text-gray-300 font-crimson">
                    Por exemplo, se muitos dos jogadores no grupo têm forças de
                    Crusade associadas a uma única aliança, para tornar as
                    alianças mais equilibradas numericamente alguns deles podem
                    ter que lutar por uma aliança diferente do que recomendamos.
                    Você sempre pode criar alguma narrativa interessante para
                    explicar por que um lado luta por outro.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-conduit text-cyan-400 mb-4">
                  Campaign Length
                </h3>
                <p className="font-crimson">
                  Uma campanha Nachmund Gauntlet é dividida em três fases, cada
                  uma das quais envolve batalhar em um estágio diferente da
                  guerra. Antes da campanha começar, o Campaign Master deve
                  determinar o tempo alocado para cada fase de campanha e o
                  número total de jogos que podem ser jogados nessa fase. Uma
                  vez que qualquer uma dessas condições tenha sido atendida,
                  essa fase de campanha termina e o progresso de cada aliança em
                  direção à vitória da campanha nessa fase é determinado. Uma
                  vez que a terceira fase de campanha termine, a campanha
                  termina e a aliança vencedora geral é determinada.
                </p>
                <p className="font-crimson">
                  Uma campanha pode ser uma experiência longa e expansiva onde
                  cada fase de campanha ocorre ao longo de um mês, com muitas
                  batalhas lutadas e heróis poderosos perdidos para os fogos da
                  guerra. Igualmente, pode ser uma campanha curta e focada
                  jogada ao longo de um fim de semana, com cada fase de campanha
                  consistindo de apenas uma batalha representando os
                  momentos-chave do conflito.
                </p>

                <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4 mt-4">
                  <p className="text-cyan-300 font-conduit font-semibold mb-2">
                    Recomendação:
                  </p>
                  <p className="text-sm text-gray-300 font-crimson">
                    Como guia, se cada membro do seu grupo de campanha jogará um
                    jogo por semana, recomendamos que cada fase da campanha dure
                    2 semanas, com um total de jogos igual ao número de
                    jogadores.
                  </p>
                </div>

                <p className="mt-4 font-crimson">
                  Uma vez que você tenha reunido os jogadores em alianças,
                  estabelecido a forma de jogar e determinado a duração da
                  campanha, é hora da batalha pelo controle do Nachmund Gauntlet
                  começar!
                </p>
              </div>
            </RuleSection>

            <RuleSection
              title="Sangua Terra Strategic Sites"
              id="strategic-sites"
            >
              <p className="font-crimson">
                Quatro locais estratégicos e seus distritos circundantes estão
                sendo disputados através da capital de Sangua Terra,{" "}
                <HighlightedTerm>Urbanosprawl Alpha</HighlightedTerm>. Se uma
                aliança controla um local estratégico no início de uma fase de
                campanha, essa aliança tem um bônus associado a esse local
                estratégico e se beneficiará dele durante essa fase.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                {/* Praefectus Bastion */}
                <div className="bg-gray-900/50 border border-orange-700/50 rounded-lg overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src="/locations/praefectus.png"
                      alt="Praefectus Bastion"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h4 className="text-orange-400 font-conduit text-2xl font-bold">
                        PRAEFECTUS BASTION
                      </h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 font-crimson mb-4">
                      Uma poderosa fortaleza que mescla estruturas militares e
                      Eclesiásticas, da qual todos os esforços de defesa do
                      planeta são coordenados.
                    </p>
                    <div className="bg-orange-900/20 border border-orange-700/50 rounded-lg p-4">
                      <h5 className="text-orange-400 font-conduit font-semibold mb-2">
                        STRATEGIC SITE BONUS
                      </h5>
                      <p className="text-sm text-gray-300 font-crimson">
                        Enquanto sua aliança controla este local estratégico,
                        cada vez que um jogador nessa aliança formar um exército
                        de Crusade, eles podem formar até{" "}
                        <HighlightedTerm>4 Reinforcement waves</HighlightedTerm>{" "}
                        ao invés de até 3. Isso não permite que jogadores
                        implantem mais Reinforcement waves durante a batalha,
                        mas lhes dá maior flexibilidade tática.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Emperor's Voice Grand Battery */}
                <div className="bg-gray-900/50 border border-yellow-700/50 rounded-lg overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src="/locations/emperors-voice.png"
                      alt="Emperor's Voice Grand Battery"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h4 className="text-yellow-400 font-conduit text-2xl font-bold">
                        EMPEROR'S VOICE GRAND BATTERY
                      </h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 font-crimson mb-4">
                      Esta extensa bateria de enormes peças de artilharia é
                      crucial para a defesa contínua de Urbanosprawl Alpha,
                      assim como um potente ativo estratégico para qualquer um
                      que a controle.
                    </p>
                    <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                      <h5 className="text-yellow-400 font-conduit font-semibold mb-2">
                        STRATEGIC SITE BONUS
                      </h5>
                      <p className="text-sm text-gray-300 font-crimson">
                        Enquanto sua aliança controla este local estratégico,
                        quando um jogador nessa aliança joga um jogo, cada vez
                        que uma unidade inimiga é estabelecida a partir de{" "}
                        <HighlightedTerm>Strategic Reserves</HighlightedTerm>,
                        role um D6: Em 5+, essa unidade inimiga sofre{" "}
                        <HighlightedTerm>D3 mortal wounds</HighlightedTerm>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tower of Murmuration */}
                <div className="bg-gray-900/50 border border-purple-700/50 rounded-lg overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src="/locations/tower-murmuration.png"
                      alt="Tower of Murmuration"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h4 className="text-purple-400 font-conduit text-2xl font-bold">
                        TOWER OF MURMURATION
                      </h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 font-crimson mb-4">
                      Erguendo-se alto sobre os distritos labirínticos que a
                      cercam, esta estrutura abriga o coro Astropático mais
                      potente em Sangua Terra.
                    </p>
                    <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-4">
                      <h5 className="text-purple-400 font-conduit font-semibold mb-2">
                        STRATEGIC SITE BONUS
                      </h5>
                      <p className="text-sm text-gray-300 font-crimson">
                        Enquanto sua aliança controla este local estratégico,
                        sua aliança pode selecionar um{" "}
                        <HighlightedTerm>
                          Strategic Goal adicional
                        </HighlightedTerm>{" "}
                        no início da fase de campanha. No final da fase de
                        campanha, antes de quaisquer recompensas de Strategic
                        Goals serem concedidas, sua aliança deve descartar um de
                        seus Strategic Goals. Para este processo, recomendamos
                        eleger um Warmaster para coordenar cada aliança.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Accrandor Spaceport */}
                <div className="bg-gray-900/50 border border-cyan-700/50 rounded-lg overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src="/locations/accrandor.png"
                      alt="Accrandor Spaceport"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h4 className="text-cyan-400 font-conduit text-2xl font-bold">
                        ACCRANDOR SPACEPORT
                      </h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 font-crimson mb-4">
                      Quem controla este hub de transporte orbital fortificado
                      ganha um estrangulamento sobre material e reforços
                      movendo-se para dentro e fora do teatro de sprawl urbano.
                    </p>
                    <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4">
                      <h5 className="text-cyan-400 font-conduit font-semibold mb-2">
                        STRATEGIC SITE BONUS
                      </h5>
                      <p className="text-sm text-gray-300 font-crimson">
                        Enquanto sua aliança controla este local estratégico,
                        jogadores nessa aliança podem realizar até{" "}
                        <HighlightedTerm>
                          dois Surgical Deep Strikes por turno
                        </HighlightedTerm>
                        . Além disso, uma vez por turno, quando uma unidade no
                        exército desse jogador realiza um Surgical Deep Strike,
                        esse jogador pode{" "}
                        <HighlightedTerm>
                          re-rolar o teste de Deep Strike
                        </HighlightedTerm>{" "}
                        de sua unidade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-6 font-crimson">
                A primeira aliança que atingir{" "}
                <HighlightedTerm>nível 3 (Securing Position)</HighlightedTerm>{" "}
                toma controle desse distrito. Esse distrito permanece sob
                controle dessa aliança até que outra aliança tenha um{" "}
                <HighlightedTerm>Control Level</HighlightedTerm> maior sobre
                esse distrito, momento em que eles controlam esse distrito. No
                final da campanha, uma aliança ganha{" "}
                <HighlightedTerm>+1CVP</HighlightedTerm> para cada distrito que
                controla.
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-conduit text-cyan-400 mb-4">
                  Controlling Strategic Sites
                </h3>
                <p className="font-crimson">
                  No início da campanha, todas as alianças têm um{" "}
                  <HighlightedTerm>Control Level de 0</HighlightedTerm> em cada
                  um dos quatro locais estratégicos. Conforme a campanha
                  progride, o Control Level que uma aliança tem em cada local
                  estratégico pode aumentar, e às vezes até mesmo diminuir.
                  Recomendamos usar o campaign tracker (impresso separadamente)
                  para mostrar o Control Level atual de cada aliança sobre cada
                  um dos locais estratégicos.
                </p>
                <p className="font-crimson">
                  O Control Level de uma aliança sobre um local estratégico pode
                  ser aumentado por recompensas concedidas no final de cada fase
                  de campanha. Quando uma regra instruir você a aumentar seu
                  Control Level em um local estratégico particular, modifique o
                  Control Level dessa aliança pela quantidade especificada. Se
                  uma regra instruir uma aliança a mudar seu Control Level em
                  qualquer local estratégico, então essa aliança deve decidir em
                  qual dos quatro locais estratégicos mudar seu Control Level.
                  Control Level em um local estratégico não pode ir abaixo de 0
                  ou acima de 7.
                </p>
                <p className="font-crimson">
                  Enquanto uma aliança tem um{" "}
                  <HighlightedTerm>Control Level de 2 ou mais</HighlightedTerm>{" "}
                  em um local estratégico, essa aliança ganha{" "}
                  <HighlightedTerm>+1CVP</HighlightedTerm>, e enquanto tem um{" "}
                  <HighlightedTerm>Control Level de 5 ou mais</HighlightedTerm>{" "}
                  em um local estratégico, essa aliança ganha um adicional{" "}
                  <HighlightedTerm>+1CVP</HighlightedTerm>.
                </p>
                <p className="font-crimson">
                  A primeira aliança que tem um{" "}
                  <HighlightedTerm>Control Level de 3 ou mais</HighlightedTerm>{" "}
                  em um local estratégico toma controle desse local estratégico.
                  Esse local estratégico permanece sob controle dessa aliança
                  até que outra aliança tenha um Control Level maior sobre esse
                  local estratégico. No final da campanha, uma aliança ganha{" "}
                  <HighlightedTerm>+1CVP</HighlightedTerm> para cada local
                  estratégico que controla. Além disso, enquanto cada aliança
                  controla um local estratégico, jogadores nessa aliança terão
                  todos acesso ao Strategic Site Bonus associado a esse local
                  estratégico. Cada Control Level tem um nome de grupo
                  associado, como segue: Control Level 0 é{" "}
                  <HighlightedTerm>'No Presence'</HighlightedTerm>.
                </p>

                <div className="bg-gray-900/50 border border-gray-600/50 rounded-lg p-4 mt-4">
                  <ul className="text-gray-300 font-crimson space-y-2">
                    <li>
                      <HighlightedTerm>Control Level 1-2</HighlightedTerm> é{" "}
                      <HighlightedTerm>'Establishing Foothold'</HighlightedTerm>
                      .
                    </li>
                    <li>
                      <HighlightedTerm>Control Level 3-4</HighlightedTerm> é{" "}
                      <HighlightedTerm>'Securing Positions'</HighlightedTerm>.
                    </li>
                    <li>
                      <HighlightedTerm>Control Level 5 ou mais</HighlightedTerm>{" "}
                      é <HighlightedTerm>'Fortified'</HighlightedTerm>.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border border-cyan-700/50 rounded-lg p-6 text-center mt-8">
                <h3 className="text-cyan-300 font-conduit text-xl mb-4">
                  DASHBOARD DA CAMPANHA
                </h3>
                <p className="text-gray-300 font-crimson mb-6">
                  Acompanhe o controle dos territórios, status das alianças e
                  progresso da campanha no mapa interativo de Sangua Terra.
                </p>
                <a
                  href="/"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Ir para Dashboard da Campanha
                </a>
              </div>
            </RuleSection>

            <RuleSection title="Fases da Campanha" id="campaign-phases">
              <p className="font-crimson">
                Durante uma fase da campanha, jogadores de alianças opostas
                batalharão entre si para ganhar{" "}
                <HighlightedTerm>Battle points (BP)</HighlightedTerm> para sua
                aliança. O Campaign Master tem algumas opções sobre como os
                jogadores são pareados para os jogos. Eles podem deixar os
                jogadores organizarem jogos por si mesmos, com desafios lançados
                e honra em jogo. Alternativamente, pode ser apropriado
                introduzir mais estrutura aos pareamentos. Por exemplo, um
                cronograma de jogos garantirá que todos tenham uma quantidade
                igual de jogos, ou, em campanhas com um grande número de
                jogadores, cada aliança pode ser dividida em subgrupos menores
                que são então pareados uns contra os outros para tornar a
                organização de jogos ainda mais simples. Contudo, antes que
                qualquer batalha em uma fase seja travada, cada aliança deve
                primeiro selecionar um{" "}
                <HighlightedTerm>Strategic Goal</HighlightedTerm>.
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-conduit text-cyan-400 mb-4">
                  Strategic Goals
                </h3>
                <p className="font-crimson">
                  Strategic Goals representam uma variedade de estratagemas,
                  intrigas e gambitos que sua aliança pode tentar alcançar além
                  da vitória militar, e ao fazê-lo ganhar uma série de vantagens
                  estratégicas e recompensas durante cada fase da campanha,
                  atribuindo{" "}
                  <HighlightedTerm>
                    Strategic Asset points (SAP)
                  </HighlightedTerm>{" "}
                  numa tentativa de alcançar a vitória.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-conduit text-cyan-400 mb-4">
                  Strategic Asset Points
                </h3>
                <p className="font-crimson">
                  Algumas Agendas nesta publicação fornecem aos jogadores
                  oportunidades de ganhar{" "}
                  <HighlightedTerm>
                    Strategic Asset points (SAP)
                  </HighlightedTerm>
                  , que representam a alocação dos recursos de uma aliança em
                  sua tentativa de alcançar controle sobre os locais
                  estratégicos de Sangua Terra.
                </p>

                <p className="font-crimson">
                  No início de cada fase da campanha, cada aliança deve
                  selecionar um Strategic Goal que se aplica a toda a aliança
                  para essa fase. Para este processo, recomendamos eleger um{" "}
                  <HighlightedTerm>Warmaster</HighlightedTerm> para coordenar
                  cada aliança, especialmente em campanhas maiores. Uma vez que
                  cada aliança tenha selecionado seu Strategic Goal, elas devem
                  informar o Campaign Master de sua escolha. Essas escolhas são
                  mantidas em segredo - a escolha de cada aliança é conhecida
                  apenas pelo Campaign Master e pelos outros membros de sua
                  própria aliança.
                </p>

                <p className="font-crimson">
                  Cada Strategic Goal tem um conjunto de requisitos; estes
                  exigirão que os jogadores em sua aliança ganhem SAP durante
                  suas batalhas, o que pode ser realizado de várias maneiras.
                  Após cada batalha, cada jogador deve atribuir todos os SAP que
                  ganhou dessa batalha a um dos quatro locais estratégicos de
                  Sangua Terra, e informar o Campaign Master dessa decisão.
                </p>

                <p className="font-crimson">
                  No final de cada fase da campanha quando as alianças estão
                  recebendo suas recompensas, o Campaign Master revelará o
                  número total de SAP que cada aliança atribuiu a cada um dos
                  quatro locais estratégicos de Sangua Terra, e verificará se
                  essa aliança atendeu aos requisitos listados em seu Strategic
                  Goal; se sim, eles também receberão o{" "}
                  <HighlightedTerm>Strategic Goal Bonus</HighlightedTerm>{" "}
                  associado.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-conduit text-cyan-400 mb-4">
                  Battle Points
                </h3>
                <p className="font-crimson">
                  Cada vez que uma batalha é travada, sua aliança ganha uma
                  série de Battle points baseados no tamanho da batalha e qual
                  foi o resultado, como mostrado na tabela abaixo.
                </p>

                <div className="bg-gray-900/50 border border-gray-600/50 rounded-lg p-6 mt-4">
                  <h4 className="text-yellow-400 font-conduit font-semibold mb-4 text-center">
                    BATTLE POINTS GANHOS
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-gray-300 font-crimson">
                      <thead>
                        <tr className="border-b border-gray-600">
                          <th className="text-left py-3 text-cyan-400">
                            TAMANHO DA BATALHA
                          </th>
                          <th className="text-center py-3 text-green-400">
                            VITÓRIA
                          </th>
                          <th className="text-center py-3 text-yellow-400">
                            EMPATE
                          </th>
                          <th className="text-center py-3 text-red-400">
                            DERROTA
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-700/50">
                          <td className="py-3">Incursion</td>
                          <td className="text-center py-3">2</td>
                          <td className="text-center py-3">2</td>
                          <td className="text-center py-3">1</td>
                        </tr>
                        <tr className="border-b border-gray-700/50">
                          <td className="py-3">Strike Force</td>
                          <td className="text-center py-3">3</td>
                          <td className="text-center py-3">2</td>
                          <td className="text-center py-3">1</td>
                        </tr>
                        <tr>
                          <td className="py-3">Onslaught</td>
                          <td className="text-center py-3">4</td>
                          <td className="text-center py-3">3</td>
                          <td className="text-center py-3">2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="font-crimson mt-4">
                  Após cada batalha, cada jogador deve atribuir todos os Battle
                  points que ganhou dessa batalha a um dos quatro locais
                  estratégicos de Sangua Terra; cada jogador deve informar o
                  Campaign Master de sua escolha de local estratégico e quantos
                  Battle points estão atribuindo a ele.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-conduit text-cyan-400 mb-4">
                  Final de Fase e Recompensas
                </h3>
                <p className="font-crimson">
                  Uma vez que a fase da campanha chegue ao fim, as alianças
                  receberão recompensas dependendo do número combinado de Battle
                  points que atribuíram a cada local estratégico durante essa
                  fase, como mostrado na tabela abaixo:
                </p>

                <div className="bg-gray-900/50 border border-gray-600/50 rounded-lg p-6 mt-4">
                  <h4 className="text-yellow-400 font-conduit font-semibold mb-4 text-center">
                    RECOMPENSAS DE NÍVEL DE CONTROLE
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-gray-300 font-crimson">
                      <thead>
                        <tr className="border-b border-gray-600">
                          <th className="text-left py-3 text-cyan-400">
                            FASE DA CAMPANHA
                          </th>
                          <th className="text-center py-3 text-gold-400">
                            1º (MAIS BATTLE POINTS)
                          </th>
                          <th className="text-center py-3 text-silver-400">
                            2º (SEGUNDO MAIS BATTLE POINTS)
                          </th>
                          <th className="text-center py-3 text-bronze-400">
                            3º (TERCEIRO MAIS BATTLE POINTS)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-700/50">
                          <td className="py-3">Fase 1</td>
                          <td className="text-center py-3">+2 Control Level</td>
                          <td className="text-center py-3">+1 Control Level</td>
                          <td className="text-center py-3">+0 Control Level</td>
                        </tr>
                        <tr className="border-b border-gray-700/50">
                          <td className="py-3">Fase 2</td>
                          <td className="text-center py-3">+2 Control Level</td>
                          <td className="text-center py-3">+1 Control Level</td>
                          <td className="text-center py-3">+1 Control Level</td>
                        </tr>
                        <tr>
                          <td className="py-3">Fase 3</td>
                          <td className="text-center py-3">+3 Control Level</td>
                          <td className="text-center py-3">+2 Control Level</td>
                          <td className="text-center py-3">+1 Control Level</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="font-crimson mt-4">
                  Para cada local estratégico, a aliança com mais Battle points
                  atribuídos a esse local estratégico fica em primeiro lugar e
                  recebe a recompensa de primeiro lugar, a aliança com o segundo
                  maior número de Battle points atribuídos a esse local
                  estratégico fica em segundo lugar e receberá a recompensa de
                  2º lugar, e - se sua campanha tiver três alianças - a aliança
                  com o terceiro maior número de Battle points atribuídos a esse
                  local estratégico recebe a recompensa de 3º lugar. Repita isso
                  para todos os quatro locais estratégicos de Sangua Terra.
                </p>

                <p className="font-crimson">
                  Em caso de empate para o 1º lugar, todas as alianças empatadas
                  recebem a recompensa de 2º lugar e qualquer aliança não
                  empatada recebe a recompensa de 3º lugar. Em caso de empate
                  para o 2º lugar, as alianças empatadas recebem a recompensa de
                  3º lugar. Conforme as fases da campanha progridem, as
                  recompensas para cada uma aumentam, garantindo que os
                  vencedores finais não sejam decididos até o final da campanha.
                </p>

                <p className="font-crimson">
                  A menos que explicitamente declarado o contrário, a ordem em
                  que as alianças recebem suas recompensas de Control Level
                  começa com a aliança que tem mais Battle points totais,
                  seguida pela aliança com o segundo maior número de Battle
                  points totais, e finalmente a aliança com o menor número de
                  Battle points totais. Ao coletar suas recompensas de Battle
                  points, essa aliança resolve todas as recompensas ao mesmo
                  tempo, antes da próxima aliança resolver suas recompensas.
                </p>

                <p className="font-crimson">
                  Após todas as recompensas de Control Level das alianças terem
                  sido concedidas, todas as alianças que alcançaram o Strategic
                  Goal que selecionaram no início da fase da campanha receberão
                  as recompensas adicionais de seus objetivos completados.
                </p>

                <p className="font-crimson">
                  A menos que explicitamente declarado o contrário, a ordem em
                  que as alianças recebem suas recompensas de Strategic Goals
                  começa com a aliança que tem mais SAP totais, seguida pela
                  aliança com o segundo maior número de SAP totais, e finalmente
                  a aliança com o menor número de SAP totais. Ao coletar suas
                  recompensas de SAP, essa aliança resolve todas as recompensas
                  ao mesmo tempo, antes da próxima aliança resolver suas
                  recompensas.
                </p>

                <p className="font-crimson">
                  Em qualquer caso, em caso de empate ou recompensas que se
                  resolveriam ao mesmo tempo, o Campaign Master deve determinar
                  aleatoriamente qual aliança resolve suas recompensas primeiro.
                  Às vezes as alianças terão que tomar decisões ao resolver suas
                  recompensas - mais frequentemente ao selecionar quais locais
                  estratégicos aumentar seu Control Level. Para este processo,
                  recomendamos eleger um Warmaster para coordenar cada aliança,
                  especialmente em campanhas maiores.
                </p>

                <p className="font-crimson">
                  Quando a próxima fase da campanha começar, os Battle points e
                  Strategic Asset points de cada aliança são resetados para 0,
                  colocando as alianças em pé de igualdade para a próxima fase
                  da campanha.
                </p>

                <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6 mt-6">
                  <h4 className="text-blue-300 font-conduit font-semibold mb-4">
                    Exemplo:
                  </h4>
                  <p className="text-gray-300 font-crimson">
                    No final da primeira fase de uma campanha Nachmund Gauntlet,
                    os Guardians têm um total de 12 Battle points e 6 Strategic
                    Asset points; os Despoilers têm 8 Battle points e 8
                    Strategic Asset points; os Marauders 6 Battle points e 9
                    Strategic Asset points. Os Guardians coletam suas
                    recompensas de Battle points primeiro, pois têm mais,
                    aumentando seu Control Level sobre cada local estratégico
                    onde ficaram em primeiro lugar em 2, e cada local
                    estratégico onde ficaram em segundo em 1. Os Despoilers
                    então coletam suas recompensas de Battle Point, aumentando
                    seu Control Level sobre locais estratégicos da mesma forma.
                    Finalmente os Marauders, que têm o menor número de Battle
                    points nesta fase, coletam suas recompensas de Battle
                    points. Após todas as recompensas de Battle Point terem sido
                    concedidas, os Marauders, que têm mais SAP, coletam suas
                    recompensas de Strategic Goals primeiro (assumindo que
                    atenderam seus requisitos). Os Despoilers então fazem o
                    mesmo e finalmente, os Guardians, com o menor número de SAP,
                    fazem o mesmo.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-conduit text-cyan-400 mb-4">
                  Final da Campanha
                </h3>
                <p className="font-crimson">
                  Após todas as alianças terem recebido suas recompensas no
                  final da fase 3 da campanha, a campanha termina. A aliança com
                  mais CVP toma controle da cidade capital de Sangua Terra e é
                  coroada a vitoriosa. Se houver empate para mais CVP, e uma das
                  alianças empatadas controla mais locais estratégicos que as
                  outras alianças empatadas, então essa aliança arranca o
                  controle de Urbanosprawl Alpha e é a vitoriosa. Se isso também
                  for empate, então a aliança com mais SAP no final da fase 3 é
                  a vitoriosa. Se até mesmo isso for empate, então a campanha
                  termina em um empate sangrento, e a batalha por Sangua Terra
                  continua...
                </p>
              </div>
            </RuleSection>

            <RuleSection title="Strategic Goals" id="strategic-goals">
              <p className="font-crimson">
                Os Strategic Goals que as alianças podem escolher no início de
                cada fase podem ser encontrados aqui. Cada Strategic Goal
                explicará quais requisitos devem ser atendidos para sua aliança
                ganhar as recompensas associadas, junto com quaisquer restrições
                de aliança. Se os requisitos do Strategic Goal selecionado não
                forem atendidos, então essa recompensa não é resolvida.
              </p>

              {/* Phase Filter */}
              <div className="mt-6 mb-8">
                <div className="flex flex-wrap gap-2 justify-center">
                  <button
                    onClick={() => setSelectedPhase("phase1")}
                    className={`px-4 py-2 rounded-lg font-conduit transition-all duration-300 ${
                      selectedPhase === "phase1"
                        ? "bg-green-600 text-white shadow-lg"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    Fase 1
                  </button>
                  <button
                    onClick={() => setSelectedPhase("phase2")}
                    className={`px-4 py-2 rounded-lg font-conduit transition-all duration-300 ${
                      selectedPhase === "phase2"
                        ? "bg-yellow-600 text-white shadow-lg"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    Fase 2
                  </button>
                  <button
                    onClick={() => setSelectedPhase("phase3")}
                    className={`px-4 py-2 rounded-lg font-conduit transition-all duration-300 ${
                      selectedPhase === "phase3"
                        ? "bg-red-600 text-white shadow-lg"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    Fase 3
                  </button>
                </div>
              </div>

              {selectedPhase === "phase1" && (
                <div className="mt-6">
                  <h3 className="text-xl font-conduit text-cyan-400 mb-4">
                    Fase 1
                  </h3>

                  <div className="space-y-6">
                    <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-green-300 font-conduit text-lg">
                          CONTRA-ESTRATÉGIAS
                        </h4>
                        <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          +1 CL
                        </span>
                      </div>
                      <p className="text-gray-300 font-crimson mb-4 italic">
                        Aplique pressão onde quer que o inimigo mostre sua mão.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-yellow-400 font-conduit font-semibold mb-2">
                            REQUISITOS - GUARDIANS APENAS
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Sua aliança ganhou mais SAP que uma ou mais outras
                            alianças.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-cyan-400 font-conduit font-semibold mb-2">
                            RECOMPENSAS +1 CONTROL LEVEL
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Esta recompensa é reivindicada após todas as outras
                            alianças terem reivindicado suas recompensas de
                            Strategic Goals nesta fase. Sua aliança ganha +1
                            Control Level em cada local estratégico onde uma ou
                            mais alianças opostas aumentaram seu Control Level
                            durante esta fase da campanha.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-red-300 font-conduit text-lg">
                          ESPÓLIOS SANGRENTOS
                        </h4>
                        <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          +1 CL
                        </span>
                      </div>
                      <p className="text-gray-300 font-crimson mb-4 italic">
                        Expulse o inimigo de seus territórios escolhidos e
                        enfeite o campo de batalha com troféus sangrentos.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-yellow-400 font-conduit font-semibold mb-2">
                            REQUISITOS - DESPOILERS APENAS
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Selecione dois locais estratégicos. Sua aliança
                            atribuiu mais SAP a esses locais estratégicos que
                            uma ou mais outras alianças (isso não precisa ser a
                            mesma aliança para cada local estratégico
                            selecionado).
                          </p>
                        </div>
                        <div>
                          <h5 className="text-cyan-400 font-conduit font-semibold mb-2">
                            RECOMPENSAS +1 CONTROL LEVEL
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Sua aliança ganha +1 Control Level em um local
                            estratégico onde você está Establishing Foothold, e
                            +1 Control Level em um local estratégico onde uma ou
                            mais alianças opostas estão Establishing Foothold.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-purple-300 font-conduit text-lg">
                          GANHOS SEM OPOSIÇÃO
                        </h4>
                        <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          +1 CL
                        </span>
                      </div>
                      <p className="text-gray-300 font-crimson mb-4 italic">
                        Enquanto seus inimigos batalham uns aos outros em outro
                        lugar, favoreça seus próprios objetivos insidiosos nas
                        sombras.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-yellow-400 font-conduit font-semibold mb-2">
                            REQUISITOS - MARAUDERS APENAS
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Sua aliança atribuiu 1 ou mais SAP a um local
                            estratégico onde uma ou mais outras alianças não
                            atribuíram SAP.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-cyan-400 font-conduit font-semibold mb-2">
                            RECOMPENSAS +1 CONTROL LEVEL
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Sua aliança ganha +1 Control Level em cada local
                            estratégico onde sua aliança atribuiu SAP e onde
                            todas as outras alianças têm No Presence.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-900/20 border border-orange-700/50 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-orange-300 font-conduit text-lg">
                          PRIMEIRO GOLPE DECISIVO
                        </h4>
                        <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          +1 CL
                        </span>
                      </div>
                      <p className="text-gray-300 font-crimson mb-4 italic">
                        Um golpe rápido e decisivo alcança dominância.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-yellow-400 font-conduit font-semibold mb-2">
                            REQUISITOS
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Selecione um local estratégico. Sua aliança atribuiu
                            mais SAP a esse local estratégico que o SAP
                            combinado atribuído a esse local estratégico de
                            todas as outras alianças.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-cyan-400 font-conduit font-semibold mb-2">
                            RECOMPENSAS +1 CONTROL LEVEL
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Sua aliança ganha +1 Control Level nesse local
                            estratégico.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-blue-300 font-conduit text-lg">
                          RECONHECIMENTO EM FORÇA
                        </h4>
                        <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          +1 CL
                        </span>
                      </div>
                      <p className="text-gray-300 font-crimson mb-4 italic">
                        Coleta ampla de inteligência permite decisões
                        estratégicas mais informadas conforme a guerra se
                        intensifica.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-yellow-400 font-conduit font-semibold mb-2">
                            REQUISITOS
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Sua aliança atribuiu um ou mais SAP a cada local
                            estratégico.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-cyan-400 font-conduit font-semibold mb-2">
                            RECOMPENSAS +1 CONTROL LEVEL
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Sua aliança ganha +1 Control Level em cada local
                            estratégico onde sua aliança tem No Presence.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedPhase === "phase2" && (
                <div className="mt-8">
                  <h3 className="text-xl font-conduit text-cyan-400 mb-4">
                    Fase 2
                  </h3>

                  <div className="space-y-6">
                    <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-green-300 font-conduit text-lg">
                          CONSOLIDAR POSIÇÃO
                        </h4>
                        <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          +1 CL
                        </span>
                      </div>
                      <p className="text-gray-300 font-crimson mb-4 italic">
                        Construa sobre seus sucessos fortificando o terreno que
                        você já tomou.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-yellow-400 font-conduit font-semibold mb-2">
                            REQUISITOS - GUARDIANS APENAS
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Selecione dois locais estratégicos onde seu Control
                            Level está Securing Positions ou melhor. Sua aliança
                            atribuiu mais SAP a esses locais estratégicos que
                            uma ou mais outras alianças (isso não precisa ser a
                            mesma aliança para cada local estratégico
                            selecionado).
                          </p>
                        </div>
                        <div>
                          <h5 className="text-cyan-400 font-conduit font-semibold mb-2">
                            RECOMPENSAS +1 CONTROL LEVEL
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Sua aliança ganha +1 Control Level em ambos esses
                            locais estratégicos.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-red-300 font-conduit text-lg">
                          ARRANCAR CONTROLE
                        </h4>
                        <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          +2 CL
                        </span>
                      </div>
                      <p className="text-gray-300 font-crimson mb-4 italic">
                        Aquilo que seus inimigos valorizam deve ser arrancado de
                        suas garras sem misericórdia.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-yellow-400 font-conduit font-semibold mb-2">
                            REQUISITOS - DESPOILERS APENAS
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Selecione um local estratégico controlado por uma
                            outra aliança. Este Strategic Goal é alcançado se
                            sua aliança atribuiu mais SAP a ele que essa
                            aliança.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-cyan-400 font-conduit font-semibold mb-2">
                            RECOMPENSAS +2 CONTROL LEVEL
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Sua aliança ganha +2 Control Level nesse local
                            estratégico.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-purple-300 font-conduit text-lg">
                          ATAQUES OUSADOS
                        </h4>
                        <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          +1 CL
                        </span>
                      </div>
                      <p className="text-gray-300 font-crimson mb-4 italic">
                        Atacando e desaparecendo, você deve assediar seus
                        inimigos para pilhar seus suprimentos e enfraquecer seu
                        moral.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-yellow-400 font-conduit font-semibold mb-2">
                            REQUISITOS - MARAUDERS APENAS
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Sua aliança atribuiu pelo menos 1 SAP por jogador em
                            sua aliança a três ou mais locais estratégicos.
                            <br />
                            <br />
                            Por exemplo, se sua aliança tivesse três jogadores,
                            sua aliança precisaria atribuir pelo menos três
                            Strategic Asset points a pelo menos três locais
                            estratégicos diferentes para alcançar este Strategic
                            Goal.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-cyan-400 font-conduit font-semibold mb-2">
                            RECOMPENSAS +1 CONTROL LEVEL
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Sua aliança ganha +1 Control Level em cada local
                            estratégico onde uma ou mais alianças opostas têm
                            Establishing Foothold (ou melhor).
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-900/20 border border-orange-700/50 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-orange-300 font-conduit text-lg">
                          ATACAR LINHAS DE SUPRIMENTO
                        </h4>
                        <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          -1 CL
                        </span>
                      </div>
                      <p className="text-gray-300 font-crimson mb-4 italic">
                        Corte as linhas de suprimento, reforço e comunicação do
                        inimigo para disrumpir seus planos.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-yellow-400 font-conduit font-semibold mb-2">
                            REQUISITOS
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Selecione um local estratégico. Sua aliança atribuiu
                            mais SAP a esse local estratégico que cada outra
                            aliança, mas o Control Level de sua aliança não
                            aumentou nesse local estratégico.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-cyan-400 font-conduit font-semibold mb-2">
                            RECOMPENSAS -1 CONTROL LEVEL
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Todas as outras alianças perdem -1 Control Level
                            nesse local estratégico.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-blue-300 font-conduit text-lg">
                          PRIORIDADES CAMBIANTES
                        </h4>
                        <span className="bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          -1/+3 CL
                        </span>
                      </div>
                      <p className="text-gray-300 font-crimson mb-4 italic">
                        Atraia o inimigo e então pivoteie rapidamente para uma
                        nova disposição, tomando território vital no processo.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-yellow-400 font-conduit font-semibold mb-2">
                            REQUISITOS
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Selecione dois locais estratégicos onde sua aliança
                            tem Establishing Foothold (ou melhor). Sua aliança
                            tem pelo menos 1 SAP por jogador em sua aliança
                            atribuído a esses locais estratégicos.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-cyan-400 font-conduit font-semibold mb-2">
                            RECOMPENSAS -1 CONTROL LEVEL +3 CONTROL LEVEL
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Sua aliança perde -1 Control Level em ambos esses
                            locais estratégicos, mas sua aliança ganha +3
                            Control Level em um outro local estratégico.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedPhase === "phase3" && (
                <div className="mt-8">
                  <h3 className="text-xl font-conduit text-cyan-400 mb-4">
                    Fase 3
                  </h3>

                  <div className="space-y-6">
                    <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-yellow-300 font-conduit text-lg">
                          GAMBITO ESTRATÉGICO
                        </h4>
                        <span className="bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          -2/+1 CL
                        </span>
                      </div>
                      <p className="text-gray-300 font-crimson mb-4 italic">
                        Se esta grande aposta der certo, ela fortalecerá sua
                        posição através do sprawl da cidade.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-yellow-400 font-conduit font-semibold mb-2">
                            REQUISITOS
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Selecione dois locais estratégicos. Este Strategic
                            Goal é alcançado se sua aliança atribuiu mais SAP a
                            cada um desses locais estratégicos.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-cyan-400 font-conduit font-semibold mb-2">
                            RECOMPENSAS -2 CONTROL LEVEL +1 CONTROL LEVEL
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Sua aliança perde -2 Control Level de um dos locais
                            estratégicos selecionados, mas sua aliança ganha +1
                            Control Level em todos os outros locais
                            estratégicos.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-teal-900/20 border border-teal-700/50 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-teal-300 font-conduit text-lg">
                          INCLINAR A BALANÇA
                        </h4>
                        <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          +1 CL
                        </span>
                      </div>
                      <p className="text-gray-300 font-crimson mb-4 italic">
                        Uma aplicação precisamente medida de força o colocará à
                        frente de seus inimigos no momento crucial.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-yellow-400 font-conduit font-semibold mb-2">
                            REQUISITOS
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Selecione um local estratégico. Sua aliança atribuiu
                            mais SAP a esse local estratégico que uma ou mais
                            outras alianças.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-cyan-400 font-conduit font-semibold mb-2">
                            RECOMPENSAS +1 CONTROL LEVEL
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Sua aliança ganha +1 Control Level em todos os
                            locais estratégicos onde você tem o mesmo Control
                            Level que uma ou mais outras alianças.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-green-300 font-conduit text-lg">
                          REFORÇAR DEFESAS
                        </h4>
                        <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          +1 CL
                        </span>
                      </div>
                      <p className="text-gray-300 font-crimson mb-4 italic">
                        Transforme porções apressadamente tomadas e reforçadas
                        da paisagem urbana em verdadeiras fortalezas.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-yellow-400 font-conduit font-semibold mb-2">
                            REQUISITOS - GUARDIANS APENAS
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Selecione todos os locais estratégicos que estão
                            Fortified. Sua aliança atribuiu mais SAP a esses
                            locais estratégicos que uma ou mais outras alianças
                            (isso não precisa ser a mesma aliança para cada
                            local estratégico selecionado).
                          </p>
                        </div>
                        <div>
                          <h5 className="text-cyan-400 font-conduit font-semibold mb-2">
                            RECOMPENSAS +1 CONTROL LEVEL
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Sua aliança ganha +1 Control Level em cada local
                            estratégico que sua aliança tem Fortified.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-red-300 font-conduit text-lg">
                          ARRASAR DEFESAS
                        </h4>
                        <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          -1 CL
                        </span>
                      </div>
                      <p className="text-gray-300 font-crimson mb-4 italic">
                        Despedace os pontos fortes do inimigo e lance seus
                        estandartes na sujeira.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-yellow-400 font-conduit font-semibold mb-2">
                            REQUISITOS - DESPOILERS APENAS
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Selecione um local estratégico onde uma aliança
                            oposta tem Fortified. Este Strategic Goal é
                            alcançado se sua aliança atribuiu mais SAP a esse
                            local estratégico.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-cyan-400 font-conduit font-semibold mb-2">
                            RECOMPENSAS -1 CONTROL LEVEL
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Todas as alianças opostas perdem -1 Control Level
                            nesse local estratégico.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-purple-300 font-conduit text-lg">
                          FINTA ASTUTA
                        </h4>
                        <span className="bg-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          -1/+2 CL
                        </span>
                      </div>
                      <p className="text-gray-300 font-crimson mb-4 italic">
                        Com o inimigo convencido de seus objetivos estratégicos,
                        é hora de atacar seu verdadeiro alvo.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-yellow-400 font-conduit font-semibold mb-2">
                            REQUISITOS - MARAUDERS APENAS
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Selecione um local estratégico onde sua aliança tem
                            Establishing Foothold (ou melhor). Este Strategic
                            Goal é alcançado se sua aliança não atribuiu nenhum
                            SAP a esse local estratégico e todas as alianças
                            opostas atribuíram 1 ou mais SAP a esse local
                            estratégico.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-cyan-400 font-conduit font-semibold mb-2">
                            RECOMPENSAS -1 CONTROL LEVEL +2 CONTROL LEVEL
                          </h5>
                          <p className="text-gray-300 font-crimson text-sm">
                            Sua aliança perde -1 Control Level nesse local
                            estratégico, mas sua aliança ganha +2 Control Level
                            em qualquer outro local estratégico.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 border border-cyan-700/50 rounded-lg p-6 text-center mt-8">
                <h3 className="text-cyan-300 font-conduit text-xl mb-4">
                  DASHBOARD DA CAMPANHA
                </h3>
                <p className="text-gray-300 font-crimson mb-6">
                  Acompanhe o controle dos territórios, status das alianças e
                  progresso da campanha no mapa interativo de Sangua Terra.
                </p>
                <a
                  href="/"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  Ir para Dashboard da Campanha
                </a>
              </div>
            </RuleSection>

            <RuleSection title="Campeões Poderosos" id="mighty-champions">
              <p className="font-crimson">
                Conforme a guerra se espalha do Nachmund Gauntlet para engolfar
                os mundos do Sanctus Wall, a escala do conflito atrai alguns dos
                maiores campeões da galáxia para se juntarem à luta. A presença
                de até mesmo um exemplar tão potente pode inspirar seus
                seguidores a grandes feitos, enquanto a intervenção pessoal de
                tais indivíduos pode mudar a forma de batalhas inteiras.
              </p>

              <p className="font-crimson">
                Em uma Campanha{" "}
                <HighlightedTerm>Nachmund Gauntlet</HighlightedTerm>, jogadores
                devem informar o Campaign Master sempre que uma unidade{" "}
                <HighlightedTerm>EPIC HERO</HighlightedTerm> for adicionada à
                sua força de Crusade. O Campaign Master então atribui uma das
                seguintes <HighlightedTerm>Crusade Abilities</HighlightedTerm> a
                um modelo EPIC HERO nessa unidade que melhor represente seu lore
                e background. Para cada unidade EPIC HERO na força de Crusade de
                um jogador, esse jogador deve aumentar seu total de{" "}
                <HighlightedTerm>Crusade points</HighlightedTerm> em 1. Se uma
                unidade EPIC HERO contém dois ou mais modelos EPIC HERO, o
                Campaign Master deve selecionar apenas um desses modelos EPIC
                HERO para ter uma Crusade Ability.
              </p>

              <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6 mt-6">
                <h3 className="text-blue-300 font-conduit text-xl mb-4">
                  HISTORICAL REFIGHT
                </h3>
                <p className="text-gray-300 font-crimson">
                  Se você está recriando o conflito deste próprio livro, então{" "}
                  <HighlightedTerm>Haarken Worldclaimer</HighlightedTerm> seria
                  um <HighlightedTerm>Front-line Champion</HighlightedTerm>,{" "}
                  <HighlightedTerm>Junith Eruita</HighlightedTerm> seria um{" "}
                  <HighlightedTerm>Strategic Champion</HighlightedTerm> e{" "}
                  <HighlightedTerm>Saint Celestine</HighlightedTerm> seria um{" "}
                  <HighlightedTerm>Inspirational Champion</HighlightedTerm>.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                {/* Front-line Champions */}
                <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-6">
                  <h3 className="text-red-300 font-conduit text-xl mb-4">
                    FRONT-LINE CHAMPIONS
                  </h3>
                  <p className="text-gray-300 font-crimson mb-4">
                    Esses guerreiros são encontrados onde a luta é mais intensa,
                    usando sua experiência duramente conquistada para liderar
                    suas tropas à vitória.
                  </p>
                  <div className="bg-red-800/20 border border-red-600/30 rounded-lg p-4">
                    <h4 className="text-red-200 font-conduit font-semibold mb-2">
                      CRUSADE ABILITY
                    </h4>
                    <p className="text-gray-300 font-crimson text-sm">
                      No passo{" "}
                      <HighlightedTerm>
                        declare Battle-formations
                      </HighlightedTerm>
                      , selecione um{" "}
                      <HighlightedTerm>Battle Trait</HighlightedTerm>. Até o
                      final da batalha, este modelo EPIC HERO, e qualquer
                      unidade que ele se junte, são considerados como tendo este
                      Battle Trait.
                    </p>
                  </div>
                </div>

                {/* Strategic Champions */}
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6">
                  <h3 className="text-blue-300 font-conduit text-xl mb-4">
                    STRATEGIC CHAMPIONS
                  </h3>
                  <p className="text-gray-300 font-crimson mb-4">
                    Indivíduos deste tipo empregam suas vastas e abrangentes
                    percepções estratégicas para inclinar as chances a favor de
                    seus exércitos.
                  </p>
                  <div className="bg-blue-800/20 border border-blue-600/30 rounded-lg p-4">
                    <h4 className="text-blue-200 font-conduit font-semibold mb-2">
                      CRUSADE ABILITY
                    </h4>
                    <p className="text-gray-300 font-crimson text-sm mb-3">
                      Se seu exército de Crusade inclui um ou mais modelos EPIC
                      HERO com esta Crusade Ability, então no passo{" "}
                      <HighlightedTerm>
                        Select Crusade Blessings
                      </HighlightedTerm>
                      , role um D6: em 4+ selecione um dos seguintes:
                    </p>
                    <ul className="text-gray-300 font-crimson text-sm space-y-1 ml-4">
                      <li>
                        • Se você é o{" "}
                        <HighlightedTerm>Underdog</HighlightedTerm>, pode
                        selecionar um Crusade Blessing adicional.
                      </li>
                      <li>
                        • Se você não é o Underdog, pode selecionar um Crusade
                        Blessing, ao invés.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Nemesis Champions */}
                <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-6">
                  <h3 className="text-purple-300 font-conduit text-xl mb-4">
                    NEMESIS CHAMPIONS
                  </h3>
                  <p className="text-gray-300 font-crimson mb-4">
                    Seja pelas artes sutis do assassinato ou duelos ostensivos e
                    espetaculares, guerreiros como este se destacam em derrubar
                    os líderes inimigos.
                  </p>
                  <div className="bg-purple-800/20 border border-purple-600/30 rounded-lg p-4">
                    <h4 className="text-purple-200 font-conduit font-semibold mb-2">
                      CRUSADE ABILITY
                    </h4>
                    <p className="text-gray-300 font-crimson text-sm">
                      Durante a batalha, se um ou mais modelos{" "}
                      <HighlightedTerm>CHARACTER</HighlightedTerm> inimigos são
                      destruídos por um ataque feito por um modelo EPIC HERO (ou
                      um modelo em uma unidade à qual ele está anexado) com esta
                      Crusade Ability de seu exército de Crusade, então no passo{" "}
                      <HighlightedTerm>Update Crusade Cards</HighlightedTerm>,
                      todas as unidades em seu exército de Crusade ganham 1XP
                      adicional. Se um desses modelos CHARACTER inimigos
                      destruídos era o{" "}
                      <HighlightedTerm>WARLORD</HighlightedTerm> inimigo, você
                      também ganha 1 Strategic Asset Point.
                    </p>
                  </div>
                </div>

                {/* Inspirational Champions */}
                <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-6">
                  <h3 className="text-yellow-300 font-conduit text-xl mb-4">
                    INSPIRATIONAL CHAMPIONS
                  </h3>
                  <p className="text-gray-300 font-crimson mb-4">
                    A mera presença de figuras icônicas como essas inspira
                    coragem incrível - ou então obediência aterrorizada - em
                    seus seguidores.
                  </p>
                  <div className="bg-yellow-800/20 border border-yellow-600/30 rounded-lg p-4">
                    <h4 className="text-yellow-200 font-conduit font-semibold mb-2">
                      CRUSADE ABILITY
                    </h4>
                    <p className="text-gray-300 font-crimson text-sm">
                      Enquanto um modelo EPIC HERO com esta Crusade Ability está
                      liderando uma unidade, você pode ignorar qualquer e/ou
                      todas as <HighlightedTerm>Battle Scars</HighlightedTerm>{" "}
                      que essa unidade{" "}
                      <HighlightedTerm>Bodyguard</HighlightedTerm> tem. Além
                      disso, se seu exército de Crusade inclui um ou mais
                      modelos EPIC HERO com esta Crusade Ability, no final da
                      batalha você pode selecionar uma unidade adicional de seu
                      exército de Crusade para ser{" "}
                      <HighlightedTerm>Marked for Greatness</HighlightedTerm>.
                    </p>
                  </div>
                </div>

                {/* Restorative Champions */}
                <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-6">
                  <h3 className="text-green-300 font-conduit text-xl mb-4">
                    RESTORATIVE CHAMPIONS
                  </h3>
                  <p className="text-gray-300 font-crimson mb-4">
                    Seja através de expertise médica, reparos de campo de
                    batalha ou alguns talentos mais esotéricos, esses indivíduos
                    reforçam as fileiras de seus exércitos.
                  </p>
                  <div className="bg-green-800/20 border border-green-600/30 rounded-lg p-4">
                    <h4 className="text-green-200 font-conduit font-semibold mb-2">
                      CRUSADE ABILITY
                    </h4>
                    <p className="text-gray-300 font-crimson text-sm">
                      Se seu exército de Crusade inclui um ou mais modelos EPIC
                      HERO com esta Crusade Ability, durante o passo{" "}
                      <HighlightedTerm>Update Crusade Cards</HighlightedTerm>{" "}
                      você pode re-rolar testes de{" "}
                      <HighlightedTerm>Out of Action</HighlightedTerm> falhos
                      para unidades em seu exército de Crusade.
                    </p>
                  </div>
                </div>

                {/* Subtle Champions */}
                <div className="bg-gray-900/40 border border-gray-600/50 rounded-lg p-6">
                  <h3 className="text-gray-300 font-conduit text-xl mb-4">
                    SUBTLE CHAMPIONS
                  </h3>
                  <p className="text-gray-300 font-crimson mb-4">
                    Por feitiçaria astuta, operações sombrias ardilosas ou
                    outros meios devassos, esses guerreiros influenciam
                    sutilmente o quadro estratégico.
                  </p>
                  <div className="bg-gray-800/20 border border-gray-600/30 rounded-lg p-4">
                    <h4 className="text-gray-200 font-conduit font-semibold mb-2">
                      CRUSADE ABILITY
                    </h4>
                    <p className="text-gray-300 font-crimson text-sm">
                      Se seu exército de Crusade inclui um ou mais modelos EPIC
                      HERO com esta Crusade Ability, no passo{" "}
                      <HighlightedTerm>
                        Determine Attacker and Defender
                      </HighlightedTerm>
                      , você pode re-rolar seu dado ao determinar quem será o
                      Attacker e quem será o Defender.
                    </p>
                  </div>
                </div>

                {/* Logistical Champions */}
                <div className="bg-orange-900/20 border border-orange-700/50 rounded-lg p-6">
                  <h3 className="text-orange-300 font-conduit text-xl mb-4">
                    LOGISTICAL CHAMPIONS
                  </h3>
                  <p className="text-gray-300 font-crimson mb-4">
                    Focando nos mecanismos e grande logística da guerra, esses
                    indivíduos garantem excelente suporte para seus exércitos.
                  </p>
                  <div className="bg-orange-800/20 border border-orange-600/30 rounded-lg p-4">
                    <h4 className="text-orange-200 font-conduit font-semibold mb-2">
                      CRUSADE ABILITY
                    </h4>
                    <p className="text-gray-300 font-crimson text-sm">
                      Se seu exército de Crusade inclui um ou mais modelos EPIC
                      HERO com esta Crusade Ability, durante o passo{" "}
                      <HighlightedTerm>Determine Victor</HighlightedTerm>, se
                      você foi o Victor dessa batalha, após ganhar o{" "}
                      <HighlightedTerm>Victor Bonus</HighlightedTerm> para essa
                      Crusade Mission, você ganha esse Victor bonus uma segunda
                      vez.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900/30 to-gold-900/30 border border-purple-700/50 rounded-lg p-6 text-center mt-8">
                <h3 className="text-purple-300 font-conduit text-xl mb-4">
                  HERÓIS ÉPICOS NA CAMPANHA
                </h3>
                <p className="text-gray-300 font-crimson mb-6">
                  Os Mighty Champions adicionam uma camada estratégica profunda
                  às campanhas Nachmund Gauntlet, com cada tipo de campeão
                  oferecendo vantagens únicas que podem inclinar a balança da
                  guerra.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="bg-red-600/20 text-red-300 px-3 py-1 rounded-full border border-red-600/30">
                    Front-line
                  </span>
                  <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full border border-blue-600/30">
                    Strategic
                  </span>
                  <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full border border-purple-600/30">
                    Nemesis
                  </span>
                  <span className="bg-yellow-600/20 text-yellow-300 px-3 py-1 rounded-full border border-yellow-600/30">
                    Inspirational
                  </span>
                  <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full border border-green-600/30">
                    Restorative
                  </span>
                  <span className="bg-gray-600/20 text-gray-300 px-3 py-1 rounded-full border border-gray-600/30">
                    Subtle
                  </span>
                  <span className="bg-orange-600/20 text-orange-300 px-3 py-1 rounded-full border border-orange-600/30">
                    Logistical
                  </span>
                </div>
              </div>
            </RuleSection>

            <RuleSection title="Crusade Badges" id="crusade-badges">
              <p className="font-crimson">
                Se você participa de uma campanha{" "}
                <HighlightedTerm>Nachmund Gauntlet</HighlightedTerm> como membro
                de uma aliança, você pode ganhar as{" "}
                <HighlightedTerm>Crusade Badges</HighlightedTerm> abaixo. Essas
                insígnias representam suas conquistas e dedicação durante a
                campanha, servindo como reconhecimento permanente de seus feitos
                heróicos no campo de batalha.
              </p>

              <div className="space-y-8 mt-8">
                {/* Guardians Alliance */}
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src="https://wahapedia.ru/wh40k10ed/img/crusade-badges/NG_CrusadeBadge1.png"
                      alt="Guardians Badge"
                      className="w-16 h-16 rounded-lg border border-blue-600/50"
                    />
                    <div>
                      <h3 className="text-blue-300 font-conduit text-2xl mb-2">
                        GUARDIANS ALLIANCE
                      </h3>
                      <p className="text-gray-300 font-crimson">
                        Os protetores de Sangua Terra e defensores do Imperium
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Guardian Adepts */}
                    <div className="bg-blue-800/20 border border-blue-600/30 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src="https://wahapedia.ru/wh40k10ed/img/crusade-badges/NG_CrusadeBadge1.png"
                          alt="Guardian Adepts Badge"
                          className="w-10 h-10 rounded border border-blue-500/50"
                        />
                        <h4 className="text-blue-200 font-conduit text-lg font-semibold">
                          GUARDIAN ADEPTS
                        </h4>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-blue-700/20 rounded p-3">
                          <p className="text-gray-300 font-crimson text-sm">
                            • Ganhou{" "}
                            <HighlightedTerm>cinco ou mais SAP</HighlightedTerm>{" "}
                            durante uma campanha Nachmund Gauntlet.
                          </p>
                        </div>
                        <div className="bg-blue-700/20 rounded p-3">
                          <p className="text-gray-300 font-crimson text-sm">
                            • Termine uma campanha Nachmund Gauntlet onde sua
                            aliança tem o{" "}
                            <HighlightedTerm>
                              Control Level Fortified
                            </HighlightedTerm>{" "}
                            em um ou mais distritos de Sangua Terra.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Guardian Warriors */}
                    <div className="bg-blue-800/20 border border-blue-600/30 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src="https://wahapedia.ru/wh40k10ed/img/crusade-badges/NG_CrusadeBadge2.png"
                          alt="Guardian Warriors Badge"
                          className="w-10 h-10 rounded border border-blue-500/50"
                        />
                        <h4 className="text-blue-200 font-conduit text-lg font-semibold">
                          GUARDIAN WARRIORS
                        </h4>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-blue-700/20 rounded p-3">
                          <p className="text-gray-300 font-crimson text-sm">
                            • Ganhou{" "}
                            <HighlightedTerm>dez ou mais SAP</HighlightedTerm>{" "}
                            durante uma campanha Nachmund Gauntlet.
                          </p>
                        </div>
                        <div className="bg-blue-700/20 rounded p-3">
                          <p className="text-gray-300 font-crimson text-sm">
                            • Termine uma campanha Nachmund Gauntlet onde sua
                            aliança tem o{" "}
                            <HighlightedTerm>
                              Control Level Fortified
                            </HighlightedTerm>{" "}
                            em dois ou mais distritos de Sangua Terra.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Guardian Conquerors */}
                    <div className="bg-blue-800/20 border border-blue-600/30 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src="https://wahapedia.ru/wh40k10ed/img/crusade-badges/NG_CrusadeBadge3.png"
                          alt="Guardian Conquerors Badge"
                          className="w-10 h-10 rounded border border-blue-500/50"
                        />
                        <h4 className="text-blue-200 font-conduit text-lg font-semibold">
                          GUARDIAN CONQUERORS
                        </h4>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-blue-700/20 rounded p-3">
                          <p className="text-gray-300 font-crimson text-sm">
                            • Ganhou{" "}
                            <HighlightedTerm>15 ou mais SAP</HighlightedTerm>{" "}
                            durante uma campanha Nachmund Gauntlet.
                          </p>
                        </div>
                        <div className="bg-blue-700/20 rounded p-3">
                          <p className="text-gray-300 font-crimson text-sm">
                            • Termine uma campanha onde sua aliança tem{" "}
                            <HighlightedTerm>
                              Control Level Fortified
                            </HighlightedTerm>{" "}
                            em três ou mais distritos, e controla o{" "}
                            <HighlightedTerm>
                              Emperor's Voice Grand Battery
                            </HighlightedTerm>
                            .
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Despoilers Alliance */}
                <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src="https://wahapedia.ru/wh40k10ed/img/crusade-badges/NG_CrusadeBadge4.png"
                      alt="Despoilers Badge"
                      className="w-16 h-16 rounded-lg border border-red-600/50"
                    />
                    <div>
                      <h3 className="text-red-300 font-conduit text-2xl mb-2">
                        DESPOILERS ALLIANCE
                      </h3>
                      <p className="text-gray-300 font-crimson">
                        Os conquistadores do Caos que buscam dominar Sangua
                        Terra
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Despoiler Adepts */}
                    <div className="bg-red-800/20 border border-red-600/30 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src="https://wahapedia.ru/wh40k10ed/img/crusade-badges/NG_CrusadeBadge4.png"
                          alt="Despoiler Adepts Badge"
                          className="w-10 h-10 rounded border border-red-500/50"
                        />
                        <h4 className="text-red-200 font-conduit text-lg font-semibold">
                          DESPOILER ADEPTS
                        </h4>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-red-700/20 rounded p-3">
                          <p className="text-gray-300 font-crimson text-sm">
                            • Ganhou{" "}
                            <HighlightedTerm>cinco ou mais SAP</HighlightedTerm>{" "}
                            durante uma campanha Nachmund Gauntlet.
                          </p>
                        </div>
                        <div className="bg-red-700/20 rounded p-3">
                          <p className="text-gray-300 font-crimson text-sm">
                            • Termine uma campanha Nachmund Gauntlet onde sua
                            aliança <HighlightedTerm>controla</HighlightedTerm>{" "}
                            um ou mais distritos de Sangua Terra.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Despoiler Warriors */}
                    <div className="bg-red-800/20 border border-red-600/30 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src="https://wahapedia.ru/wh40k10ed/img/crusade-badges/NG_CrusadeBadge5.png"
                          alt="Despoiler Warriors Badge"
                          className="w-10 h-10 rounded border border-red-500/50"
                        />
                        <h4 className="text-red-200 font-conduit text-lg font-semibold">
                          DESPOILER WARRIORS
                        </h4>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-red-700/20 rounded p-3">
                          <p className="text-gray-300 font-crimson text-sm">
                            • Ganhou{" "}
                            <HighlightedTerm>dez ou mais SAP</HighlightedTerm>{" "}
                            durante uma campanha Nachmund Gauntlet.
                          </p>
                        </div>
                        <div className="bg-red-700/20 rounded p-3">
                          <p className="text-gray-300 font-crimson text-sm">
                            • Termine uma campanha Nachmund Gauntlet onde sua
                            aliança <HighlightedTerm>controla</HighlightedTerm>{" "}
                            dois ou mais distritos de Sangua Terra.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Despoiler Conquerors */}
                    <div className="bg-red-800/20 border border-red-600/30 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src="https://wahapedia.ru/wh40k10ed/img/crusade-badges/NG_CrusadeBadge6.png"
                          alt="Despoiler Conquerors Badge"
                          className="w-10 h-10 rounded border border-red-500/50"
                        />
                        <h4 className="text-red-200 font-conduit text-lg font-semibold">
                          DESPOILER CONQUERORS
                        </h4>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-red-700/20 rounded p-3">
                          <p className="text-gray-300 font-crimson text-sm">
                            • Ganhou{" "}
                            <HighlightedTerm>15 ou mais SAP</HighlightedTerm>{" "}
                            durante uma campanha Nachmund Gauntlet.
                          </p>
                        </div>
                        <div className="bg-red-700/20 rounded p-3">
                          <p className="text-gray-300 font-crimson text-sm">
                            • Termine uma campanha onde sua aliança controla
                            três ou mais distritos, incluindo o{" "}
                            <HighlightedTerm>
                              Praefectus Bastion
                            </HighlightedTerm>{" "}
                            e o{" "}
                            <HighlightedTerm>
                              Accrandor Spaceport
                            </HighlightedTerm>
                            .
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Marauders Alliance */}
                <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src="https://wahapedia.ru/wh40k10ed/img/crusade-badges/NG_CrusadeBadge7.png"
                      alt="Marauders Badge"
                      className="w-16 h-16 rounded-lg border border-purple-600/50"
                    />
                    <div>
                      <h3 className="text-purple-300 font-conduit text-2xl mb-2">
                        MARAUDERS ALLIANCE
                      </h3>
                      <p className="text-gray-300 font-crimson">
                        Os oportunistas que traçam seu próprio caminho na guerra
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Marauder Adepts */}
                    <div className="bg-purple-800/20 border border-purple-600/30 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src="https://wahapedia.ru/wh40k10ed/img/crusade-badges/NG_CrusadeBadge7.png"
                          alt="Marauder Adepts Badge"
                          className="w-10 h-10 rounded border border-purple-500/50"
                        />
                        <h4 className="text-purple-200 font-conduit text-lg font-semibold">
                          MARAUDER ADEPTS
                        </h4>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-purple-700/20 rounded p-3">
                          <p className="text-gray-300 font-crimson text-sm">
                            • Ganhou{" "}
                            <HighlightedTerm>cinco ou mais SAP</HighlightedTerm>{" "}
                            durante uma campanha Nachmund Gauntlet.
                          </p>
                        </div>
                        <div className="bg-purple-700/20 rounded p-3">
                          <p className="text-gray-300 font-crimson text-sm">
                            • Termine uma campanha onde sua aliança tem{" "}
                            <HighlightedTerm>
                              Establishing Foothold
                            </HighlightedTerm>{" "}
                            (ou melhor) em três distritos de Sangua Terra.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Marauder Warriors */}
                    <div className="bg-purple-800/20 border border-purple-600/30 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src="https://wahapedia.ru/wh40k10ed/img/crusade-badges/NG_CrusadeBadge8.png"
                          alt="Marauder Warriors Badge"
                          className="w-10 h-10 rounded border border-purple-500/50"
                        />
                        <h4 className="text-purple-200 font-conduit text-lg font-semibold">
                          MARAUDER WARRIORS
                        </h4>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-purple-700/20 rounded p-3">
                          <p className="text-gray-300 font-crimson text-sm">
                            • Ganhou{" "}
                            <HighlightedTerm>dez ou mais SAP</HighlightedTerm>{" "}
                            durante uma campanha Nachmund Gauntlet.
                          </p>
                        </div>
                        <div className="bg-purple-700/20 rounded p-3">
                          <p className="text-gray-300 font-crimson text-sm">
                            • Termine uma campanha onde sua aliança tem{" "}
                            <HighlightedTerm>
                              Establishing Foothold
                            </HighlightedTerm>{" "}
                            (ou melhor) em quatro distritos de Sangua Terra.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Marauder Conquerors */}
                    <div className="bg-purple-800/20 border border-purple-600/30 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src="https://wahapedia.ru/wh40k10ed/img/crusade-badges/NG_CrusadeBadge9.png"
                          alt="Marauder Conquerors Badge"
                          className="w-10 h-10 rounded border border-purple-500/50"
                        />
                        <h4 className="text-purple-200 font-conduit text-lg font-semibold">
                          MARAUDER CONQUERORS
                        </h4>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-purple-700/20 rounded p-3">
                          <p className="text-gray-300 font-crimson text-sm">
                            • Ganhou{" "}
                            <HighlightedTerm>15 ou mais SAP</HighlightedTerm>{" "}
                            durante uma campanha Nachmund Gauntlet.
                          </p>
                        </div>
                        <div className="bg-purple-700/20 rounded p-3">
                          <p className="text-gray-300 font-crimson text-sm">
                            • Termine uma campanha onde sua aliança tem{" "}
                            <HighlightedTerm>
                              Establishing Foothold
                            </HighlightedTerm>{" "}
                            (ou melhor) em quatro distritos, e controla o{" "}
                            <HighlightedTerm>
                              Tower of Murmuration
                            </HighlightedTerm>
                            .
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gold-900/30 to-silver-900/30 border border-gold-700/50 rounded-lg p-6 text-center mt-8">
                <h3 className="text-gold-300 font-conduit text-xl mb-4">
                  CONQUISTE SUA GLÓRIA
                </h3>
                <p className="text-gray-300 font-crimson mb-6">
                  As Crusade Badges servem como lembrança permanente de suas
                  conquistas heróicas durante as campanhas Nachmund Gauntlet.
                  Cada insígnia representa marcos específicos de dedicação,
                  estratégia e valor no campo de batalha.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="bg-bronze-600/20 text-bronze-300 px-3 py-1 rounded-full border border-bronze-600/30">
                    5+ SAP → Adepts
                  </span>
                  <span className="bg-silver-600/20 text-silver-300 px-3 py-1 rounded-full border border-silver-600/30">
                    10+ SAP → Warriors
                  </span>
                  <span className="bg-gold-600/20 text-gold-300 px-3 py-1 rounded-full border border-gold-600/30">
                    15+ SAP → Conquerors
                  </span>
                </div>
              </div>
            </RuleSection>

            {/* Battle Traits Section */}
            <RuleSection title="Battle Traits" id="battle-traits">
              {/* Introduction */}
              <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-conduit text-cyan-400 uppercase mb-4">
                  Battle Traits
                </h2>

                <div className="space-y-4 text-gray-300">
                  <p>
                    <HighlightedTerm>Battle Traits</HighlightedTerm> representam
                    as novas habilidades e capacidades que suas unidades
                    desenvolvem através de experiência em combate. Cada vez que
                    uma unidade ganha uma Battle Trait, selecione uma tabela de
                    Battle Traits adequada ao tipo da unidade e role um D6 para
                    determinar aleatoriamente qual Battle Trait aquela unidade
                    ganhou, ou escolha a Battle Trait que você acha que conta a
                    melhor narrativa.
                  </p>

                  <p>
                    Uma unidade pode ter mais de uma Battle Trait, mas não pode
                    ter a mesma Battle Trait mais de uma vez. Se um resultado
                    duplicado for rolado, role novamente até obter um resultado
                    diferente.
                  </p>
                </div>
              </div>

              {/* Rules Summary */}
              <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4 mb-8">
                <h3 className="text-cyan-300 font-semibold mb-2">
                  📋 Como Funcionam:
                </h3>
                <ul className="text-sm text-gray-300 space-y-1 list-disc pl-6">
                  <li>
                    Ganhas ao atingir certos ranks ou através de Requisitions
                    específicas
                  </li>
                  <li>
                    Cada Battle Trait aumenta os{" "}
                    <HighlightedTerm>Crusade points</HighlightedTerm> da unidade
                    em +1
                  </li>
                  <li>
                    Anote cada Battle Trait no{" "}
                    <HighlightedTerm>Crusade card</HighlightedTerm> da unidade
                  </li>
                  <li>
                    Battle Traits são permanentes e não podem ser removidas
                    (exceto em circunstâncias especiais)
                  </li>
                  <li>
                    Uma unidade pode ter múltiplas Battle Traits diferentes
                  </li>
                </ul>
              </div>

              {/* Type Filter */}
              <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-conduit text-cyan-400 uppercase mb-4">
                  Filtrar por Tipo de Unidade
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {traitTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`p-3 border rounded-lg transition-colors ${
                        selectedType === type.id
                          ? type.color + " text-white"
                          : "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-cyan-600"
                      }`}
                    >
                      <span className="font-semibold">{type.name}</span>
                      <div className="text-xs mt-1">
                        {traitsData.filter((t) => t.type === type.id).length}{" "}
                        traits
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Battle Traits List */}
              <div className="space-y-6 mb-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-conduit text-cyan-400 uppercase">
                    Battle Traits: {getTypeLabel(selectedType)} (
                    {filteredTraits.length})
                  </h3>

                  <div className="grid grid-cols-1 gap-4">
                    {filteredTraits.map((trait, index) =>
                      renderTraitCard(trait, index)
                    )}
                  </div>
                </div>
              </div>

              {/* Nachmund Specific Rules */}
              <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-conduit text-cyan-400 uppercase mb-4">
                  Battle Traits no Nachmund Gauntlet
                </h3>

                <div className="space-y-4 text-gray-300">
                  <p>
                    Durante campanhas Nachmund Gauntlet, algumas Battle Traits
                    ganham relevância especial devido ao sistema de{" "}
                    <HighlightedTerm>Tactical Reserves</HighlightedTerm> e{" "}
                    <HighlightedTerm>Surgical Deep Strike</HighlightedTerm>:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4">
                      <h4 className="text-cyan-300 font-semibold mb-2">
                        🎯 Traits de Deep Strike:
                      </h4>
                      <ul className="text-sm space-y-1 list-disc pl-4">
                        <li>
                          <strong>VETERANOS DE ZONA:</strong> Re-role testes de
                          Surgical Deep Strike
                        </li>
                        <li>
                          <strong>INSERÇÃO PRECISA:</strong> +2 para testes de
                          Surgical Deep Strike
                        </li>
                        <li>
                          <strong>MESTRES DO ATAQUE:</strong> Ganha Deep Strike
                          e +1 aos testes
                        </li>
                        <li>
                          <strong>CHEGADA FURTIVA:</strong> Proteção contra
                          Overwatch
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-4">
                      <h4 className="text-purple-300 font-semibold mb-2">
                        ⚡ Traits Táticas:
                      </h4>
                      <ul className="text-sm space-y-1 list-disc pl-4">
                        <li>
                          <strong>DEFENSORES DE ZONA:</strong> Dificulta
                          Surgical Deep Strike inimigo
                        </li>
                        <li>
                          <strong>DESCIDA FLAMEJANTE:</strong> Rapid Ingress
                          grátis + dano em Deep Strike
                        </li>
                        <li>
                          <strong>ALÇAR VÔO:</strong> Reposicionamento para
                          Reserves
                        </li>
                        <li>
                          <strong>PÉS LIGEIROS:</strong> Movimento aprimorado e
                          Actions
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                <h4 className="text-yellow-300 font-semibold mb-2">
                  💡 Notas Importantes:
                </h4>
                <ul className="text-sm text-gray-300 space-y-1 list-disc pl-6">
                  <li>
                    Battle Traits específicas de facção podem ser encontradas
                    nos Codexes respectivos
                  </li>
                  <li>
                    O Campaign Master pode criar Battle Traits personalizadas
                    para narrativas específicas
                  </li>
                  <li>
                    <HighlightedTerm>Front-line Champions</HighlightedTerm>{" "}
                    podem compartilhar Battle Traits com suas unidades
                  </li>
                  <li>
                    Algumas missões ou eventos especiais podem conceder Battle
                    Traits únicas
                  </li>
                </ul>
              </div>
            </RuleSection>

            {/* Crusade Relics Section */}
            <CrusadeRelicsSection />

            {/* Reservas Táticas */}
            <RuleSection title="Reservas Táticas" id="tactical-reserves">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Para jogar uma partida Crusade de Warhammer 40,000, você precisará reunir um exército Crusade. Para isso, siga a sequência abaixo.
                </p>

                <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
                  <h3 className="text-xl font-conduit text-cyan-400 mb-4">1. Selecione o Tamanho da Batalha</h3>
                  <p className="text-gray-300 mb-4">
                    Selecione um dos seguintes tamanhos de batalha; isso determinará o número total de pontos que cada jogador terá para construir seu exército Crusade e, consequentemente, quanto tempo a batalha durará.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4">
                      <h4 className="text-yellow-400 font-conduit font-semibold mb-2">INCURSION (1000 PONTOS)</h4>
                      <p className="text-sm text-gray-300 mb-2">Duração até 2 horas</p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-cyan-700/50">
                              <th className="text-left p-2">FORMATION STANCE</th>
                              <th className="text-center p-2">ALPHA</th>
                              <th className="text-center p-2">BETA</th>
                              <th className="text-center p-2">GAMMA</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-cyan-700/50">
                              <td className="p-2">Points of Primary wave</td>
                              <td className="text-center p-2">400</td>
                              <td className="text-center p-2">500</td>
                              <td className="text-center p-2">600</td>
                            </tr>
                            <tr>
                              <td className="p-2">Points per Reinforcement wave</td>
                              <td className="text-center p-2">300</td>
                              <td className="text-center p-2">250</td>
                              <td className="text-center p-2">200</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4">
                      <h4 className="text-yellow-400 font-conduit font-semibold mb-2">STRIKE FORCE (2000 PONTOS)</h4>
                      <p className="text-sm text-gray-300 mb-2">Duração até 3 horas</p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-cyan-700/50">
                              <th className="text-left p-2">FORMATION STANCE</th>
                              <th className="text-center p-2">ALPHA</th>
                              <th className="text-center p-2">BETA</th>
                              <th className="text-center p-2">GAMMA</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-cyan-700/50">
                              <td className="p-2">Points of Primary wave</td>
                              <td className="text-center p-2">900</td>
                              <td className="text-center p-2">1000</td>
                              <td className="text-center p-2">1100</td>
                            </tr>
                            <tr>
                              <td className="p-2">Points per Reinforcement wave</td>
                              <td className="text-center p-2">550</td>
                              <td className="text-center p-2">500</td>
                              <td className="text-center p-2">450</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4">
                      <h4 className="text-yellow-400 font-conduit font-semibold mb-2">ONSLAUGHT (3000 PONTOS)</h4>
                      <p className="text-sm text-gray-300 mb-2">Duração até 4 horas</p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-cyan-700/50">
                              <th className="text-left p-2">FORMATION STANCE</th>
                              <th className="text-center p-2">ALPHA</th>
                              <th className="text-center p-2">BETA</th>
                              <th className="text-center p-2">GAMMA</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-cyan-700/50">
                              <td className="p-2">Points of Primary wave</td>
                              <td className="text-center p-2">1400</td>
                              <td className="text-center p-2">1500</td>
                              <td className="text-center p-2">1600</td>
                            </tr>
                            <tr>
                              <td className="p-2">Points per Reinforcement wave</td>
                              <td className="text-center p-2">800</td>
                              <td className="text-center p-2">750</td>
                              <td className="text-center p-2">700</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
                  <h3 className="text-xl font-conduit text-cyan-400 mb-4">2. Comece seu Army Roster</h3>
                  <p className="text-gray-300">
                    Os detalhes do seu exército Crusade devem ser registrados em um Army Roster; isso pode ser registrado no aplicativo Warhammer 40,000, em um Army Roster em branco ou em um pedaço de papel. Os jogadores devem mostrar seu Army Roster finalizado ao oponente antes da batalha começar.
                  </p>
                </div>

                <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
                  <h3 className="text-xl font-conduit text-cyan-400 mb-4">3. Selecione a Facção do Exército</h3>
                  <p className="text-gray-300">
                    Anote em seu Army Roster uma palavra-chave de Facção para ser sua facção de Exército.
                  </p>
                </div>

                <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
                  <h3 className="text-xl font-conduit text-cyan-400 mb-4">4. Selecione Regras de Detachment</h3>
                  <p className="text-gray-300">
                    Anote em seu Army Roster um conjunto de regras de Detachment para seu exército Crusade. Algumas regras de Detachment listam unidades que você deve ou não incluir em seu exército Crusade; você deve se conformar a todas essas regras ao construir seu exército Crusade.
                  </p>
                </div>

                <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
                  <h3 className="text-xl font-conduit text-cyan-400 mb-4">5. Selecione Unidades</h3>
                  <p className="text-gray-300 mb-4">
                    Selecione todas as unidades de sua força Crusade que você deseja incluir em seu exército Crusade. Subtraia o valor em pontos de cada unidade do total permitido para o tamanho da sua batalha.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Você só pode incluir uma unidade em seu exército Crusade se:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Essa unidade tiver a palavra-chave de Facção que você escolheu para seu exército Crusade no passo 3.</li>
                    <li>Você tiver pontos suficientes restantes.</li>
                    <li>Seu exército Crusade não contiver já três unidades com o mesmo nome de datasheet que essa unidade - ou seis unidades com o mesmo nome de datasheet que essa unidade se for uma unidade BATTLELINE ou DEDICATED TRANSPORT.</li>
                  </ul>
                  <p className="text-gray-300 mt-4">
                    Seu exército Crusade deve incluir pelo menos uma unidade CHARACTER. Seu exército Crusade não pode incluir o mesmo EPIC HERO mais de uma vez.
                  </p>
                </div>

                <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
                  <h3 className="text-xl font-conduit text-cyan-400 mb-4">6. Selecione Warlord</h3>
                  <p className="text-gray-300">
                    Selecione um modelo CHARACTER de seu exército Crusade para ser seu Warlord - este será o líder de seu exército Crusade - e anote isso em seu Army Roster. Seu Warlord ganha a palavra-chave WARLORD.
                  </p>
                </div>
              </div>
            </RuleSection>

            {/* Other sections truncated for brevity... */}
          </div>
        </div>

        {/* Floating Index and Back to Top */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
          {/* Index Button with Hover Menu */}
          <div className="relative">
            {/* Index Dropdown */}
            <div
              className={`absolute bottom-full right-0 mb-2 w-64 bg-gray-900/95 border border-cyan-700/50 rounded-lg shadow-2xl backdrop-blur-sm transition-all duration-300 transform ${
                isIndexOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0"
              }`}
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-4 border-b border-cyan-700/50 pb-2">
                  <h3 className="text-cyan-400 font-conduit text-lg">
                    Índice - Nachmund Gauntlet
                  </h3>
                  {/* Close button for mobile */}
                  <button
                    onClick={() => setIsIndexOpen(false)}
                    className="md:hidden text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  <a
                    href="#campaign"
                    onClick={() => setIsIndexOpen(false)}
                    className="block text-sm text-gray-300 font-crimson hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                  >
                    → Campanha
                  </a>
                  <a
                    href="#battle-traits"
                    onClick={() => setIsIndexOpen(false)}
                    className="block text-sm text-gray-300 font-crimson hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                  >
                    → Battle Traits
                  </a>
                  <a
                    href="#crusade-relics"
                    onClick={() => setIsIndexOpen(false)}
                    className="block text-sm text-gray-300 font-crimson hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                  >
                    → Crusade Relics
                  </a>
                  <a
                    href="#tactical-reserves"
                    onClick={() => setIsIndexOpen(false)}
                    className="block text-sm text-gray-300 font-crimson hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                  >
                    → Reservas Táticas
                  </a>
                  <a
                    href="#agendas"
                    onClick={() => setIsIndexOpen(false)}
                    className="block text-sm text-gray-300 font-crimson hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                  >
                    → Agendas
                  </a>
                  <a
                    href="#missions"
                    onClick={() => setIsIndexOpen(false)}
                    className="block text-sm text-gray-300 font-crimson hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                  >
                    → Missões
                  </a>
                  <a
                    href="#flowchart"
                    onClick={() => setIsIndexOpen(false)}
                    className="block text-sm text-gray-300 font-crimson hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                  >
                    → Fluxograma
                  </a>
                </div>
              </div>
            </div>

            {/* Index Button */}
            <button
              onClick={() => setIsIndexOpen(!isIndexOpen)}
              className="bg-cyan-900/80 hover:bg-cyan-800/80 border border-cyan-700 rounded-full p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 group"
              title="Índice das Seções"
            >
              <svg
                className="w-6 h-6 text-cyan-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="bg-purple-900/80 hover:bg-purple-800/80 border border-purple-700 rounded-full p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
            title="Voltar ao Topo"
          >
            <svg
              className="w-6 h-6 text-purple-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>

        {/* Back to Top Button - mobile only since desktop has sidebar */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 xl:hidden bg-purple-900/80 hover:bg-purple-800/80 border border-purple-700 rounded-full p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
          title="Voltar ao Topo"
        >
          <svg
            className="w-6 h-6 text-purple-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </CrusadeLayout>
  );
}
