import React from "react";
import HighlightedTerm from "@/components/crusade/HighlightedTerm";

interface ChampionType {
  name: string;
  description: string;
  ability: string;
  color: string;
  icon: string;
}

const MightyChampions: React.FC = () => {
  const championTypes: ChampionType[] = [
    {
      name: "CAMPEÕES DE LINHA DE FRENTE",
      description:
        "Estes guerreiros são encontrados onde a luta é mais intensa, usando sua experiência duramente conquistada para liderar suas tropas à vitória.",
      ability:
        "No passo de declarar Battle-formations, selecione uma Battle Trait. Até o final da batalha, este modelo EPIC HERO, e qualquer unidade que ele se junte, são considerados como tendo esta Battle Trait.",
      color: "border-red-600 bg-red-900/20",
      icon: "⚔️",
    },
    {
      name: "CAMPEÕES ESTRATÉGICOS",
      description:
        "Indivíduos deste tipo empregam suas vastas e abrangentes percepções estratégicas para inclinar as probabilidades a favor de seus exércitos.",
      ability:
        "Se seu exército de Cruzada inclui um ou mais modelos EPIC HERO com esta Habilidade de Cruzada, então no passo Selecionar Bênçãos de Cruzada, role um D6: em 4+ selecione uma das seguintes:\n\n• Se você é o Underdog, você pode selecionar uma Bênção de Cruzada adicional.\n• Se você não é o Underdog, você pode selecionar uma Bênção de Cruzada, ao invés.",
      color: "border-blue-600 bg-blue-900/20",
      icon: "🧠",
    },
    {
      name: "CAMPEÕES NÊMESIS",
      description:
        "Seja pelas artes sutis do assassinato ou duelos abertos e espetaculares, guerreiros como este se destacam em derrubar os líderes inimigos.",
      ability:
        "Durante a batalha, se um ou mais modelos CHARACTER inimigos forem destruídos por um ataque feito por um modelo EPIC HERO (ou um modelo em uma unidade à qual ele está anexado) com esta Habilidade de Cruzada do seu exército de Cruzada, então no passo Atualizar Cartões de Cruzada, todas as unidades em seu exército de Cruzada ganham 1XP adicional. Se um desses modelos CHARACTER inimigos destruídos era o WARLORD inimigo, você também ganha 1 Ponto de Ativo Estratégico.",
      color: "border-purple-600 bg-purple-900/20",
      icon: "🎯",
    },
    {
      name: "CAMPEÕES INSPIRADORES",
      description:
        "A mera presença de figuras icônicas como estas inspira coragem incível - ou então obediência aterrorizada - em seus seguidores.",
      ability:
        "Enquanto um modelo EPIC HERO com esta Habilidade de Cruzada está liderando uma unidade, você pode ignorar qualquer e/ou todas as Battle Scars que aquela unidade Bodyguard possui. Além disso, se seu exército de Cruzada inclui um ou mais modelos EPIC HERO com esta Habilidade de Cruzada, no final da batalha você pode selecionar uma unidade adicional do seu exército de Cruzada para ser Marcada para a Grandeza.",
      color: "border-yellow-600 bg-yellow-900/20",
      icon: "✨",
    },
    {
      name: "CAMPEÕES RESTAURADORES",
      description:
        "Seja através de expertise médica, reparos de campo de batalha ou alguns talentos mais esotéricos, estes indivíduos reforçam as fileiras de seus exércitos.",
      ability:
        "Se seu exército de Cruzada inclui um ou mais modelos EPIC HERO com esta Habilidade de Cruzada, durante o passo Atualizar Cartões de Cruzada você pode re-rolar testes de Fora de Ação falhados para unidades em seu exército de Cruzada.",
      color: "border-green-600 bg-green-900/20",
      icon: "🩺",
    },
    {
      name: "CAMPEÕES SUTIS",
      description:
        "Por feitiçaria astuta, operações sombrias ardilosas ou outros meios deviosos, estes guerreiros influenciam sutilmente o quadro estratégico.",
      ability:
        "Se seu exército de Cruzada inclui um ou mais modelos EPIC HERO com esta Habilidade de Cruzada, no passo Determinar Atacante e Defensor, você pode re-rolar seu dado ao determinar quem será o Atacante e quem será o Defensor.",
      color: "border-gray-600 bg-gray-900/20",
      icon: "🗡️",
    },
    {
      name: "CAMPEÕES LOGÍSTICOS",
      description:
        "Focando nos mecanismos e na grande logística da guerra, estes indivíduos garantem excelente suporte para seus exércitos.",
      ability:
        "Se seu exército de Cruzada inclui um ou mais modelos EPIC HERO com esta Habilidade de Cruzada, durante o passo Determinar Vencedor, se você foi o Vencedor daquela batalha, após ganhar o Bônus de Vencedor para aquela Missão de Cruzada, você ganha aquele bônus de vencedor uma segunda vez.",
      color: "border-orange-600 bg-orange-900/20",
      icon: "📦",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-6">
        <h2 className="text-2xl font-tech text-cyan-400 uppercase mb-4">
          Campeões Poderosos
        </h2>

        <div className="space-y-4 text-gray-300">
          <p>
            Conforme a guerra se espalha do Nachmund Gauntlet para engolfar os
            mundos da Sanctus Wall, assim a escala do conflito atrai alguns dos
            maiores campeões da galáxia para se juntarem à luta. A presença de
            até mesmo um exemplo tão potente pode inspirar seus seguidores a
            grandes feitos, enquanto a intervenção pessoal de tais indivíduos
            pode mudar a forma de batalhas inteiras.
          </p>

          <p>
            Em uma Campanha Nachmund Gauntlet, jogadores devem informar o
            Campaign Master sempre que uma unidade{" "}
            <HighlightedTerm>EPIC HERO</HighlightedTerm> for adicionada à sua
            força de Cruzada. O Campaign Master então atribui uma das seguintes
            Habilidades de Cruzada a um modelo EPIC HERO naquela unidade que
            melhor representa seu lore e background. Para cada unidade EPIC HERO
            na força de Cruzada de um jogador, aquele jogador deve aumentar seu
            total de pontos de Cruzada em 1. Se uma unidade EPIC HERO contém
            dois ou mais modelos EPIC HERO, o Campaign Master deve selecionar
            apenas um daqueles modelos EPIC HERO para ter uma Habilidade de
            Cruzada.
          </p>
        </div>
      </div>

      {/* Historical Refight */}
      <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4">
        <h3 className="text-cyan-300 font-semibold mb-2">
          ⚡ REFIGHT HISTÓRICO
        </h3>
        <p className="text-sm text-gray-300">
          Se você está recriando o conflito neste próprio livro, então Haarken
          Worldclaimer seria um Campeão de Linha de Frente, Junith Eruita seria
          uma Campeã Estratégica e Santa Celestine seria uma Campeã Inspiradora.
        </p>
      </div>

      {/* Champion Types */}
      <div className="space-y-6">
        {championTypes.map((champion, index) => (
          <div
            key={index}
            className={`border rounded-lg p-6 ${champion.color}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{champion.icon}</span>
              <h3 className="text-xl font-tech text-cyan-400 uppercase">
                {champion.name}
              </h3>
            </div>

            <div className="text-gray-300 italic mb-4">
              {champion.description}
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
              <h4 className="text-cyan-300 font-semibold mb-2 uppercase">
                HABILIDADE DE CRUZADA
              </h4>
              <div className="text-sm text-gray-300 whitespace-pre-line">
                {champion.ability}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Rules Summary */}
      <div className="bg-gray-900/50 border border-cyan-900/50 rounded-lg p-6">
        <h3 className="text-xl font-tech text-cyan-400 uppercase mb-4">
          Regras Importantes
        </h3>

        <div className="space-y-4">
          <div className="bg-cyan-900/20 border border-cyan-700/50 rounded-lg p-4">
            <h4 className="text-cyan-300 font-semibold mb-2">
              📋 Como Aplicar:
            </h4>
            <ul className="text-sm text-gray-300 space-y-1 list-disc pl-6">
              <li>
                Informe o Campaign Master quando adicionar um{" "}
                <HighlightedTerm>EPIC HERO</HighlightedTerm> à sua força
              </li>
              <li>
                O Campaign Master atribui uma Habilidade de Cruzada que melhor
                representa o lore do herói
              </li>
              <li>
                Aumente seus{" "}
                <HighlightedTerm>pontos de Cruzada</HighlightedTerm> totais em
                +1 por unidade EPIC HERO
              </li>
              <li>
                Se uma unidade contém múltiplos modelos EPIC HERO, apenas um
                recebe a habilidade
              </li>
            </ul>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4">
            <h4 className="text-yellow-300 font-semibold mb-2">
              ⚠️ Nota do Designer:
            </h4>
            <p className="text-sm text-gray-300">
              O Campaign Master deve escolher a Habilidade de Cruzada que melhor
              se adequa ao background e lore específico do EPIC HERO, criando
              uma conexão narrativa entre as habilidades mecânicas e a história
              do personagem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MightyChampions;
