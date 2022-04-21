import { useEffect, useState } from "react";

export const useDarkMode = (usePreferences) => {
  const [mode, setMode] = useState(null);

  useEffect(() => {
    const userPreference =
      !!window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    setMode(
      // use stored theme; fallback to user preference
      window.localStorage.getItem("theme") ||
        (userPreference ? "dark" : "light")
    );
  }, []);

  useEffect(() => {
    if (mode) {
      window.localStorage.setItem("theme", mode);
      document.documentElement.classList.add(mode);
    }
  }, [mode]);

  if (!usePreferences) return [null, null, null];

  const toggleMode = () => {
    if (mode === "light") {
      document.documentElement.className = "";
      document.documentElement.classList.add("dark");
      setMode("dark");
    } else {
      document.documentElement.className = "";
      document.documentElement.classList.add("light");
      setMode("light");
    }
  };

  return [mode, setMode, toggleMode];
};

export default useDarkMode;
