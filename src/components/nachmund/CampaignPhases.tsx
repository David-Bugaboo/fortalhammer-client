import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import HighlightedTerm from "@/components/crusade/HighlightedTerm";
import {
  campaignPhasesData,
  campaignTurnStructure,
  phaseTransitionEvents,
} from "@/data/campaign-phases.database";
import Link from "next/link";
import RuleSection from "@/components/crusade/RuleSection";

interface CampaignPhase {
  id: string;
  name: string;
  subtitle: string;
  duration: string;
  description: string;
  phase_rules: Array<{
    title: string;
    description: string;
  }>;
  special_events: Array<{
    trigger: string;
    name: string;
    description: string;
  }>;
  strategic_objectives: string[];
  victory_conditions: {
    major: string;
    minor: string;
  };
  lore: string;
}

const CampaignPhases: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<string>("phase-1-landing");
  const [showTurnStructure, setShowTurnStructure] = useState<boolean>(false);

  const getPhaseColor = (phaseId: string): string => {
    const colorMap: Record<string, string> = {
      "phase-1-landing": "bg-green-600/20 border-green-400 text-green-300",
      "phase-2-escalation":
        "bg-yellow-600/20 border-yellow-400 text-yellow-300",
      "phase-3-endgame": "bg-red-600/20 border-red-400 text-red-300",
    };
    return colorMap[phaseId] || "bg-gray-600/20 border-gray-400 text-gray-300";
  };

  const selectedPhaseData = campaignPhasesData.find(
    (phase) => phase.id === selectedPhase
  );

  const renderPhaseCard = (phase: CampaignPhase) => {
    return (
      <div className="space-y-6">
        {/* Phase Header */}
        <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-tech text-cyan-400 uppercase">
                {phase.name}
              </h3>
              <p className="text-lg text-gray-400 italic">{phase.subtitle}</p>
            </div>
            <Badge
              variant="outline"
              className={`font-bold ${getPhaseColor(phase.id)}`}
            >
              {phase.duration}
            </Badge>
          </div>

          <p className="text-gray-300 mb-4">{phase.description}</p>

          <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
            <div className="text-sm text-gray-300 italic leading-relaxed">
              {phase.lore}
            </div>
          </div>
        </div>

        {/* Phase Rules */}
        <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6">
          <h4 className="text-xl font-tech text-blue-400 uppercase mb-4">
            Regras da Fase
          </h4>

          <div className="space-y-4">
            {phase.phase_rules.map((rule, index) => (
              <div
                key={index}
                className="bg-blue-900/30 border border-blue-700/30 rounded-lg p-4"
              >
                <h5 className="text-blue-300 font-semibold mb-2">
                  {rule.title}
                </h5>
                <p className="text-sm text-gray-300">{rule.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Events */}
        <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-6">
          <h4 className="text-xl font-tech text-purple-400 uppercase mb-4">
            Eventos Especiais
          </h4>

          <div className="space-y-4">
            {phase.special_events.map((event, index) => (
              <div
                key={index}
                className="bg-purple-900/30 border border-purple-700/30 rounded-lg p-4"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Badge
                    variant="outline"
                    className="bg-purple-600/20 border-purple-400 text-purple-300"
                  >
                    {event.trigger}
                  </Badge>
                  <h5 className="text-purple-300 font-semibold">
                    {event.name}
                  </h5>
                </div>
                <p className="text-sm text-gray-300">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Objectives */}
        <div className="bg-orange-900/20 border border-orange-700/50 rounded-lg p-6">
          <h4 className="text-xl font-tech text-orange-400 uppercase mb-4">
            Objetivos Estratégicos
          </h4>

          <ul className="space-y-2 text-sm text-gray-300">
            {phase.strategic_objectives.map((objective, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Victory Conditions */}
        <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-6">
          <h4 className="text-xl font-tech text-green-400 uppercase mb-4">
            Condições de Vitória
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-900/30 border border-green-700/30 rounded-lg p-4">
              <h5 className="text-green-300 font-semibold mb-2">
                🏆 Vitória Completa:
              </h5>
              <p className="text-sm text-gray-300">
                {phase.victory_conditions.major}
              </p>
            </div>

            <div className="bg-green-900/30 border border-green-700/30 rounded-lg p-4">
              <h5 className="text-green-300 font-semibold mb-2">
                📈 Vitória Parcial:
              </h5>
              <p className="text-sm text-gray-300">
                {phase.victory_conditions.minor}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <RuleSection title="Fases da Campanha">
        <p>
          Durante uma fase da campanha, jogadores de alianças opostas batalharão
          entre si para ganhar Battle Points (BP) para sua aliança. O Campaign
          Master tem algumas opções sobre como os jogadores são emparelhados
          para os jogos. Eles podem deixar os jogadores organizarem os jogos por
          si mesmos, com desafios lançados e honra em jogo. Alternativamente,
          pode ser apropriado introduzir mais estrutura nos emparelhamentos. Por
          exemplo, um cronograma de jogos garantirá que todos tenham uma
          quantidade igual de jogos, ou, em campanhas com um grande número de
          jogadores, cada aliança pode ser dividida em subgrupos menores que são
          então emparelhados entre si para tornar a organização dos jogos ainda
          mais simples. No entanto, antes que qualquer batalha em uma fase seja
          travada, cada aliança deve primeiro selecionar um{" "}
          <Link
            href="/strategic-goals"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Strategic Goal
          </Link>
          .
        </p>
      </RuleSection>

      <RuleSection title="Strategic Goals">
        <p>
          Strategic Goals representam uma variedade de estratagemas, intrigas e
          manobras que sua aliança pode tentar alcançar além da vitória militar,
          e ao fazê-lo, ganhar uma série de vantagens estratégicas e recompensas
          durante cada fase da campanha, atribuindo Strategic Asset points (SAP)
          em uma tentativa de alcançar a vitória.
        </p>
      </RuleSection>

      <RuleSection title="Strategic Asset Points">
        <p>
          Algumas Agendas nesta publicação fornecem aos jogadores oportunidades
          de ganhar Strategic Asset points (SAP), que representam a alocação dos
          recursos de uma aliança em sua tentativa de alcançar o controle sobre
          os sites estratégicos de Sangua Terra.
        </p>

        <p>
          No início de cada fase da campanha, cada aliança deve selecionar um
          Strategic Goal que se aplica a toda a aliança para aquela fase. Para
          este processo, recomendamos eleger um Warmaster para coordenar cada
          aliança, especialmente em campanhas maiores. Uma vez que cada aliança
          tenha selecionado seu Strategic Goal, eles devem informar o Campaign
          Master de sua escolha. Estas escolhas são mantidas em segredo - a
          escolha de cada aliança é conhecida apenas pelo Campaign Master e
          pelos outros membros de sua própria aliança.
        </p>

        <p>
          Cada Strategic Goal tem um conjunto de requisitos; estes exigirão que
          os jogadores em sua aliança ganhem SAP durante suas batalhas, o que
          pode ser realizado de várias maneiras. Após cada batalha, cada jogador
          deve atribuir todos os SAP que ganhou daquela batalha a um dos quatro
          sites estratégicos de Sangua Terra, e informar o Campaign Master desta
          decisão.
        </p>

        <p>
          No final de cada fase da campanha, quando as alianças estão recebendo
          suas recompensas, o Campaign Master revelará o número total de SAP que
          cada aliança atribuiu a cada um dos quatro sites estratégicos de
          Sangua Terra, e verificará se aquela aliança atendeu aos requisitos
          listados em seu Strategic Goal; se tiverem, eles também receberão o
          Bônus do Strategic Goal associado.
        </p>
      </RuleSection>

      <RuleSection title="Battle Points">
        <p>
          Cada vez que uma batalha é travada, sua aliança ganha um número de
          Battle points baseado no tamanho da batalha e qual foi o resultado,
          conforme mostrado na tabela abaixo.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-900/50">
                <th className="border border-gray-700 p-2 text-left">
                  Tamanho da Batalha
                </th>
                <th className="border border-gray-700 p-2 text-center">
                  Vitória
                </th>
                <th className="border border-gray-700 p-2 text-center">
                  Empate
                </th>
                <th className="border border-gray-700 p-2 text-center">
                  Derrota
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-700 p-2">Incursion</td>
                <td className="border border-gray-700 p-2 text-center">2</td>
                <td className="border border-gray-700 p-2 text-center">2</td>
                <td className="border border-gray-700 p-2 text-center">1</td>
              </tr>
              <tr className="bg-gray-900/30">
                <td className="border border-gray-700 p-2">Strike Force</td>
                <td className="border border-gray-700 p-2 text-center">3</td>
                <td className="border border-gray-700 p-2 text-center">2</td>
                <td className="border border-gray-700 p-2 text-center">1</td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">Onslaught</td>
                <td className="border border-gray-700 p-2 text-center">4</td>
                <td className="border border-gray-700 p-2 text-center">3</td>
                <td className="border border-gray-700 p-2 text-center">2</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4">
          Após cada batalha, cada jogador deve atribuir todos os Battle points
          que ganhou daquela batalha a um dos quatro sites estratégicos de
          Sangua Terra; cada jogador deve informar o Campaign Master de sua
          escolha de site estratégico e quantos Battle points está atribuindo a
          ele.
        </p>
      </RuleSection>

      <RuleSection title="Fim da Fase e Recompensas">
        <p>
          Quando a fase da campanha chega ao fim, as alianças receberão
          recompensas dependendo do número combinado de Battle points que
          atribuíram a cada site estratégico durante aquela fase, conforme
          mostrado na tabela abaixo:
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-900/50">
                <th className="border border-gray-700 p-2 text-left">
                  Fase da Campanha
                </th>
                <th className="border border-gray-700 p-2 text-center">
                  1º (Mais Battle Points)
                </th>
                <th className="border border-gray-700 p-2 text-center">
                  2º (Segundo Mais Battle Points)
                </th>
                <th className="border border-gray-700 p-2 text-center">
                  3º (Terceiro Mais Battle Points)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-700 p-2">Fase 1</td>
                <td className="border border-gray-700 p-2 text-center">
                  +2 Nível de Controle
                </td>
                <td className="border border-gray-700 p-2 text-center">
                  +1 Nível de Controle
                </td>
                <td className="border border-gray-700 p-2 text-center">
                  +0 Nível de Controle
                </td>
              </tr>
              <tr className="bg-gray-900/30">
                <td className="border border-gray-700 p-2">Fase 2</td>
                <td className="border border-gray-700 p-2 text-center">
                  +2 Nível de Controle
                </td>
                <td className="border border-gray-700 p-2 text-center">
                  +1 Nível de Controle
                </td>
                <td className="border border-gray-700 p-2 text-center">
                  +1 Nível de Controle
                </td>
              </tr>
              <tr>
                <td className="border border-gray-700 p-2">Fase 3</td>
                <td className="border border-gray-700 p-2 text-center">
                  +3 Nível de Controle
                </td>
                <td className="border border-gray-700 p-2 text-center">
                  +2 Nível de Controle
                </td>
                <td className="border border-gray-700 p-2 text-center">
                  +1 Nível de Controle
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4">
          Para cada site estratégico, a aliança com mais Battle points
          atribuídos aquele site estratégico fica em primeiro lugar e recebe a
          recompensa do primeiro lugar, a aliança com o segundo maior número de
          Battle points atribuídos aquele site estratégico fica em segundo lugar
          e recebe a recompensa do 2º lugar, e - se sua campanha tiver três
          alianças - a aliança com o terceiro maior número de Battle points
          atribuídos aquele site estratégico recebe a recompensa do 3º lugar.
          Repita isso para todos os quatro sites estratégicos de Sangua Terra.
        </p>

        <p>
          No caso de um empate pelo 1º lugar, todas as alianças empatadas
          recebem a recompensa do 2º lugar e qualquer aliança não empatada
          recebe a recompensa do 3º lugar. No caso de um empate pelo 2º lugar,
          as alianças empatadas recebem a recompensa do 3º lugar. À medida que
          as fases da campanha progridem, as recompensas para cada uma aumentam,
          garantindo que os vencedores finais não sejam decididos até o final da
          campanha.
        </p>

        <p>
          A menos que explicitamente declarado de outra forma, a ordem em que as
          alianças recebem suas recompensas de Nível de Controle começa com a
          aliança que tem mais Battle points no total, seguida pela aliança com
          o segundo maior número de Battle points no total, e finalmente a
          aliança com o menor número de Battle points no total. Ao coletar suas
          recompensas dos Battle points, aquela aliança resolve todas as
          recompensas ao mesmo tempo, antes da próxima aliança resolver suas
          recompensas.
        </p>

        <p>
          Após todas as recompensas de Nível de Controle das alianças terem sido
          concedidas, todas as alianças que alcançaram o Strategic Goal que
          selecionaram no início da fase da campanha receberão as recompensas
          adicionais de seus objetivos completados.
        </p>

        <p>
          A menos que explicitamente declarado de outra forma, a ordem em que as
          alianças recebem suas recompensas de Strategic Goals começa com a
          aliança que tem mais SAP no total, seguida pela aliança com o segundo
          maior número de SAP no total, e finalmente a aliança com o menor
          número de SAP no total. Ao coletar suas recompensas dos SAP, aquela
          aliança resolve todas as recompensas ao mesmo tempo, antes da próxima
          aliança resolver suas recompensas.
        </p>

        <p>
          Em ambos os casos, no caso de um empate ou recompensas que seriam
          resolvidas ao mesmo tempo, o Campaign Master deve determinar
          aleatoriamente qual aliança resolve suas recompensas primeiro. Às
          vezes, as alianças terão que tomar decisões ao resolver suas
          recompensas - mais frequentemente ao selecionar quais sites
          estratégicos aumentar seu Nível de Controle. Para este processo,
          recomendamos eleger um Warmaster para coordenar cada aliança,
          especialmente em campanhas maiores.
        </p>

        <p>
          Quando a próxima fase da campanha começa, os Battle points e Strategic
          Asset points de cada aliança são resetados para 0, colocando as
          alianças em pé de igualdade para a próxima fase da campanha.
        </p>

        <div className="mt-6 p-4 bg-gray-900/30 border border-cyan-900/50 rounded-lg">
          <h4 className="text-cyan-400 font-semibold mb-2">Exemplo:</h4>
          <p className="text-sm">
            No final da primeira fase de uma campanha Nachmund Gauntlet, os
            Guardiões têm um total de 12 Battle points e 6 Strategic Asset
            points; os Saqueadores têm 8 Battle points e 8 Strategic Asset
            points; os Usurpadores 6 Battle points e 9 Strategic Asset points.
            Os Guardiões coletam suas recompensas de Battle points primeiro,
            pois têm mais, aumentando seu Nível de Controle sobre cada site
            estratégico onde ficaram em primeiro por 2, e cada site estratégico
            onde ficaram em segundo por 1. Os Saqueadores então coletam suas
            recompensas de Battle Points, aumentando seu Nível de Controle sobre
            sites estratégicos da mesma forma. Finalmente os Usurpadores, que
            têm menos Battle points nesta fase, coletam suas recompensas dos
            Battle points. Após todas as recompensas de Battle Point terem sido
            concedidas, os Usurpadores, que têm mais SAP, coletam suas
            recompensas de Strategic Goals primeiro (assumindo que atenderam
            seus requisitos). Os Saqueadores então fazem o mesmo e finalmente,
            os Guardiões, com menos SAP, fazem o mesmo.
          </p>
        </div>
      </RuleSection>

      <RuleSection title="Fim da Campanha">
        <p>
          Após todas as alianças terem recebido suas recompensas no final da
          fase 3 da campanha, a campanha termina. A aliança com mais CVP toma o
          controle da cidade capital de Sangua Terra e é coroada vitoriosa. Se
          houver um empate pelo maior número de CVP, e uma das alianças
          empatadas controlar mais sites estratégicos que as outras alianças
          empatadas, então aquela aliança arranca o controle de Urbanosprawl
          Alpha e é a vitoriosa. Se isso também for um empate, então a aliança
          com mais SAP no final da fase 3 é a vitoriosa. Se mesmo isso for um
          empate, então a campanha termina em um empate sangrento, e a batalha
          por Sangua Terra continua...
        </p>
      </RuleSection>

  

      {/* Campaign Master Tips */}
      <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-6">
        <h3 className="text-xl font-tech text-yellow-400 uppercase mb-4">
          Dicas para o Campaign Master
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
          <div>
            <h4 className="text-yellow-300 font-semibold mb-2">
              ⚡ Gestão de Fase:
            </h4>
            <ul className="space-y-1 list-disc pl-4">
              <li>Monitore o progresso de cada aliança regularmente</li>
              <li>Ajuste eventos especiais conforme a narrativa</li>
              <li>Mantenha registro detalhado de CVP e SAP</li>
              <li>Comunique mudanças de fase claramente</li>
            </ul>
          </div>

          <div>
            <h4 className="text-yellow-300 font-semibold mb-2">
              📋 Balanceamento:
            </h4>
            <ul className="space-y-1 list-disc pl-4">
              <li>Observe se alguma aliança está dominando</li>
              <li>Use eventos especiais para rebalancear</li>
              <li>Encoraje colaboração dentro das alianças</li>
              <li>Adapte regras conforme necessário</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignPhases;
