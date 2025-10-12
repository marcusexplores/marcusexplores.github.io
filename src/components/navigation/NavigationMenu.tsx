import { Link } from "react-router";
import { motion } from "motion/react";
import { cn } from "@/functions/cn";
import { navigationMenuItems } from "./data/items";
import { NavigationMenuBackdrop } from "./NavigationMenuBackdrop";

interface NavigationMenuProps {
  onClose: () => void;
}

export const NavigationMenu = ({ onClose }: NavigationMenuProps) => (
  <NavigationMenuBackdrop onClick={onClose}>
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={(e) => { e.stopPropagation(); }} // Stop click events from propagating to the backdrop div (closing the menu)
      className={cn(
        "fixed inset-x-0 top-[70px] p-4 shadow-2xl z-40 lg:hidden rounded-b-xl",
        "bg-background"
      )}
    >
      <nav className="flex flex-col space-y-4">
        {navigationMenuItems.map((item, index) => (
          <Link
            key={index}
            to={item.key}
            onClick={onClose}
            className="text-lg font-medium text-foreground hover:text-indigo-400 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-700"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </motion.div>
  </NavigationMenuBackdrop>
);
