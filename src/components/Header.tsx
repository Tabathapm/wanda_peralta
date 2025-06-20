import React, { useState, useEffect, useRef } from 'react';
import { Download, Menu, X } from 'lucide-react';
import html2pdf from 'html2pdf.js';
import CV from './CV';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { href: '#sobre-mi', label: 'Sobre Mí' },
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#educacion', label: 'Formación' },
    { href: '#herramientas', label: 'Competencias' },
    { href: '#intereses', label: 'Intereses' },
    { href: '#reconocimientos', label: 'Reconocimientos' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pdfRef = useRef();

  const downloadPDF = () => {
    
    if (!pdfRef.current) return;

    const opt = {
      margin: 0,
      filename: 'CV-Wanda-Peralta.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        backgroundColor: '#fff'
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().set(opt).from(pdfRef.current).save();
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 no-print ${
      isScrolled ? 'bg-white/95 backdrop-blur shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-teal-600">
            Wanda Peralta
          </div>

          <div style={{ display: 'none' }}>
            <CV ref={pdfRef} />
          </div>

          {/* Navegacion */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-teal-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={downloadPDF}
              className="flex items-center space-x-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200"
            >
              <Download size={18} />
              <span>Descargar CV</span>
            </button>
          </div>

          {/* Boton Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navegacion Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg border">
            <div className="py-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-teal-600 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 py-3 border-t">
                <button
                  onClick={downloadPDF}
                  className="flex items-center space-x-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200 w-full justify-center"
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