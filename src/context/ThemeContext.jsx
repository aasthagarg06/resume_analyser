import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState(() => {

    // First check if the user has already chosen a theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme;
    }

    // Otherwise use the computer's theme
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  });

  useEffect(() => {

    if (theme === "dark") {

      document.documentElement.classList.add("dark");

    } else {

      document.documentElement.classList.remove("dark");

    }

    localStorage.setItem("theme", theme);

  }, [theme]);

  const toggleTheme = () => {

    setTheme(theme === "light" ? "dark" : "light");

  };

  return (

    <ThemeContext.Provider value={{ theme, toggleTheme }}>

      {children}

    </ThemeContext.Provider>

  );

}

export function useTheme() {

  return useContext(ThemeContext);

}