import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import HighlightedTerm from "@/components/crusade/HighlightedTerm";
import {
  strategicGoalsData,
  campaignMechanics,
  campaignPhaseInfo,
} from "@/data/strategic-goals.database";

interface StrategicGoal {
  id: string;
  title: string;
  phase: number;
  alliance_restriction: string | null;
  description: string;
  requirements: {
    condition: string;
  };
  rewards: {
    effect: string;
    description: string;
  };
}

const StrategicGoals: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(1);
  const [selectedAlliance, setSelectedAlliance] = useState<string>("all");

  const getAllianceColor = (alliance: string | null): string => {
    const colorMap: Record<string, string> = {
      Guardiões: "bg-blue-600/20 border-blue-400 text-blue-300",
      Usurpadores: "bg-red-600/20 border-red-400 text-red-300",
      Saqueadores: "bg-purple-600/20 border-purple-400 text-purple-300",
    };
    return alliance
      ? colorMap[alliance] || "bg-gray-600/20 border-gray-400 text-gray-300"
      : "bg-gray-600/20 border-gray-400 text-gray-300";
  };

  const getPhaseColor = (phase: number): string => {
    const colorMap: Record<number, string> = {
      1: "bg-green-600/20 border-green-400 text-green-300",
      2: "bg-yellow-600/20 border-yellow-400 text-yellow-300",
      3: "bg-red-600/20 border-red-400 text-red-300",
    };
    return colorMap[phase] || "bg-gray-600/20 border-gray-400 text-gray-300";
  };

  const filteredGoals = strategicGoalsData.filter((goal) => {
    const phaseMatch = goal.phase === selectedPhase;
    const allianceMatch =
      selectedAlliance === "all" ||
      goal.alliance_restriction === selectedAlliance ||
      goal.alliance_restriction === null;
    return phaseMatch && allianceMatch;
  });

  const renderGoalCard = (goal: StrategicGoal) => {
    return (
      <div
        key={goal.id}
        className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6 space-y-4"
      >
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h4 className="text-xl font-tech text-cyan-400 uppercase mb-2">
              {goal.title}
            </h4>
            <div className="flex items-center gap-3 mb-3">
              <Badge
                variant="outline"
                className={`font-bold ${getPhaseColor(goal.phase)}`}
              >
                Fase {goal.phase}
              </Badge>
              {goal.alliance_restriction && (
                <Badge
                  variant="outline"
                  className={`font-bold ${getAllianceColor(
                    goal.alliance_restriction
                  )}`}
                >
                  {goal.alliance_restriction}
                </Badge>
              )}
              {!goal.alliance_restriction && (
                <Badge
                  variant="outline"
                  className="font-bold bg-gray-600/20 border-gray-400 text-gray-300"
                >
                  Todas as Alianças
                </Badge>
              )}
            </div>
            <div className="text-gray-300 italic mb-4">{goal.description}</div>
          </div>

          <div className="text-right">
            <div className="text-lg font-tech text-cyan-400">
              {goal.rewards.effect}
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-orange-900/20 border border-orange-700/50 rounded-lg p-4">
          <h5 className="text-orange-300 font-semibold mb-2 uppercase">
            📋 Requisitos:
          </h5>
          <div className="text-gray-300 text-sm">
            {goal.requirements.condition}
          </div>
        </div>

        {/* Rewards */}
        <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
          <h5 className="text-green-300 font-semibold mb-2 uppercase">
            🏆 Recompensa:
          </h5>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-green-200">Efeito:</span>
              <span className="text-green-300 font-bold">
                {goal.rewards.effect}
              </span>
            </div>
            <div>
              <span className="font-semibold text-green-200">Descrição:</span>
              <div className="text-gray-300 mt-1">
                {goal.rewards.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-6">
        <h2 className="text-2xl font-tech text-cyan-400 uppercase mb-4">
          Strategic Goals
        </h2>

        <div className="space-y-4 text-gray-300">
          <p>{campaignPhaseInfo.strategicGoals}</p>

          <p>{campaignPhaseInfo.strategicAssetPoints}</p>
        </div>
      </div>

      {/* Campaign Overview */}
      <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-6">
        <h3 className="text-xl font-tech text-cyan-400 uppercase mb-4">
          Como Funciona a Campanha
        </h3>

        <div className="text-gray-300 text-sm leading-relaxed">
          {campaignPhaseInfo.overview}
        </div>
      </div>

      {/* Battle Points Table */}
      <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-6">
        <h3 className="text-xl font-tech text-cyan-400 uppercase mb-4">
          Battle Points Ganhos
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-800/50">
                <th className="border border-cyan-900/50 p-3 text-left text-cyan-400 font-tech">
                  Tamanho da Batalha
                </th>
                <th className="border border-cyan-900/50 p-3 text-center text-cyan-400 font-tech">
                  Vitória
                </th>
                <th className="border border-cyan-900/50 p-3 text-center text-cyan-400 font-tech">
                  Empate
                </th>
                <th className="border border-cyan-900/50 p-3 text-center text-cyan-400 font-tech">
                  Derrota
                </th>
              </tr>
            </thead>
            <tbody>
              {campaignMechanics.battlePointsTable.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-900/30" : ""}
                >
                  <td className="border border-cyan-900/50 p-3 text-gray-300">
                    {row.battleSize}
                  </td>
                  <td className="border border-cyan-900/50 p-3 text-center text-gray-300">
                    {row.win}
                  </td>
                  <td className="border border-cyan-900/50 p-3 text-center text-gray-300">
                    {row.draw}
                  </td>
                  <td className="border border-cyan-900/50 p-3 text-center text-gray-300">
                    {row.loss}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-sm text-gray-300">
          {campaignPhaseInfo.battlePoints}
        </div>
      </div>

      {/* Control Level Rewards */}
      <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-6">
        <h3 className="text-xl font-tech text-cyan-400 uppercase mb-4">
          Recompensas de Control Level
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-800/50">
                <th className="border border-cyan-900/50 p-3 text-left text-cyan-400 font-tech">
                  Fase da Campanha
                </th>
                <th className="border border-cyan-900/50 p-3 text-center text-cyan-400 font-tech">
                  1º (Mais Battle Points)
                </th>
                <th className="border border-cyan-900/50 p-3 text-center text-cyan-400 font-tech">
                  2º (Segundo Mais Battle Points)
                </th>
                <th className="border border-cyan-900/50 p-3 text-center text-cyan-400 font-tech">
                  3º (Terceiro Mais Battle Points)
                </th>
              </tr>
            </thead>
            <tbody>
              {campaignMechanics.controlLevelRewards.map((phase, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-900/30" : ""}
                >
                  <td className="border border-cyan-900/50 p-3 text-gray-300">
                    Fase {phase.phase}
                  </td>
                  <td className="border border-cyan-900/50 p-3 text-center text-gray-300">
                    +{phase.first} Control Level
                  </td>
                  <td className="border border-cyan-900/50 p-3 text-center text-gray-300">
                    +{phase.second} Control Level
                  </td>
                  <td className="border border-cyan-900/50 p-3 text-center text-gray-300">
                    +{phase.third} Control Level
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 space-y-2">
          <h4 className="text-cyan-300 font-semibold">
            Status de Control Level:
          </h4>
          <ul className="text-sm text-gray-300 space-y-1">
            {campaignMechanics.controlLevelDescriptions.map((desc, index) => (
              <li key={index}>
                <span className="text-cyan-400 font-semibold">
                  {desc.level}:
                </span>{" "}
                {desc.status}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-6">
        <h3 className="text-xl font-tech text-cyan-400 uppercase mb-4">
          Filtros
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Phase Filter */}
          <div>
            <h4 className="text-cyan-300 font-semibold mb-3">Por Fase:</h4>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((phase) => (
                <button
                  key={phase}
                  onClick={() => setSelectedPhase(phase)}
                  className={`p-3 border rounded-lg transition-colors text-sm ${
                    selectedPhase === phase
                      ? getPhaseColor(phase)
                      : "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-cyan-600"
                  }`}
                >
                  Fase {phase} (
                  {strategicGoalsData.filter((g) => g.phase === phase).length})
                </button>
              ))}
            </div>
          </div>

          {/* Alliance Filter */}
          <div>
            <h4 className="text-cyan-300 font-semibold mb-3">Por Aliança:</h4>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setSelectedAlliance("all")}
                className={`p-3 border rounded-lg transition-colors text-sm ${
                  selectedAlliance === "all"
                    ? "bg-cyan-600/20 border-cyan-400 text-cyan-300"
                    : "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-cyan-600"
                }`}
              >
                Todas (
                {
                  strategicGoalsData.filter((g) => g.phase === selectedPhase)
                    .length
                }
                )
              </button>
              {["Guardiões", "Usurpadores", "Saqueadores"].map((alliance) => (
                <button
                  key={alliance}
                  onClick={() => setSelectedAlliance(alliance)}
                  className={`p-3 border rounded-lg transition-colors text-sm ${
                    selectedAlliance === alliance
                      ? getAllianceColor(alliance)
                      : "bg-gray-800/50 border-gray-700 text-gray-300 hover:border-cyan-600"
                  }`}
                >
                  {alliance} (
                  {
                    strategicGoalsData.filter(
                      (g) =>
                        g.phase === selectedPhase &&
                        (g.alliance_restriction === alliance ||
                          g.alliance_restriction === null)
                    ).length
                  }
                  )
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Goals List */}
      <div className="space-y-6">
        <h3 className="text-xl font-tech text-cyan-400 uppercase">
          Strategic Goals - Fase {selectedPhase} ({filteredGoals.length})
        </h3>

        <div className="grid grid-cols-1 gap-6">
          {filteredGoals.map(renderGoalCard)}
        </div>
      </div>

      {/* End of Phase Information */}
      <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-6">
        <h3 className="text-xl font-tech text-cyan-400 uppercase mb-4">
          Final da Fase e Recompensas
        </h3>

        <div className="text-gray-300 text-sm leading-relaxed space-y-4">
          <div>{campaignPhaseInfo.endOfPhase}</div>
        </div>
      </div>

      {/* End of Campaign */}
      <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-6">
        <h3 className="text-xl font-tech text-red-400 uppercase mb-4">
          Final da Campanha
        </h3>

        <div className="text-gray-300 text-sm leading-relaxed">
          {campaignPhaseInfo.endOfCampaign}
        </div>
      </div>

      {/* Campaign Master Tips */}
      <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-6">
        <h3 className="text-xl font-tech text-yellow-400 uppercase mb-4">
          Exemplo de Resolução
        </h3>

        <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            <strong>Exemplo:</strong> No final da primeira fase de uma campanha
            Nachmund Gauntlet, os Guardiões têm um total de 12 Battle points e 6
            Strategic Asset points; os Usurpadores têm 8 Battle points e 8
            Strategic Asset points; os Saqueadores 6 Battle points e 9 Strategic
            Asset points. Os Guardiões coletam suas recompensas de Battle points
            primeiro, já que têm mais, aumentando seu Control Level sobre cada
            site estratégico onde ficaram em primeiro por 2, e cada site
            estratégico onde ficaram em segundo por 1. Os Usurpadores então
            coletam suas recompensas de Battle Point, aumentando seu Control
            Level sobre sites estratégicos da mesma maneira. Finalmente os
            Saqueadores, que têm menos Battle points desta fase, coletam suas
            recompensas de Battle points. Após todas as recompensas de Battle
            Point terem sido concedidas, os Saqueadores, que têm mais SAP,
            coletam suas recompensas de Strategic Goals primeiro (assumindo que
            atenderam aos requisitos). Os Usurpadores então fazem o mesmo e
            finalmente, os Guardiões, com menos SAP, fazem o mesmo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StrategicGoals;
