import { Mail, Phone, MapPin, Linkedin, Download } from 'lucide-react';
import CV from './CV';
import { usePdfDownload } from '../hooks/usePdfDownload';

const Footer = () => {
  const { pdfRef, downloadPDF } = usePdfDownload();

  return (
    <footer className="bg-gray-950 text-white py-14">
      <div style={{ display: 'none' }}>
        <CV ref={pdfRef} />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Información de Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-400" />
                <span>wandaperalta850@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-400" />
                <a
                  href="https://wa.me/541169023229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-400 transition-colors duration-200"
                  title="Enviar mensaje por WhatsApp"
                >
                  +54 11 6902 3229
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-brand-400" />
                <span>Buenos Aires, Argentina</span>
              </div>

              <button
                onClick={downloadPDF}
                className="flex items-center space-x-2 bg-brand-600 text-white px-4 py-2 rounded-lg hover:bg-brand-700 transition-colors duration-200 mt-2"
              >
                <Download size={18} />
                <span>Descargar CV</span>
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <a href="#sobre-mi" className="block text-gray-300 hover:text-brand-400 transition-colors duration-200">
                Sobre Mí
              </a>
              <a href="#experiencia" className="block text-gray-300 hover:text-brand-400 transition-colors duration-200">
                Experiencia
              </a>
              <a href="#educacion" className="block text-gray-300 hover:text-brand-400 transition-colors duration-200">
                Formación
              </a>
              <a href="#herramientas" className="block text-gray-300 hover:text-brand-400 transition-colors duration-200">
                Competencias
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Perfil Profesional</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.linkedin.com/in/wanda-peralta-mercado/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-brand-600 rounded-full hover:bg-brand-700 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Técnica Universitaria en Anatomía Patológica especializada en histología y citología
              diagnóstica. Disponible para nuevas oportunidades profesionales.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <span className="text-gray-400 text-sm">
              © {new Date().getFullYear()}{' '}
              <a
                href="https://www.linkedin.com/in/tabatha-peralta/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-400 transition-colors duration-200"
              >
                Tabatha Peralta
              </a>
            </span>
            <span className="text-sm text-gray-400">
              Última actualización: {new Date().toLocaleDateString('es-AR')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;