import { Link } from "react-router";
import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";
import { navigationItems } from "./data/items";

interface NavigationBarRightProps {
  onNavigationItemClick: () => void;
}

export const NavigationBarRight = ({ onNavigationItemClick }: NavigationBarRightProps) => {
  return (
    <div className="flex items-center space-x-6">
      <nav className="hidden lg:flex space-x-8">
        {navigationItems.map((item, index) => (
          <Link
            key={index}
            to={item.key}
            onClick={onNavigationItemClick}
            className={`relative text-base font-medium transition-colors duration-300 text-primary-foreground hover:text-indigo-400`}
          >
            {item.label}
            <span className="absolute left-0 bottom-0 block h-[2px] w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>
      <ThemeSwitcher />
    </div>
  );
};
