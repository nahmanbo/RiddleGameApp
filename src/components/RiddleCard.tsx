import { useState, type Dispatch, type SetStateAction } from "react";
import type { Riddle } from "../types/riddle";
import "../styles/riddleCard.css"

type Props = {
  riddle: Riddle;
  setRiddleI: Dispatch<SetStateAction<number>>;
  setRes: Dispatch<SetStateAction<boolean>>;
};

export default function RiddleCard({ riddle, setRiddleI, setRes }: Props) {
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<"success" | "error" | null>(null);

  /** Handles form submit */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!answer.trim()) return;

    if (answer.trim().toLowerCase() === riddle.correctAnswer.toLowerCase()) {
      setFeedback("success");
      setRiddleI((prev) => prev + 1); 
      setRes(true)
    } else {
      setFeedback("error");
    }

    setAnswer("");
  };

  return (
    <div className="riddle-card">
      <h3 className="riddle-subject">{riddle.subject}</h3>
      <p className="riddle-description">{riddle.taskDescription}</p>
      <span className="riddle-difficulty">{riddle.difficulty}</span>

      <form className="riddle-form" onSubmit={handleSubmit}>
        <input
          className="riddle-input"
          type="text"
          placeholder="הקלד/י תשובה…"
          value={answer}
          onChange={(e) => setAnswer(e.currentTarget.value)}
          required
        />
        <button className="riddle-submit" type="submit" disabled={!answer.trim()}>
          שלח/י
        </button>
      </form>

      {feedback === "success" && (
        <p className="riddle-feedback success">✔ תשובה נכונה!</p>
      )}
      {feedback === "error" && (
        <p className="riddle-feedback error">✘ תשובה שגויה, נסה שוב</p>
      )}
    </div>
  );
}
