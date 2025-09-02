// src/hooks/useNavLinks.ts
import { useLocation } from "react-router";
import type { NavItem } from "../components/NavBar";

export function useNavLinks(): NavItem[] {
  const { pathname } = useLocation();

  if (pathname.startsWith("/play")) {
    return [
      { to: "/", label: "Home" },
      { to: "/leaderboard", label: "Leaderboard" },
    ];
  }
  if (pathname.startsWith("/leaderboard")) {
    return [
      { to: "/", label: "Home" },
      { to: "/play", label: "Play" },
    ];
  }
  return [
    { to: "/play", label: "Play" },
    { to: "/leaderboard", label: "Leaderboard" },
  ];
}
