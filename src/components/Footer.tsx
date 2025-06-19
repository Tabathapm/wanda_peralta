//import React from 'react';
import { Mail, Phone, MapPin, Linkedin, FileText, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Info de contacto */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-teal-400" />
                <span>wandaperalta850@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-teal-400" />
                <span>+54 11 6902 3229</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-teal-400" />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <a href="#sobre-mi" className="block hover:text-teal-400 transition-colors duration-200">
                Sobre Mí
              </a>
              <a href="#experiencia" className="block hover:text-teal-400 transition-colors duration-200">
                Experiencia
              </a>
              <a href="#educacion" className="block hover:text-teal-400 transition-colors duration-200">
                Formación
              </a>
              <a href="#herramientas" className="block hover:text-teal-400 transition-colors duration-200">
                Competencias
              </a>
            </div>
          </div>

          {/* Info Profesional */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Perfil Profesional</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.linkedin.com/in/wanda-peralta-mercado/" target='_blank' className="p-3 bg-teal-600 rounded-full hover:bg-teal-700 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              {/* <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200">
                <FileText size={20} />
              </a> */}
            </div>
            <p className="text-gray-400 text-sm">
              Técnica Universitaria en Anatomía Patológica especializada en 
              histología y citología diagnóstica. Disponible para 
              nuevas oportunidades profesionales.
            </p>
          </div>
        </div>

        {/* Barra de abajo */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              {/* <span>© 2025 Tabatha Peralta. CV Digital creado con</span> */}
              <span> 
                © 2025&nbsp;
                <a href="https://www.linkedin.com/in/tabatha-peralta/" target='_blank' >
                  Tabatha Peralta
                </a> 
                &nbsp;, CV Digital creado con
              </span>
              <Heart className="text-red-500" size={16} />
              <span>y tecnología React</span>
            </div>
            <div className="text-sm text-gray-400">
              Última actualización: {new Date().toLocaleDateString('es-ES')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;