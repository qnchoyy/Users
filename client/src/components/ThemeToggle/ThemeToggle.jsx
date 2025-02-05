import { useEffect } from "react";

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 bg-gray-300 dark:bg-gray-700 rounded-lg"
    >
      {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
