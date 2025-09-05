import { useLocation } from "react-router";
import type { NavItem } from "../components/NavBar";

export function useNavLinks(): NavItem[] {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return [
      { to: "/auth?tab=login", label: "Login" },
      { to: "/auth?tab=register", label: "Register" },
    ];
  }
  if (pathname.startsWith("/auth")) {
    return [
      { to: "/", label: "Home" },
      { to: "/play", label: "Play" },
    ];
  }
  if (pathname.startsWith("/play")) {
    return [
      { to: "/", label: "Home" },
      { to: "/crud", label: "Crud" },
      { to: "/leaderboard", label: "Leaderboard" },
    ];
  }
  return [
    { to: "/", label: "Home" },
    { to: "/play", label: "Play" },
  ];
}
