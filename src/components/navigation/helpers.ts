import { NAVIGATION_KEY } from "./constants";

export const isHomePage = (path: string): boolean => {
  return path === NAVIGATION_KEY.HOME;
}