export interface Alliance {
  id: string;
  name: string;
  cvp: number;
  description: string;
  image: string;
  color: string;
  icon: string;
}

export interface Location {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  gameEffect: string;
  image: string;
  faction: Alliance;
  position: {
    x: number;
    y: number;
  };
  controlLevels: {
    guardioes: number;
    saqueadores: number;
    usurpadores: number;
  };
} 