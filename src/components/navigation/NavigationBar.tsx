import { useState, useEffect } from 'react';
import { navBasePath, navLinks } from './constants';
import { isHomePage } from './helpers';
import { NavigationMenuIcon } from './NavigationMenuIcon';
import { NavigationCloseIcon } from './NavigationCloseIcon';
import { Link } from "react-router";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

// The Navigation Bar Component
export const NavigationBar = ({ currentPage, onNavigate }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Set state based on scroll position
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  const handleNavClick = (path: string) => {
    if (currentPage !== path) {
        const url = isHomePage(path) ? `${navBasePath}/` : `${navBasePath}/${path}`;
        window.history.pushState({ page: path }, '', url);
        onNavigate(path);
    }
    setIsMenuOpen(false); // Close mobile menu on navigation
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out ${isHomePage(currentPage) ? (isScrolled ? 'bg-black shadow-lg' : 'bg-transparent') : 'bg-black shadow-lg'}`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href={`${navBasePath}/`} onClick={(e) => { e.preventDefault(); handleNavClick(''); }} className="text-white text-2xl font-bold tracking-wider">
              LOGO
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                // <a
                //   key={link}
                //   href={`${navBasePath}/${link}`}
                //   onClick={(e) => { e.preventDefault(); handleNavClick(link); }}
                //   className={`${currentPage === link ? 'text-white' : 'text-gray-300'} hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                // >
                //   {link}
                // </a>
                <Link to={`${navBasePath}/${link}`}>{link}</Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-gray-900/50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <NavigationCloseIcon className="block h-6 w-6" /> : <NavigationMenuIcon className="block h-6 w-6" /> }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state. */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`${navBasePath}/${link}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link); }}
                className={`${currentPage === link ? 'text-white bg-gray-700' : 'text-gray-300'} hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
