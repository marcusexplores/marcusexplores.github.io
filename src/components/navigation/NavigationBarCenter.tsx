import { NavigationLogo } from "./NavigationLogo";

interface NavigationBarCenter {
  onLogoClick: () => void;
}

export const NavigationBarCenter = ({ onLogoClick }: NavigationBarCenter) => {
  return (
    <div className="flex-grow flex justify-center lg:hidden">
      <NavigationLogo onClick={onLogoClick} />
    </div>
  );
};
