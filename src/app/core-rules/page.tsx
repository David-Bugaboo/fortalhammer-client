"use client";
import CrusadeLayout from "@/components/crusade/CrusadeLayout";
import RuleSection from "@/components/crusade/RuleSection";
import HighlightedTerm from "@/components/crusade/HighlightedTerm";
import { useState, useEffect } from "react";
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
  Map,
  Dices,
  Flag,
  ChevronRight,
  Eye,
  Move,
  Crosshair,
  RefreshCw,
  Timer,
  Gauge,
  Activity,
} from "lucide-react";
import TableOfContents from "@/components/ui/TableOfContents";

export default function CoreRulesPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showIndex, setShowIndex] = useState(false);
  const [isIndexOpen, setIsIndexOpen] = useState(false);

  // Set page title
  useEffect(() => {
    document.title = "Warhammer Fortaleza - Regras Principais";
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

  const tocItems = [
    {
      id: "#introducao",
      title: "Introdução",
      subsections: [],
    },
    {
      id: "#conceitos-principais",
      title: "Conceitos Principais",
      subsections: [
        { id: "#missoes", title: "Missões" },
        { id: "#exercitos", title: "Exércitos" },
        { id: "#unidades", title: "Unidades" },
        { id: "#folhas-dados", title: "Folhas de Dados" },
        { id: "#palavras-chave", title: "Palavras-chave" },
        { id: "#redesdobramentos", title: "Redesdobramentos" },
        { id: "#alcance-combate", title: "Alcance de Combate" },
        { id: "#coerencia-unidade", title: "Coerência da Unidade" },
        { id: "#campo-batalha", title: "Campo de Batalha" },
        { id: "#terrenos", title: "Características do Terreno" },
        { id: "#medindo-distancias", title: "Medindo Distâncias" },
        { id: "#visibilidade", title: "Determinando Visibilidade" },
        { id: "#dados", title: "Dados" },
        { id: "#sequenciamento", title: "Sequenciamento" },
      ],
    },
    {
      id: "#rodada-batalha",
      title: "A Rodada de Batalha",
      subsections: [],
    },
    {
      id: "#fase-comando",
      title: "Fase de Comando",
      subsections: [],
    },
    {
      id: "#fase-movimento",
      title: "Fase de Movimento",
      subsections: [],
    },
    {
      id: "#fase-tiro",
      title: "Fase de Tiro",
      subsections: [],
    },
    {
      id: "#fase-carga",
      title: "Fase de Carga",
      subsections: [],
    },
    {
      id: "#fase-luta",
      title: "Fase de Luta",
      subsections: [],
    },
    {
      id: "#folhas-dados-detalhadas",
      title: "Folhas de Dados Detalhadas",
      subsections: [],
    },
    {
      id: "#estratagemas",
      title: "Estratagemas",
      subsections: [],
    },
    {
      id: "#reservas-estrategicas",
      title: "Reservas Estratégicas",
      subsections: [],
    },
    {
      id: "#caracteristicas-terreno",
      title: "Características do Terreno",
      subsections: [],
    },
    {
      id: "#aeronaves",
      title: "Aeronaves",
      subsections: [],
    },
    {
      id: "#formar-exercito",
      title: "Formar Seu Exército",
      subsections: [],
    },
    {
      id: "#missoes-completas",
      title: "Missões",
      subsections: [],
    },
  ];

  return (
    <CrusadeLayout
      title="Regras Principais"
      description="As regras fundamentais de Warhammer 40,000"
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Regras Principais", href: "/core-rules" },
      ]}
    >
      <div className="flex gap-8">
        <div className="flex-1">
          {/* Introdução */}
          <RuleSection id="introducao" title="Introdução">
            <p className="text-lg leading-relaxed mb-6">
              Bem-vindos às Regras Principais de Warhammer 40,000! Esta página
              contém tudo o que você precisa saber para travar batalhas
              gloriosas através da galáxia devastada pela guerra do 41º Milênio.
            </p>
            <p className="text-base leading-relaxed mb-4">
              Warhammer 40,000 é um jogo de guerra de mesa no qual os jogadores
              comandam exércitos de miniaturas Citadel e tentam derrotar seu
              oponente através de uma mistura de habilidade, táticas e sorte. A
              narrativa está no centro do Warhammer 40,000, com as regras
              projetadas para dar vida aos conflitos épicos entre as forças da
              Humanidade, alienígenas e demônios na sombria escuridão do futuro
              distante. O propósito do jogo é que todos os jogadores tenham uma
              experiência compartilhada agradável, testando suas habilidades
              táticas enquanto admiram o espetáculo de miniaturas incríveis se
              chocando em campos de batalha fantásticos. Neste espírito, o bom
              esportivismo e a educação estão no coração do jogo.
            </p>
            <p className="text-base leading-relaxed mb-4">
              Jogos de Warhammer 40,000 são vencidos marcando mais pontos de
              Vitória que seu oponente através do cumprimento de vários
              objetivos, desde recuperar relíquias vitais até capturar
              fortalezas inimigas ou eliminar o Comandante opositor.
            </p>
            <p className="text-base leading-relaxed mb-6">
              O jogo é jogado em uma série de rodadas de batalha, divididas em
              diferentes fases durante as quais os jogadores movem, atiram e
              lutam com suas miniaturas.
            </p>
            <div className="bg-gray-900/50 border border-yellow-700/50 rounded-lg p-6">
              <h4 className="font-conduit font-bold text-yellow-300 mb-2">
                Efeitos Persistentes
              </h4>
              <p className="text-gray-300 font-crimson">
                Algumas regras aplicam um efeito que dura até que uma certa
                duração tenha passado (ex: até o início de seu próximo turno).
                Tais efeitos são conhecidos como efeitos persistentes. Se um
                efeito persistente se aplica a uma unidade quando ela embarca
                dentro de um TRANSPORTE, anote esse efeito e sua duração; se
                essa unidade desembarcar por qualquer motivo, quaisquer efeitos
                persistentes continuam a se aplicar a essa unidade por sua
                duração completa.
              </p>
            </div>
          </RuleSection>

          {/* Conceitos Principais */}
          <RuleSection id="conceitos-principais" title="Conceitos Principais">
            <p className="text-lg leading-relaxed mb-6">
              Uma introdução aos termos e conceitos essenciais das regras que
              sustentam toda batalha de Warhammer 40,000.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Esta seção introduz vários termos de regras que você encontrará ao
              longo das Regras Principais e além. Esses conceitos-chave formam a
              base das regras de Warhammer 40,000 e são essenciais para todo
              tipo de batalha.
            </p>

            <div className="grid gap-6">
              <div
                id="missoes"
                className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6"
              >
                <h3 className="text-xl font-conduit text-cyan-400 uppercase mb-3 flex items-center gap-2">
                  <Flag className="w-5 h-5" />
                  Missões
                </h3>
                <p className="text-gray-300 font-crimson">
                  Para jogar uma partida de Warhammer 40,000, você deve primeiro
                  selecionar uma missão. A missão dirá como formar seus
                  exércitos, criar seu campo de batalha e desdobrar suas forças
                  no tabuleiro. Também dirá quaisquer regras especiais que se
                  aplicam à batalha e (mais importante!) o que você precisa
                  fazer para vencer.
                </p>
              </div>

              <div
                id="exercitos"
                className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6"
              >
                <h3 className="text-xl font-conduit text-cyan-400 uppercase mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Exércitos
                </h3>
                <p className="text-gray-300 font-crimson mb-3">
                  Cada jogador em uma partida de Warhammer 40,000 comanda um
                  exército de miniaturas Citadel, doravante referidas como
                  modelos. A missão que você selecionou o guiará sobre quão
                  grande seu exército deve ser.
                </p>
                <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-3">
                  <strong className="text-cyan-300">Exército:</strong>
                  <span className="text-gray-300 ml-2">
                    Todos os modelos sob seu comando.
                  </span>
                </div>
              </div>

              <div
                id="unidades"
                className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6"
              >
                <h3 className="text-xl font-conduit text-cyan-400 uppercase mb-3 flex items-center gap-2">
                  <Crown className="w-5 h-5" />
                  Unidades
                </h3>
                <p className="text-gray-300 font-crimson mb-3">
                  Modelos se movem e lutam em unidades. Uma unidade pode ter um
                  ou mais modelos de uma única folha de dados (veja abaixo).
                  Modelos e unidades do mesmo exército são ditos amigáveis em
                  relação uns aos outros. Modelos e unidades do exército de seu
                  oponente são referidos como modelos e unidades inimigas.
                </p>
                <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-3 space-y-2">
                  <div>
                    <strong className="text-cyan-300">Unidade:</strong>
                    <span className="text-gray-300 ml-2">
                      Um ou mais modelos da mesma folha de dados.
                    </span>
                  </div>
                  <div>
                    <strong className="text-cyan-300">
                      Modelos/Unidades Amigáveis:
                    </strong>
                    <span className="text-gray-300 ml-2">
                      Todos os modelos/unidades do mesmo exército.
                    </span>
                  </div>
                  <div>
                    <strong className="text-cyan-300">
                      Modelos/Unidades Inimigas:
                    </strong>
                    <span className="text-gray-300 ml-2">
                      Todos os modelos/unidades do exército de seu oponente.
                    </span>
                  </div>
                </div>
              </div>

              <div
                id="folhas-dados"
                className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6"
              >
                <h3 className="text-xl font-conduit text-cyan-400 uppercase mb-3 flex items-center gap-2">
                  <Book className="w-5 h-5" />
                  Folhas de Dados
                </h3>
                <p className="text-gray-300 font-crimson">
                  As regras que você precisará para usar seus modelos em jogos
                  são apresentadas em folhas de dados. Cada unidade tem uma
                  folha de dados; você precisará das folhas de dados para todas
                  as unidades de seu exército.
                </p>
              </div>

              <div
                id="palavras-chave"
                className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6"
              >
                <h3 className="text-xl font-conduit text-cyan-400 uppercase mb-3 flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Palavras-chave
                </h3>
                <p className="text-gray-300 font-crimson">
                  Todas as folhas de dados têm uma lista de palavras-chave,
                  separadas em palavras-chave de Facção e outras palavras-chave.
                  Palavras-chave de Facção podem ser usadas para ajudá-lo a
                  decidir quais modelos incluir em seu exército, mas caso
                  contrário ambos os conjuntos de palavras-chave são
                  funcionalmente iguais. Em qualquer caso, palavras-chave
                  aparecem em{" "}
                  <strong className="text-cyan-400 font-conduit">
                    NEGRITO DE PALAVRA-CHAVE
                  </strong>
                  .
                </p>
              </div>

              <div
                id="redesdobramentos"
                className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6"
              >
                <h3 className="text-xl font-conduit text-cyan-400 uppercase mb-3 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5" />
                  Redesdobramentos
                </h3>
                <p className="text-gray-300 font-crimson">
                  Regras que permitem aos jogadores redesdobrar certas unidades
                  após ambos os exércitos serem desdobrados são sempre
                  resolvidas após o passo de Desdobrar Exércitos, e antes do
                  passo de Determinar Primeiro Turno. Quando um jogador usa tal
                  regra, ele remove essa unidade ou unidades do campo de
                  batalha, então as desdobra novamente usando todas as regras
                  normais.
                </p>
              </div>

              <div
                id="alcance-combate"
                className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6"
              >
                <h3 className="text-xl font-conduit text-cyan-400 uppercase mb-3 flex items-center gap-2">
                  <Crosshair className="w-5 h-5" />
                  Alcance de Combate
                </h3>
                <p className="text-gray-300 font-crimson mb-3">
                  O Alcance de Combate representa a zona de ameaça que os
                  modelos apresentam a seus inimigos. Enquanto um modelo está
                  dentro de 1" horizontalmente e 5" verticalmente de um modelo
                  inimigo, esses modelos - e suas unidades - estão dentro do
                  Alcance de Combate um do outro.
                </p>
                <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-3 space-y-2">
                  <div>
                    <strong className="text-cyan-300">
                      Alcance de Combate:
                    </strong>
                    <span className="text-gray-300 ml-2">
                      Dentro de 1" horizontalmente e 5" verticalmente.
                    </span>
                  </div>
                  <div className="text-gray-300">
                    Modelos não podem ser posicionados ou terminar um movimento
                    Normal, Avanço ou Recuo dentro do Alcance de Combate de
                    qualquer modelo inimigo.
                  </div>
                </div>
              </div>

              <div
                id="coerencia-unidade"
                className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6"
              >
                <h3 className="text-xl font-conduit text-cyan-400 uppercase mb-3 flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Coerência da Unidade
                </h3>
                <p className="text-gray-300 font-crimson mb-3">
                  Uma unidade que contém mais de um modelo deve ser posicionada
                  e terminar qualquer tipo de movimento como um grupo único, com
                  todos os seus modelos dentro de 2" horizontalmente e 5"
                  verticalmente de pelo menos um outro modelo dessa unidade.
                  Enquanto uma unidade tem sete ou mais modelos, todos os seus
                  modelos devem estar dentro de 2" horizontalmente e 5"
                  verticalmente de pelo menos dois outros modelos dessa unidade.
                  Isso é chamado de Coerência da Unidade.
                </p>

                <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4 mb-4">
                  <img
                    src="https://wahapedia.ru/wh40k10ed/img/UnitCoherency.png"
                    alt="Diagrama ilustrando Coerência de Unidade"
                    className="w-full max-w-md mx-auto rounded-lg border border-gray-600"
                  />
                  <p className="text-sm text-gray-400 text-center mt-2 font-crimson">
                    Diagrama mostrando exemplos de Coerência de Unidade válida e
                    inválida
                  </p>
                </div>

                <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-3 space-y-2">
                  <div>
                    <strong className="text-cyan-300">
                      Coerência da Unidade:
                    </strong>
                    <span className="text-gray-300 ml-2">
                      Dentro de 2" horizontalmente e 5" verticalmente de:
                    </span>
                  </div>
                  <div className="ml-4 text-gray-300">
                    • Um outro modelo da mesma unidade (em unidades de 2-6
                    modelos).
                  </div>
                  <div className="ml-4 text-gray-300">
                    • Dois outros modelos da mesma unidade (em unidades de 7+
                    modelos).
                  </div>
                  <div className="text-gray-300">
                    No final de cada turno, se uma unidade não estiver em
                    Coerência da Unidade, o jogador controlador deve remover
                    modelos até que essa unidade esteja em Coerência da Unidade
                    novamente.
                  </div>
                </div>
              </div>

              <div
                id="campo-batalha"
                className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6"
              >
                <h3 className="text-xl font-conduit text-cyan-400 uppercase mb-3 flex items-center gap-2">
                  <Map className="w-5 h-5" />
                  Campo de Batalha
                </h3>
                <p className="text-gray-300 font-crimson">
                  Batalhas de Warhammer 40,000 são travadas em campos de batalha
                  retangulares. Pode ser qualquer superfície na qual os modelos
                  possam ficar em pé - uma mesa de jantar, por exemplo, ou o
                  chão. Sua missão o guiará quanto ao tamanho do campo de
                  batalha necessário.
                </p>
              </div>

              <div
                id="terrenos"
                className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6"
              >
                <h3 className="text-xl font-conduit text-cyan-400 uppercase mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Características do Terreno
                </h3>
                <p className="text-gray-300 font-crimson">
                  O cenário em um campo de batalha pode ser representado por
                  modelos da gama Warhammer 40,000. Esses modelos são chamados
                  de características do terreno para diferenciá-los dos modelos
                  que compõem um exército. As características do terreno são
                  posicionadas no campo de batalha antes da batalha começar.
                </p>
              </div>

              <div
                id="medindo-distancias"
                className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6"
              >
                <h3 className="text-xl font-conduit text-cyan-400 uppercase mb-3 flex items-center gap-2">
                  <Gauge className="w-5 h-5" />
                  Medindo Distâncias
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-300 font-crimson">
                    Distâncias em Warhammer 40,000 são medidas em polegadas (").
                    Você pode medir distâncias sempre que desejar.
                  </p>
                  <p className="text-gray-300 font-crimson">
                    Ao medir a distância entre modelos, meça entre os pontos
                    mais próximos das bases dos modelos que você está medindo.
                    Se um modelo não tem uma base, meça até o ponto mais próximo
                    de qualquer parte desse modelo.
                  </p>
                  <p className="text-gray-300 font-crimson">
                    Se uma regra diz que se aplica "dentro" de uma certa
                    distância, ela se aplica a qualquer distância que não seja
                    maior que a distância especificada. Por exemplo, dentro de
                    1" significa qualquer distância que não seja maior que 1".
                  </p>
                </div>
              </div>

              <div
                id="visibilidade"
                className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6"
              >
                <h3 className="text-xl font-conduit text-cyan-400 uppercase mb-3 flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Determinando Visibilidade
                </h3>
                <p className="text-gray-300 font-crimson mb-4">
                  Warhammer 40,000 usa linha de visão verdadeira para determinar
                  visibilidade entre modelos. Para verificar isso, obtenha uma
                  visão da "perspectiva do modelo" olhando por trás do modelo
                  observador. Para fins de determinar visibilidade, um modelo
                  observador pode ver através de outros modelos em sua unidade,
                  e a base de um modelo também faz parte desse modelo.
                </p>

                <div className="space-y-3">
                  <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-3">
                    <strong className="text-cyan-300">Modelo Visível:</strong>
                    <span className="text-gray-300 ml-2">
                      Se qualquer parte de outro modelo pode ser vista de
                      qualquer parte do modelo observador, esse outro modelo é
                      visível ao modelo observador.
                    </span>
                    <div className="mt-3">
                      <img
                        src="https://wahapedia.ru/wh40k10ed/img/DeterminingVisibility1.png"
                        alt="Exemplo de Modelo Visível"
                        className="w-full max-w-sm mx-auto rounded border border-gray-600"
                      />
                    </div>
                  </div>
                  <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-3">
                    <strong className="text-cyan-300">Unidade Visível:</strong>
                    <span className="text-gray-300 ml-2">
                      Se um ou mais modelos em uma unidade são visíveis ao
                      modelo observador, então a unidade desse modelo é visível
                      ao modelo observador.
                    </span>
                    <div className="mt-3">
                      <img
                        src="https://wahapedia.ru/wh40k10ed/img/DeterminingVisibility2.png"
                        alt="Exemplo de Unidade Visível"
                        className="w-full max-w-sm mx-auto rounded border border-gray-600"
                      />
                    </div>
                  </div>
                  <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-3">
                    <strong className="text-cyan-300">
                      Modelo Totalmente Visível:
                    </strong>
                    <span className="text-gray-300 ml-2">
                      Se toda parte de outro modelo que está voltada para o
                      modelo observador pode ser vista de qualquer parte do
                      modelo observador, então esse outro modelo é dito
                      totalmente visível ao modelo observador.
                    </span>
                    <div className="mt-3">
                      <img
                        src="https://wahapedia.ru/wh40k10ed/img/DeterminingVisibility3.png"
                        alt="Exemplo de Modelo Totalmente Visível"
                        className="w-full max-w-sm mx-auto rounded border border-gray-600"
                      />
                    </div>
                  </div>
                  <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-3">
                    <strong className="text-cyan-300">
                      Unidade Totalmente Visível:
                    </strong>
                    <span className="text-gray-300 ml-2">
                      Se todo modelo em uma unidade é totalmente visível a um
                      modelo observador, então essa unidade é totalmente visível
                      a esse modelo observador.
                    </span>
                    <div className="mt-3">
                      <img
                        src="https://wahapedia.ru/wh40k10ed/img/DeterminingVisibility4.png"
                        alt="Exemplo de Unidade Totalmente Visível"
                        className="w-full max-w-sm mx-auto rounded border border-gray-600"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="dados"
                className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6"
              >
                <h3 className="text-xl font-conduit text-cyan-400 uppercase mb-3 flex items-center gap-2">
                  <Dices className="w-5 h-5" />
                  Dados
                </h3>
                <p className="text-gray-300 font-crimson mb-4">
                  Para travar uma batalha, você precisará de alguns dados de
                  seis lados (frequentemente abreviados como D6). Algumas regras
                  se referem a 2D6, 3D6 e assim por diante - em tais casos, role
                  essa quantidade de D6 e some os resultados.
                </p>

                <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 mb-4">
                  <h4 className="font-conduit font-bold text-yellow-300 mb-2">
                    Rolando um D3
                  </h4>
                  <p className="text-gray-300 font-crimson mb-2">
                    Se uma regra exigir que você role um D3, role um D6 e divida
                    o resultado pela metade (arredondando para cima para um
                    número inteiro):
                  </p>
                  <div className="grid grid-cols-1 gap-2 text-sm text-gray-300">
                    <div>Resultado do Dado: 1 ou 2 → D3: 1</div>
                    <div>Resultado do Dado: 3 ou 4 → D3: 2</div>
                    <div>Resultado do Dado: 5 ou 6 → D3: 3</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-3">
                    <strong className="text-cyan-300">Re-rolagens:</strong>
                    <span className="text-gray-300 ml-2">
                      Algumas regras permitem que você role novamente um dado, o
                      que significa que você pode rolar alguns ou todos os dados
                      novamente. Você nunca pode rolar novamente um dado mais de
                      uma vez, e re-rolagens acontecem antes que modificadores
                      sejam aplicados.
                    </span>
                  </div>
                  <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-3">
                    <strong className="text-cyan-300">Roll-offs:</strong>
                    <span className="text-gray-300 ml-2">
                      Algumas regras instruem os jogadores a fazer um
                      "roll-off". Para isso, ambos os jogadores rolam um D6, e
                      quem conseguir o resultado mais alto vence o roll-off. Se
                      houver empate, façam o roll-off novamente.
                    </span>
                  </div>
                </div>
              </div>

              <div
                id="sequenciamento"
                className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6"
              >
                <h3 className="text-xl font-conduit text-cyan-400 uppercase mb-3 flex items-center gap-2">
                  <Timer className="w-5 h-5" />
                  Sequenciamento
                </h3>
                <p className="text-gray-300 font-crimson">
                  Ao jogar Warhammer 40,000, você ocasionalmente descobrirá que
                  duas ou mais regras devem ser resolvidas ao mesmo tempo. Se
                  isso ocorrer durante a batalha, o jogador cujo turno está
                  acontecendo escolhe a ordem. Se isso ocorrer antes ou depois
                  da batalha, ou no início ou fim de uma rodada de batalha, os
                  jogadores fazem um roll-off e o vencedor decide a ordem em que
                  essas regras são resolvidas.
                </p>
              </div>
            </div>
          </RuleSection>

          {/* A Rodada de Batalha */}
          <RuleSection id="rodada-batalha" title="A Rodada de Batalha">
            <p className="text-lg leading-relaxed mb-6">
              Minuto a minuto sangrento a batalha se arrasta, desde as primeiras
              salvas de tiros através de ofensivas furiosas e contra-ataques
              desesperados, até os últimos momentos moribundos quando a vitória
              pende por um fio.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Warhammer 40,000 é jogado em uma série de rodadas de batalha. Em
              cada rodada de batalha, ambos os jogadores têm um turno. O mesmo
              jogador sempre toma o primeiro turno em cada rodada de batalha - a
              missão que você está jogando dirá qual jogador é esse. Cada turno
              consiste em uma série de fases, que devem ser resolvidas na
              seguinte ordem:
            </p>

            <div className="grid gap-4 mb-6">
              <div className="flex items-center gap-4 p-4 bg-gray-900/40 border border-red-700/50 rounded-lg">
                <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-conduit font-bold text-red-400">
                    FASE DE COMANDO
                  </h3>
                  <p className="text-gray-300 font-crimson">
                    Ambos os jogadores reúnem recursos estratégicos, então você
                    testa a prontidão para batalha de suas unidades.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-900/40 border border-blue-700/50 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-conduit font-bold text-blue-400">
                    FASE DE MOVIMENTO
                  </h3>
                  <p className="text-gray-300 font-crimson">
                    Suas unidades manobram pelo campo de batalha e reforços
                    entram na briga.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-900/40 border border-yellow-700/50 rounded-lg">
                <div className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-conduit font-bold text-yellow-400">
                    FASE DE TIRO
                  </h3>
                  <p className="text-gray-300 font-crimson">
                    Suas unidades disparam suas armas à distância contra o
                    inimigo.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-900/40 border border-green-700/50 rounded-lg">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-conduit font-bold text-green-400">
                    FASE DE CARGA
                  </h3>
                  <p className="text-gray-300 font-crimson">
                    Suas unidades avançam carregando para batalhar em combate
                    próximo.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-900/40 border border-purple-700/50 rounded-lg">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-conduit font-bold text-purple-400">
                    FASE DE LUTA
                  </h3>
                  <p className="text-gray-300 font-crimson">
                    As unidades de ambos os jogadores se aproximam e atacam com
                    armas corpo a corpo.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-base leading-relaxed mb-4">
              Uma vez que o turno de um jogador tenha terminado, seu oponente
              então inicia seu turno. Uma vez que ambos os jogadores tenham
              completado um turno, a rodada de batalha foi completada e a
              próxima começa, e assim por diante, até que a batalha termine.
            </p>

            <div className="bg-gray-900/50 border border-yellow-700/50 rounded-lg p-6 mb-4">
              <h4 className="font-conduit font-bold text-yellow-300 mb-2">
                Efeitos Persistentes
              </h4>
              <p className="text-gray-300 font-crimson">
                Algumas regras aplicam um efeito que dura até que uma certa
                duração tenha passado (ex: até o início de seu próximo turno).
                Tais efeitos são conhecidos como efeitos persistentes. Se um
                efeito persistente se aplica a uma unidade quando ela embarca
                dentro de um TRANSPORTE, anote esse efeito e sua duração; se
                essa unidade desembarcar por qualquer motivo, quaisquer efeitos
                persistentes continuam a se aplicar a essa unidade por sua
                duração completa.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-cyan-700/50 rounded-lg p-6">
              <h4 className="font-conduit font-bold text-cyan-300 mb-2">
                Regras Fora de Fase
              </h4>
              <p className="text-gray-300 font-crimson">
                Algumas regras permitem que um modelo ou unidade se mova, atire,
                carregue ou lute fora da sequência normal de turnos. Por
                exemplo, o Estratagema Fogo de Cobertura permite que uma unidade
                atire no turno de seu oponente como se fosse sua Fase de Tiro.
                Ao usar regras fora de fase para realizar uma ação como se fosse
                uma de suas fases, você não pode usar quaisquer outras regras
                que normalmente são ativadas nessa fase.
              </p>
            </div>
          </RuleSection>

          {/* Fase de Comando */}
          <RuleSection id="fase-comando" title="Fase de Comando">
            <p className="text-lg leading-relaxed mb-6">
              Comandantes avaliam o fluxo da batalha, consolidando seus
              objetivos antes de fazer alterações em seus planos de batalha e
              elaborar novas táticas e estratégias para derrotar o inimigo.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Sua Fase de Comando é dividida em dois passos. No primeiro, ambos
              os jogadores ganham 1 ponto de Comando (PC) e você resolve
              quaisquer outras regras da Fase de Comando; no segundo, você testa
              para ver se alguma de suas unidades está em Choque de Batalha.
            </p>

            <div className="grid gap-6">
              <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
                <h3 className="text-xl font-conduit text-cyan-400 uppercase mb-3 flex items-center gap-2">
                  <Crown className="w-5 h-5" />
                  1. Comando
                </h3>
                <p className="mb-3 text-gray-300 font-crimson">
                  No início de sua Fase de Comando, antes de fazer qualquer
                  outra coisa, ambos os jogadores ganham 1PC. Pontos de Comando
                  são um recurso estratégico que você pode gastar durante a
                  batalha para usar Estratagemas.
                </p>
                <p className="text-gray-300 font-crimson">
                  Então, se você tem quaisquer outras regras que precisam ser
                  resolvidas na Fase de Comando, você as resolve agora antes de
                  progredir para o passo de Choque de Batalha.
                </p>
                <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-3 mt-3 space-y-2">
                  <div className="text-gray-300">
                    • Ambos os jogadores ganham 1PC.
                  </div>
                  <div className="text-gray-300">
                    • Resolve quaisquer outras regras que ocorrem na Fase de
                    Comando.
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
                <h3 className="text-xl font-conduit text-cyan-400 uppercase mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  2. Choque de Batalha
                </h3>
                <p className="mb-3 text-gray-300 font-crimson">
                  Neste passo, você deve fazer um teste de Choque de Batalha
                  para cada uma de suas unidades no campo de batalha que está
                  Abaixo de Meio Efetivo. Para isso, role 2D6: se o resultado
                  for maior ou igual à melhor característica de Liderança nessa
                  unidade, o teste é passado; caso contrário, o teste é falhado
                  e, até o início de sua próxima Fase de Comando, essa unidade
                  está em Choque de Batalha.
                </p>

                <h4 className="font-conduit font-bold text-cyan-300 mb-2">
                  Enquanto uma unidade está em Choque de Batalha:
                </h4>
                <ul className="list-disc list-inside space-y-1 mb-4 text-gray-300">
                  <li>
                    A característica de Controle de Objetivo de todos os seus
                    modelos é 0.
                  </li>
                  <li>
                    Se ela Recua, você deve fazer um teste de Fuga Desesperada
                    para cada modelo nessa unidade.
                  </li>
                  <li>
                    Seu jogador controlador não pode usar Estratagemas para
                    afetar essa unidade.
                  </li>
                </ul>

                <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-3 space-y-2">
                  <div className="text-gray-300">
                    • Faça um teste de Choque de Batalha para cada unidade de
                    seu exército no campo de batalha que está Abaixo de Meio
                    Efetivo.
                  </div>
                  <div className="text-gray-300">
                    • Role 2D6: se o resultado for maior ou igual à Liderança da
                    unidade, o teste é passado. Caso contrário, a unidade está
                    em Choque de Batalha até o início de sua próxima Fase de
                    Comando.
                  </div>
                  <div className="text-gray-300">
                    • Unidades em Choque de Batalha têm CO de 0 e seu jogador
                    controlador não pode usar Estratagemas para afetá-las.
                  </div>
                  <div className="text-gray-300">
                    • Unidades em Choque de Batalha devem fazer testes de Fuga
                    Desesperada se Recuarem.
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
                <h3 className="text-lg font-conduit text-cyan-400 uppercase mb-3">
                  Conceitos Importantes
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-conduit font-bold text-cyan-300">
                      Efetivo Inicial
                    </h4>
                    <p className="text-gray-300 font-crimson">
                      O número de modelos que uma unidade contém quando é
                      adicionada ao seu exército é conhecido como seu Efetivo
                      Inicial.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-conduit font-bold text-cyan-300">
                      Abaixo de Meio Efetivo
                    </h4>
                    <p className="text-gray-300 font-crimson">
                      • Se uma unidade tem um Efetivo Inicial de 1, então ela é
                      dita estar Abaixo de Meio Efetivo enquanto seu número
                      restante de ferimentos for menor que a metade de sua
                      característica de Ferimentos.
                    </p>
                    <p className="text-gray-300 font-crimson">
                      • Para qualquer outra unidade, enquanto o número de
                      modelos nessa unidade for menor que a metade de seu
                      Efetivo Inicial, essa unidade é dita estar Abaixo de Meio
                      Efetivo.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-conduit font-bold text-cyan-300">
                      Destruída
                    </h4>
                    <p className="text-gray-300 font-crimson">
                      Ao longo de uma batalha, modelos sofrerão dano e serão
                      destruídos. Quando um modelo é destruído, ele é removido
                      do campo de batalha. Quando todo modelo em uma unidade foi
                      destruído, essa unidade é destruída.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RuleSection>

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
                      Índice - Regras Principais
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
                      href="#introducao"
                      onClick={() => setIsIndexOpen(false)}
                      className="block text-sm text-gray-300 font-crimson hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                    >
                      → Introdução
                    </a>
                    <a
                      href="#conceitos-principais"
                      onClick={() => setIsIndexOpen(false)}
                      className="block text-sm text-gray-300 font-crimson hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                    >
                      → Conceitos Principais
                    </a>
                    <a
                      href="#rodada-batalha"
                      onClick={() => setIsIndexOpen(false)}
                      className="block text-sm text-gray-300 font-crimson hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                    >
                      → A Rodada de Batalha
                    </a>
                    <a
                      href="#fase-comando"
                      onClick={() => setIsIndexOpen(false)}
                      className="block text-sm text-gray-300 font-crimson hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                    >
                      → Fase de Comando
                    </a>
                    <a
                      href="#fase-movimento"
                      onClick={() => setIsIndexOpen(false)}
                      className="block text-sm text-gray-300 font-crimson hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                    >
                      → Fase de Movimento
                    </a>
                    <a
                      href="#fase-tiro"
                      onClick={() => setIsIndexOpen(false)}
                      className="block text-sm text-gray-300 font-crimson hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                    >
                      → Fase de Tiro
                    </a>
                    <a
                      href="#fase-carga"
                      onClick={() => setIsIndexOpen(false)}
                      className="block text-sm text-gray-300 font-crimson hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                    >
                      → Fase de Carga
                    </a>
                    <a
                      href="#fase-luta"
                      onClick={() => setIsIndexOpen(false)}
                      className="block text-sm text-gray-300 font-crimson hover:text-cyan-400 transition-colors py-1 px-2 rounded hover:bg-gray-800/50"
                    >
                      → Fase de Luta
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
        </div>
      </div>
    </CrusadeLayout>
  );
}
