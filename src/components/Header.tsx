// src/components/Header.tsx
import type { PropsWithChildren } from "react";
import { NavLink, Link, useLocation } from "react-router";
import "../styles/header.css";

export default function Header({ children }: PropsWithChildren) {
  const { pathname } = useLocation();

  const links =
    pathname.startsWith("/play")
      ? [
          { to: "/", label: "Home" },
          { to: "/leaderboard", label: "Leaderboard" },
        ]
      : pathname.startsWith("/leaderboard")
      ? [
          { to: "/", label: "Home" },
          { to: "/play", label: "Play" },
        ]
      : [
          { to: "/play", label: "Play" },
          { to: "/leaderboard", label: "Leaderboard" },
        ];

  return (
    <header className="header">
      <nav className="nav-left">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>

      <div className="brand">Riddle Game</div>

      <div className="right">
        {children /* למשל <ThemeToggle /> */}
        <Link to="/login" className="btn btn-ghost">
          Login
        </Link>
        <Link to="/auth?tab=register" className="btn btn-primary">
          Register
        </Link>
      </div>
    </header>
  );
}
