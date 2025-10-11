import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "motion/react";
import { NavigationMenu } from "./NavigationMenu";
import { NavigationBarCenter } from "./NavigationBarCenter";
import { NavigationBarLeft } from "./NavigationBarLeft";
import { NavigationBarRight } from "./NavigationBarRight";

const SCROLL_THRESHOLD = 80; // Distance in pixels to scroll before the background changes and hiding logic activates

export const NavigationBar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Determine appearance based on scroll position
  const isScrolledDown = scrollY > SCROLL_THRESHOLD;

  // Set the header's dynamic style classes
  const headerClass = useMemo(() => {
    return `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-8 py-4
      ${
        isScrolledDown
          ? "bg-gray-900 shadow-xl border-b border-gray-700"
          : "bg-transparent border-b border-transparent"
      }`;
  }, [isScrolledDown]);

  // Framer Motion variants for the hide/show animation
  const navVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: "-100%", opacity: 0 },
  };

  // Debounced scroll handler logic
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Background and initial state logic
    setScrollY(currentScrollY);

    // Hiding/Showing logic (only if scrolled past the threshold)
    if (currentScrollY > SCROLL_THRESHOLD) {
      // Scrolling down: hide the navbar
      if (currentScrollY > prevScrollY) {
        setIsVisible(false);
      }
      // Scrolling up: show the navbar
      else if (currentScrollY < prevScrollY) {
        setIsVisible(true);
      }
    } else {
      // Always visible at the top
      setIsVisible(true);
    }

    setPrevScrollY(currentScrollY);
  }, [prevScrollY]);

  // Attach scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Close menu when links are clicked or scroll state changes
  const handleNavigationItemClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleMenuIconClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Close menu if scrolling down
  useEffect(() => {
    if (!isVisible && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isVisible, isMenuOpen]);

  return (
    <>
      <motion.div
        className={headerClass}
        initial="visible"
        animate={isVisible ? "visible" : "hidden"}
        variants={navVariants}
        transition={{ duration: 0.2 }}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <NavigationBarLeft isMenuOpen={isMenuOpen} onMenuClick={handleMenuIconClick} onLogoClick={handleNavigationItemClick} />
          <NavigationBarCenter onLogoClick={handleNavigationItemClick} />
          <NavigationBarRight onNavigationItemClick={handleNavigationItemClick} />
        </div>
      </motion.div>

      {isMenuOpen && (
        <NavigationMenu isScrolledDown={isScrolledDown} onItemClick={handleNavigationItemClick}
        />
      )}
    </>
  );
};
