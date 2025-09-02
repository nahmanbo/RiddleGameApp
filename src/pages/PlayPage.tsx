// src/pages/RiddlePage.tsx
import type { FormEvent } from "react";
import "../styles/riddle.css";

export default function Play() {
  // פייק חידה – בלי מחלקה/ייב
  const riddle = {
    id: 1,
    subject: "Math",
    difficulty: "Easy",
    taskDescription: "What is 2 + 2?",
    correctAnswer: "4",
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("answer") as HTMLInputElement;
    const ok = input.value.trim().toLowerCase() === riddle.correctAnswer.toLowerCase();
    alert(ok ? "✅ Correct!" : "❌ Try again");
    form.reset();
  }

  return (
    <main className="riddle">
      <section className="riddle-card">
        <h1 className="riddle-title">{riddle.subject}</h1>
        <p className="riddle-meta">
          Difficulty: <strong>{riddle.difficulty}</strong> · ID: {riddle.id}
        </p>
        <p className="riddle-task">{riddle.taskDescription}</p>

        <form className="riddle-form" onSubmit={handleSubmit}>
          <input name="answer" type="text" placeholder="Type your answer..." required />
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}
