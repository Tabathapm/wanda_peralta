import { useState, useEffect } from 'react';
import { Download, Menu, X, Moon, Sun } from 'lucide-react';
import CV from './CV';
import { usePdfDownload } from '../hooks/usePdfDownload';
import { useTheme } from '../hooks/useTheme';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pdfRef, downloadPDF } = usePdfDownload();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { href: '#sobre-mi', label: 'Sobre Mí' },
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#educacion', label: 'Formación' },
    { href: '#herramientas', label: 'Competencias' },
    { href: '#intereses', label: 'Intereses' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 no-print ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg shadow-lg shadow-brand-900/5 border-b border-gray-100 dark:border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-2xl font-bold bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent"
          >
            Wanda Peralta
          </button>

          <div style={{ display: 'none' }}>
            <CV ref={pdfRef} />
          </div>

          {/* Navegación */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="relative text-gray-700 dark:text-gray-200 hover:text-brand-600 dark:hover:text-brand-300 transition-colors duration-200 font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-brand-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              aria-label="Cambiar tema"
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={downloadPDF}
              className="flex items-center space-x-2 bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 shadow-md shadow-brand-600/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Download size={18} />
              <span>Descargar CV</span>
            </button>
          </div>

          {/* Botones mobile */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Cambiar tema"
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-200"
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Navegación mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="py-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-brand-50 dark:hover:bg-gray-800 hover:text-brand-600 dark:hover:text-brand-300 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-800">
                <button
                  onClick={downloadPDF}
                  className="flex items-center space-x-2 bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition-colors duration-200 w-full justify-center"
                >
                  <Download size={18} />
                  <span>Descargar CV</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;