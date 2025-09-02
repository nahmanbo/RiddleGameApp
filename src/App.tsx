import { Routes, Route } from "react-router";
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Play from "./pages/PlayPage";
import Crud from "./pages/CrudPage";
import Leaderboard from "./pages/LeaderboardPage";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import { useNavLinks } from "./hooks/useNavLinks";

export default function App() {
  const links = useNavLinks(); // בטוח עכשיו — App כבר עטוף ב־Router

  return (
    <>
      <Header>
        <NavBar items={links} />
        <Title text="Riddle Game" />
        <ThemeToggle />
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/play" element={<Play />} />
        <Route path="/crud" element={<Crud />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </>
  );
}
