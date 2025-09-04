import { useRiddles } from "../context/RiddlesContext";
import { fetchRiddles } from "../services/riddleAPI";

// Page to display and load riddles
export default function PlayPage() {
  const { riddles, setRiddles } = useRiddles();

  const load = async () => {
    try {
      const data = await fetchRiddles("easy");
      setRiddles(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={load}>Load Riddles</button>
      <ul>
        {riddles.map(r => (
          <li key={r.id}>{r.taskDescription}</li>
        ))}
      </ul>
    </div>
  );
}
