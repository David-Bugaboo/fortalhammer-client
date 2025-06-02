import React from "react";
import { Badge } from "@/components/ui/badge";

interface RequisitionCardProps {
  name: string;
  cost: string;
  description: string;
  effect: string;
  id?: string;
}

const RequisitionCard: React.FC<RequisitionCardProps> = ({
  name,
  cost,
  description,
  effect,
  id,
}) => {
  return (
    <div
      id={id}
      className="bg-gray-900/30 border border-cyan-900/50 rounded-lg p-6 space-y-4"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-tech text-cyan-400 uppercase">{name}</h3>
        <Badge
          variant="outline"
          className="bg-cyan-600/20 border-cyan-400 text-cyan-300 font-bold"
        >
          {cost}
        </Badge>
      </div>

      <div className="text-gray-300 italic leading-relaxed">{description}</div>

      <div className="text-gray-200 leading-relaxed border-t border-gray-700 pt-4">
        {effect}
      </div>
    </div>
  );
};

export default RequisitionCard;
