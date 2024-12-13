import { useState } from 'react';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="#" className="text-xl font-bold">
          Marius Bjeglerud
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#projects" className="hover:text-gray-300">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-2">
            <span className="block w-6 h-1 bg-white"></span>
            <span className="block w-6 h-1 bg-white"></span>
            <span className="block w-6 h-1 bg-white"></span>
          </div>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-700 text-center py-4">
          <a href="#home" className="block py-2 text-lg hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="block py-2 text-lg hover:text-gray-300">
            About
          </a>
          <a href="#projects" className="block py-2 text-lg hover:text-gray-300">
            Projects
          </a>
          <a href="#contact" className="block py-2 text-lg hover:text-gray-300">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
