import React from "react";

interface DeepStrikeResult {
  result: string;
  roll: string;
  description: string;
  color: string;
}

interface MishapResult {
  result: string;
  roll: number;
  description: string;
  color: string;
}

const SurgicalDeepStrike: React.FC = () => {
  const deepStrikeResults: DeepStrikeResult[] = [
    {
      result: "PRECISION STRIKE",
      roll: "4+",
      description:
        "Chegando precisamente no alvo e em boa ordem, seus guerreiros se engajam imediatamente. Sua unidade pode agir normalmente neste turno.",
      color: "text-green-400",
    },
    {
      result: "HURLED INTO BATTLE",
      roll: "3+",
      description:
        "Aparecendo no meio de uma batalha furiosa, seus guerreiros devem se orientar rapidamente. Sua unidade deve fazer um teste de Battle-shock.",
      color: "text-yellow-400",
    },
    {
      result: "OFF BALANCE",
      roll: "2+",
      description:
        "Levará tempo para suas tropas mal ordenadas recuperarem o juízo e se juntarem à luta. Sua unidade fica Battle-shocked.",
      color: "text-orange-400",
    },
    {
      result: "DEEP STRIKE MISHAP",
      roll: "1 ou menos",
      description:
        "Algo deu errado com esta manobra de alto risco. Sua unidade sofre um Deep Strike Mishap. Role um D6 e consulte a tabela de Deep Strike Mishap.",
      color: "text-red-400",
    },
  ];

  const mishapResults: MishapResult[] = [
    {
      result: "DANGEROUS INGRESS",
      roll: 1,
      description:
        "Seja qual for a situação, este erro pode custar vidas. Sua unidade sofre D3 feridas mortais e fica Battle-shocked.",
      color: "text-red-300",
    },
    {
      result: "RECALLED UNDER FIRE",
      roll: 2,
      description:
        "Percebido tarde demais, a zona de chegada é muito perigosa. Sua unidade sofre D3 feridas mortais e deve ser colocada em Strategic Reserves. Essa unidade não pode ser posicionada no campo de batalha neste turno.",
      color: "text-red-400",
    },
    {
      result: "OFF TARGET",
      roll: 3,
      description:
        'O ataque desviou, deixando as tropas fora de posição. Sua unidade sofre D3 feridas mortais, fica Battle-shocked, e deve realizar outro Surgical Deep Strike. Nenhum modelo pode ser posicionado a 12" de onde foram posicionados.',
      color: "text-red-500",
    },
    {
      result: "ANTICIPATED",
      roll: 4,
      description:
        'O inimigo está esperando para atacar com força mortal. Sua unidade sofre D3 feridas mortais e fica Battle-shocked. Uma unidade inimiga a 9" da sua unidade pode fazer um movimento Normal de até D6".',
      color: "text-red-600",
    },
    {
      result: "MIS-DROP",
      roll: 5,
      description:
        "Sobreviventes deste terrível acidente ficam abalados e destroçados. Sua unidade sofre D6 feridas mortais, fica Battle-shocked, e até o final do turno, não é elegível para declarar uma carga.",
      color: "text-red-700",
    },
    {
      result: "DISASTER",
      roll: 6,
      description:
        "Você certamente enviou esses guerreiros para a morte. Sua unidade sofre D6 feridas mortais, fica Battle-shocked, e até o final do turno, não é elegível para atirar ou declarar uma carga.",
      color: "text-red-800",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-6">
        <h2 className="text-2xl font-tech text-cyan-400 uppercase mb-4">
          Surgical Deep Strike
        </h2>
        <p className="text-gray-300 mb-4">
          Em batalhas do Nachmund Gauntlet, uma vez por turno, quando uma
          unidade com a habilidade Deep Strike é selecionada para chegar das
          Reserves, ela pode realizar um
          <span className="text-cyan-400 font-semibold">
            {" "}
            Surgical Deep Strike
          </span>
          .
        </p>

        <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4">
          <h3 className="text-cyan-300 font-semibold mb-2">
            🎯 Como Funciona:
          </h3>
          <ol className="text-sm space-y-1 list-decimal pl-6">
            <li>
              Posicione a unidade a mais de <strong>3" horizontalmente</strong>{" "}
              de todos os modelos inimigos
            </li>
            <li>
              Role <strong>2D6</strong> para o teste de Deep Strike
            </li>
            <li>
              Subtraia <strong>1 para cada modelo inimigo a 9"</strong> (exceto
              Battle-shocked e OC 0)
            </li>
            <li>Consulte a tabela de resultados abaixo</li>
          </ol>
        </div>
      </div>

      {/* Deep Strike Test Results */}
      <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-6">
        <h3 className="text-xl font-tech text-cyan-400 uppercase mb-4">
          Resultados do Teste de Deep Strike
        </h3>

        <div className="space-y-4">
          {deepStrikeResults.map((result, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-4"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className={`font-tech font-bold ${result.color}`}>
                  {result.result}
                </h4>
                <span className="bg-gray-700 px-2 py-1 rounded text-sm font-mono">
                  {result.roll}
                </span>
              </div>
              <p className="text-gray-300 text-sm">{result.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mishap Table */}
      <div className="bg-gray-900/50 border border-red-900/50 rounded-lg p-6">
        <h3 className="text-xl font-tech text-red-400 uppercase mb-4">
          Tabela de Deep Strike Mishap
        </h3>

        <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4 mb-4">
          <p className="text-red-300 text-sm">
            <strong>⚠️ Atenção:</strong> Quando o resultado do teste de Deep
            Strike for 1 ou menos, role um D6 e consulte esta tabela para
            determinar o mishap específico.
          </p>
        </div>

        <div className="space-y-3">
          {mishapResults.map((mishap, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-red-900/50 rounded-lg p-4"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className={`font-tech font-bold ${mishap.color}`}>
                  {mishap.result}
                </h4>
                <span className="bg-red-700 px-2 py-1 rounded text-sm font-mono text-white">
                  {mishap.roll}
                </span>
              </div>
              <p className="text-gray-300 text-sm">{mishap.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Example */}
      <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-6">
        <h3 className="text-xl font-tech text-cyan-400 uppercase mb-4">
          Exemplo de Teste
        </h3>

        <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
          <h4 className="text-blue-300 font-semibold mb-2">📋 Situação:</h4>
          <p className="text-sm text-gray-300 mb-4">
            A unidade azul está realizando um Surgical Deep Strike. Após
            posicionar os modelos da unidade, um teste de Deep Strike deve ser
            feito.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p>
                <strong>Rolagem inicial:</strong> 2D6 = 7
              </p>
              <p>
                <strong>Modelos inimigos a 9":</strong> 5 modelos
              </p>
              <p>
                <strong>Modificador:</strong> -5
              </p>
            </div>
            <div>
              <p>
                <strong>Resultado final:</strong> 7 - 5 = 2
              </p>
              <p>
                <strong>Resultado:</strong>{" "}
                <span className="text-orange-400">OFF BALANCE</span>
              </p>
              <p>
                <strong>Efeito:</strong> Unidade fica Battle-shocked
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rules Notes */}
      <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
        <h4 className="text-yellow-300 font-semibold mb-2">
          💡 Notas Importantes:
        </h4>
        <ul className="text-sm text-gray-300 space-y-1 list-disc pl-6">
          <li>Regras que impedem posicionamento a 12" ainda se aplicam</li>
          <li>
            Uma unidade não pode usar regras especiais de posicionamento E
            Surgical Deep Strike
          </li>
          <li>Apenas uma vez por turno por exército</li>
          <li>
            Modelos Battle-shocked e com OC 0 não contam para modificadores
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SurgicalDeepStrike;
