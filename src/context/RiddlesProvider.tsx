import { useState } from "react";
import type { Riddle } from "../types/riddle";
import { RiddlesContext } from "./RiddlesContext";

// Provides riddles context to the app
export default function RiddlesProvider({ children }: { children: React.ReactNode }) {
  const [riddles, setRiddles] = useState<Riddle[]>([]);
  return (
    <RiddlesContext.Provider value={{ riddles, setRiddles }}>
      {children}
    </RiddlesContext.Provider>
  );
}

