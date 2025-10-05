import { Monitor, Moon, Sun } from "lucide-react";
import { THEME } from "./constants";

export const themes = [
  {
    key: THEME.SYSTEM,
    icon: Monitor,
    label: `${THEME.SYSTEM} theme`,
  },
  {
    key: THEME.LIGHT,
    icon: Sun,
    label: `${THEME.LIGHT} theme`,
  },
  {
    key: THEME.DARK,
    icon: Moon,
    label: `${THEME.DARK} theme`,
  },
];
