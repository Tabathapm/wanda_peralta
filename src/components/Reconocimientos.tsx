//import React from 'react';
import { Award, Trophy, Star, Medal, Crown, Zap } from 'lucide-react';

const Reconocimientos = () => {
  const reconocimientos = [
    {
      titulo: "Técnico del Año 2023",
      organizacion: "Hospital Universitario",
      anio: "2023",
      icono: <Crown size={24} />,
      color: "bg-yellow-500",
      descripcion: "Reconocimiento por romper todo."
    }
  ];

  const certificaciones = [
    "Técnico Superior en Chisme",
    "Certificación en no hacer nada",
    
  ];

  const publicaciones = [
    {
      titulo: "Lalala",
      publicadoEn: "Una revista :)",
      anio: "2022",
      impacto: "Citado 15 veces"
    },
    {
      titulo: "Lalala 2",
      publicadoEn: "Otra revista o web :)",
      anio: "2021",
      impacto: "Artículo destacado"
    }
  ];

  return (
    <section id="reconocimientos" className="">
    {/*<section id="reconocimientos" className="py-20 bg-gray-50">
       <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Reconocimientos y Logros</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A lo largo de mi carrera profesional, he tenido el honor de recibir diversos 
            reconocimientos que reflejan mi compromiso con la excelencia en anatomía patológica.
          </p>
        </div> */}

        {/* Reconocimientos */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {reconocimientos.map((reconocimiento, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`w-16 h-16 ${reconocimiento.color} rounded-full flex items-center justify-center mb-4 text-white`}>
                {reconocimiento.icono}
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{reconocimiento.titulo}</h3>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                  <span className="font-medium">{reconocimiento.organizacion}</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">{reconocimiento.anio}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{reconocimiento.descripcion}</p>
            </div>
          ))}
        </div> */}

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Certificaciones */}
          {/* <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Award className="text-teal-600 mr-3" size={28} />
              Certificaciones Profesionales
            </h3>
            <div className="space-y-3">
              {certificaciones.map((certificacion, index) => (
                <div key={index} className="flex items-center p-3 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors duration-200">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">{certificacion}</span>
                </div>
              ))}
            </div>
          </div> */}

          {/* Publicaciones */}
          {/* <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Star className="text-purple-600 mr-3" size={28} />
              Publicaciones Científicas
            </h3>
            <div className="space-y-4">
              {publicaciones.map((publicacion, index) => (
                <div key={index} className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{publicacion.titulo}</h4>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>{publicacion.publicadoEn} • {publicacion.anio}</span>
                    <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs">
                      {publicacion.impacto}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>

        {/* Impacto Profecional */}
        {/* <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-semibold mb-8 text-center">Impacto Profesional</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">15,000+</div>
                <div className="text-teal-100">Muestras Procesadas</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">8</div>
                <div className="text-teal-100">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-teal-100">Técnicas Dominadas</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">{publicaciones.length}</div>
                <div className="text-teal-100">Publicaciones Científicas</div>
              </div>
            </div>
          </div>
        </div> */}

      {/* </div> */}
    </section>
  );
};

export default Reconocimientos;