import { useRiddles } from "../context/RiddlesContext";
import { fetchRiddles } from "../services/riddleAPI";
import "../styles/play.css";

// Page to display and load riddles
export default function PlayPage() {
  const { riddles, setRiddles } = useRiddles();

  // Loads riddles by difficulty
  const load = async (difficulty: string) => {
    try {
      const data = await fetchRiddles(difficulty);
      setRiddles(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="play">
      <section className="play-card">
        <h1 className="play-title">play page</h1>
        <p className="play-subtitle">choose difficulty</p>
        <section className="play-actions">
            <button className="difficulty-btn" onClick={() => load("easy")}>easy</button>
            <button className="difficulty-btn"onClick={() => load("medium")}>medium</button>
            <button className="difficulty-btn"onClick={() => load("hard")}>hard</button>
        </section>

        <ul>
          {riddles.map((r) => (
            <li key={r.id}>{r.taskDescription}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
