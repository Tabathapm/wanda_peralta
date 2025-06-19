// import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Técnico Superior en Anatomía Patológica",
      company: "Hospital Universitario La Paz",
      location: "Lugar, Pais",
      period: "2020 - Presente",
      description: [
        "Procesamiento de muestras histológicas y citológicas para diagnóstico",
        "Realización de técnicas de tinción especiales (HE, PAS, Tricrómico, etc.)",
        "Manejo de equipos automatizados de procesamiento histológico",
        "Supervisión de protocolos de calidad y bioseguridad en el laboratorio",
        "Colaboración directa con patólogos en casos complejos"
      ],
      technologies: ["Histopatología", "Citología", "Inmunohistoquímica", "Microscopía", "Control de Calidad"]
    }
  ];

  return (
    <section id="experiencia" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experiencia Profesional</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-teal-200 hidden md:block"></div>
              )}
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                    <Briefcase className="text-white" size={24} />
                  </div>
                </div>
                
                <div className="flex-1 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h3>
                      <h4 className="text-lg text-teal-600 font-medium">{exp.company}</h4>
                    </div>
                    <div className="text-gray-500 text-sm mt-2 sm:mt-0">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 flex items-start">
                        <span className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-teal-100 text-teal-800 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;