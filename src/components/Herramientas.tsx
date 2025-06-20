//import React from 'react';
import { Microscope, FlaskConical, Shield, Wrench } from 'lucide-react';

const Herramientas = () => {
  const herramientasCategoria = [
    {
      titulo: "Técnicas Histológicas",
      icono: <Microscope size={32} />,
      color: "teal",
      herramientas: [
        { nombre: "Hematoxilina-Eosina (HE)", nivel: 95 },
        { nombre: "Tricrómico de Masson", nivel: 80 },
        { nombre: "PAS (Ácido Peryódico de Schiff)", nivel: 90 },
        { nombre: "Reticulina de Gomori", nivel: 85 },
        { nombre: "Giemsa", nivel: 87 },
        { nombre: "Jones", nivel: 85 }
      ]
    },

    {
      titulo: "Técnicas Especializadas",
      icono: <FlaskConical size={32} />,
      color: "blue",
      herramientas: [
        { nombre: "Inmunohistoquímica", nivel: 70 },
        { nombre: "Citología Ginecológica", nivel: 95 },
        { nombre: "Citología de Líquidos", nivel: 90 },
        { nombre: "Técnicas de Congelación", nivel: 78 },
        { nombre: "Microscopía Electrónica", nivel: 13 },
        { nombre: "Hibridación in situ", nivel: 13 }
      ]
    },
    {
      titulo: "Equipos de Laboratorio",
      icono: <Wrench size={32} />,
      color: "purple",
      herramientas: [
        { nombre: "Micrótomo Rotatorio", nivel: 100 },
        { nombre: "Procesador de Tejidos", nivel: 92 },
        { nombre: "Estación de Inclusión", nivel: 95 },
        { nombre: "Teñidor Automático", nivel: 88 },
        { nombre: "Criostato", nivel: 70 },
        { nombre: "Microscopio Óptico", nivel: 100 }
      ]
    },
    {
      titulo: "Bioseguridad y Calidad",
      icono: <Shield size={32} />,
      color: "green",
      herramientas: [
        { nombre: "Protocolos de Bioseguridad", nivel: 95 },
        { nombre: "Control de Calidad", nivel: 92 },
        { nombre: "Gestión de Residuos", nivel: 90 },
        { nombre: "Documentación ISO", nivel: 50 },
        { nombre: "Auditorías Internas", nivel: 50 },
        { nombre: "Trazabilidad de Muestras", nivel: 87 }
      ]
    }
  ];

  const clasesDeColores = (color: string) => {
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
          {herramientasCategoria.map((categoria, index) => {
            const colores = clasesDeColores(categoria.color);
            
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${colores.bg} rounded-full flex items-center justify-center mr-4`}>
                    <div className={colores.text}>
                      {categoria.icono}
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{categoria.titulo}</h3>
                </div>

                <div className="space-y-4">
                  {categoria.herramientas.map((herramienta, herramientaIndex) => (
                    <div key={herramientaIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{herramienta.nombre}</span>
                        <span className="text-sm text-gray-500">{herramienta.nivel}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className={`${colores.progress} h-2.5 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${herramienta.nivel}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Competencias Adicionales */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Competencias Adicionales
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-3">Sistemas de Gestión</h4>
                <div className="space-y-2">
                  {/* <span className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">LIMS</span> */}
                  <span className="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">ISO 15189</span>
                </div>
              </div>
              {/* <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-3">Software Especializado</h4>
                <div className="space-y-2">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">ImageJ</span>
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Aperio</span>
                </div>
              </div> */}
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-3">Idiomas</h4>
                <div className="space-y-2">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Español (Nativo)</span>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Inglés (Técnico)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herramientas;