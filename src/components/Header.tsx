import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import html2pdf from 'html2pdf.js';

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

  const downloadPDF = () => {
    // Crear contenido específico para CV en PDF
    const cvContent = `
      <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 40px; line-height: 1.6; color: #333;">
        <!-- Header del CV -->
        <div style="text-align: center; margin-bottom: 40px; border-bottom: 3px solid #0d9488; padding-bottom: 20px;">
          <h1 style="font-size: 32px; margin: 0; color: #0d9488; font-weight: bold;">María Elena Rodríguez</h1>
          <h2 style="font-size: 18px; margin: 10px 0; color: #666; font-weight: normal;">Técnico Superior en Anatomía Patológica</h2>
          <div style="margin-top: 15px; font-size: 14px; color: #666;">
            <span style="margin-right: 20px;">📧 maria.rodriguez@email.com</span>
            <span style="margin-right: 20px;">📱 +34 612 345 678</span>
            <span>📍 Madrid, España</span>
          </div>
        </div>

        <!-- Perfil Profesional -->
        <div style="margin-bottom: 30px;">
          <h3 style="color: #0d9488; font-size: 18px; margin-bottom: 10px; border-bottom: 2px solid #0d9488; padding-bottom: 5px;">PERFIL PROFESIONAL</h3>
          <p style="margin: 0; text-align: justify;">
            Técnico Superior en Anatomía Patológica con más de 8 años de experiencia en laboratorios hospitalarios, 
            especializada en histopatología y citología. Comprometida con la excelencia en el diagnóstico médico 
            y la aplicación de protocolos de calidad y bioseguridad. Experiencia en técnicas avanzadas de 
            inmunohistoquímica y manejo de equipos especializados.
          </p>
        </div>

        <!-- Experiencia Profesional -->
        <div style="margin-bottom: 30px;">
          <h3 style="color: #0d9488; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #0d9488; padding-bottom: 5px;">EXPERIENCIA PROFESIONAL</h3>
          
          <div style="margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
              <h4 style="margin: 0; font-size: 16px; color: #333;">Técnico Superior en Anatomía Patológica</h4>
              <span style="font-size: 14px; color: #666;">2020 - Presente</span>
            </div>
            <p style="margin: 0 0 5px 0; font-weight: bold; color: #0d9488;">Hospital Universitario La Paz, Madrid</p>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>Procesamiento de muestras histológicas y citológicas para diagnóstico</li>
              <li>Realización de técnicas de tinción especiales (HE, PAS, Tricrómico)</li>
              <li>Manejo de equipos automatizados de procesamiento histológico</li>
              <li>Supervisión de protocolos de calidad y bioseguridad</li>
            </ul>
          </div>

          <div style="margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
              <h4 style="margin: 0; font-size: 16px; color: #333;">Técnico en Anatomía Patológica</h4>
              <span style="font-size: 14px; color: #666;">2018 - 2020</span>
            </div>
            <p style="margin: 0 0 5px 0; font-weight: bold; color: #0d9488;">Hospital General de Segovia</p>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>Preparación y procesamiento de biopsias y piezas quirúrgicas</li>
              <li>Realización de técnicas de tinción rutinarias y especiales</li>
              <li>Mantenimiento preventivo de equipos de laboratorio</li>
              <li>Gestión de archivo de bloques de parafina y laminillas</li>
            </ul>
          </div>

          <div style="margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
              <h4 style="margin: 0; font-size: 16px; color: #333;">Técnico Junior en Laboratorio</h4>
              <span style="font-size: 14px; color: #666;">2016 - 2018</span>
            </div>
            <p style="margin: 0 0 5px 0; font-weight: bold; color: #0d9488;">Centro de Diagnóstico Médico, Valladolid</p>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>Recepción y registro de muestras anatomopatológicas</li>
              <li>Preparación de reactivos y soluciones para tinción</li>
              <li>Asistencia en técnicas básicas de histopatología</li>
            </ul>
          </div>
        </div>

        <!-- Formación Académica -->
        <div style="margin-bottom: 30px;">
          <h3 style="color: #0d9488; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #0d9488; padding-bottom: 5px;">FORMACIÓN ACADÉMICA</h3>
          
          <div style="margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
              <h4 style="margin: 0; font-size: 16px; color: #333;">Técnico Superior en Anatomía Patológica y Citodiagnóstico</h4>
              <span style="font-size: 14px; color: #666;">2014 - 2016</span>
            </div>
            <p style="margin: 0; color: #0d9488; font-weight: bold;">IES Sanitario Virgen de la Paloma, Madrid</p>
            <p style="margin: 5px 0; font-size: 14px;">Nota media: 8.7/10 - Graduado con mención honorífica</p>
          </div>

          <div style="margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
              <h4 style="margin: 0; font-size: 16px; color: #333;">Bachillerato Científico-Tecnológico</h4>
              <span style="font-size: 14px; color: #666;">2012 - 2014</span>
            </div>
            <p style="margin: 0; color: #0d9488; font-weight: bold;">IES Miguel de Cervantes, Madrid</p>
            <p style="margin: 5px 0; font-size: 14px;">Nota media: 8.2/10 - Matrícula de honor en Biología</p>
          </div>
        </div>

        <!-- Competencias Técnicas -->
        <div style="margin-bottom: 30px;">
          <h3 style="color: #0d9488; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #0d9488; padding-bottom: 5px;">COMPETENCIAS TÉCNICAS</h3>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
              <h4 style="margin: 0 0 10px 0; font-size: 14px; color: #333; font-weight: bold;">Técnicas Histológicas:</h4>
              <ul style="margin: 0; padding-left: 15px; font-size: 13px;">
                <li>Hematoxilina-Eosina (HE)</li>
                <li>Tricrómico de Masson</li>
                <li>PAS (Ácido Peryódico de Schiff)</li>
                <li>Reticulina de Gomori</li>
                <li>Van Gieson</li>
              </ul>
            </div>
            <div>
              <h4 style="margin: 0 0 10px 0; font-size: 14px; color: #333; font-weight: bold;">Técnicas Especializadas:</h4>
              <ul style="margin: 0; padding-left: 15px; font-size: 13px;">
                <li>Inmunohistoquímica</li>
                <li>Citología Ginecológica</li>
                <li>Citología de Líquidos</li>
                <li>Técnicas de Congelación</li>
                <li>Microscopía Electrónica</li>
              </ul>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 15px;">
            <div>
              <h4 style="margin: 0 0 10px 0; font-size: 14px; color: #333; font-weight: bold;">Equipos de Laboratorio:</h4>
              <ul style="margin: 0; padding-left: 15px; font-size: 13px;">
                <li>Micrótomo Rotatorio</li>
                <li>Procesador de Tejidos</li>
                <li>Estación de Inclusión</li>
                <li>Teñidor Automático</li>
                <li>Criostato</li>
              </ul>
            </div>
            <div>
              <h4 style="margin: 0 0 10px 0; font-size: 14px; color: #333; font-weight: bold;">Bioseguridad y Calidad:</h4>
              <ul style="margin: 0; padding-left: 15px; font-size: 13px;">
                <li>Protocolos de Bioseguridad</li>
                <li>Control de Calidad</li>
                <li>Gestión de Residuos</li>
                <li>Documentación ISO 15189</li>
                <li>Trazabilidad de Muestras</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Certificaciones -->
        <div style="margin-bottom: 30px;">
          <h3 style="color: #0d9488; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #0d9488; padding-bottom: 5px;">CERTIFICACIONES PROFESIONALES</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li><strong>Certificación en Bioseguridad en Laboratorios</strong> - Colegio Profesional de Técnicos Sanitarios (2023)</li>
            <li><strong>Curso Avanzado de Inmunohistoquímica</strong> - Sociedad Española de Anatomía Patológica (2022)</li>
            <li><strong>Especialización en Citología Ginecológica</strong> - Hospital Universitario Ramón y Cajal (2021)</li>
            <li><strong>Certificación en Control de Calidad ISO 15189</strong> (2021)</li>
          </ul>
        </div>

        <!-- Reconocimientos -->
        <div style="margin-bottom: 30px;">
          <h3 style="color: #0d9488; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #0d9488; padding-bottom: 5px;">RECONOCIMIENTOS Y LOGROS</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li><strong>Técnico del Año 2023</strong> - Hospital Universitario La Paz</li>
            <li><strong>Mejor Caso Clínico Presentado</strong> - XXXV Congreso Nacional de Anatomía Patológica (2022)</li>
            <li><strong>Premio a la Innovación Técnica</strong> - Sociedad Española de Técnicos en Anatomía Patológica (2021)</li>
            <li><strong>Certificación de Excelencia en Bioseguridad</strong> - Ministerio de Sanidad (2022)</li>
          </ul>
        </div>

        <!-- Publicaciones -->
        <div style="margin-bottom: 30px;">
          <h3 style="color: #0d9488; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #0d9488; padding-bottom: 5px;">PUBLICACIONES CIENTÍFICAS</h3>
          <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
            <li>"Protocolo optimizado para el procesamiento de biopsias renales" - Revista Española de Patología (2023)</li>
            <li>"Implementación de controles de calidad en citología cervical" - Acta Cytologica Española (2022)</li>
            <li>"Nuevas técnicas de tinción para diagnóstico diferencial" - Patología Práctica (2021)</li>
          </ul>
        </div>

        <!-- Idiomas e Información Adicional -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
          <div>
            <h3 style="color: #0d9488; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #0d9488; padding-bottom: 5px;">IDIOMAS</h3>
            <ul style="margin: 0; padding-left: 20px;">
              <li><strong>Español:</strong> Nativo</li>
              <li><strong>Inglés:</strong> Nivel B2 (Intermedio-Alto)</li>
            </ul>
          </div>
          <div>
            <h3 style="color: #0d9488; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #0d9488; padding-bottom: 5px;">INFORMACIÓN ADICIONAL</h3>
            <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
              <li>15,000+ muestras procesadas</li>
              <li>8 años de experiencia</li>
              <li>25+ técnicas dominadas</li>
              <li>Disponibilidad inmediata</li>
            </ul>
          </div>
        </div>
      </div>
    `;

    // Crear elemento temporal para el PDF
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = cvContent;
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    document.body.appendChild(tempDiv);

    const opt = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: 'CV-Maria-Elena-Rodriguez-Anatomia-Patologica.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        letterRendering: true,
        backgroundColor: '#ffffff'
      },
      jsPDF: { 
        unit: 'in', 
        format: 'a4', 
        orientation: 'portrait',
        compress: true
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };
    
    html2pdf().set(opt).from(tempDiv).save().then(() => {
      document.body.removeChild(tempDiv);
    });
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
            CV Digital
          </div>

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
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