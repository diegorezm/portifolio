import { useState } from "react";
export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") || "light";
      document.body.setAttribute("data-theme", storedTheme);
      return storedTheme;
    }
    return "light";
  });

  const setDarkMode = () => {
    setTheme("dark");
    localStorage.setItem("theme", "dark");
    document.querySelector("body")?.setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    setTheme("light");
    localStorage.setItem("theme", "light");
    document.querySelector("body")?.setAttribute("data-theme", "light");
  };

  const toggleTheme = () => {
    return theme === "dark" ? setLightMode() : setDarkMode()
  };

  return { theme, toggleTheme }
}
