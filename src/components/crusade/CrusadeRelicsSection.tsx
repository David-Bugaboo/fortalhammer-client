import { useState } from "react";
import { relicsData } from "@/data/relic.database";
import { Badge } from "@/components/ui/badge";
import HighlightedTerm from "@/components/crusade/HighlightedTerm";
import RuleSection from "@/components/crusade/RuleSection";

const rarityOrder = [
  {
    key: "Artificer",
    label: "Artificer Relics",
    color: "text-cyan-400",
    btn: "bg-cyan-600/20 border-cyan-400",
  },
  {
    key: "Antiquity",
    label: "Antiquity Relics",
    color: "text-purple-400",
    btn: "bg-purple-600/20 border-purple-400",
  },
  {
    key: "Legendary",
    label: "Legendary Relics",
    color: "text-yellow-400",
    btn: "bg-yellow-600/20 border-yellow-400",
  },
];

export default function CrusadeRelicsSection() {
  const [selectedRarity, setSelectedRarity] = useState("Artificer");
  const rarity = rarityOrder.find((r) => r.key === selectedRarity)!;
  const relics = relicsData.filter((r) => r.rarity === selectedRarity);

  return (
    <RuleSection title="Crusade Relics" id="crusade-relics">
      <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-conduit text-cyan-400 uppercase mb-4">
          Crusade Relics
        </h2>
        <div className="space-y-4 text-gray-300">
          <p>
            <HighlightedTerm>Crusade Relics</HighlightedTerm> são artefatos
            poderosos que podem ser recuperados durante campanhas Nachmund
            Gauntlet. Unidades do seu exército de Crusade podem ganhar as
            seguintes relíquias, divididas em três categorias de raridade.
          </p>
        </div>
        {/* Filtro de raridade */}
        <div className="flex gap-2 mt-6 mb-2">
          {rarityOrder.map((r) => (
            <button
              key={r.key}
              onClick={() => setSelectedRarity(r.key)}
              className={`px-4 py-2 rounded-lg font-conduit border transition-all duration-300 text-sm font-semibold
                ${
                  selectedRarity === r.key
                    ? r.btn + " text-white shadow-lg"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-700"
                }
              `}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-12">
        <div>
          <h3 className={`text-xl font-conduit font-bold mb-6 ${rarity.color}`}>
            {rarity.label}
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {relics.map((relic) => (
              <div
                key={relic.id}
                className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6 space-y-4"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-conduit text-cyan-400 uppercase">
                        {relic.title}
                      </h4>
                      <Badge
                        variant="outline"
                        className={
                          relic.rarity === "Artificer"
                            ? "bg-cyan-500/20 text-cyan-400 border-cyan-500/50"
                            : relic.rarity === "Antiquity"
                            ? "bg-purple-500/20 text-purple-400 border-purple-500/50"
                            : relic.rarity === "Legendary"
                            ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/50"
                            : "bg-gray-700/20 text-gray-300 border-gray-500/50"
                        }
                      >
                        {relic.rarity}
                      </Badge>
                    </div>
                    <div className="text-gray-300 italic mb-3">
                      {relic.description}
                    </div>
                  </div>
                </div>
                <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4">
                  <h5 className="text-cyan-300 font-semibold mb-2 uppercase">
                    Efeito de Jogo:
                  </h5>
                  <div className="text-sm text-gray-300">
                    {relic.game_effect}
                  </div>
                </div>
                {relic.units_awarded && relic.units_awarded.length > 0 && (
                  <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-3">
                    <h5 className="text-yellow-300 font-semibold mb-2 text-sm">
                      Unidades Premiadas:
                    </h5>
                    <div className="text-xs text-gray-300">
                      {relic.units_awarded.join(", ")}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </RuleSection>
  );
}
