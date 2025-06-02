import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBackground = isScrolled || !isHomePage ? 'bg-white shadow-sm' : 'bg-transparent';
  const logoBackground = isScrolled || !isHomePage 
    ? 'bg-primary-50 group-hover:bg-primary-100' 
    : 'bg-white/10 backdrop-blur-sm';
  const logoColor = isScrolled || !isHomePage ? 'text-primary-600' : 'text-white';
  const brandColor = isScrolled || !isHomePage ? 'text-gray-900' : 'text-white';
  const linkColor = isScrolled || !isHomePage 
    ? 'text-gray-600 hover:text-gray-900' 
    : 'text-primary-100 hover:text-white';
  const buttonStyle = isScrolled || !isHomePage
    ? 'bg-primary-600 text-white hover:bg-primary-700'
    : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBackground}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className={`p-2 rounded-lg transition-colors ${logoBackground}`}>
              <Brain className={`w-6 h-6 transition-colors ${logoColor}`} />
            </div>
            <span className={`text-xl font-bold transition-colors ${brandColor}`}>
              Mofassir
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className={`transition-colors ${linkColor}`}>
              Services
            </Link>
            <Link to="/use-cases" className={`transition-colors ${linkColor}`}>
              Use Cases
            </Link>
            <Link 
              to="/contact" 
              className={`px-4 py-2 rounded-lg transition-colors ${buttonStyle}`}
            >
              Send Inquiry
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-primary-50"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-primary-600" />
            ) : (
              <Menu className="w-6 h-6 text-primary-600" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-primary-100 bg-white">
            <div className="flex flex-col space-y-4">
              <Link to="/services" className="text-gray-600 hover:text-gray-900">
                Services
              </Link>
              <Link to="/use-cases" className="text-gray-600 hover:text-gray-900">
                Use Cases
              </Link>
              <Link 
                to="/contact" 
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors inline-block text-center"
              >
                Send Inquiry
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}