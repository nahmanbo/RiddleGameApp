// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Play from "./pages/PlayPage";
import Crud from "./pages/CrudPage";
import Leaderboard from "./pages/LeaderboardPage";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <BrowserRouter>
      <Header>
        <ThemeToggle />
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/play" element={<Play />} />
        <Route path="/crud" element={<Crud />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}
