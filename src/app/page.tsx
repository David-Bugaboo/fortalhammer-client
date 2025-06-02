"use client";
import {
  Skull,
  Target,
  Sword,
  Zap,
  Shield,
  Users,
  Crown,
  AlertTriangle,
  Book,
  Settings,
  TrendingUp,
  Star,
  Map,
  ChevronRight,
} from "lucide-react";
import RuleSection from "@/components/crusade/RuleSection";
import CrusadeLayout from "@/components/crusade/CrusadeLayout";
import HighlightedTerm from "@/components/crusade/HighlightedTerm";
import Link from "next/link";
import { useState, useEffect } from "react";
import TableOfContents from "@/components/ui/TableOfContents";

export default function HomePage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showIndex, setShowIndex] = useState(false);

  // Set page title
  useEffect(() => {
    document.title = "Warhammer Fortaleza - Portal Crusade 40k";
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

  const battlePhases = [
    {
      number: 1,
      name: "Command Phase",
      icon: Crown,
      description: "Ganhe Command Points e resolva regras de Command Phase",
      color: "bg-yellow-900/20 border-yellow-700/50 text-yellow-400",
    },
    {
      number: 2,
      name: "Movement Phase",
      icon: TrendingUp,
      description: "Mova suas unidades pelo campo de batalha",
      color: "bg-blue-900/20 border-blue-700/50 text-blue-400",
    },
    {
      number: 3,
      name: "Shooting Phase",
      icon: Target,
      description: "Ataque inimigos com armas à distância",
      color: "bg-green-900/20 border-green-700/50 text-green-400",
    },
    {
      number: 4,
      name: "Charge Phase",
      icon: Zap,
      description: "Carregue contra o inimigo para combate corpo a corpo",
      color: "bg-orange-900/20 border-orange-700/50 text-orange-400",
    },
    {
      number: 5,
      name: "Fight Phase",
      icon: Sword,
      description: "Lute em combate corpo a corpo",
      color: "bg-red-900/20 border-red-700/50 text-red-400",
    },
  ];

  const weaponAbilities = [
    {
      name: "ANTI",
      description: "Ferida crítica contra keywords específicas em rolagem x+",
    },
    { name: "ASSAULT", description: "Pode atirar mesmo se a unidade Avançou" },
    {
      name: "BLAST",
      description: "+1 Ataque para cada 5 modelos na unidade alvo",
    },
    {
      name: "DEVASTATING WOUNDS",
      description: "Feridas críticas ignoram testes de salvação",
    },
    { name: "HEAVY", description: "+1 para acertar se a unidade ficou parada" },
    {
      name: "IGNORES COVER",
      description: "Alvo não pode ter Benefício de Cobertura",
    },
    { name: "INDIRECT FIRE", description: "Pode atacar alvos não visíveis" },
    {
      name: "LETHAL HITS",
      description: "Acertos críticos ferem automaticamente",
    },
    { name: "PISTOL", description: "Pode atirar mesmo em Engagement Range" },
    {
      name: "RAPID FIRE X",
      description: "Ataques +x contra alvos em metade do alcance",
    },
    {
      name: "SUSTAINED HITS X",
      description: "Acertos críticos geram x ataques adicionais",
    },
    { name: "TORRENT", description: "Ataques acertam automaticamente" },
    { name: "TWIN-LINKED", description: "Pode re-rolar testes de Ferimento" },
  ];

  const universalAbilities = [
    {
      name: "DEADLY DEMISE",
      description: "Quando destruído, cause ferimentos mortais em 6+ no D6",
    },
    {
      name: "DEEP STRIKE",
      description: 'Posicione em Reservas e apareça 9" longe de inimigos',
    },
    {
      name: "FEEL NO PAIN",
      description: "Ignore ferimentos em rolagem x+ no D6",
    },
    {
      name: "FIGHTS FIRST",
      description: "Luta na etapa Fights First da Fight Phase",
    },
    {
      name: "INFILTRATORS",
      description: 'Posicione 9" longe da zona de deployment inimiga',
    },
    {
      name: "LEADER",
      description: "CHARACTER pode liderar uma Bodyguard unit",
    },
    {
      name: "LONE OPERATIVE",
      description: 'Só pode ser alvo à distância dentro de 12"',
    },
    {
      name: "SCOUTS",
      description: 'Movimento Normal de x" antes do primeiro turno',
    },
  ];

  const mainSections = [
    { id: "#quick-start", label: "Início Rápido" },
    { id: "#basic-rules", label: "Regras Básicas" },
    { id: "#phases", label: "Fases do Jogo" },
    { id: "#movement", label: "Movimento" },
    { id: "#shooting", label: "Tiro" },
    { id: "#charge", label: "Carga" },
    { id: "#fight", label: "Combate" },
    { id: "#morale", label: "Moral" },
    { id: "#stratagems", label: "Estratagemas" },
  ];

  const pageSections = [
    { id: "#battle-phases", title: "Fases da Batalha" },
    { id: "#command-phase", title: "Command Phase" },
    { id: "#movement-phase", title: "Movement Phase" },
    { id: "#shooting-phase", title: "Shooting Phase" },
    { id: "#charge-phase", title: "Charge Phase" },
    { id: "#fight-phase", title: "Fight Phase" },
    { id: "#wound-table", title: "Tabela de Ferimento" },
    { id: "#weapon-abilities", title: "Habilidades de Armas" },
    { id: "#universal-abilities", title: "Habilidades Universais" },
    { id: "#core-stratagems", title: "Core Stratagems" },
  ];

  return (
    <CrusadeLayout
      title="Warhammer 40,000 - Quick Start Guide"
      description="Guia de início rápido com regras fundamentais para começar a jogar Warhammer 40,000"
      breadcrumbs={[{ label: "Quick Start Guide", href: "/" }]}
    >
      <TableOfContents
        items={pageSections.map((section) => ({ ...section, level: 1 }))}
      />

      <div className="max-w-7xl mx-auto space-y-8 pb-8">
        {/* Hero Section */}
        <div className="text-center py-8 border-b border-cyan-900/50">
          <div className="flex justify-center items-center gap-4 mb-4">
            <Skull className="w-12 h-12 text-cyan-400" />
            <h1 className="text-5xl font-tech text-cyan-400 uppercase tracking-wider">
              Quick Start Guide
            </h1>
            <Skull className="w-12 h-12 text-cyan-400" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Este guia vai te ajudar a começar jogos de Warhammer 40,000. Para
            mais informações, veja as Core Rules. Batalhas de Warhammer 40,000
            são jogadas em uma série de battle rounds. Em cada um, ambos os
            jogadores têm um turno, dividido em diferentes fases que devem ser
            completadas em ordem.
          </p>
        </div>

        {/* Battle Phases Overview */}
        <RuleSection title="Fases da Batalha" id="battle-phases">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            {battlePhases.map((phase) => {
              const IconComponent = phase.icon;
              return (
                <div
                  key={phase.number}
                  className={`${phase.color} rounded-lg p-4 text-center`}
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="bg-cyan-600 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      {phase.number}
                    </span>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{phase.name}</h3>
                  <p className="text-xs text-gray-300">{phase.description}</p>
                </div>
              );
            })}
          </div>
        </RuleSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Phase Details - Left Column */}
          <div className="space-y-6">
            <RuleSection title="1. Command Phase" id="command-phase">
              <div className="space-y-4">
                <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                  <h4 className="text-yellow-300 font-semibold mb-2">
                    Command:
                  </h4>
                  <p className="text-sm">
                    Primeiro, ambos os jogadores ganham 1{" "}
                    <HighlightedTerm>Command point</HighlightedTerm>
                    (pode ser gasto em Stratagems em diferentes pontos do battle
                    round). Então resolva quaisquer regras que você tenha que
                    são usadas em sua Command phase.
                  </p>
                </div>
                <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                  <h4 className="text-red-300 font-semibold mb-2">
                    Battle-shock:
                  </h4>
                  <p className="text-sm">
                    Para cada unidade em seu exército que perdeu mais da metade
                    de seus modelos (ou mais da metade de seus ferimentos para
                    unidades de modelo único), role 2D6. Se o resultado for
                    menor que o LD (Leadership) mostrado na datasheet da
                    unidade, a unidade fica{" "}
                    <HighlightedTerm>Battle-shocked</HighlightedTerm> até o
                    início de sua próxima Command phase. Unidades Battle-shocked
                    têm OC (Objective Control) de 0, e não podem ser afetadas
                    por Stratagems amigos.
                  </p>
                </div>
              </div>
            </RuleSection>

            <RuleSection title="2. Movement Phase" id="movement-phase">
              <div className="space-y-4">
                <p>
                  Unidades que <strong>não estão</strong> dentro de 1\" de
                  modelos inimigos (Engagement Range) podem ficar paradas
                  (Remain Stationary), fazer um movimento Normal ou fazer um
                  movimento Advance:
                </p>

                <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                  <h4 className="text-blue-300 font-semibold mb-2">
                    Normal moves:
                  </h4>
                  <p className="text-sm">
                    Mova a unidade uma distância em polegadas até sua
                    característica MV (Move), sem terminar dentro de Engagement
                    Range de modelos inimigos.
                  </p>
                </div>

                <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-4">
                  <h4 className="text-green-300 font-semibold mb-2">
                    Advance moves:
                  </h4>
                  <p className="text-sm">
                    Como acima, mas role um D6 e adicione o resultado ao Move da
                    unidade. Unidades que Avançam não podem atirar neste turno
                    (exceto com armas Assault) e não podem carregar neste turno.
                  </p>
                </div>

                <p>
                  Unidades que <strong>estão</strong> dentro de Engagement Range
                  de modelos inimigos só podem Remain Stationary ou Fall Back:
                </p>

                <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-4">
                  <h4 className="text-purple-300 font-semibold mb-2">
                    Fall Back moves:
                  </h4>
                  <p className="text-sm">
                    Como um movimento Normal, mas unidades que Fall Back não
                    podem atirar ou carregar neste turno.
                  </p>
                </div>
              </div>
            </RuleSection>

            <RuleSection title="3. Shooting Phase" id="shooting-phase">
              <p className="mb-4">
                Uma unidade por vez, seus modelos podem disparar suas armas à
                distância contra unidades inimigas que estão dentro do alcance e
                visíveis. Modelos com mais de uma arma à distância podem atirar
                cada uma em um alvo diferente, mas você deve declarar todos os
                alvos ao mesmo tempo.
              </p>

              <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-4 mb-4">
                <h4 className="text-cyan-300 font-semibold mb-3">
                  Exemplo de Estatísticas de Armas:
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-gray-800/50">
                        <th className="border border-gray-600 p-2 text-left">
                          RANGED WEAPONS
                        </th>
                        <th className="border border-gray-600 p-2">RANGE</th>
                        <th className="border border-gray-600 p-2">A</th>
                        <th className="border border-gray-600 p-2">BS</th>
                        <th className="border border-gray-600 p-2">S</th>
                        <th className="border border-gray-600 p-2">AP</th>
                        <th className="border border-gray-600 p-2">D</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-600 p-2">
                          Bolt pistol [pistol]
                        </td>
                        <td className="border border-gray-600 p-2 text-center">
                          12\"
                        </td>
                        <td className="border border-gray-600 p-2 text-center">
                          1
                        </td>
                        <td className="border border-gray-600 p-2 text-center">
                          3+
                        </td>
                        <td className="border border-gray-600 p-2 text-center">
                          4
                        </td>
                        <td className="border border-gray-600 p-2 text-center">
                          0
                        </td>
                        <td className="border border-gray-600 p-2 text-center">
                          1
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-3 space-y-1 text-xs text-gray-300">
                  <p>
                    <strong>Range:</strong> Quão longe uma arma pode atirar
                  </p>
                  <p>
                    <strong>A (Attacks):</strong> Quantidade de tiros ou golpes,
                    número de D6 que você rola
                  </p>
                  <p>
                    <strong>BS (Ballistic Skill):</strong> Quão preciso são seus
                    ataques
                  </p>
                  <p>
                    <strong>S (Strength):</strong> Força necessária para ferir o
                    alvo
                  </p>
                  <p>
                    <strong>AP (Armour Penetration):</strong> Efetividade contra
                    armadura
                  </p>
                  <p>
                    <strong>D (Damage):</strong> Dano infligido se falhar no
                    teste de salvação
                  </p>
                </div>
              </div>

              <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4">
                <h4 className="text-cyan-300 font-semibold mb-3">
                  Fazendo Ataques (Sequência):
                </h4>
                <ol className="space-y-2 text-sm list-decimal pl-4">
                  <li>
                    <strong>HIT ROLL:</strong> Role um D6 por ataque, tentando
                    igualar ou superar o BS
                  </li>
                  <li>
                    <strong>WOUND ROLL:</strong> Compare a Força do ataque com a
                    Resistência do alvo
                  </li>
                  <li>
                    <strong>ALLOCATE ATTACK:</strong> Oponente escolhe qual
                    modelo pode ser ferido
                  </li>
                  <li>
                    <strong>SAVING THROW:</strong> Role D6, subtraindo o AP da
                    arma
                  </li>
                  <li>
                    <strong>INFLICT DAMAGE:</strong> Modelo perde ferimentos
                    igual à característica Damage
                  </li>
                </ol>
              </div>
            </RuleSection>
          </div>

          {/* Phase Details - Right Column */}
          <div className="space-y-6">
            <RuleSection title="4. Charge Phase" id="charge-phase">
              <p className="mb-4">
                Suas unidades agora podem carregar para atacar o inimigo em
                combate corpo a corpo.
              </p>

              <div className="space-y-4">
                <div className="bg-orange-900/20 border border-orange-700/50 rounded-lg p-4">
                  <h4 className="text-orange-300 font-semibold mb-2">
                    Sequência de Charge:
                  </h4>
                  <ol className="space-y-2 text-sm list-decimal pl-4">
                    <li>
                      Selecione unidades que deseja carregar (uma por vez)
                    </li>
                    <li>
                      Selecione uma ou mais unidades inimigas para carregar
                    </li>
                    <li>
                      Role 2D6. O resultado é a distância total que pode
                      carregar
                    </li>
                    <li>
                      Se for suficiente para chegar a 1\" de cada unidade
                      inimiga selecionada, a carga é bem-sucedida
                    </li>
                  </ol>
                </div>

                <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                  <h4 className="text-red-300 font-semibold mb-2">
                    Restrições:
                  </h4>
                  <ul className="space-y-1 text-sm list-disc pl-4">
                    <li>
                      Unidades que Avançaram ou fizeram Fall Back não podem
                      carregar
                    </li>
                    <li>Unidades já em Engagement Range não podem carregar</li>
                  </ul>
                </div>
              </div>
            </RuleSection>

            <RuleSection title="5. Fight Phase" id="fight-phase">
              <p className="mb-4">
                Toda unidade no exército de cada jogador que está em Engagement
                Range de qualquer unidade inimiga agora luta. Unidades que
                carregaram neste turno lutam antes de todas as outras.
              </p>

              <div className="space-y-4">
                <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                  <h4 className="text-red-300 font-semibold mb-2">
                    Sequência de Combate:
                  </h4>
                  <ol className="space-y-2 text-sm list-decimal pl-4">
                    <li>
                      <strong>PILE IN:</strong> Mova cada modelo até 3\" em
                      direção ao modelo inimigo mais próximo
                    </li>
                    <li>
                      <strong>MAKE ATTACKS:</strong> Cada modelo em Engagement
                      Range luta com uma arma corpo a corpo
                    </li>
                    <li>
                      <strong>CONSOLIDATE:</strong> Mova modelos não em contato
                      até 3\" em direção ao inimigo mais próximo
                    </li>
                  </ol>
                </div>

                <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-4">
                  <h4 className="text-cyan-300 font-semibold mb-3">
                    Exemplo de Arma Corpo a Corpo:
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="bg-gray-800/50">
                          <th className="border border-gray-600 p-2 text-left">
                            MELEE WEAPONS
                          </th>
                          <th className="border border-gray-600 p-2">RANGE</th>
                          <th className="border border-gray-600 p-2">A</th>
                          <th className="border border-gray-600 p-2">WS</th>
                          <th className="border border-gray-600 p-2">S</th>
                          <th className="border border-gray-600 p-2">AP</th>
                          <th className="border border-gray-600 p-2">D</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-600 p-2">
                            Astartes chainsword
                          </td>
                          <td className="border border-gray-600 p-2 text-center">
                            Melee
                          </td>
                          <td className="border border-gray-600 p-2 text-center">
                            4
                          </td>
                          <td className="border border-gray-600 p-2 text-center">
                            3+
                          </td>
                          <td className="border border-gray-600 p-2 text-center">
                            4
                          </td>
                          <td className="border border-gray-600 p-2 text-center">
                            -1
                          </td>
                          <td className="border border-gray-600 p-2 text-center">
                            1
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-300 mt-2">
                    <strong>WS (Weapon Skill):</strong> Habilidade de arma corpo
                    a corpo (ao invés de BS)
                  </p>
                </div>
              </div>
            </RuleSection>

            <RuleSection title="Tabela de Ferimento" id="wound-table">
              <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-4">
                <h4 className="text-cyan-300 font-semibold mb-3">
                  Força vs Resistência:
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-gray-800/50">
                        <th className="border border-gray-600 p-2 text-left">
                          Força vs Resistência
                        </th>
                        <th className="border border-gray-600 p-2">
                          D6 Necessário
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-600 p-2">
                          Força é 2x (ou mais) a Resistência
                        </td>
                        <td className="border border-gray-600 p-2 text-center">
                          2+
                        </td>
                      </tr>
                      <tr className="bg-gray-900/30">
                        <td className="border border-gray-600 p-2">
                          Força é MAIOR que a Resistência
                        </td>
                        <td className="border border-gray-600 p-2 text-center">
                          3+
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-600 p-2">
                          Força é IGUAL à Resistência
                        </td>
                        <td className="border border-gray-600 p-2 text-center">
                          4+
                        </td>
                      </tr>
                      <tr className="bg-gray-900/30">
                        <td className="border border-gray-600 p-2">
                          Força é MENOR que a Resistência
                        </td>
                        <td className="border border-gray-600 p-2 text-center">
                          5+
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-600 p-2">
                          Força é metade (ou menos) da Resistência
                        </td>
                        <td className="border border-gray-600 p-2 text-center">
                          6+
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-300 mt-2">
                  Rolagem não modificada de 6 para ferir é sempre uma{" "}
                  <strong>Ferida Crítica</strong> e sempre bem-sucedida.
                </p>
              </div>
            </RuleSection>
          </div>
        </div>

        {/* Weapon and Universal Abilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Weapon Abilities */}
          <RuleSection title="Habilidades de Armas" id="weapon-abilities">
            <div className="space-y-3">
              {weaponAbilities.map((ability, index) => (
                <div
                  key={index}
                  className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-3"
                >
                  <h4 className="text-cyan-400 font-semibold text-sm mb-1">
                    {ability.name}
                  </h4>
                  <p className="text-xs text-gray-300">{ability.description}</p>
                </div>
              ))}
            </div>
          </RuleSection>

          {/* Universal Abilities */}
          <RuleSection title="Habilidades Universais" id="universal-abilities">
            <div className="space-y-3">
              {universalAbilities.map((ability, index) => (
                <div
                  key={index}
                  className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-3"
                >
                  <h4 className="text-cyan-400 font-semibold text-sm mb-1">
                    {ability.name}
                  </h4>
                  <p className="text-xs text-gray-300">{ability.description}</p>
                </div>
              ))}
            </div>
          </RuleSection>
        </div>

        {/* Core Stratagems Section */}
        <RuleSection title="Core Stratagems" id="core-stratagems">
          <p className="mb-6">
            Command points podem ser gastos durante a batalha para usar
            Stratagems. Todos os jogadores podem usar os Core Stratagems
            apresentados aqui. Stratagems adicionais podem ser encontrados em
            Codexes e outras publicações.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Command Re-roll */}
            <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-cyan-400 font-semibold">COMMAND RE-ROLL</h3>
                <span className="bg-cyan-600 text-black px-2 py-1 rounded text-sm font-bold">
                  1CP
                </span>
              </div>
              <p className="text-xs text-gray-400 mb-2">
                Core – Battle Tactic Stratagem
              </p>
              <p className="text-sm text-gray-300 mb-2">
                Um grande comandante pode dobrar até as variações do destino e
                fortuna à sua vontade.
              </p>
              <p className="text-xs text-gray-300">
                <strong>QUANDO:</strong> Qualquer fase, após fazer um teste.{" "}
                <strong>EFEITO:</strong> Re-role aquele teste.
              </p>
            </div>

            {/* Counter-Offensive */}
            <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-cyan-400 font-semibold">
                  COUNTER-OFFENSIVE
                </h3>
                <span className="bg-cyan-600 text-black px-2 py-1 rounded text-sm font-bold">
                  2CP
                </span>
              </div>
              <p className="text-xs text-gray-400 mb-2">
                Core – Strategic Ploy Stratagem
              </p>
              <p className="text-sm text-gray-300 mb-2">
                Em combate corpo a corpo, a menor hesitação pode deixar uma
                abertura.
              </p>
              <p className="text-xs text-gray-300">
                <strong>QUANDO:</strong> Fight phase, após inimigo lutar.{" "}
                <strong>EFEITO:</strong> Sua unidade luta em seguida.
              </p>
            </div>

            {/* Epic Challenge */}
            <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-cyan-400 font-semibold">EPIC CHALLENGE</h3>
                <span className="bg-cyan-600 text-black px-2 py-1 rounded text-sm font-bold">
                  1CP
                </span>
              </div>
              <p className="text-xs text-gray-400 mb-2">
                Core – Epic Deed Stratagem
              </p>
              <p className="text-sm text-gray-300 mb-2">
                Lendas estão repletas de duelos mortais entre campeões
                poderosos.
              </p>
              <p className="text-xs text-gray-300">
                <strong>QUANDO:</strong> Fight phase, CHARACTER selecionado.{" "}
                <strong>EFEITO:</strong> Ataques corpo a corpo ganham
                [PRECISION].
              </p>
            </div>

            {/* Fire Overwatch */}
            <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-cyan-400 font-semibold">FIRE OVERWATCH</h3>
                <span className="bg-cyan-600 text-black px-2 py-1 rounded text-sm font-bold">
                  1CP
                </span>
              </div>
              <p className="text-xs text-gray-400 mb-2">
                Core – Strategic Ploy Stratagem
              </p>
              <p className="text-sm text-gray-300 mb-2">
                Uma chuva de tiros pode repelir inimigos que avançam.
              </p>
              <p className="text-xs text-gray-300">
                <strong>QUANDO:</strong> Inimigo se move/carrega.{" "}
                <strong>EFEITO:</strong> Atire nele como se fosse sua Shooting
                phase.
              </p>
            </div>

            {/* Heroic Intervention */}
            <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-cyan-400 font-semibold">
                  HEROIC INTERVENTION
                </h3>
                <span className="bg-cyan-600 text-black px-2 py-1 rounded text-sm font-bold">
                  1CP
                </span>
              </div>
              <p className="text-xs text-gray-400 mb-2">
                Core – Strategic Ploy Stratagem
              </p>
              <p className="text-sm text-gray-300 mb-2">
                Guerreiros surgem para enfrentar o ataque inimigo de frente.
              </p>
              <p className="text-xs text-gray-300">
                <strong>QUANDO:</strong> Inimigo termina carga.{" "}
                <strong>EFEITO:</strong> Unidade dentro de 6\" pode carregar de
                volta.
              </p>
            </div>

            {/* Tank Shock */}
            <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-cyan-400 font-semibold">TANK SHOCK</h3>
                <span className="bg-cyan-600 text-black px-2 py-1 rounded text-sm font-bold">
                  1CP
                </span>
              </div>
              <p className="text-xs text-gray-400 mb-2">
                Core – Strategic Ploy Stratagem
              </p>
              <p className="text-sm text-gray-300 mb-2">
                Atropelar o inimigo pode não ser sutil, mas é assassinamente
                eficaz.
              </p>
              <p className="text-xs text-gray-300">
                <strong>QUANDO:</strong> VEHICLE termina carga.{" "}
                <strong>EFEITO:</strong> Role D6 = Toughness. 5+ causa ferimento
                mortal.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-emerald-900/20 border border-emerald-700/50 rounded-lg p-4 text-center">
              <Settings className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
              <h4 className="text-emerald-300 font-semibold mb-1">
                10 Core Stratagems
              </h4>
              <p className="text-xs text-gray-300">
                Disponíveis para todos os exércitos
              </p>
            </div>
            <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-4 text-center">
              <Book className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <h4 className="text-purple-300 font-semibold mb-1">
                Stratagems Adicionais
              </h4>
              <p className="text-xs text-gray-300">
                Encontrados em Codexes específicos
              </p>
            </div>
            <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4 text-center">
              <Star className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <h4 className="text-amber-300 font-semibold mb-1">
                Command Points
              </h4>
              <p className="text-xs text-gray-300">
                Ganhe 1CP por turno para usar Stratagems
              </p>
            </div>
          </div>
        </RuleSection>

        {/* Navigation to Campaign */}
        <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-6 text-center">
          <h2 className="text-2xl font-tech text-cyan-400 uppercase mb-4">
            Pronto para Campanhas?
          </h2>
          <p className="text-gray-300 mb-4">
            Agora que você conhece as regras básicas, explore nosso sistema
            completo de campanha Nachmund Gauntlet
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/crusade-rules"
              className="px-6 py-3 bg-cyan-900/50 border border-cyan-700 rounded hover:bg-cyan-800/50 transition-colors text-cyan-300 hover:text-cyan-200"
            >
              Regras de Crusade
            </Link>
            <Link
              href="/campaign-phases"
              className="px-6 py-3 bg-cyan-900/50 border border-cyan-700 rounded hover:bg-cyan-800/50 transition-colors text-cyan-300 hover:text-cyan-200"
            >
              Fases da Campanha
            </Link>
            <Link
              href="/missions"
              className="px-6 py-3 bg-cyan-900/50 border border-cyan-700 rounded hover:bg-cyan-800/50 transition-colors text-cyan-300 hover:text-cyan-200"
            >
              Missões
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-cyan-900/50">
          <p className="text-gray-400 text-sm">
            Warhammer 40,000 Quick Start Guide
          </p>
          <p className="text-gray-500 text-xs mt-2">
            "Na escuridão do futuro distante, há apenas guerra"
          </p>
        </div>
      </div>

      {/* Botão Índice Flutuante */}
      <div className="fixed bottom-20 right-6 z-50">
        <div className="relative">
          {showIndex && (
            <div className="absolute bottom-16 right-0 w-64 bg-gray-900/95 border border-gray-700/50 rounded-lg shadow-xl backdrop-blur-sm">
              <div className="p-4">
                <h3 className="font-conduit font-semibold text-cyan-300 mb-3">
                  Índice
                </h3>
                <div className="space-y-2">
                  {mainSections.map((section) => (
                    <a
                      key={section.id}
                      href={section.id}
                      className="block text-sm text-gray-300 hover:text-cyan-300 transition-colors"
                      onClick={() => setShowIndex(false)}
                    >
                      {section.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
          <button
            onClick={() => setShowIndex(!showIndex)}
            className="bg-cyan-700 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
            aria-label="Índice"
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
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Botão Voltar ao Topo */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gray-800 hover:bg-gray-700 text-cyan-300 p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Voltar ao topo"
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
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </CrusadeLayout>
  );
}
