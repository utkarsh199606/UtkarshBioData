import { Menu, Heart, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full top-0 z-50 transition-colors duration-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="text-pink-600 dark:text-pink-400 h-6 w-6 animate-heartbeat" />
            <span className="text-xl font-semibold dark:text-white">Wedding Profile</span>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden dark:text-white" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </button>

          {/* Right Sliding Bar */}
          <div
            className={`fixed top-0 right-0 h-full w-72 max-w-[90vw] bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden z-50 p-6 flex flex-col`} // Increased padding
          >
            {/* Close Button */}
            <button className="absolute top-4 right-4 dark:text-white" onClick={toggleMenu}>
              <X className="h-6 w-6" />
            </button>

            <div className="mt-10 flex flex-col space-y-6 text-xl"> {/* Increased margin top and text size, space between items*/}
              <a href="#about" className="nav-link dark:text-gray-300" onClick={toggleMenu}>About</a>
              <a href="#details" className="nav-link dark:text-gray-300" onClick={toggleMenu}>Details</a>
              <a href="#gallery" className="nav-link dark:text-gray-300" onClick={toggleMenu}>Gallery</a>
              <a href="#family" className="nav-link dark:text-gray-300" onClick={toggleMenu}>Family</a>
              <a href="#contact" className="nav-link dark:text-gray-300" onClick={toggleMenu}>Contact</a>
              <div className="mt-auto">
              <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Desktop Nav (Hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="nav-link dark:text-gray-300">About</a>
            <a href="#details" className="nav-link dark:text-gray-300">Details</a>
            <a href="#gallery" className="nav-link dark:text-gray-300">Gallery</a>
            <a href="#family" className="nav-link dark:text-gray-300">Family</a>
            <a href="#contact" className="nav-link dark:text-gray-300">Contact</a>
            <ThemeToggle />
          </div>
        </div>
      </nav>
      {/* Overlay to prevent clicks behind the menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden" onClick={toggleMenu} />
      )}
    </header>
  );
}