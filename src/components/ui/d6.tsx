import React from "react";

interface D6Props {
  value: number;
}

const D6: React.FC<D6Props> = ({ value }) => {
  return (
    <div className="w-8 h-8 bg-cyan-900/50 border border-cyan-600 rounded flex items-center justify-center text-cyan-300 font-bold">
      {value}
    </div>
  );
};

export default D6;
