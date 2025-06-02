import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function FlowchartSection() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center space-x-4">
        <Badge variant="outline" className="px-4 py-2 text-lg">
          Início da Campanha
        </Badge>
        <ArrowRight className="h-6 w-6 text-muted-foreground" />
        <Badge variant="outline" className="px-4 py-2 text-lg">
          Seleção de Fação
        </Badge>
        <ArrowRight className="h-6 w-6 text-muted-foreground" />
        <Badge variant="outline" className="px-4 py-2 text-lg">
          Criação do Roster
        </Badge>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <Badge variant="outline" className="px-4 py-2 text-lg">
          Missão
        </Badge>
        <ArrowRight className="h-6 w-6 text-muted-foreground" />
        <Badge variant="outline" className="px-4 py-2 text-lg">
          Batalha
        </Badge>
        <ArrowRight className="h-6 w-6 text-muted-foreground" />
        <Badge variant="outline" className="px-4 py-2 text-lg">
          Recompensas
        </Badge>
      </div>

      <div className="flex items-center justify-center space-x-4">
        <Badge variant="outline" className="px-4 py-2 text-lg">
          Battle Traits
        </Badge>
        <ArrowRight className="h-6 w-6 text-muted-foreground" />
        <Badge variant="outline" className="px-4 py-2 text-lg">
          Crusade Blessings
        </Badge>
        <ArrowRight className="h-6 w-6 text-muted-foreground" />
        <Badge variant="outline" className="px-4 py-2 text-lg">
          Crusade Relics
        </Badge>
      </div>
    </div>
  );
}
