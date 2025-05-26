"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { themes, type ThemeName } from "@/config/themes";

interface ThemeContextType {
  theme: ThemeName;
  toggleTheme: () => void;
  setTheme: (theme: ThemeName) => void;
  availableThemes: typeof themes;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
  availableThemes: themes,
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeName>("dark");

  const applyTheme = (themeName: ThemeName) => {
    const selectedTheme = themes.find((t) => t.value === themeName);
    if (!selectedTheme) return;

    const root = document.documentElement;

    // Remove all theme classes
    themes.forEach((t) => {
      root.classList.remove(t.value);
    });

    // Add current theme class
    root.classList.add(themeName);

    // Apply CSS variables
    Object.entries(selectedTheme.colors).forEach(([key, value]) => {
      const cssVar = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      root.style.setProperty(`--${cssVar}`, value);
    });
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as ThemeName | null;
    if (storedTheme && themes.find((t) => t.value === storedTheme)) {
      setTheme(storedTheme);
      applyTheme(storedTheme);
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
      applyTheme("dark");
    } else {
      applyTheme("dark");
    }
  }, []);

  const handleSetTheme = (newTheme: ThemeName) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    const currentIndex = themes.findIndex((t) => t.value === theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex].value;
    handleSetTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme: handleSetTheme,
        availableThemes: themes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
