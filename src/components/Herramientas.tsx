import React from 'react';
import { Microscope, FlaskConical, Shield, Wrench } from 'lucide-react';

const Tools = () => {
  const toolCategories = [
    {
      title: "Técnicas Histológicas",
      icon: <Microscope size={32} />,
      color: "teal",
      tools: [
        { name: "Hematoxilina-Eosina (HE)", level: 95 },
        { name: "Tricrómico de Masson", level: 90 },
        { name: "PAS (Ácido Peryódico de Schiff)", level: 88 },
        { name: "Reticulina de Gomori", level: 85 },
        { name: "Van Gieson", level: 87 },
        { name: "Azul de Toluidina", level: 82 }
      ]
    },
    {
      title: "Técnicas Especializadas",
      icon: <FlaskConical size={32} />,
      color: "blue",
      tools: [
        { name: "Inmunohistoquímica", level: 88 },
        { name: "Citología Ginecológica", level: 85 },
        { name: "Citología de Líquidos", level: 80 },
        { name: "Técnicas de Congelación", level: 78 },
        { name: "Microscopía Electrónica", level: 70 },
        { name: "Hibridación in situ", level: 65 }
      ]
    },
    {
      title: "Equipos de Laboratorio",
      icon: <Wrench size={32} />,
      color: "purple",
      tools: [
        { name: "Micrótomo Rotatorio", level: 95 },
        { name: "Procesador de Tejidos", level: 92 },
        { name: "Estación de Inclusión", level: 90 },
        { name: "Teñidor Automático", level: 88 },
        { name: "Criostato", level: 85 },
        { name: "Microscopio Óptico", level: 98 }
      ]
    },
    {
      title: "Bioseguridad y Calidad",
      icon: <Shield size={32} />,
      color: "green",
      tools: [
        { name: "Protocolos de Bioseguridad", level: 95 },
        { name: "Control de Calidad", level: 92 },
        { name: "Gestión de Residuos", level: 90 },
        { name: "Documentación ISO", level: 85 },
        { name: "Auditorías Internas", level: 80 },
        { name: "Trazabilidad de Muestras", level: 88 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      teal: {
        bg: 'bg-teal-100',
        text: 'text-teal-600',
        progress: 'bg-teal-500'
      },
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        progress: 'bg-blue-500'
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        progress: 'bg-purple-500'
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-600',
        progress: 'bg-green-500'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="herramientas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Competencias Técnicas</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dominio de técnicas especializadas en anatomía patológica, manejo de equipos 
            de laboratorio y aplicación de protocolos de calidad y bioseguridad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {toolCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mr-4`}>
                    <div className={colors.text}>
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{tool.name}</span>
                        <span className="text-sm text-gray-500">{tool.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className={`${colors.progress} h-2.5 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${tool.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Competencias Adicionales
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-3">Sistemas de Gestión</h4>
                <div className="space-y-2">
                  <span className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">LIMS</span>
                  <span className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">ISO 15189</span>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-3">Software Especializado</h4>
                <div className="space-y-2">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">ImageJ</span>
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Aperio</span>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-3">Idiomas</h4>
                <div className="space-y-2">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Español (Nativo)</span>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Inglés (B2)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;