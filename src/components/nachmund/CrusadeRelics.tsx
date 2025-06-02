import React from "react";
import RuleSection from "@/components/crusade/RuleSection";

const CrusadeRelics: React.FC = () => {
  return (
    <div className="space-y-8">
      <RuleSection title="Crusade Relics">
        <p>
          Ao lutar no Nachmund Gauntlet, unidades de seu exército de Cruzada
          podem ganhar os seguintes Crusade Relics.
        </p>
      </RuleSection>

      <RuleSection title="Artificer Relics">
        <div className="space-y-6">
          <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
            <h3 className="text-xl font-tech text-cyan-400 mb-4">
              STRATEGIC LAURELS
            </h3>
            <p className="text-gray-300 mb-4">
              Incorporando neurocircuitos de carregamento tático e um complexo
              desvio sensorial de rede de dados, estas honras decorativas
              aumentam ainda mais a já astuta compreensão do portador da grande
              estratégia.
            </p>
            <p className="text-gray-300">
              No início de seu primeiro Command phase, se o portador estiver no
              campo de batalha, você ganha 1CP. No final da batalha, se o
              portador estiver no campo de batalha, você ganha 1 Strategic Asset
              point (SAP).
            </p>
          </div>

          <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
            <h3 className="text-xl font-tech text-cyan-400 mb-4">
              CONVERSION FIELD
            </h3>
            <p className="text-gray-300 mb-4">
              Gerado por um micro-emissor artesanal, este campo de energia
              protetor é invisível até interceptar fogo inimigo. No instante do
              impacto, no entanto, o campo de conversão brilha com luz enquanto
              dispersa a força dos projéteis, às vezes queimando e cegando o
              atacante.
            </p>
            <p className="text-gray-300">
              Modelos na unidade do portador têm uma invulnerable save 5+ contra
              ataques à distância e cada vez que um ataque à distância é alocado
              a um modelo na unidade do portador, em um saving throw não
              modificado de 6, a unidade atacante sofre 1 ferida mortal após
              terminar de fazer seus ataques.
            </p>
          </div>

          <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
            <h3 className="text-xl font-tech text-cyan-400 mb-4">
              GENE-TOXIN AUTOFONT
            </h3>
            <p className="text-gray-300 mb-4">
              Supostamente fabricado pelos mestres envenenadores do Officio
              Assassinorum, quando incorporado ao cabo ou mecanismos de uma
              arma, este dispositivo começa seu trabalho sinistro. Ele fabrica
              toxinas genéticas incrivelmente letais, usando um conjunto de
              amostradores biológicos incorporados para adaptar a mistura
              resultante aos inimigos do portador mesmo antes do combate
              começar. Uma vez que o autofont infunde a arma, o menor contato
              com a vítima é suficiente para desencadear sua morte lenta,
              agonizante, mas inevitável.
            </p>
            <p className="text-gray-300">
              Selecione uma arma corpo a corpo equipada pelo portador (excluindo
              uma arma que foi substituída por um Enhancement ou Crusade Relic,
              ou atualizada com qualquer Battle Trait). Essa arma agora é um
              Crusade Relic e, em sua Fight phase, após o portador ter lutado,
              selecione uma unidade inimiga atingida por um ou mais daqueles
              ataques feitos com esta arma. Até o final da batalha, aquela
              unidade inimiga está envenenada. No início de cada Command phase
              dos jogadores, role um D6 para cada unidade inimiga envenenada no
              campo de batalha: em um 1, o veneno desaparece e a unidade não
              está mais envenenada; em um 2-3, aquela unidade inimiga sofre 1
              ferida mortal; em um 4+, aquela unidade inimiga sofre D3 feridas
              mortais.
            </p>
          </div>

          <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
            <h3 className="text-xl font-tech text-cyan-400 mb-4">
              AUTO-MEDICAE
            </h3>
            <p className="text-gray-300 mb-4">
              Proveniente dos primeiros dias do Império - ou talvez até antes -
              este dispositivo se liga ao seu hospedeiro como um simbionte
              mecânico. Uma vez anexado, ele repara danos físicos e mentais a
              uma taxa quase sobrenatural.
            </p>
            <p className="text-gray-300">
              O portador tem a habilidade Feel No Pain 5+.
            </p>
          </div>
        </div>
      </RuleSection>

      <RuleSection title="Antiquity Relics">
        <div className="space-y-6">
          <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
            <h3 className="text-xl font-tech text-cyan-400 mb-4">
              HAMMER OF THE HEAVENS
            </h3>
            <p className="text-gray-300 mb-4">
              Este potente dispositivo emite uma coreografia de dados de
              sobrescrita de comando que pode se estender para o vazio e
              convocar ataques de armas orbitais para coordenadas precisas. As
              tempestades de fogo resultantes são tão espetaculares quanto
              devastadoras.
            </p>
            <p className="text-gray-300">
              Uma vez por batalha, em seu Command phase, se o portador estiver
              no campo de batalha, você pode usar esta habilidade. Selecione um
              ponto no campo de batalha e coloque um marcador nesse ponto. No
              início de seu próximo Command phase, role seis D6 para cada
              unidade dentro de 6" do centro daquele marcador, adicionando 2 à
              jogada para cada unidade dentro de 3" do centro daquele marcador:
              para cada 4+, aquela unidade sofre 1 ferida mortal. O marcador é
              então removido.
            </p>
          </div>

          <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
            <h3 className="text-xl font-tech text-cyan-400 mb-4">
              MAELSTROM CLARION
            </h3>
            <p className="text-gray-300 mb-4">
              Atulhado com sobreposições de dados disruptivos, as tecnologias
              incorporadas deste talismã sinistro embaralham bloqueios de
              teletransporte e faróis de queda dentro de um amplo raio.
            </p>
            <p className="text-gray-300">
              Unidades inimigas que são posicionadas no campo de batalha como
              Reinforcements não podem ser posicionadas dentro de 12" do
              portador.
            </p>
          </div>

          <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
            <h3 className="text-xl font-tech text-cyan-400 mb-4">
              DISPLACER FIELD
            </h3>
            <p className="text-gray-300 mb-4">
              Tecnologias de campo deslocador disparam micro saltos warp que
              removem fisicamente o portador do caminho do perigo antes de
              deixá-lo de volta à realidade nas proximidades.
            </p>
            <p className="text-gray-300">
              Uma vez por batalha, no final da Shooting phase do seu oponente,
              se a unidade do portador não estiver dentro do Engagement Range de
              uma ou mais unidades inimigas, e se foi alvo de um ou mais ataques
              durante aquela fase, você pode remover a unidade do portador do
              campo de batalha e colocá-la em Strategic Reserves. Se fizer isso,
              quando você posicionar a unidade do portador de Strategic
              Reserves, modelos naquela unidade têm a habilidade Deep Strike até
              o final daquela fase.
            </p>
          </div>

          <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
            <h3 className="text-xl font-tech text-cyan-400 mb-4">
              SIGIL OF PSYCHIC AMPLIFICATION
            </h3>
            <p className="text-gray-300 mb-4">
              Gravado de noctilith polarizado com circuitos para amplificar
              energias empíricas, este talismã queima com fogo frio enquanto
              impulsiona a warpcraft de seu portador.
            </p>
            <p className="text-gray-300">
              Apenas modelo PSYKER. Adicione 6" à característica Range das armas
              à distância [psychic] do portador. Se o portador tiver uma
              habilidade Psychic que instrui você a selecionar uma ou mais
              unidades dentro de um alcance especificado, você pode aumentar o
              alcance dessa habilidade em 6". Se o portador tiver uma habilidade
              Psychic Aura, aumente o alcance dessa habilidade em 3" adicionais.
            </p>
          </div>
        </div>
      </RuleSection>

      <RuleSection title="Legendary Relics">
        <div className="space-y-6">
          <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
            <h3 className="text-xl font-tech text-cyan-400 mb-4">
              GLOAMING MANTLE
            </h3>
            <p className="text-gray-300 mb-4">
              Este dispositivo sinistro foi descoberto no mundo tocado pela warp
              de Limina, no profundo do Nachmund Gauntlet. Embora sua
              proveniência seja misteriosa, sua capacidade de esconder o
              portador de sentidos físicos, tecnológicos e até psíquicos é quase
              sobrenatural.
            </p>
            <p className="text-gray-300">
              O portador tem as habilidades Lone Operative e Stealth. Enquanto o
              portador estiver liderando uma unidade, modelos naquela unidade
              têm a habilidade Stealth e aquela unidade só pode ser selecionada
              como alvo de um ataque à distância se o modelo atacante estiver
              dentro de 18".
            </p>
          </div>

          <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
            <h3 className="text-xl font-tech text-cyan-400 mb-4">
              LYRETH'S MIRROR
            </h3>
            <p className="text-gray-300 mb-4">
              Diz-se que este fragmento de cristal é o último remanescente do
              grande vidro vidente Harekalian. Resgatado pelo vidente Lyreth,
              mudou de mãos muitas vezes, mas reteve seu poder de mostrar
              vislumbres de perigo iminente.
            </p>
            <p className="text-gray-300">
              No final da Movement phase do seu oponente, você pode selecionar
              uma unidade inimiga que foi posicionada no campo de batalha dentro
              de 12" da unidade do portador durante esta fase; a unidade do
              portador pode então:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-300">
              <li>
                Atirar, mas ao resolver aqueles ataques a unidade do portador só
                pode mirar aquela unidade inimiga (e apenas se for um alvo
                elegível).
              </li>
              <li>
                Declarar uma carga contra aquela unidade (note que mesmo se esta
                carga for bem-sucedida, a unidade do portador não recebe nenhum
                bônus de Carga neste turno).
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6">
            <h3 className="text-xl font-tech text-cyan-400 mb-4">
              FATE-FORGED WEAPON
            </h3>
            <p className="text-gray-300 mb-4">
              Um implemento do destino e um destruidor dos grandes e poderosos,
              esta arma malevolente derrubou heróis, monstros e generais.
            </p>
            <p className="text-gray-300">
              Selecione uma arma corpo a corpo equipada pelo portador (excluindo
              uma arma que foi substituída por um Enhancement ou Crusade Relic,
              ou atualizada com qualquer Battle Trait). Essa arma agora é um
              Crusade Relic e:
            </p>
            <ul className="list-disc pl-6 mt-2 text-gray-300">
              <li>
                Cada vez que um ataque é feito com ela, você pode re-rolar o
                Wound roll.
              </li>
              <li>
                Uma vez por batalha, no início da Fight phase, o portador pode
                liberar o poder armazenado naquela arma. Quando o fizer, até o
                final do turno, aquela arma tem a habilidade [devastating
                wounds] e suas características Strength e Attacks são aumentadas
                por um número igual ao número atual do round de batalha.
              </li>
            </ul>
          </div>
        </div>
      </RuleSection>
    </div>
  );
};

export default CrusadeRelics;
