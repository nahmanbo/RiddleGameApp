import { useState } from "react";
import { RiddlesContext, type Riddle } from "./RiddlesContext";

// Provides riddles context to the app
export default function RiddlesProvider({ children }: { children: React.ReactNode }) {
  const [riddles, setRiddles] = useState<Riddle[]>([]);
  return (
    <RiddlesContext.Provider value={{ riddles, setRiddles }}>
      {children}
    </RiddlesContext.Provider>
  );
}

