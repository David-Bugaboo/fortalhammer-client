import React from "react";

interface DiceIconProps {
  number: number;
  className?: string;
}

const DiceIcon: React.FC<DiceIconProps> = ({ number, className = "" }) => {
  return (
    <div
      className={`w-12 h-12 bg-gray-800 border-2 border-cyan-600 rounded-lg flex items-center justify-center ${className}`}
    >
      <span className="text-cyan-400 font-bold text-xl font-tech">
        {number}
      </span>
    </div>
  );
};

export default DiceIcon;
