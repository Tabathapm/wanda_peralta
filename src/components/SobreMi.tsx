// import React from 'react';
import { User, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Mí</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="text-teal-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Perfil Profesional</h3>
            <p className="text-gray-600 leading-relaxed">
              Técnica en Anatomía Patológica con más de 8 años de experiencia en 
              laboratorios hospitalarios, especializada en histopatología y citología.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Objetivos</h3>
            <p className="text-gray-600 leading-relaxed">
              Continuar especializándome en técnicas avanzadas de diagnóstico 
              y contribuir al desarrollo de protocolos de calidad en laboratorios 
              de anatomía patológica.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-red-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Vocación</h3>
            <p className="text-gray-600 leading-relaxed">
              Mi pasión es contribuir al diagnóstico preciso que permite a los 
              médicos brindar el mejor tratamiento posible a cada paciente.
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Mi Trayectoria</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Mi carrera en anatomía patológica comenzó con una profunda fascinación 
              por la ciencia médica y el deseo de contribuir al diagnóstico de 
              enfermedades. A lo largo de estos años, he desarrollado expertise en 
              técnicas histológicas avanzadas, manejo de equipos especializados y 
              protocolos de bioseguridad, siempre manteniendo los más altos estándares 
              de calidad y precisión en cada procedimiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;