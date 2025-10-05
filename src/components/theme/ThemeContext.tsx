import { createContext } from "react";
import type { Theme } from "./types";
import { THEME } from "./constants";

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const initialState: ThemeProviderState = {
  theme: THEME.SYSTEM,
  setTheme: () => null,
};

export const ThemeContext = createContext<ThemeProviderState>(initialState);