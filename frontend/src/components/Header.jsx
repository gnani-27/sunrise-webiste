import React, { useState, useEffect } from 'react';
import { navLinks, companyInfo } from '../data/mock';
import { Menu, X, Sun } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#00FFD1] flex items-center justify-center">
              <Sun className="w-6 h-6 text-black" />
            </div>
            <span className="text-xl font-semibold text-white group-hover:text-[#00FFD1] transition-colors duration-300">
              {companyInfo.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#4D4D4D] hover:text-white text-lg font-normal transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/10 animate-fade-in">
          <div className="container-custom py-6">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white text-lg py-2 hover:text-[#00FFD1] transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary mt-4 justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
