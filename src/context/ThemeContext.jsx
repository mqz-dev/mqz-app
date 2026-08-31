/* eslint-disable react-refresh/only-export-components */

import { useState, useEffect, createContext, useContext } from "react";

const STORAGE_KEY = "mqz-theme";

export const ThemeContext = createContext();

function loadInitialTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY) || null;
  } catch {
    return null;
  }
}

export function ThemeProvider({ children }) {
  const [selectedTheme, setSelectedTheme] = useState(() => loadInitialTheme());

  useEffect(() => {
    try {
      if (selectedTheme) {
        localStorage.setItem(STORAGE_KEY, selectedTheme);
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // Fail Silently
    }
  }, [selectedTheme]);

  return (
    <ThemeContext.Provider value={{ selectedTheme, setSelectedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
