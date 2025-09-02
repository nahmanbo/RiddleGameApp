import { useState } from "react";
import "../styles/theme-toggle.css";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme ? "dark" : "light");
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      <span className={isDark ? "sun-icon" : "moon-icon"}>
        {isDark ? "☀" : "🌑"}
      </span>
    </button>
  );
}
