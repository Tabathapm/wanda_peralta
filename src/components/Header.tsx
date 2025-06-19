import React, { useState, useEffect, useRef } from 'react';
import { Download, Menu, X } from 'lucide-react';
import html2pdf from 'html2pdf.js';

const CV = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px',
      lineHeight: 1.6,
      color: '#333',
      backgroundColor: '#fff'
    }}
  >
    <div style={{ textAlign: 'center', marginBottom: '20px', borderBottom: '3px solid #0d9488', paddingBottom: '20px' }}>
      <h1 style={{ fontSize: '32px', margin: 0, color: '#0d9488', fontWeight: 'bold' }}>Wanda Peralta</h1>
      <h2 style={{ fontSize: '18px', margin: '10px 0', color: '#666', fontWeight: 'normal' }}>Técnica Universitaria en Anatomía Patológica</h2>
      <div style={{ marginTop: '15px', fontSize: '14px', color: '#666' }}>
        <span style={{ marginRight: '20px' }}>📧 wandaperalta850@gmail.com</span>
        <span style={{ marginRight: '20px' }}>📱 +54 11 6902 3229</span>
        <span>📍 Buenos Aires, Argentina</span>
      </div>
    </div>

    <div style={{ marginBottom: '30px' }}>
      {/* <h3 style={{ color: '#0d9488', fontSize: '18px', marginBottom: '10px', borderBottom: '2px solid #0d9488', paddingBottom: '5px' }}>PERFIL PROFESIONAL</h3> */}
      <p style={{ margin: 0, textAlign: 'justify' }}>
        Técnica Universitaria en Anatomía Patológica con más de 8 años de experiencia en laboratorios hospitalarios, especializada en histología y citología. Comprometida con la excelencia en el diagnóstico médico y la aplicación de protocolos de calidad y bioseguridad. Experiencia en técnicas avanzadas de inmunohistoquímica y manejo de equipos especializados.
      </p>
    </div>

    <div style={{ marginBottom: '30px' }}>
      <h3 style={{ color: '#0d9488', fontSize: '18px', marginBottom: '15px', borderBottom: '2px solid #0d9488', paddingBottom: '5px' }}>EXPERIENCIA PROFESIONAL</h3>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
          <h4 style={{ margin: 0, fontSize: '16px', color: '#333' }}>Técnico Superior en Anatomía Patológica</h4>
          <span style={{ fontSize: '14px', color: '#666' }}>2020 - Presente</span>
        </div>
        <p style={{ margin: '0 0 5px 0', fontWeight: 'bold', color: '#0d9488' }}>Hospital Lala, Argentina</p>
        <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
          <li>Procesamiento de muestras histológicas y citológicas para diagnóstico</li>
          <li>Realización de técnicas de tinción especiales (HE, PAS, Tricrómico)</li>
          <li>Manejo de equipos automatizados de procesamiento histológico</li>
          <li>Supervisión de protocolos de calidad y bioseguridad</li>
        </ul>
      </div>
    </div>

    <div style={{ marginBottom: '10px' }}>
      <h3 style={{ color: '#0d9488', fontSize: '18px', marginBottom: '15px', borderBottom: '2px solid #0d9488', paddingBottom: '5px' }}>FORMACIÓN ACADÉMICA</h3>
      <div style={{ marginBottom: '15px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
          <h4 style={{ margin: 0, fontSize: '16px', color: '#333' }}>Técnico Universitario en Anatomía Patológica</h4>
          <span style={{ fontSize: '14px', color: '#666' }}>2023 - Presente</span>
        </div>
        <p style={{ margin: 0, color: '#0d9488', fontWeight: 'bold' }}>Universidad Nacional de La Matanza - UNLaM</p>
        <p style={{ margin: '5px 0', fontSize: '14px' }}>Nota media: 8.7/10 - Graduada de pedo</p>
      </div>
    </div>

    <div style={{ marginBottom: '0px' }}>
      <h3 style={{ color: '#0d9488', fontSize: '18px', marginBottom: '15px', borderBottom: '2px solid #0d9488', paddingBottom: '5px' }}>COMPETENCIAS TÉCNICAS</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#333', fontWeight: 'bold' }}>Técnicas Histológicas:</h4>
          <ul style={{ margin: 0, paddingLeft: '15px', fontSize: '13px' }}>
            <li>Hematoxilina-Eosina (HE)</li>
            <li>Tricrómico de Masson</li>
            <li>PAS (Ácido Peryódico de Schiff)</li>
            <li>Reticulina de Gomori</li>
            <li>Van Gieson</li>
          </ul>
        </div>
        <div>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#333', fontWeight: 'bold' }}>Técnicas Especializadas:</h4>
          <ul style={{ margin: 0, paddingLeft: '15px', fontSize: '13px' }}>
            <li>Inmunohistoquímica</li>
            <li>Citología Ginecológica</li>
            <li>Citología de Líquidos</li>
            <li>Técnicas de Congelación</li>
            <li>Microscopía Electrónica</li>
          </ul>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '15px' }}>
        <div>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#333', fontWeight: 'bold' }}>Equipos de Laboratorio:</h4>
          <ul style={{ margin: 0, paddingLeft: '15px', fontSize: '13px' }}>
            <li>Micrótomo Rotatorio</li>
            <li>Procesador de Tejidos</li>
            <li>Estación de Inclusión</li>
            <li>Teñidor Automático</li>
            <li>Criostato</li>
          </ul>
        </div>
        <div>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#333', fontWeight: 'bold' }}>Bioseguridad y Calidad:</h4>
          <ul style={{ margin: 0, paddingLeft: '15px', fontSize: '13px' }}>
            <li>Protocolos de Bioseguridad</li>
            <li>Control de Calidad</li>
            <li>Gestión de Residuos</li>
            <li>Documentación ISO 15189</li>
            <li>Trazabilidad de Muestras</li>
          </ul>
        </div>
      </div>
    </div>

    {/* <div style={{ marginBottom: '30px' }}>
      <h3 style={{ color: '#0d9488', fontSize: '18px', marginBottom: '15px', borderBottom: '2px solid #0d9488', paddingBottom: '5px' }}>CERTIFICACIONES PROFESIONALES</h3>
      <ul style={{ margin: 0, paddingLeft: '20px' }}>
        <li><strong>Certificación en Bioseguridad en Laboratorios</strong> - Colegio Profesional de Técnicos Sanitarios (2023)</li>
        <li><strong>Curso Avanzado de Inmunohistoquímica</strong> - Sociedad Española de Anatomía Patológica (2022)</li>
        <li><strong>Especialización en Citología Ginecológica</strong> - Hospital Universitario Ramón y Cajal (2021)</li>
        <li><strong>Certificación en Control de Calidad ISO 15189</strong> (2021)</li>
      </ul>
    </div> */}

    {/* <div style={{ marginBottom: '30px' }}>
      <h3 style={{ color: '#0d9488', fontSize: '18px', marginBottom: '15px', borderBottom: '2px solid #0d9488', paddingBottom: '5px' }}>RECONOCIMIENTOS Y LOGROS</h3>
      <ul style={{ margin: 0, paddingLeft: '20px' }}>
        <li><strong>Técnico del Año 2023</strong> - Hospital Universitario La Paz</li>
        <li><strong>Mejor Caso Clínico Presentado</strong> - XXXV Congreso Nacional de Anatomía Patológica (2022)</li>
        <li><strong>Premio a la Innovación Técnica</strong> - Sociedad Española de Técnicos en Anatomía Patológica (2021)</li>
        <li><strong>Certificación de Excelencia en Bioseguridad</strong> - Ministerio de Sanidad (2022)</li>
      </ul>
    </div> */}

    {/* <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}> */}
      {/* <div>
        <h3 style={{ color: '#0d9488', fontSize: '18px', marginBottom: '15px', borderBottom: '2px solid #0d9488', paddingBottom: '5px' }}>IDIOMAS</h3>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li><strong>Español:</strong> Nativo</li>
          <li><strong>Inglés:</strong> Técnico</li>
        </ul>
      </div> */}
      {/* <div>
        <h3 style={{ color: '#0d9488', fontSize: '18px', marginBottom: '15px', borderBottom: '2px solid #0d9488', paddingBottom: '5px' }}>INFORMACIÓN ADICIONAL</h3>
        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
          <li>15,000+ muestras procesadas</li>
          <li>8 años de experiencia</li>
          <li>25+ técnicas dominadas</li>
          <li>Disponibilidad inmediata</li>
        </ul>
      </div> */}
    {/* </div> */}
  </div>
));

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