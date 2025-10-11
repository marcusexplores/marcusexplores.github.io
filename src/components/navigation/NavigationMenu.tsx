import { Link } from "react-router";
import { motion } from "motion/react";
import { cn } from "@/functions/cn";
import { navigationMenuItems } from "./data/items";

interface NavigationMenuProps {
  isScrolledDown: boolean;
  onItemClick: () => void;
}

export const NavigationMenu = ({ isScrolledDown, onItemClick }: NavigationMenuProps) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className={cn(
      "fixed inset-x-0 top-[70px]",
      isScrolledDown ? "bg-gray-900" : "bg-gray-800",
      "p-4 shadow-2xl z-40 lg:hidden rounded-b-xl"
    )}
  >
    <nav className="flex flex-col space-y-4">
      {navigationMenuItems.map((item, index) => (
        <Link
          key={index}
          to={item.key}
          onClick={onItemClick}
          className="text-lg font-medium text-white hover:text-indigo-400 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-700"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  </motion.div>
);
