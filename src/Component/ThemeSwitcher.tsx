import Moon from "@/Component/Moon";
import Sun from "@/Component/Sun";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className='absolute right-2 top-2'>
      <button onClick={toggleTheme}>
        {theme === "light" ? (
          <span className='relative top-1 right-1'>
            <Moon />
          </span>
        ) : (
          <Sun />
        )}
      </button>
    </div>
  );
}

type Theme = "dark" | "light";
function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");
  // get the current theme from local storage if it exists onMount
  useEffect(() => {
    updateTheme();
  }, []);

  // set the theme on click
  const toggleTheme = () => {
    if (!window) return;
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };
  return { theme, toggleTheme };

  function updateTheme() {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setTheme("dark" as Theme);
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }
}
