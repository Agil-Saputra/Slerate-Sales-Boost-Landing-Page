import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/slerate-sales-boost-logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    closeMobileMenu();
  };

  return (
    <header className="px-4 lg:px-24 bg-white border-b border-gray-200 sticky top-0 w-full z-50">
      <div className="flex justify-between items-center">
        <a className="flex items-center justify-center" href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-32 sm:w-48 h-auto rounded flex items-center justify-center">
            <img src={logo} alt="logo" />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <button
            className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
            onClick={() => handleScrollToSection('features')}
          >
            FEATURES
          </button>
          <button
            className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
            onClick={() => handleScrollToSection('pricing')}
          >
            PRICING
          </button>
          <button
            className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
            onClick={() => handleScrollToSection('contact')}
          >
            CONTACT
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-blue-900 transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-4">
            <button
              className="block text-left w-full text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors py-2"
              onClick={() => handleScrollToSection('features')}
            >
              FEATURES
            </button>
            <button
              className="block text-left w-full text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors py-2"
              onClick={() => handleScrollToSection('pricing')}
            >
              PRICING
            </button>
            <button
              className="block text-left w-full text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors py-2"
              onClick={() => handleScrollToSection('contact')}
            >
              CONTACT
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
