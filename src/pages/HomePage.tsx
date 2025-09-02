import { Link } from "react-router";
import "../styles/home.css";

export default function Home() {
  return (
    <main className="home">
      <section className="home-card">
        <h1 className="home-title">Riddle Game</h1>
        <p className="home-subtitle">Ready to test your wits?</p>

        <div className="home-actions">
          <Link to="/play" className="btn">Play as Guest</Link>
          <Link to="/auth?tab=login" className="btn">Login</Link>
          <Link to="/auth?tab=register" className="btn">Register</Link>
        </div>

        {/* קיצור לעמוד המובילים */}
        <div className="home-leaderboard">
          <Link to="/leaderboard" className="btn btn-outline">🏆 View Leaderboard</Link>
        </div>

        <small className="home-version">v1.0</small>
      </section>
    </main>
  );
}
