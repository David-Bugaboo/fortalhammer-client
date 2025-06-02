"use client";
import CrusadeLayout from "@/components/crusade/CrusadeLayout";
import RuleSection from "@/components/crusade/RuleSection";
import HighlightedTerm from "@/components/crusade/HighlightedTerm";
import Link from "next/link";
import { Download } from "lucide-react";
import TableOfContents from "@/components/ui/TableOfContents";
import { useState, useEffect } from "react";

export default function CrusadeRulesPage() {
  const [isIndexOpen, setIsIndexOpen] = useState(false);

  // Set page title
  useEffect(() => {
    document.title = "Regras de Crusade | Warhammer Fortaleza";
  }, []);

  const pageSections = [
    { id: "#introduction", title: "Introdução" },
    { id: "#crusade-forces", title: "Forças de Crusade" },
    { id: "#order-of-battle", title: "Order of Battle" },
    { id: "#supply-limit", title: "Limite de Suprimentos e Pontos" },
    {
      id: "#battle-tally",
      title: "Contabilidade de Batalha e Pontos de Requisição",
    },
    { id: "#mustering", title: "Formando um Exército de Cruzada" },
    { id: "#crusade-cards", title: "Cartões de Cruzada" },
    { id: "#experience-points", title: "Pontos de Experiência" },
    { id: "#out-of-action", title: "Fora de Ação" },
    { id: "#combat-tallies", title: "Registros de Combate" },
    { id: "#requisitions", title: "Requisições" },
    { id: "#ranks-experience", title: "Patentes e Experiência" },
    { id: "#flowchart", title: "Fluxograma Resumido" },
  ];

  return (
    <CrusadeLayout
      title="Regras de Crusade"
      description="Regras fundamentais do sistema de campanha narrativa para Warhammer 40,000"
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Regras de Crusade", href: "/crusade-rules" },
      ]}
    >
      <div className="flex gap-8">
        <div className="flex-1">
          <div className="max-w-7xl mx-auto space-y-12">
            <RuleSection title="Introdução" id="introduction">
              <p>
                No futuro devastado pela guerra de Warhammer 40,000, existem
                grupos experientes de guerreiros que lutaram lado a lado ao
                longo de incontáveis campanhas. Desde as irmandades fechadas dos
                Adeptus Astartes até os Fire Warriors unidos do Império T'au,
                essas companhias de lutadores combateram juntas incansavelmente,
                cada nova batalha ensinando as habilidades e conhecimentos para
                ajudá-los a sobreviver nos campos de batalha pesadelos nos quais
                devem travar guerra.
              </p>
              <p>
                Esta seção explica como você pode formar um exército para uso em
                sua própria campanha, e como as unidades dentro dele podem
                progredir e se desenvolver entre uma batalha e a próxima.
              </p>
            </RuleSection>

            <RuleSection title="Forças de Crusade" id="crusade-forces">
              <p>
                Uma <HighlightedTerm>força de Crusade</HighlightedTerm> é aquela
                que permite rastrear o desenvolvimento de suas unidades desde os
                recrutas mais verdes até os veteranos mais experientes ao longo
                de muitas batalhas. Quanto mais você jogar com uma força de
                Crusade, mais suas unidades ganharão experiência, habilidades,
                adquirirão artefatos há muito perdidos e ganharão cicatrizes.
              </p>
              <p>
                As forças de Crusade são projetadas para serem usadas como parte
                de uma campanha onde você desenvolve sua coleção favorita de uma
                força iniciante em um exército poderoso temido por toda a
                galáxia, ganhando novas{" "}
                <HighlightedTerm>Battle Honours</HighlightedTerm> com cada
                vitória (ou derrota). Para jogar com uma força de Crusade, você
                primeiro precisará criar uma{" "}
                <HighlightedTerm>Order of Battle</HighlightedTerm>.
              </p>
            </RuleSection>

            <RuleSection title="Order of Battle" id="order-of-battle">
              <p>
                Uma <HighlightedTerm>Order of Battle</HighlightedTerm> é uma
                lista de todas as unidades que você tem como parte de sua força
                de Crusade. Ela listará o nome de cada unidade, seu valor em
                pontos e seu total de{" "}
                <HighlightedTerm>Crusade points</HighlightedTerm>. Também é um
                lugar para contar vitórias notáveis, rastrear recursos vitais
                que você adquiriu e listar o{" "}
                <HighlightedTerm>Supply Limit</HighlightedTerm> atual de sua
                força de Crusade.
              </p>

              <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6 mt-6">
                <h3 className="text-cyan-400 font-semibold mb-3">
                  Regras da Order of Battle:
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    • Sua Order of Battle pode consistir em qualquer número de
                    unidades, mas você deve ter um{" "}
                    <HighlightedTerm>Crusade card</HighlightedTerm> para cada
                    unidade
                  </li>
                  <li>
                    • A única maneira de mudar suas armas e equipamentos é usar
                    a Requisition "Rearm and Resupply"
                  </li>
                  <li>
                    • A única maneira de adicionar modelos adicionais é usar a
                    Requisition "Fresh Recruits"
                  </li>
                  <li>
                    • Você pode adicionar novas unidades a qualquer momento,
                    contanto que não exceda seu Supply Limit
                  </li>
                  <li>
                    • Você pode remover unidades a qualquer momento, mas uma vez
                    removidas, não podem ser adicionadas de volta
                  </li>
                </ul>
              </div>

              {/* Order of Battle Example Image */}
              <div className="mt-8">
                <h3 className="text-xl font-tech text-cyan-400 mb-4">
                  Exemplo de Order of Battle
                </h3>
                <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-4">
                  <img
                    src="/images/order-of-battle.webp"
                    alt="Exemplo de Order of Battle preenchida"
                    className="w-full h-auto rounded-lg border border-gray-700"
                  />
                  <p className="text-sm text-gray-400 mt-2 text-center">
                    Exemplo de uma Order of Battle completa mostrando unidades,
                    pontos e recursos
                  </p>
                </div>
              </div>

              {/* Download Button for PDF */}
              <div className="mt-6">
                <div className="space-y-3">
                  <a
                    href="/pdfs/order-of-battle.pdf"
                    download="Order-of-Battle-Blank.pdf"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-900/50 border border-cyan-700 rounded hover:bg-cyan-800/50 transition-colors text-cyan-300 hover:text-cyan-200"
                  >
                    <Download className="w-5 h-5" />
                    Baixar Order of Battle (PDF Preenchível)
                  </a>
                  <p className="text-xs text-gray-400 ml-1">
                    Se o arquivo não estiver disponível, você pode baixar os
                    PDFs oficiais no site da Games Workshop ou usar o app
                    Warhammer 40,000.
                  </p>
                </div>
              </div>
            </RuleSection>

            <RuleSection
              title="Limite de Suprimentos e Pontos"
              id="supply-limit"
            >
              <p>
                Os valores em pontos combinados de todas as unidades em sua
                Order of Battle é chamado de{" "}
                <HighlightedTerm>Supply Used</HighlightedTerm>; isso não pode
                exceder o <HighlightedTerm>Supply Limit</HighlightedTerm> atual
                de sua força de Crusade.
              </p>

              <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4 mt-4">
                <p className="font-semibold text-cyan-300 mb-2">
                  Regra Importante:
                </p>
                <p className="text-sm">
                  Quando você inicia uma força de Crusade pela primeira vez, seu
                  Supply Limit é de{" "}
                  <span className="text-cyan-400">1000 pontos</span>. Isso pode
                  ser aumentado jogando mais batalhas.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-tech text-cyan-400 mb-4">
                  Crusade Points
                </h3>
                <p>
                  O total de <HighlightedTerm>Crusade points</HighlightedTerm>{" "}
                  de uma unidade é uma medida de quantos upgrades e bônus ela
                  ganhou como parte de sua força de Crusade - quando incluída
                  pela primeira vez em sua força de Crusade, normalmente
                  começará em 0, mas aumentará conforme a unidade ganha
                  experiência em batalha.
                </p>
              </div>
            </RuleSection>

            <RuleSection
              title="Contabilidade de Batalha e Pontos de Requisição"
              id="battle-tally"
            >
              <p>
                Sua Order of Battle também tem um{" "}
                <HighlightedTerm>Battle tally</HighlightedTerm> para o número de
                batalhas que você jogou com ela, bem como seu número atual de{" "}
                <HighlightedTerm>Requisition points</HighlightedTerm> (RP).
              </p>

              <div className="bg-emerald-900/20 border border-emerald-700/50 rounded-lg p-4 mt-4">
                <p className="font-semibold text-emerald-300 mb-2">
                  Pontos Iniciais:
                </p>
                <p className="text-sm">
                  Quando você inicia uma força de Crusade pela primeira vez,
                  começará com <span className="text-emerald-400">5RP</span>.
                </p>
              </div>

              <p className="mt-4">
                Você também pode incluir qualquer outra informação que desejar
                em sua Order of Battle, incluindo vitórias ou derrotas notáveis,
                quaisquer vinganças ou rancores que sinta que sua força de
                Crusade teria, ou qualquer background adicional que deseje
                adicionar à sua força de Crusade ou qualquer uma das unidades
                dentro dela.
              </p>
            </RuleSection>

            <RuleSection
              title="Força de Crusade vs Exército de Crusade"
              id="force-vs-army"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
                  <h3 className="text-cyan-400 font-semibold mb-3">
                    Força de Crusade
                  </h3>
                  <p className="text-sm text-gray-300">
                    Todos os modelos listados na Order of Battle de um jogador.
                    Representa sua coleção completa disponível para a campanha.
                  </p>
                </div>

                <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
                  <h3 className="text-cyan-400 font-semibold mb-3">
                    Exército de Crusade
                  </h3>
                  <p className="text-sm text-gray-300">
                    Um exército selecionado para uso em uma única batalha das
                    unidades na força de Crusade do jogador.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 mt-6">
                <p className="font-semibold text-yellow-300 mb-2">Exemplo:</p>
                <p className="text-sm">
                  Se toda a força de Crusade de um jogador é uma coleção de
                  unidades com valor combinado de 3000 pontos, cada vez que esse
                  jogador formar um exército de Crusade para uma batalha Strike
                  Force, ele selecionará 2000 pontos de unidades de sua força de
                  Crusade.
                </p>
              </div>
            </RuleSection>

            <RuleSection title="Formando um Exército de Cruzada" id="mustering">
              <p>
                Para jogar um jogo de Crusade de Warhammer 40,000, você
                precisará formar um{" "}
                <HighlightedTerm>exército de Crusade</HighlightedTerm>. Para
                fazer isso, siga a sequência abaixo.
              </p>

              <p>
                <HighlightedTerm>Pontos</HighlightedTerm> são uma medida do
                poder de uma unidade no campo de batalha; quanto maior o valor
                em pontos de uma unidade, mais poderosa ela é. Os valores em
                pontos para unidades são apresentados em outras publicações,
                como Codexes e o Munitorum Field Manual. Você precisará
                consultá-los ao construir seu exército.
              </p>

              <div className="mt-6">
                <h3 className="text-xl font-tech text-cyan-400 mb-4">
                  1. Selecionar Battle Size
                </h3>
                <p className="mb-4">
                  Selecione um dos seguintes tamanhos de batalha; isso
                  determinará o número total de pontos que cada jogador terá
                  para gastar na construção de seu exército de Crusade e, como
                  resultado, quanto tempo a batalha durará. Note que você terá
                  que selecionar unidades de sua{" "}
                  <HighlightedTerm>Order of Battle</HighlightedTerm> ao formar
                  seu exército de Crusade, portanto ela deve conter unidades
                  suficientes para os pontos especificados para o tamanho de
                  batalha selecionado.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-900/50">
                        <th className="border border-cyan-900/50 p-4 text-left text-cyan-400 font-tech">
                          Battle Size
                        </th>
                        <th className="border border-cyan-900/50 p-4 text-left text-cyan-400 font-tech">
                          Pontos por Exército
                        </th>
                        <th className="border border-cyan-900/50 p-4 text-left text-cyan-400 font-tech">
                          Duração
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-cyan-900/50 p-4 text-cyan-300 font-tech font-bold">
                          INCURSION
                        </td>
                        <td className="border border-cyan-900/50 p-4 text-gray-300">
                          1000
                        </td>
                        <td className="border border-cyan-900/50 p-4 text-gray-300">
                          Até 2 horas
                        </td>
                      </tr>
                      <tr className="bg-gray-900/30">
                        <td className="border border-cyan-900/50 p-4 text-cyan-300 font-tech font-bold">
                          STRIKE FORCE
                        </td>
                        <td className="border border-cyan-900/50 p-4 text-gray-300">
                          2000
                        </td>
                        <td className="border border-cyan-900/50 p-4 text-gray-300">
                          Até 3 horas
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-cyan-900/50 p-4 text-cyan-300 font-tech font-bold">
                          ONSLAUGHT
                        </td>
                        <td className="border border-cyan-900/50 p-4 text-gray-300">
                          3000
                        </td>
                        <td className="border border-cyan-900/50 p-4 text-gray-300">
                          Até 4 horas
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-tech text-cyan-400 mb-4">
                  2. Iniciar seu Army Roster
                </h3>
                <p>
                  Os detalhes de seu exército de Crusade devem ser registrados
                  em um <HighlightedTerm>Army Roster</HighlightedTerm>; isso
                  pode ser registrado no app Warhammer 40,000, um Army Roster em
                  branco ou um pedaço de papel. Os jogadores devem mostrar seu
                  Army Roster finalizado ao seu oponente antes da batalha
                  começar.
                </p>

                <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4 mt-4">
                  <p className="text-cyan-300 font-semibold mb-2">💡 Dica:</p>
                  <p className="text-sm">
                    Você pode baixar Army Rosters em branco através dos links
                    oficiais da Games Workshop ou usar o aplicativo oficial
                    Warhammer 40,000.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-tech text-cyan-400 mb-4">
                  3. Selecionar Army Faction
                </h3>
                <p>
                  Anote em seu <HighlightedTerm>Army Roster</HighlightedTerm>{" "}
                  uma keyword <HighlightedTerm>Faction</HighlightedTerm> para
                  ser a facção de seu exército.
                </p>

                <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-4 mt-4">
                  <h4 className="text-cyan-300 font-semibold mb-2">
                    Exemplos de Factions:
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                    <span className="text-gray-300">• IMPERIUM</span>
                    <span className="text-gray-300">• CHAOS</span>
                    <span className="text-gray-300">• AELDARI</span>
                    <span className="text-gray-300">• TYRANIDS</span>
                    <span className="text-gray-300">• ORKS</span>
                    <span className="text-gray-300">• NECRONS</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-tech text-cyan-400 mb-4">
                  4. Selecionar Detachment Rules
                </h3>
                <p>
                  Anote em seu <HighlightedTerm>Army Roster</HighlightedTerm> um
                  conjunto de{" "}
                  <HighlightedTerm>Detachment rules</HighlightedTerm> para seu
                  exército de Crusade. Algumas Detachment rules listam unidades
                  que você deve ou não pode incluir em seu exército de Crusade;
                  você deve estar em conformidade com todas essas regras ao
                  construir seu exército de Crusade.
                </p>

                <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-4 mt-4">
                  <h4 className="text-cyan-300 font-semibold mb-2">
                    Importante:
                  </h4>
                  <p className="text-sm">
                    Detachment rules podem incluir restrições sobre quais
                    unidades você pode incluir, bem como habilidades especiais
                    que seu exército ganha. Leia cuidadosamente as regras do
                    Detachment escolhido antes de selecionar suas unidades.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-tech text-cyan-400 mb-4">
                  5. Selecionar Unidades
                </h3>
                <p className="mb-4">
                  Selecione todas as unidades de sua{" "}
                  <HighlightedTerm>Order of Battle</HighlightedTerm> que você
                  quer incluir em seu exército de Crusade. Subtraia o valor em
                  pontos de cada unidade do total permitido para o tamanho de
                  sua batalha.
                </p>

                <p className="mb-4">
                  Você só pode incluir uma unidade em seu exército de Crusade
                  se:
                </p>

                <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-4 mb-4">
                  <ul className="space-y-2 list-disc pl-6">
                    <li>
                      Essa unidade tenha a keyword{" "}
                      <HighlightedTerm>Faction</HighlightedTerm> que você
                      escolheu para seu exército de Crusade no passo 3
                    </li>
                    <li>Você tenha pontos suficientes restantes</li>
                    <li>
                      Seu exército de Crusade ainda não contenha três unidades
                      com o mesmo nome de datasheet dessa unidade - ou seis
                      unidades com o mesmo nome de datasheet se for uma unidade{" "}
                      <HighlightedTerm>BATTLELINE</HighlightedTerm> ou{" "}
                      <HighlightedTerm>DEDICATED TRANSPORT</HighlightedTerm>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4">
                    <h4 className="text-cyan-300 font-semibold mb-2">
                      ✅ Obrigatório:
                    </h4>
                    <p>
                      Seu exército de Crusade deve incluir pelo menos uma
                      unidade <HighlightedTerm>CHARACTER</HighlightedTerm>.
                    </p>
                  </div>

                  <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                    <h4 className="text-red-300 font-semibold mb-2">
                      ❌ Proibido:
                    </h4>
                    <p>
                      Seu exército de Crusade não pode incluir o mesmo{" "}
                      <HighlightedTerm>EPIC HERO</HighlightedTerm> mais de uma
                      vez.
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 mt-4">
                  <h4 className="text-yellow-300 font-semibold mb-2">
                    ⚠️ Regra Especial - DEDICATED TRANSPORT:
                  </h4>
                  <p className="text-sm">
                    Toda unidade{" "}
                    <HighlightedTerm>DEDICATED TRANSPORT</HighlightedTerm> em
                    seu exército de Crusade precisará começar a batalha com pelo
                    menos uma unidade embarcada dentro dela, ou não poderá ser
                    posicionada para aquela batalha e em vez disso contará como
                    tendo sido destruída durante sua primeira rodada de batalha.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-tech text-cyan-400 mb-4">
                  6. Selecionar Warlord
                </h3>
                <p>
                  Selecione um modelo{" "}
                  <HighlightedTerm>CHARACTER</HighlightedTerm> de seu exército
                  de Crusade para ser seu{" "}
                  <HighlightedTerm>Warlord</HighlightedTerm> - este será o líder
                  de seu exército de Crusade - e faça uma anotação disso em seu{" "}
                  <HighlightedTerm>Army Roster</HighlightedTerm>. Seu Warlord
                  ganha a keyword <HighlightedTerm>WARLORD</HighlightedTerm>.
                </p>

                <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-4 mt-4">
                  <h4 className="text-cyan-300 font-semibold mb-2">
                    Papel do Warlord:
                  </h4>
                  <ul className="space-y-1 text-sm list-disc pl-6">
                    <li>Líder estratégico de seu exército</li>
                    <li>Pode ter acesso a habilidades especiais de Warlord</li>
                    <li>Crucial para várias regras de missão e campanha</li>
                    <li>Deve ser claramente identificado em seu Army Roster</li>
                  </ul>
                </div>
              </div>

              {/* Quick Reference - Mustering */}
              <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-6 mt-8">
                <h4 className="text-cyan-400 font-tech text-lg mb-4">
                  Resumo Rápido - Formação de Exército:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-cyan-400 mb-2">
                      Sequência de Formação:
                    </h5>
                    <ol className="space-y-1 text-sm list-decimal pl-6">
                      <li>Selecionar Battle Size</li>
                      <li>Iniciar Army Roster</li>
                      <li>Selecionar Army Faction</li>
                      <li>Selecionar Detachment Rules</li>
                      <li>Selecionar Unidades</li>
                      <li>Selecionar Warlord</li>
                    </ol>
                  </div>
                  <div>
                    <h5 className="text-cyan-400 mb-2">Pontos Importantes:</h5>
                    <ul className="space-y-1 text-sm list-disc pl-6">
                      <li>Todas as unidades devem vir da Order of Battle</li>
                      <li>Respeitar limites de pontos do Battle Size</li>
                      <li>Pelo menos 1 CHARACTER obrigatório</li>
                      <li>Máximo 1 de cada EPIC HERO</li>
                      <li>Mostrar Army Roster ao oponente</li>
                    </ul>
                  </div>
                </div>
              </div>
            </RuleSection>

            <RuleSection title="Cartões de Cruzada" id="crusade-cards">
              <p>
                Cada vez que você adicionar uma unidade à sua Order of Battle,
                os detalhes dessa unidade devem ser registrados em um{" "}
                <HighlightedTerm>Crusade card</HighlightedTerm>. O Crusade card
                de cada unidade detalha o seguinte:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="space-y-2">
                  <h4 className="text-cyan-300 font-semibold">
                    Informações Básicas:
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Um nome único para essa unidade</li>
                    <li>• Quais modelos e quantos de cada estão na unidade</li>
                    <li>• O equipamento com que os modelos estão equipados</li>
                    <li>• Quaisquer Enhancements que a unidade tem</li>
                    <li>• O valor total em pontos dessa unidade</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-cyan-300 font-semibold">
                    Progressão e Status:
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Número atual de Experience points (XP)</li>
                    <li>• Combat tallies da unidade</li>
                    <li>• Número total de Crusade points</li>
                    <li>• Quaisquer Battle Honours ou Battle Scars</li>
                    <li>• Upgrades comprados usando Requisitions</li>
                  </ul>
                </div>
              </div>

              {/* Crusade Card Example Image */}
              <div className="mt-8">
                <h3 className="text-xl font-tech text-cyan-400 mb-4">
                  Exemplo de Crusade Card
                </h3>
                <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-4">
                  <img
                    src="/images/crusade-cardwebp.webp"
                    alt="Exemplo de Crusade Card preenchido"
                    className="w-full h-auto rounded-lg border border-gray-700"
                  />
                  <p className="text-sm text-gray-400 mt-2 text-center">
                    Exemplo de um Crusade Card completo mostrando informações da
                    unidade, experiência e progressão
                  </p>
                </div>
              </div>

              {/* Download Button for Crusade Card PDF */}
              <div className="mt-6">
                <div className="space-y-3">
                  <a
                    href="/pdfs/crusa-card.pdf"
                    download="Crusade-Card-Blank.pdf"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-900/50 border border-cyan-700 rounded hover:bg-cyan-800/50 transition-colors text-cyan-300 hover:text-cyan-200"
                  >
                    <Download className="w-5 h-5" />
                    Baixar Crusade Cards (PDF Preenchível)
                  </a>
                  <p className="text-xs text-gray-400 ml-1">
                    Se o arquivo não estiver disponível, você pode baixar os
                    PDFs oficiais no site da Games Workshop ou usar o app
                    Warhammer 40,000.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4 mt-6">
                <p className="font-semibold text-red-300 mb-2">
                  ⚠️ Importante:
                </p>
                <p className="text-sm">
                  Uma vez que você tenha adicionado uma unidade à sua Order of
                  Battle e criado um Crusade card para ela, você não pode mudar
                  o número de modelos nessa unidade, o equipamento com que seus
                  modelos estão equipados, ou qualquer uma das outras regras que
                  devem ser selecionadas quando você cria pela primeira vez seu
                  Crusade card.
                </p>
              </div>
            </RuleSection>

            <RuleSection title="Pontos de Experiência" id="experience-points">
              <p>
                Quando você adiciona uma unidade à sua Order of Battle, ela
                começará com 0{" "}
                <HighlightedTerm>Experience points</HighlightedTerm> (XP). As
                unidades podem ganhar Experience points das seguintes maneiras:
              </p>

              <div className="space-y-6 mt-6">
                <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
                  <h3 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                    <span className="bg-cyan-600 text-black rounded px-2 py-1 text-sm font-bold">
                      1XP
                    </span>
                    Battle Experience
                  </h3>
                  <p className="text-sm text-gray-300">
                    No final de uma batalha, cada unidade com um Crusade card
                    que fazia parte de seu exército de Crusade para essa batalha
                    ganha 1XP.
                  </p>
                </div>

                <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
                  <h3 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                    <span className="bg-cyan-600 text-black rounded px-2 py-1 text-sm font-bold">
                      1XP
                    </span>
                    Dealers of Death
                  </h3>
                  <p className="text-sm text-gray-300">
                    Uma unidade ganha 1XP para cada terceira unidade inimiga que
                    destruiu. Isso pode ser determinado olhando o tally "Units
                    Destroyed" em seu Crusade card.
                  </p>
                </div>

                <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
                  <h3 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                    <span className="bg-cyan-600 text-black rounded px-2 py-1 text-sm font-bold">
                      3XP
                    </span>
                    Marked for Greatness
                  </h3>
                  <p className="text-sm text-gray-300">
                    No final de uma batalha, você pode selecionar uma unidade
                    com um Crusade card que fazia parte de seu exército de
                    Crusade para essa batalha; essa unidade ganha 3XP.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4 mt-6">
                <h4 className="text-red-300 font-semibold mb-2">
                  Unidades que Nunca Ganham XP:
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                  <span>• EPIC HEROES</span>
                  <span>• FORTIFICATIONS</span>
                  <span>• SWARMS</span>
                  <span>• Unidades Summoned e Replacement</span>
                </div>
                <p className="text-sm text-gray-300 mt-2">
                  Essas unidades automaticamente passam em quaisquer testes Out
                  of Action que sejam obrigadas a fazer, então nunca ganham
                  Battle Scars.
                </p>
              </div>
            </RuleSection>

            <RuleSection title="Fora de Ação" id="out-of-action">
              <p>
                Após uma batalha, todos os modelos de seu exército de Crusade
                que são destruídos no final da batalha são restaurados à sua
                Order of Battle e todos os ferimentos que perderam são
                recuperados. Isso representa unidades reabastecendo seus
                números, guerreiros feridos retornando à luta e tanques de
                batalha sendo recuperados e reparados. Os únicos efeitos
                duradouros são quaisquer{" "}
                <HighlightedTerm>Battle Scars</HighlightedTerm> que a unidade
                adquire, conforme descrito abaixo.
              </p>

              <p>
                No final de cada batalha de Crusade, você deve fazer um{" "}
                <HighlightedTerm>teste Out of Action</HighlightedTerm> para cada
                unidade de seu exército de Crusade que foi destruída. Para fazer
                isso, role um D6. Com resultado 2+, o teste é aprovado e nada
                acontece. Com resultado 1, o teste falha; você deve agora
                escolher uma das seguintes opções para essa unidade.
              </p>

              <div className="space-y-6 mt-6">
                <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-6">
                  <h3 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                    <span className="bg-red-600 text-white rounded px-2 py-1 text-sm font-bold">
                      1
                    </span>
                    Devastating Blow
                  </h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Você só pode selecionar este resultado para unidades que
                    tenham uma ou mais{" "}
                    <HighlightedTerm>Battle Honours</HighlightedTerm>.
                  </p>
                  <p className="text-sm text-gray-300">
                    Selecione uma das Battle Honours dessa unidade e remova-a.
                    Atualize o Crusade card dessa unidade e reduza seu total de
                    Crusade points em 1 (ou em 2 se essa unidade for{" "}
                    <HighlightedTerm>TITANIC</HighlightedTerm>) para
                    contabilizar a Battle Honour perdida.
                  </p>
                </div>

                <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-6">
                  <h3 className="text-purple-400 font-semibold mb-3 flex items-center gap-2">
                    <span className="bg-purple-600 text-white rounded px-2 py-1 text-sm font-bold">
                      2
                    </span>
                    Battle Scar
                  </h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Essa unidade ganha uma{" "}
                    <HighlightedTerm>Battle Scar</HighlightedTerm>. Isso deve
                    ser determinado antes de sua próxima batalha e o Crusade
                    card dessa unidade deve ser atualizado para refletir
                    quaisquer mudanças.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 mt-6">
                <h4 className="text-yellow-300 font-semibold mb-2">
                  📋 Sequência do Teste Out of Action:
                </h4>
                <ol className="space-y-1 text-sm text-gray-300 list-decimal pl-6">
                  <li>
                    Role 1D6 para cada unidade destruída no final da batalha
                  </li>
                  <li>
                    Resultado 2+: Nada acontece, a unidade retorna normalmente
                  </li>
                  <li>
                    Resultado 1: Escolha entre Devastating Blow ou Battle Scar
                  </li>
                  <li>
                    Atualize o Crusade card da unidade com as mudanças aplicadas
                  </li>
                  <li>Recalcule os Crusade points se necessário</li>
                </ol>
              </div>

              <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-4 mt-6">
                <h4 className="text-cyan-300 font-semibold mb-2">
                  ⚠️ Unidades que Nunca Fazem Testes Out of Action:
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                  <span>• EPIC HEROES</span>
                  <span>• FORTIFICATIONS</span>
                  <span>• SWARMS</span>
                  <span>• Unidades Summoned e Replacement</span>
                </div>
                <p className="text-sm text-gray-300 mt-2">
                  Essas unidades automaticamente passam em quaisquer testes Out
                  of Action que sejam obrigadas a fazer, então nunca ganham
                  Battle Scars.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-tech text-cyan-400 mb-4">
                  Cicatrizes de Batalha
                </h3>
                <p className="mb-4">
                  Quando uma unidade falha em um teste Out of Action e você
                  escolhe "Battle Scar", a unidade ganha uma{" "}
                  <HighlightedTerm>Battle Scar</HighlightedTerm>. Isso deve ser
                  determinado antes de sua próxima batalha e o Crusade card
                  dessa unidade deve ser atualizado para refletir quaisquer
                  mudanças.
                </p>

                <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4 mt-4">
                  <h4 className="text-red-300 font-semibold mb-2">
                    Regras de Battle Scars:
                  </h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • Role um D6 ou escolha narrativamente qual Battle Scar a
                      unidade ganha
                    </li>
                    <li>
                      • Uma unidade pode ter múltiplas Battle Scars, mas não a
                      mesma mais de uma vez
                    </li>
                    <li>
                      • <strong>Limite máximo:</strong> 3 Battle Scars por
                      unidade
                    </li>
                    <li>
                      • Cada Battle Scar <strong>reduz</strong> os Crusade
                      points da unidade em 1
                    </li>
                    <li>
                      • Se unidade com 3 Battle Scars falha em Out of Action,
                      deve escolher Devastating Blow
                    </li>
                  </ul>
                </div>

                <div className="mt-6 space-y-4">
                  <h4 className="text-lg font-tech text-cyan-400 mb-4">
                    Tabela de Battle Scars (Role 1D6)
                  </h4>

                  <div className="grid gap-4">
                    <div className="bg-gray-900/30 border border-red-900/50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-red-600 text-white rounded px-2 py-1 text-sm font-bold">
                          1
                        </span>
                        <h5 className="text-red-400 font-semibold">
                          Crippling Damage
                        </h5>
                      </div>
                      <p className="text-sm text-gray-300">
                        Esta unidade não pode fazer <strong>Advance</strong> e
                        você deve subtrair 1" da característica{" "}
                        <strong>Move</strong>.
                      </p>
                    </div>

                    <div className="bg-gray-900/30 border border-red-900/50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-red-600 text-white rounded px-2 py-1 text-sm font-bold">
                          2
                        </span>
                        <h5 className="text-red-400 font-semibold">
                          Battle-Weary
                        </h5>
                      </div>
                      <p className="text-sm text-gray-300">
                        Subtraia 1 de testes de <strong>Battle-shock</strong>,{" "}
                        <strong>Leadership</strong>,{" "}
                        <strong>Desperate Escape</strong> ou{" "}
                        <strong>Out of Action</strong>.
                      </p>
                    </div>

                    <div className="bg-gray-900/30 border border-red-900/50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-red-600 text-white rounded px-2 py-1 text-sm font-bold">
                          3
                        </span>
                        <h5 className="text-red-400 font-semibold">Fatigued</h5>
                      </div>
                      <p className="text-sm text-gray-300">
                        Subtraia 1 da <strong>Objective Control</strong> e esta
                        unidade nunca recebe bônus de <strong>Charge</strong>.
                      </p>
                    </div>

                    <div className="bg-gray-900/30 border border-red-900/50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-red-600 text-white rounded px-2 py-1 text-sm font-bold">
                          4
                        </span>
                        <h5 className="text-red-400 font-semibold">
                          Disgraced
                        </h5>
                      </div>
                      <p className="text-sm text-gray-300">
                        Não pode usar <strong>Stratagems</strong> nesta unidade
                        e não pode ser <strong>Marked for Greatness</strong>.
                      </p>
                    </div>

                    <div className="bg-gray-900/30 border border-red-900/50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-red-600 text-white rounded px-2 py-1 text-sm font-bold">
                          5
                        </span>
                        <h5 className="text-red-400 font-semibold">
                          Mark of Shame
                        </h5>
                      </div>
                      <p className="text-sm text-gray-300">
                        Não pode formar <strong>Attached unit</strong>, não é
                        afetada por <strong>Auras</strong> amigas, não pode ser{" "}
                        <strong>Marked for Greatness</strong>.
                      </p>
                    </div>

                    <div className="bg-gray-900/30 border border-red-900/50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-red-600 text-white rounded px-2 py-1 text-sm font-bold">
                          6
                        </span>
                        <h5 className="text-red-400 font-semibold">
                          Deep Scars
                        </h5>
                      </div>
                      <p className="text-sm text-gray-300">
                        Cada <strong>Critical Hit</strong> contra esta unidade
                        automaticamente a fere.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RuleSection>

            <RuleSection title="Registros de Combate" id="combat-tallies">
              <p>
                O Crusade card de uma unidade contém espaço para registrar todos
                os tipos de estatísticas de batalha. Cada vez que uma unidade
                participa de uma batalha, sobrevive a uma batalha ou destrói uma
                unidade inimiga, faça uma anotação no Crusade card dessa
                unidade.
              </p>
              <p>
                As unidades podem ganhar Experience points desses tallies,
                conforme descrito acima. Mantenha um registro de quantas
                unidades inimigas uma unidade destruiu (e como) para determinar
                quando ela ganha XP adicional.
              </p>
            </RuleSection>

            <RuleSection title="Requisições" id="requisitions">
              <p>
                <HighlightedTerm>Requisition points</HighlightedTerm> (RP) podem
                ser usados para comprar{" "}
                <HighlightedTerm>Requisitions</HighlightedTerm>; estas podem
                melhorar unidades individuais ou toda sua força de Crusade.
              </p>

              <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6 mt-6">
                <h3 className="text-cyan-400 font-semibold mb-4">
                  Regras das Requisitions:
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    • Cada vez que você gastar RP para comprar uma Requisition,
                    reduza seus Requisition points pelo custo da Requisition
                  </li>
                  <li>
                    • Quaisquer Requisition points que você não gastar são
                    salvos e podem ser usados depois
                  </li>
                  <li>
                    • Uma força de Crusade nunca pode ter mais que{" "}
                    <span className="text-cyan-400 font-bold">10RP</span>
                  </li>
                  <li>
                    • Cada batalha que você jogar te dará{" "}
                    <span className="text-cyan-400 font-bold">1RP</span> após
                    completar, independentemente do resultado
                  </li>
                  <li>
                    • Requisitions nunca podem ser compradas durante uma batalha
                  </li>
                  <li>
                    • Não há limite no número de Requisitions que você pode
                    comprar
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-tech text-cyan-400 mb-6">
                  Requisitions Disponíveis
                </h3>

                <div className="space-y-6">
                  <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-cyan-400 font-semibold">
                        Increase Supply Limit
                      </h4>
                      <span className="bg-cyan-600 text-black px-2 py-1 rounded text-sm font-bold">
                        1RP
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 mb-3 italic">
                      Informações descobertas por suas forças revelaram a
                      crescente importância desta zona de guerra e a ameaça
                      crescente representada pelos inimigos. Em resposta, o alto
                      comando acedeu ao seu pedido urgente de reforços.
                    </p>
                    <p className="text-sm text-gray-200">
                      <strong>Efeito:</strong> Compre esta Requisition a
                      qualquer momento. Aumente o Supply Limit de sua força de
                      Crusade em 200 pontos.
                    </p>
                  </div>

                  <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-cyan-400 font-semibold">
                        Renowned Heroes
                      </h4>
                      <span className="bg-cyan-600 text-black px-2 py-1 rounded text-sm font-bold">
                        1-3RP
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 mb-3 italic">
                      Os maiores guerreiros, táticos mais astutos e videntes
                      lideram seus exércitos para a guerra possuídos de
                      habilidades duramente conquistadas e artefatos poderosos
                      que os distinguem como comandantes lendários.
                    </p>
                    <div className="text-sm text-gray-200 space-y-2">
                      <p>
                        <strong>Quando usar:</strong> Quando você iniciar pela
                        primeira vez uma força de Crusade, pode comprar esta
                        Requisition na primeira vez que adicionar uma unidade
                        CHARACTER à sua Order of Battle. Depois disso, pode
                        comprar esta Requisition cada vez que uma unidade de sua
                        Order of Battle ganhar um rank.
                      </p>
                      <p>
                        <strong>Efeito:</strong> Você pode selecionar um
                        Enhancement que a unidade tenha acesso. A unidade tem
                        acesso a quaisquer Enhancements descritos dentro de
                        quaisquer regras de Detachment que ela possa usar.
                      </p>
                      <p>
                        <strong>Custo:</strong> 1RP mais 1 RP adicional para
                        cada outro Enhancement que sua Order of Battle contenha
                        (até um máximo de 3RP).
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-cyan-400 font-semibold">
                        Legendary Veterans
                      </h4>
                      <span className="bg-cyan-600 text-black px-2 py-1 rounded text-sm font-bold">
                        3RP
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 mb-3 italic">
                      Ocasionalmente, um grupo de guerreiros subirá nas fileiras
                      através de vinte batalhas, forjando uma reputação lendária
                      conhecida por amigo e inimigo. Tais veteranos possuem
                      habilidades e honras que rivalizam com as dos heróis mais
                      glorificados.
                    </p>
                    <p className="text-sm text-gray-200">
                      <strong>Efeito:</strong> Compre esta Requisition quando
                      uma unidade de sua Order of Battle (excluindo unidades
                      CHARACTER) atingir 30XP. O total de Experience points
                      dessa unidade não é mais limitado a um máximo de 30 e ela
                      agora pode ser promovida acima do rank Battle-hardened.
                      Além disso, o número máximo de Battle Honours que a
                      unidade pode ter é aumentado para 6.
                    </p>
                  </div>

                  <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-cyan-400 font-semibold">
                        Rearm and Resupply
                      </h4>
                      <span className="bg-cyan-600 text-black px-2 py-1 rounded text-sm font-bold">
                        1RP
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 mb-3 italic">
                      A natureza mutável da zona de guerra e as demandas do alto
                      comando necessitam a abertura de caches de armas e cofres
                      de equipamentos de guerra para garantir que seus
                      guerreiros enfrentem o inimigo com as ferramentas de morte
                      mais eficazes.
                    </p>
                    <p className="text-sm text-gray-200">
                      <strong>Efeito:</strong> Compre esta Requisition antes de
                      uma batalha. Selecione uma unidade de sua Order of Battle.
                      Você pode mudar quaisquer opções de wargear com que os
                      modelos nessa unidade estão equipados conforme descrito na
                      datasheet dessa unidade. Se você substituir uma arma que
                      seja uma Crusade Relic ou uma arma melhorada por Weapon
                      Modifications, essa Crusade Relic ou quaisquer Weapon
                      Modifications são perdidas.
                    </p>
                  </div>

                  <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-cyan-400 font-semibold">
                        Repair and Recuperate
                      </h4>
                      <span className="bg-cyan-600 text-black px-2 py-1 rounded text-sm font-bold">
                        1-5RP
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 mb-3 italic">
                      Em meio a instalações medicae manchadas de sangue e
                      santuários de forja clamourosos, o dano causado pelo
                      inimigo sobre guerreiros e máquinas de guerra é desfeito
                      antes que sejam dispensados para buscar vingança.
                    </p>
                    <div className="text-sm text-gray-200 space-y-2">
                      <p>
                        <strong>Efeito:</strong> Compre esta Requisition após
                        uma batalha. Selecione uma unidade de sua Order of
                        Battle que tenha uma ou mais Battle Scars. Selecione uma
                        das Battle Scars dessa unidade e remova-a de seu Crusade
                        card (para cada Battle Scar removida, o total de Crusade
                        points da unidade aumentará em 1).
                      </p>
                      <p>
                        <strong>Custo:</strong> 1RP mais 1 RP adicional para
                        cada Battle Honour que a unidade tenha (até um máximo de
                        5RP).
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-cyan-400 font-semibold">
                        Fresh Recruits
                      </h4>
                      <span className="bg-cyan-600 text-black px-2 py-1 rounded text-sm font-bold">
                        1-4RP
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 mb-3 italic">
                      Conforme as guerras se prolongam em fases mais mortais,
                      missões vitais requerem números maiores de tropas.
                      Incorporar guerreiros em formações experientes é um
                      exercício intensivo e custoso, mas as vitórias que
                      resultam falam por si mesmas.
                    </p>
                    <div className="text-sm text-gray-200 space-y-2">
                      <p>
                        <strong>Efeito:</strong> Compre esta Requisition a
                        qualquer momento. Selecione uma unidade de sua Order of
                        Battle. Você pode adicionar modelos adicionais à
                        unidade, até o máximo listado em sua datasheet.
                        Recalcule o valor em pontos da unidade como resultado de
                        qualquer uma dessas mudanças e atualize seu Crusade
                        card.
                      </p>
                      <p>
                        <strong>Custo:</strong> 1RP mais 1 RP adicional para
                        cada 2 Battle Honours que a unidade tenha, arredondando
                        para cima (até um máximo de 4RP).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RuleSection>

            <RuleSection
              title="Unidades Invocadas e de Substituição"
              id="summoned-units"
            >
              <p>
                Em Warhammer 40,000 existem algumas regras que são usadas
                durante uma batalha para adicionar novas unidades ao seu
                exército de Crusade. Essas unidades são adicionadas ao seu
                exército de Crusade apenas pela duração dessa batalha - elas não
                são adicionadas à sua Order of Battle.
              </p>

              <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-4 mt-4">
                <p className="font-semibold text-purple-300 mb-2">
                  Regra Especial:
                </p>
                <p className="text-sm">
                  Unidades Summoned e Replacement são unidades que são
                  adicionadas ao seu exército de Crusade durante a batalha, mas
                  não são permanentemente adicionadas à sua Order of Battle.
                </p>
              </div>
            </RuleSection>

            <RuleSection title="Patentes e Experiência" id="ranks-experience">
              <p>
                Se uma unidade ganhou{" "}
                <HighlightedTerm>Experience points</HighlightedTerm>{" "}
                suficientes, antes de sua próxima batalha ela ganhará uma
                promoção e um novo rank. Cada vez que uma unidade ganha um rank,
                anote isso no <HighlightedTerm>Crusade card</HighlightedTerm> da
                unidade.
              </p>

              <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-6 mt-6">
                <h3 className="text-cyan-400 font-semibold mb-4">
                  Sistema de Ranks
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-800/50">
                        <th className="border border-gray-600 p-3 text-left">
                          Rank
                        </th>
                        <th className="border border-gray-600 p-3 text-center">
                          XP Necessário
                        </th>
                        <th className="border border-gray-600 p-3 text-left">
                          Battle Honours
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-600 p-3 text-cyan-300">
                          Battle-ready
                        </td>
                        <td className="border border-gray-600 p-3 text-center">
                          0XP
                        </td>
                        <td className="border border-gray-600 p-3">0</td>
                      </tr>
                      <tr className="bg-gray-900/30">
                        <td className="border border-gray-600 p-3 text-green-300">
                          Blooded
                        </td>
                        <td className="border border-gray-600 p-3 text-center">
                          5XP
                        </td>
                        <td className="border border-gray-600 p-3">1</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-600 p-3 text-blue-300">
                          Battle-hardened
                        </td>
                        <td className="border border-gray-600 p-3 text-center">
                          15XP
                        </td>
                        <td className="border border-gray-600 p-3">2</td>
                      </tr>
                      <tr className="bg-gray-900/30">
                        <td className="border border-gray-600 p-3 text-purple-300">
                          Heroic*
                        </td>
                        <td className="border border-gray-600 p-3 text-center">
                          30XP
                        </td>
                        <td className="border border-gray-600 p-3">3</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-600 p-3 text-yellow-300">
                          Legendary*
                        </td>
                        <td className="border border-gray-600 p-3 text-center">
                          50XP
                        </td>
                        <td className="border border-gray-600 p-3">4</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  *Apenas unidades CHARACTER podem atingir ranks Heroic e
                  Legendary
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-tech text-cyan-400 mb-4">
                  Battle Honours
                </h3>
                <p className="mb-4">
                  Cada vez que uma unidade ganha um rank, ela pode ganhar uma{" "}
                  <HighlightedTerm>Battle Honour</HighlightedTerm>. Cada Battle
                  Honour aumenta os{" "}
                  <HighlightedTerm>Crusade points</HighlightedTerm> da unidade
                  em +1.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-4">
                    <h4 className="text-cyan-300 font-semibold mb-2">
                      Limites de Battle Honours:
                    </h4>
                    <ul className="space-y-2 text-sm list-disc pl-4">
                      <li>
                        Máximo de <strong>3 Battle Honours</strong> por unidade
                      </li>
                      <li>
                        Unidades <HighlightedTerm>CHARACTER</HighlightedTerm>{" "}
                        podem ter até <strong>6</strong>
                      </li>
                      <li>
                        Unidades <HighlightedTerm>TITANIC</HighlightedTerm>{" "}
                        ganham +2 Crusade points por Battle Honour
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-4">
                    <h4 className="text-cyan-300 font-semibold mb-2">
                      Categorias de Battle Honours:
                    </h4>
                    <ul className="space-y-2 text-sm list-disc pl-4">
                      <li>
                        <strong>Battle Traits</strong> - Novas habilidades
                        únicas
                      </li>
                      <li>
                        <strong>Weapon Modifications</strong> - Melhorias em
                        equipamentos
                      </li>
                      <li>
                        <strong>Crusade Relics</strong> - Artefatos raros e
                        poderosos
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </RuleSection>

            <RuleSection title="Fluxograma Resumido" id="flowchart">
              <p className="mb-6 text-lg text-cyan-300 font-semibold">
                Guia visual para iniciantes sobre como funciona o sistema
                Crusade:
              </p>

              <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-tech text-cyan-400 mb-6 text-center">
                  🎯 FLUXO PRINCIPAL DO CRUSADE
                </h3>

                <div className="space-y-6">
                  {/* Etapa 1: Criação */}
                  <div className="bg-emerald-900/20 border border-emerald-700/50 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        1
                      </div>
                      <h4 className="text-emerald-400 font-bold text-lg">
                        CRIAÇÃO DA FORÇA
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center p-3 bg-gray-800/50 rounded">
                        <div className="text-emerald-300 font-semibold mb-1">
                          <a
                            href="#order-of-battle"
                            className="hover:text-emerald-200 underline"
                          >
                            Crie Ordem de Batalha
                          </a>
                        </div>
                        <div className="text-gray-300">
                          Lista de todas suas unidades
                        </div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/50 rounded">
                        <div className="text-emerald-300 font-semibold mb-1">
                          <a
                            href="#supply-limit"
                            className="hover:text-emerald-200 underline"
                          >
                            Limite de Suprimentos: 1000pts
                          </a>
                        </div>
                        <div className="text-gray-300">
                          Limite inicial de pontos
                        </div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/50 rounded">
                        <div className="text-emerald-300 font-semibold mb-1">
                          <a
                            href="#battle-tally"
                            className="hover:text-emerald-200 underline"
                          >
                            5 Pontos de Requisição
                          </a>
                        </div>
                        <div className="text-gray-300">
                          Para comprar melhorias
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Seta */}
                  <div className="text-center">
                    <div className="text-cyan-400 text-2xl">↓</div>
                  </div>

                  {/* Etapa 2: Preparação */}
                  <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        2
                      </div>
                      <h4 className="text-blue-400 font-bold text-lg">
                        PREPARAÇÃO PARA BATALHA
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                      <div className="text-center p-3 bg-gray-800/50 rounded">
                        <div className="text-blue-300 font-semibold mb-1">
                          <a
                            href="#mustering"
                            className="hover:text-blue-200 underline"
                          >
                            Escolha Tamanho da Batalha
                          </a>
                        </div>
                        <div className="text-gray-300">
                          Incursão/Força de Ataque/Investida
                        </div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/50 rounded">
                        <div className="text-blue-300 font-semibold mb-1">
                          <a
                            href="#mustering"
                            className="hover:text-blue-200 underline"
                          >
                            Selecione Unidades
                          </a>
                        </div>
                        <div className="text-gray-300">
                          Da sua Ordem de Batalha
                        </div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/50 rounded">
                        <div className="text-blue-300 font-semibold mb-1">
                          <a
                            href="#mustering"
                            className="hover:text-blue-200 underline"
                          >
                            Escolha Senhor da Guerra
                          </a>
                        </div>
                        <div className="text-gray-300">Líder do exército</div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/50 rounded">
                        <div className="text-blue-300 font-semibold mb-1">
                          <a
                            href="#mustering"
                            className="hover:text-blue-200 underline"
                          >
                            Forme Lista do Exército
                          </a>
                        </div>
                        <div className="text-gray-300">
                          Lista final para a batalha
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Seta */}
                  <div className="text-center">
                    <div className="text-cyan-400 text-2xl">↓</div>
                  </div>

                  {/* Etapa 3: Batalha */}
                  <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        3
                      </div>
                      <h4 className="text-red-400 font-bold text-lg">
                        BATALHA
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="text-center p-3 bg-gray-800/50 rounded">
                        <div className="text-red-300 font-semibold mb-1">
                          Jogue a Partida
                        </div>
                        <div className="text-gray-300">
                          Use missões e regras normais
                        </div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/50 rounded">
                        <div className="text-red-300 font-semibold mb-1">
                          <a
                            href="#combat-tallies"
                            className="hover:text-red-200 underline"
                          >
                            Registre Combate
                          </a>
                        </div>
                        <div className="text-gray-300">
                          Anote eliminações e ações heroicas
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Seta */}
                  <div className="text-center">
                    <div className="text-cyan-400 text-2xl">↓</div>
                  </div>

                  {/* Etapa 4: Pós-Batalha */}
                  <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        4
                      </div>
                      <h4 className="text-purple-400 font-bold text-lg">
                        PÓS-BATALHA
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                      <div className="text-center p-3 bg-gray-800/50 rounded">
                        <div className="text-purple-300 font-semibold mb-1">
                          <a
                            href="#experience-points"
                            className="hover:text-purple-200 underline"
                          >
                            +1XP por unidade
                          </a>
                        </div>
                        <div className="text-gray-300">
                          Experiência de batalha
                        </div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/50 rounded">
                        <div className="text-purple-300 font-semibold mb-1">
                          <a
                            href="#experience-points"
                            className="hover:text-purple-200 underline"
                          >
                            Marcado para Grandeza
                          </a>
                        </div>
                        <div className="text-gray-300">+3XP para 1 unidade</div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/50 rounded">
                        <div className="text-purple-300 font-semibold mb-1">
                          <a
                            href="#out-of-action"
                            className="hover:text-purple-200 underline"
                          >
                            Teste Fora de Ação
                          </a>
                        </div>
                        <div className="text-gray-300">
                          Para unidades destruídas
                        </div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/50 rounded">
                        <div className="text-purple-300 font-semibold mb-1">
                          <a
                            href="#requisitions"
                            className="hover:text-purple-200 underline"
                          >
                            +1 Ponto de Requisição
                          </a>
                        </div>
                        <div className="text-gray-300">
                          Para próximas melhorias
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Seta */}
                  <div className="text-center">
                    <div className="text-cyan-400 text-2xl">↓</div>
                  </div>

                  {/* Etapa 5: Progressão */}
                  <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-yellow-600 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">
                        5
                      </div>
                      <h4 className="text-yellow-400 font-bold text-lg">
                        PROGRESSÃO E MELHORIAS
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center p-3 bg-gray-800/50 rounded">
                        <div className="text-yellow-300 font-semibold mb-1">
                          <a
                            href="#requisitions"
                            className="hover:text-yellow-200 underline"
                          >
                            Gaste Pontos de Requisição
                          </a>
                        </div>
                        <div className="text-gray-300">
                          Compre melhorias e upgrades
                        </div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/50 rounded">
                        <div className="text-yellow-300 font-semibold mb-1">
                          <a
                            href="#ranks-experience"
                            className="hover:text-yellow-200 underline"
                          >
                            Promova Unidades
                          </a>
                        </div>
                        <div className="text-gray-300">
                          Honras de Batalha por XP
                        </div>
                      </div>
                      <div className="text-center p-3 bg-gray-800/50 rounded">
                        <div className="text-yellow-300 font-semibold mb-1">
                          <a
                            href="#supply-limit"
                            className="hover:text-yellow-200 underline"
                          >
                            Aumente Limite de Suprimentos
                          </a>
                        </div>
                        <div className="text-gray-300">
                          Mais unidades na força
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-6 p-4 bg-cyan-900/20 border border-cyan-700/50 rounded-lg">
                  <div className="text-cyan-300 font-bold text-lg mb-2">
                    🔄 REPITA O CICLO
                  </div>
                  <div className="text-gray-300 text-sm">
                    Cada batalha torna suas unidades mais experientes e
                    poderosas!
                  </div>
                </div>
              </div>

              {/* Tabela de Referência Rápida */}
              <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-6">
                <h3 className="text-xl font-tech text-cyan-400 mb-4 text-center">
                  📊 TABELA DE REFERÊNCIA RÁPIDA
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Experiência */}
                  <div>
                    <h4 className="text-cyan-300 font-semibold mb-3">
                      🎖️ Sistema de Experiência
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between bg-gray-800/50 p-2 rounded">
                        <span>
                          <a
                            href="#ranks-experience"
                            className="hover:text-cyan-300 underline"
                          >
                            Pronto para Batalha
                          </a>
                        </span>
                        <span className="text-cyan-400">0 XP</span>
                      </div>
                      <div className="flex justify-between bg-gray-800/50 p-2 rounded">
                        <span>
                          <a
                            href="#ranks-experience"
                            className="hover:text-cyan-300 underline"
                          >
                            Veterano
                          </a>
                        </span>
                        <span className="text-green-400">
                          5 XP → 1 Honra de Batalha
                        </span>
                      </div>
                      <div className="flex justify-between bg-gray-800/50 p-2 rounded">
                        <span>
                          <a
                            href="#ranks-experience"
                            className="hover:text-cyan-300 underline"
                          >
                            Endurecido
                          </a>
                        </span>
                        <span className="text-blue-400">
                          15 XP → 2 Honras de Batalha
                        </span>
                      </div>
                      <div className="flex justify-between bg-gray-800/50 p-2 rounded">
                        <span>
                          <a
                            href="#ranks-experience"
                            className="hover:text-cyan-300 underline"
                          >
                            Heroico (PERSONAGEM)
                          </a>
                        </span>
                        <span className="text-purple-400">
                          30 XP → 3 Honras de Batalha
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Ganhos */}
                  <div>
                    <h4 className="text-cyan-300 font-semibold mb-3">
                      💰 Como Ganhar Recursos
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between bg-gray-800/50 p-2 rounded">
                        <span>Por batalha</span>
                        <span className="text-emerald-400">+1 XP, +1 PR</span>
                      </div>
                      <div className="flex justify-between bg-gray-800/50 p-2 rounded">
                        <span>
                          <a
                            href="#experience-points"
                            className="hover:text-cyan-300 underline"
                          >
                            Marcado para Grandeza
                          </a>
                        </span>
                        <span className="text-yellow-400">
                          +3 XP (1 unidade)
                        </span>
                      </div>
                      <div className="flex justify-between bg-gray-800/50 p-2 rounded">
                        <span>
                          <a
                            href="#experience-points"
                            className="hover:text-cyan-300 underline"
                          >
                            A cada 3 eliminações
                          </a>
                        </span>
                        <span className="text-red-400">+1 XP</span>
                      </div>
                      <div className="flex justify-between bg-gray-800/50 p-2 rounded">
                        <span>
                          <a
                            href="#requisitions"
                            className="hover:text-cyan-300 underline"
                          >
                            Limite de Suprimentos
                          </a>
                        </span>
                        <span className="text-cyan-400">1PR → +200pts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RuleSection>

            {/* Quick Reference Summary */}
            <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-tech text-cyan-400 uppercase mb-4">
                Resumo de Referência Rápida
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4 text-center">
                  <h3 className="text-cyan-300 font-semibold mb-2">
                    Limite de Suprimentos Inicial
                  </h3>
                  <div className="text-2xl font-tech text-cyan-400 mb-1">
                    1000
                  </div>
                  <div className="text-xs text-gray-300">pontos</div>
                </div>
                <div className="bg-emerald-900/20 border border-emerald-700/50 rounded-lg p-4 text-center">
                  <h3 className="text-emerald-300 font-semibold mb-2">
                    Pontos de Requisição Iniciais
                  </h3>
                  <div className="text-2xl font-tech text-emerald-400 mb-1">
                    5
                  </div>
                  <div className="text-xs text-gray-300">
                    Pontos de Requisição
                  </div>
                </div>
                <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-4 text-center">
                  <h3 className="text-purple-300 font-semibold mb-2">
                    XP por Batalha
                  </h3>
                  <div className="text-2xl font-tech text-purple-400 mb-1">
                    1
                  </div>
                  <div className="text-xs text-gray-300">
                    Ponto de Experiência
                  </div>
                </div>
                <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4 text-center">
                  <h3 className="text-amber-300 font-semibold mb-2">
                    PR por Batalha
                  </h3>
                  <div className="text-2xl font-tech text-amber-400 mb-1">
                    1
                  </div>
                  <div className="text-xs text-gray-300">
                    independente do resultado
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Index and Back to Top */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
        {/* Index Button with Hover Menu */}
        <div className="relative">
          {/* Index Dropdown */}
          <div
            className={`absolute bottom-full right-0 mb-2 w-80 bg-gray-900/95 border border-cyan-700/50 rounded-lg shadow-2xl backdrop-blur-sm transition-all duration-300 transform ${
              isIndexOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible translate-y-2 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0"
            }`}
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4 border-b border-cyan-700/50 pb-2">
                <h3 className="text-cyan-400 font-tech text-lg">
                  Índice das Seções
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
                  href="#introduction"
                  onClick={() => setIsIndexOpen(false)}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                >
                  → Introdução
                </a>
                <a
                  href="#crusade-forces"
                  onClick={() => setIsIndexOpen(false)}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                >
                  → Forças de Crusade
                </a>
                <a
                  href="#order-of-battle"
                  onClick={() => setIsIndexOpen(false)}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                >
                  → Order of Battle
                </a>
                <a
                  href="#supply-limit"
                  onClick={() => setIsIndexOpen(false)}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                >
                  → Limite de Suprimentos e Pontos
                </a>
                <a
                  href="#battle-tally"
                  onClick={() => setIsIndexOpen(false)}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                >
                  → Contabilidade de Batalha e Pontos de Requisição
                </a>
                <a
                  href="#force-vs-army"
                  onClick={() => setIsIndexOpen(false)}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                >
                  → Força de Crusade vs Exército de Crusade
                </a>
                <a
                  href="#mustering"
                  onClick={() => setIsIndexOpen(false)}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                >
                  → Formando um Exército de Cruzada
                </a>
                <a
                  href="#crusade-cards"
                  onClick={() => setIsIndexOpen(false)}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                >
                  → Cartões de Cruzada
                </a>
                <a
                  href="#experience-points"
                  onClick={() => setIsIndexOpen(false)}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                >
                  → Pontos de Experiência
                </a>
                <a
                  href="#out-of-action"
                  onClick={() => setIsIndexOpen(false)}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                >
                  → Fora de Ação
                </a>
                <div className="pl-4">
                  <a
                    href="#out-of-action"
                    onClick={() => setIsIndexOpen(false)}
                    className="block text-xs text-gray-400 hover:text-red-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                  >
                    • Cicatrizes de Batalha
                  </a>
                </div>
                <a
                  href="#combat-tallies"
                  onClick={() => setIsIndexOpen(false)}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                >
                  → Registros de Combate
                </a>
                <a
                  href="#requisitions"
                  onClick={() => setIsIndexOpen(false)}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                >
                  → Requisições
                </a>
                <a
                  href="#summoned-units"
                  onClick={() => setIsIndexOpen(false)}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                >
                  → Unidades Invocadas e de Substituição
                </a>
                <a
                  href="#ranks-experience"
                  onClick={() => setIsIndexOpen(false)}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                >
                  → Patentes e Experiência
                </a>
                <a
                  href="#flowchart"
                  onClick={() => setIsIndexOpen(false)}
                  className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                >
                  → Fluxograma Resumido
                </a>
              </div>
            </div>
          </div>

          {/* Index Button */}
          <button
            onClick={() => setIsIndexOpen(!isIndexOpen)}
            className="group bg-cyan-900/80 hover:bg-cyan-800/80 border border-cyan-700 rounded-full p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
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
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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
    </CrusadeLayout>
  );
}
