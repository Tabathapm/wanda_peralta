// import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Educacion = () => {
  const educacion = [
    {
      titulo: "Técnico Universitario en Anatomía Patológica",
      institucion: "Universidad Nacional de La Matanza - UNLaM",
      locacion: "Buenos Aires, Argentina",
      periodo: "2023 - Presente",
      promedio: "8/10",
      descripcion: "Formación especializada en técnicas histológicas y citológicas.",
      logros: [
        "Graduado con mención honorífica",
        "Prácticas destacadas en Hospital Lalala",
        "Proyecto final sobre Lalala"
      ]
    },
    
  ];

  const certificaciones = [
    {
      titulo: "Curso Avanzado de Inmunohistoquímica",
      institucion: "Sociedad Española de Anatomía Patológica",
      periodo: "2022",
      descripcion: "Técnicas avanzadas de marcaje inmunológico para diagnóstico diferencial."
    }
  ];

  const cursos = [
    "Control de Calidad en Laboratorios de Anatomía Patológica",
    "Técnicas de Microscopía Electrónica",
    "Gestión de Residuos Biosanitarios",
    "Actualización en Técnicas de Tinción Especial",
    "Primeros Auxilios y RCP Básica"
  ];

  return (
    <section id="educacion" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Formación Académica</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Educacion */}
          <div className="mb-16">
            {educacion.map((edu, index) => (
              <div key={index} className="relative mb-8 last:mb-0">
                {index !== educacion.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-green-200 hidden md:block"></div>
                )}
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                      <GraduationCap className="text-white" size={24} />
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-green-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{edu.titulo}</h3>
                        <h4 className="text-lg text-green-600 font-medium">{edu.institucion}</h4>
                      </div>
                      <div className="text-gray-500 text-sm mt-2 sm:mt-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                          <span className="flex items-center space-x-1 mb-1 sm:mb-0">
                            <Calendar size={16} />
                            <span>{edu.periodo}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <MapPin size={16} />
                            <span>{edu.locacion}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <span className="inline-flex items-center space-x-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        <Award size={14} />
                        <span>Nota media: {edu.promedio}</span>
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{edu.descripcion}</p>
                    
                    {/* <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Logros destacados:</h5>
                      <ul className="space-y-1">
                        {edu.logros.map((logro, i) => (
                          <li key={i} className="text-gray-600 flex items-start">
                            <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {logro}
                          </li>
                        ))}
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certificaciones */}
          {/* <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Certificaciones Profesionales
            </h3>
            <div className="grid md:grid-cols-1 gap-6">
              {certificaciones.map((cert, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-gray-900">{cert.titulo}</h4>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {cert.periodo}
                    </span>
                  </div>
                  <p className="text-blue-600 font-medium mb-2">{cert.institucion}</p>
                  <p className="text-gray-600">{cert.descripcion}</p>
                </div>
              ))}
            </div>
          </div> */}

          {/* Cursos */}
          {/* <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Formación Complementaria
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {cursos.map((curso, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-gray-700">{curso}</span>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Educacion;