import React from "react";
import DiceIcon from "./DiceIcon";
import HighlightedTerm from "./HighlightedTerm";

interface BattleScarCardProps {
  diceRoll: number;
  name: string;
  effect: string;
  description?: string;
  className?: string;
}

const BattleScarCard: React.FC<BattleScarCardProps> = ({
  diceRoll,
  name,
  effect,
  description,
  className = "",
}) => {
  return (
    <div
      className={`bg-gray-900/50 border border-cyan-900/50 rounded-lg p-6 ${className}`}
    >
      <div className="flex items-start gap-4 mb-4">
        <DiceIcon number={diceRoll} />
        <div className="flex-1">
          <h3 className="text-xl font-tech text-cyan-400 mb-2">{name}</h3>
          <div
            className="text-gray-300 mb-3"
            dangerouslySetInnerHTML={{ __html: effect }}
          />
          {description && (
            <p className="text-sm text-gray-400 italic">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BattleScarCard;
