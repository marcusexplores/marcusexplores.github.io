import { NAVIGATION_KEY } from "../constants";

interface NavigationItem {
  key: string;
  label: string;
}

export const navigationItems: DeepReadonly<NavigationItem[]> = [
  {
    key: NAVIGATION_KEY.TRAVELOGUE,
    label: "Travelogue",
  },
];
