import { NavigationLogo } from "./NavigationLogo";
import { NavigationMenuIcon } from "./NavigationMenuIcon";
import { NavigationMenuCloseIcon } from "./NavigationMenuCloseIcon";

interface NavigationBarLeftProps {
  isMenuOpen: boolean;
  onMenuClick: () => void;
  onLogoClick: () => void;
}

export const NavigationBarLeft = ({ isMenuOpen, onMenuClick, onLogoClick }: NavigationBarLeftProps) => {
  return (
    <div className="flex items-center space-x-4">
      {/* Mobile Menu Toggle */}
      <button
        onClick={onMenuClick}
        className={`lg:hidden p-2 rounded-md transition-colors duration-200 text-foreground hover:bg-gray-700`}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? (
          <NavigationMenuCloseIcon className="block h-6 w-6" />
        ) : (
          <NavigationMenuIcon className="block h-6 w-6" />
        )}
      </button>

      {/* Desktop Logo  */}
      <NavigationLogo onClick={onLogoClick} className="hidden lg:flex" />
    </div>
  );
};
