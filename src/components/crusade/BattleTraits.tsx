import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import HighlightedTerm from "@/components/crusade/HighlightedTerm";
import DiceIcon from "@/components/crusade/DiceIcon";
import { traitsData } from "@/data/traits.database";

interface BattleTrait {
  id: string;
  type: string;
  description: string;
  title: string;
  game_effect: string;
  units_awarded: string[];
}

const BattleTraits: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("all");

  const traitTypes = [
    {
      id: "all",
      name: "Todos os Tipos",
      color: "bg-cyan-600/20 border-cyan-400",
    },
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

  // Organizar traits por tipo
  const organizeTraitsByType = () => {
    const typeOrder = [
      "infantry",
      "mounted",
      "jumppack",
      "beast",
      "monstervehicle",
      "any",
    ];
    const groupedTraits: { [key: string]: BattleTrait[] } = {};

    // Inicializar grupos
    typeOrder.forEach((type) => {
      groupedTraits[type] = traitsData.filter((trait) => trait.type === type);
    });

    return groupedTraits;
  };

  const filteredTraits =
    selectedType === "all"
      ? traitsData.sort((a, b) => {
          const typeOrder = [
            "infantry",
            "mounted",
            "jumppack",
            "beast",
            "monstervehicle",
            "any",
          ];
          return typeOrder.indexOf(a.type) - typeOrder.indexOf(b.type);
        })
      : traitsData.filter((trait) => trait.type === selectedType);

  const groupedTraits = organizeTraitsByType();

  const renderTraitCard = (
    trait: BattleTrait,
    index: number,
    isGrouped: boolean = false
  ) => {
    const diceNumber = isGrouped
      ? (index % 6) + 1
      : selectedType === "all"
      ? null
      : (index % 6) + 1;

    return (
      <div
        key={trait.id}
        className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6 space-y-4"
      >
        <div className="flex items-start gap-4">
          {diceNumber && <DiceIcon number={diceNumber} />}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h4 className="text-xl font-tech text-cyan-400 uppercase">
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

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-6">
        <h2 className="text-2xl font-tech text-cyan-400 uppercase mb-4">
          Battle Traits
        </h2>

        <div className="space-y-4 text-gray-300">
          <p>
            <HighlightedTerm>Battle Traits</HighlightedTerm> representam as
            novas habilidades e capacidades que suas unidades desenvolvem
            através de experiência em combate. Cada vez que uma unidade ganha
            uma Battle Trait, selecione uma tabela de Battle Traits adequada ao
            tipo da unidade e role um D6 para determinar aleatoriamente qual
            Battle Trait aquela unidade ganhou, ou escolha a Battle Trait que
            você acha que conta a melhor narrativa.
          </p>

          <p>
            Uma unidade pode ter mais de uma Battle Trait, mas não pode ter a
            mesma Battle Trait mais de uma vez. Se um resultado duplicado for
            rolado, role novamente até obter um resultado diferente.
          </p>
        </div>
      </div>

      {/* Rules Summary */}
      <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4">
        <h3 className="text-cyan-300 font-semibold mb-2">📋 Como Funcionam:</h3>
        <ul className="text-sm text-gray-300 space-y-1 list-disc pl-6">
          <li>
            Ganhas ao atingir certos ranks ou através de Requisitions
            específicas
          </li>
          <li>
            Cada Battle Trait aumenta os{" "}
            <HighlightedTerm>Crusade points</HighlightedTerm> da unidade em +1
          </li>
          <li>
            Anote cada Battle Trait no{" "}
            <HighlightedTerm>Crusade card</HighlightedTerm> da unidade
          </li>
          <li>
            Battle Traits são permanentes e não podem ser removidas (exceto em
            circunstâncias especiais)
          </li>
          <li>Uma unidade pode ter múltiplas Battle Traits diferentes</li>
        </ul>
      </div>

      {/* Type Filter */}
      <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-6">
        <h3 className="text-xl font-tech text-cyan-400 uppercase mb-4">
          Filtrar por Tipo de Unidade
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
                {type.id === "all"
                  ? `${traitsData.length} traits`
                  : `${
                      traitsData.filter((t) => t.type === type.id).length
                    } traits`}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Battle Traits List */}
      <div className="space-y-6">
        {selectedType === "all" ? (
          // Mostrar agrupado por tipo
          <div className="space-y-8">
            <h3 className="text-xl font-tech text-cyan-400 uppercase">
              Todas as Battle Traits por Tipo ({traitsData.length} total)
            </h3>

            {Object.entries(groupedTraits).map(([type, traits]) => {
              if (traits.length === 0) return null;

              return (
                <div key={type} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <h4 className="text-2xl font-tech text-cyan-400 uppercase">
                      {getTypeLabel(type)}
                    </h4>
                    <Badge
                      variant="outline"
                      className={`font-bold ${getTypeColor(type)}`}
                    >
                      {traits.length} traits
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 gap-4 pl-4 border-l-2 border-cyan-600/30">
                    {traits.map((trait, index) =>
                      renderTraitCard(trait, index, true)
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Mostrar filtrado por tipo específico
          <div className="space-y-4">
            <h3 className="text-xl font-tech text-cyan-400 uppercase">
              Battle Traits: {getTypeLabel(selectedType)} (
              {filteredTraits.length})
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {filteredTraits.map((trait, index) =>
                renderTraitCard(trait, index, false)
              )}
            </div>
          </div>
        )}
      </div>

      {/* Nachmund Specific Rules */}
      <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-6">
        <h3 className="text-xl font-tech text-cyan-400 uppercase mb-4">
          Battle Traits no Nachmund Gauntlet
        </h3>

        <div className="space-y-4 text-gray-300">
          <p>
            Durante campanhas Nachmund Gauntlet, algumas Battle Traits ganham
            relevância especial devido ao sistema de{" "}
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
                  <strong>VETERANOS DE ZONA:</strong> Re-role testes de Surgical
                  Deep Strike
                </li>
                <li>
                  <strong>INSERÇÃO PRECISA:</strong> +2 para testes de Surgical
                  Deep Strike
                </li>
                <li>
                  <strong>MESTRES DO ATAQUE:</strong> Ganha Deep Strike e +1 aos
                  testes
                </li>
                <li>
                  <strong>CHEGADA FURTIVA:</strong> Proteção contra Overwatch
                </li>
              </ul>
            </div>

            <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-4">
              <h4 className="text-purple-300 font-semibold mb-2">
                ⚡ Traits Táticas:
              </h4>
              <ul className="text-sm space-y-1 list-disc pl-4">
                <li>
                  <strong>DEFENSORES DE ZONA:</strong> Dificulta Surgical Deep
                  Strike inimigo
                </li>
                <li>
                  <strong>DESCIDA FLAMEJANTE:</strong> Rapid Ingress grátis +
                  dano em Deep Strike
                </li>
                <li>
                  <strong>ALÇAR VÔO:</strong> Reposicionamento para Reserves
                </li>
                <li>
                  <strong>PÉS LIGEIROS:</strong> Movimento aprimorado e Actions
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
            Battle Traits específicas de facção podem ser encontradas nos
            Codexes respectivos
          </li>
          <li>
            O Campaign Master pode criar Battle Traits personalizadas para
            narrativas específicas
          </li>
          <li>
            <HighlightedTerm>Front-line Champions</HighlightedTerm> podem
            compartilhar Battle Traits com suas unidades
          </li>
          <li>
            Algumas missões ou eventos especiais podem conceder Battle Traits
            únicas
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BattleTraits;
