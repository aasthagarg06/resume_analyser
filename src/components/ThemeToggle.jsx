import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white transition duration-300"
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌙 " : "☀️ "}
    </button>
  );
}