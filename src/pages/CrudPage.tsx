// src/pages/Crud.tsx
import { useState } from "react";
import "../styles/crud.css";
import type { Riddle } from "../types/riddle";
import { fetchAllRiddles, deleteRiddle } from "../services/riddleAPI1"; 

// Renders the CRUD page with read & delete actions.
export default function Crud() {
  const [riddles, setRiddles] = useState<Riddle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Loads all riddles from server
  const handleRead = async () => {
    setError("");
    setLoading(true);
    try {
      const data = await fetchAllRiddles();
      setRiddles(data);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  // Deletes a riddle by prompt ID
  const handleDelete = async () => {
    const input = window.prompt("Enter riddle ID to delete:");
    if (!input) return;

    const id = Number(input);
    if (Number.isNaN(id)) {
      window.alert("Invalid ID.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      await deleteRiddle(id);
      setRiddles(prev => prev.filter(r => r.id !== id)); 
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="crud">
      <section className="crud-card">
        <h1 className="crud-title">CRUD page</h1>
        <p className="crud-subtitle">choose</p>

        <div className="crud-actions">
          <button className="crud-btn">create</button>
          <button className="crud-btn" onClick={handleRead}>read</button>
          <button className="crud-btn">update</button>
          <button className="crud-btn" onClick={handleDelete}>delete</button>
        </div>

        {loading && <p>Loading…</p>}
        {error && <p className="crud-error">{error}</p>}

        {riddles.length > 0 && (
          <ul className="crud-list">
            {riddles.map(r => (
              <li key={r.id} className="crud-item">
                <strong>#{r.id}</strong> — {r.subject} ({r.difficulty})
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
