import React from "react";

interface RankTableProps {
  className?: string;
  showIcons?: boolean;
}

const RankTable: React.FC<RankTableProps> = ({
  className = "",
  showIcons = false,
}) => {
  const ranks = [
    {
      name: "Battle-ready",
      xp: "0-5 XP",
      description:
        "Unidades recém-formadas, aprendendo os fundamentos do combate",
      icon: null,
      restriction: "",
    },
    {
      name: "Blooded",
      xp: "6-15 XP",
      description: "Veteranos testados em combate, com experiência prática",
      icon: "https://wahapedia.ru/wh40k10ed/img/Rank_Blooded.png",
      restriction: "",
    },
    {
      name: "Battle-hardened",
      xp: "16-30 XP",
      description:
        "Guerreiros experientes, endurecidos por múltiplas campanhas",
      icon: "https://wahapedia.ru/wh40k10ed/img/Rank_BattleHardened.png",
      restriction: "",
    },
    {
      name: "Heroic",
      xp: "31-50 XP",
      description: "Líderes lendários de renome galáctico",
      icon: "https://wahapedia.ru/wh40k10ed/img/Rank_Heroic.png",
      restriction: "Apenas CHARACTER",
    },
    {
      name: "Legendary",
      xp: "51+ XP",
      description: "Figuras míticas cujos feitos ecoam pela eternidade",
      icon: "https://wahapedia.ru/wh40k10ed/img/Rank_Legendary.png",
      restriction: "Apenas CHARACTER",
    },
  ];

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-900/50">
            {showIcons && (
              <th className="border border-cyan-900/50 p-3 text-left text-cyan-400 font-tech">
                Ícone
              </th>
            )}
            <th className="border border-cyan-900/50 p-3 text-left text-cyan-400 font-tech">
              Rank
            </th>
            <th className="border border-cyan-900/50 p-3 text-left text-cyan-400 font-tech">
              XP Necessário
            </th>
            <th className="border border-cyan-900/50 p-3 text-left text-cyan-400 font-tech">
              Descrição
            </th>
            <th className="border border-cyan-900/50 p-3 text-left text-cyan-400 font-tech">
              Restrições
            </th>
          </tr>
        </thead>
        <tbody>
          {ranks.map((rank, index) => (
            <tr key={index} className={index % 2 === 1 ? "bg-gray-900/30" : ""}>
              {showIcons && (
                <td className="border border-cyan-900/50 p-3">
                  {rank.icon ? (
                    <img
                      src={rank.icon}
                      alt={`${rank.name} rank icon`}
                      className="w-8 h-8 filter brightness-0 invert"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-gray-700 rounded border border-gray-600 flex items-center justify-center">
                      <span className="text-xs text-gray-500">-</span>
                    </div>
                  )}
                </td>
              )}
              <td className="border border-cyan-900/50 p-3 text-cyan-300 font-semibold">
                {rank.name}
              </td>
              <td className="border border-cyan-900/50 p-3 text-gray-300">
                {rank.xp}
              </td>
              <td className="border border-cyan-900/50 p-3 text-gray-300">
                {rank.description}
              </td>
              <td className="border border-cyan-900/50 p-3 text-gray-300">
                {rank.restriction && (
                  <span className="text-yellow-400 font-semibold">
                    {rank.restriction}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RankTable;
