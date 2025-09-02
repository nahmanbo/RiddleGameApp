import { Routes, Route } from "react-router";
import Home from "./pages/HomePage";
import Auth from "./pages/AuthPage";
import Play from "./pages/PlayPage";
import Crud from "./pages/CrudPage";
import Leaderboard from "./pages/LeaderboardPage";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import { useNavLinks } from "./hooks/useNavLinks";

export default function App() {
  const links = useNavLinks(); 

  return (
    <>
      <Header>
        <NavBar items={links} />
        <Title text="Riddle Game" />
        <ThemeToggle />
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} /> 
        <Route path="/play" element={<Play />} />
        <Route path="/crud" element={<Crud />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </>
  );
}
