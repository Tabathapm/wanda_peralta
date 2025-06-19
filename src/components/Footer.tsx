import React from 'react';
import { Mail, Phone, MapPin, Linkedin, FileText, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-teal-400" />
                <span>maria.rodriguez@email.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-teal-400" />
                <span>+34 612 345 678</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-teal-400" />
                <span>Madrid, España</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
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

          {/* Professional Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Perfil Profesional</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="p-3 bg-teal-600 rounded-full hover:bg-teal-700 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200">
                <FileText size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Técnico Superior en Anatomía Patológica especializada en 
              histopatología y citología diagnóstica. Disponible para 
              nuevas oportunidades profesionales.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span>© 2024 María Elena Rodríguez. CV Digital creado con</span>
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