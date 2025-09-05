import { useState, useEffect } from "react";
import RiddleCard from "../components/RiddleCard";
import { useRiddles } from "../context/RiddlesContext";
import { fetchRiddles } from "../services/riddleAPI1";
import "../styles/play.css";

export default function PlayPage() {
  const { riddles, setRiddles } = useRiddles();
  const [showButtons, setShowButtons] = useState(true);
  const [isResolved, setIsResolved] = useState(false);
  const [riddleIndex, setRiddleIndex] = useState(0);

  const load = async (difficulty: string) => {
    try {
      const data = await fetchRiddles(difficulty);
      setRiddles(data);
      setShowButtons(false);
    } catch (err) {
      console.error(err);
    }
  };
  const hasRiddles = riddles.length > 0 && riddleIndex < riddles.length;


  useEffect(() => {
    if (isResolved && hasRiddles) {
      const timer = setTimeout(() => {
        setRiddleIndex(prev => prev + 1);
        setIsResolved(false);
      }, 1000); 

      return () => clearTimeout(timer);
    }
  }, [isResolved, riddleIndex]);


  return (
    <main className="play">
      <section className="play-card">
        <h1 className="play-title">play page</h1>
        <p className="play-subtitle">choose difficulty</p>

        {showButtons && (
          <section className="play-actions">
            <button className="difficulty-btn" onClick={() => load("easy")}>easy</button>
            <button className="difficulty-btn" onClick={() => load("medium")}>medium</button>
            <button className="difficulty-btn" onClick={() => load("hard")}>hard</button>
          </section>
        )}

        <div className="riddles-list">
          {!isResolved && hasRiddles && (
            <RiddleCard
              key={riddles[riddleIndex].id}
              riddle={riddles[riddleIndex]}
              setRiddleI={setRiddleIndex}
              setRes={setIsResolved}
            />
          )}

          {!isResolved && !hasRiddles && !showButtons && (
            <p>No riddles found.</p>
          )}

          {isResolved && riddleIndex >= riddles.length - 1 && <p>All done!</p>}
          
          {isResolved && riddleIndex < riddles.length - 1 && (
            <p>Great! Moving to next riddle...</p>
          )}
        </div>
      </section>
    </main>
  );
}