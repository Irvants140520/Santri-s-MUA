import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { brandData } from "../data/mock";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="navigation-header">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="navigation-logo">
            {brandData.name}
          </a>

          {/* Desktop Navigation - Hidden on mobile, visible on medium screens and up */}
          <nav className="hidden lg:flex navigation-menu">
            <button onClick={() => scrollToSection('portfolio')} className="navigation-link">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('services')} className="navigation-link">
              Layanan
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="navigation-link">
              Testimoni
            </button>
            <button onClick={() => scrollToSection('about')} className="navigation-link">
              Tentang
            </button>
            <button onClick={() => scrollToSection('faq')} className="navigation-link">
              FAQ
            </button>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="navigation-utilities flex items-center gap-4">
            <a
              href={brandData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden lg:inline-flex"
            >
              Booking Sekarang
            </a>

            {/* Mobile Menu Toggle - Show only on mobile/tablet */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-rose-gold transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Show only when menu is open and on mobile/tablet */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-3 pt-4">
              <button onClick={() => scrollToSection('portfolio')} className="navigation-link text-left py-2 px-4 hover:bg-soft-peach/20 rounded transition-colors">
                Portfolio
              </button>
              <button onClick={() => scrollToSection('services')} className="navigation-link text-left py-2 px-4 hover:bg-soft-peach/20 rounded transition-colors">
                Layanan
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="navigation-link text-left py-2 px-4 hover:bg-soft-peach/20 rounded transition-colors">
                Testimoni
              </button>
              <button onClick={() => scrollToSection('about')} className="navigation-link text-left py-2 px-4 hover:bg-soft-peach/20 rounded transition-colors">
                Tentang
              </button>
              <button onClick={() => scrollToSection('faq')} className="navigation-link text-left py-2 px-4 hover:bg-soft-peach/20 rounded transition-colors">
                FAQ
              </button>
              
              <div className="pt-4 border-t border-gray-200">
                <a
                  href={brandData.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  Booking Sekarang
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;