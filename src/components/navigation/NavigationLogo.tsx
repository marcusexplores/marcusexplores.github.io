import { Link } from "react-router";
import { cn } from "@/functions/cn";
import { NAVIGATION_KEY } from "./constants";

interface NavigationLogoProps {
  onClick: () => void;
  className?: string;
}

export const NavigationLogo = ({
  onClick,
  className,
}: NavigationLogoProps) => {
  return (
    <Link
      to={NAVIGATION_KEY.HOME}
      className={cn("flex items-center space-x-2", className)}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={"text-white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span
        className={`text-xl font-bold transition-colors duration-300 text-foreground`}
      >
        Marcus Explores
      </span>
    </Link>
  );
};
