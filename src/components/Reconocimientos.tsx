//import React from 'react';
import { Award, Trophy, Star, Medal, Crown, Zap } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: "Técnico del Año 2023",
      organization: "Hospital Universitario La Paz",
      year: "2023",
      icon: <Crown size={24} />,
      color: "bg-yellow-500",
      description: "Reconocimiento por excelencia técnica y compromiso con la calidad en el laboratorio."
    },
    {
      title: "Mejor Caso Clínico Presentado",
      organization: "XXXV Congreso Nacional de Anatomía Patológica",
      year: "2022",
      icon: <Star size={24} />,
      color: "bg-purple-500",
      description: "Presentación destacada sobre diagnóstico diferencial en patología mamaria."
    },
    {
      title: "Certificación de Excelencia en Bioseguridad",
      organization: "Ministerio de Sanidad",
      year: "2022",
      icon: <Award size={24} />,
      color: "bg-green-500",
      description: "Reconocimiento por implementación ejemplar de protocolos de bioseguridad."
    },
    {
      title: "Premio a la Innovación Técnica",
      organization: "Sociedad Española de Técnicos en Anatomía Patológica",
      year: "2021",
      icon: <Trophy size={24} />,
      color: "bg-blue-500",
      description: "Desarrollo de protocolo optimizado para procesamiento de biopsias renales."
    },
    {
      title: "Mención Honorífica en Formación",
      organization: "Colegio Profesional de Técnicos Sanitarios",
      year: "2021",
      icon: <Medal size={24} />,
      color: "bg-teal-500",
      description: "Reconocimiento por participación activa en programas de formación continua."
    },
    {
      title: "Colaboradora Destacada",
      organization: "Proyecto de Investigación Oncológica",
      year: "2020",
      icon: <Zap size={24} />,
      color: "bg-pink-500",
      description: "Contribución significativa en estudio multicéntrico sobre marcadores tumorales."
    }
  ];

  const certifications = [
    "Técnico Superior en Anatomía Patológica y Citodiagnóstico",
    "Certificación en Bioseguridad Nivel 3",
    "Especialista en Inmunohistoquímica Avanzada",
    "Certificación en Control de Calidad ISO 15189",
    "Técnico en Citología Ginecológica",
    "Certificación en Microscopía Electrónica"
  ];

  const publications = [
    {
      title: "Protocolo optimizado para el procesamiento de biopsias renales",
      publication: "Revista Española de Patología",
      year: "2023",
      impact: "Factor de impacto 2.1"
    },
    {
      title: "Implementación de controles de calidad en citología cervical",
      publication: "Acta Cytologica Española",
      year: "2022",
      impact: "Citado 15 veces"
    },
    {
      title: "Nuevas técnicas de tinción para diagnóstico diferencial",
      publication: "Patología Práctica",
      year: "2021",
      impact: "Artículo destacado"
    }
  ];

  return (
    <section id="reconocimientos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Reconocimientos y Logros</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A lo largo de mi carrera profesional, he tenido el honor de recibir diversos 
            reconocimientos que reflejan mi compromiso con la excelencia en anatomía patológica.
          </p>
        </div>

        {/* Main Awards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {awards.map((award, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`w-16 h-16 ${award.color} rounded-full flex items-center justify-center mb-4 text-white`}>
                {award.icon}
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{award.title}</h3>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                  <span className="font-medium">{award.organization}</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">{award.year}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{award.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Certifications */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Award className="text-teal-600 mr-3" size={28} />
              Certificaciones Profesionales
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center p-3 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors duration-200">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-4"></div>
                  <span className="text-gray-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Star className="text-purple-600 mr-3" size={28} />
              Publicaciones Científicas
            </h3>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <div key={index} className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{pub.title}</h4>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>{pub.publication} • {pub.year}</span>
                    <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs">
                      {pub.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 max-w-4xl mx-auto">
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
                <div className="text-3xl font-bold mb-2">3</div>
                <div className="text-teal-100">Publicaciones Científicas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;