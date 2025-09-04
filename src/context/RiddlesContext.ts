import { createContext, useContext } from "react";

export type Riddle = {
  id: number;
  subject: string;
  difficulty: string;
  taskDescription: string;
  correctAnswer: string;
};

export type RiddlesContextType = {
  riddles: Riddle[];
  setRiddles: React.Dispatch<React.SetStateAction<Riddle[]>>;
};

export const RiddlesContext = createContext<RiddlesContextType | undefined>(undefined);

// Hook to use riddles context
export function useRiddles() {
  const ctx = useContext(RiddlesContext);
  if (!ctx) throw new Error("useRiddles must be used inside RiddlesProvider");
  return ctx;
}
