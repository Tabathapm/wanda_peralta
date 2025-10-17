import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const Galeria = () => {
  const [diapositivaActual, setDiapositivaActual] = useState(0);
  const [reproduccionAutomatica, setReproduccionAutomatica] = useState(true);

  const imagenes = [
    {
      src: new URL('../assets/galeria/img1.jpeg', import.meta.url).href,
      titulo: "Laboratorio de Histopatología",
      descripcion: "Tay All to well"
    },
    {
      src: new URL('../assets/galeria/img2.jpeg', import.meta.url).href,
      titulo: "Microscopía Avanzada",
      descripcion: "Tay Tay "
    },
    {
      src: new URL('../assets/galeria/img8.jpg', import.meta.url).href,
      titulo: "Técnicas de Tinción",
      descripcion: "The Life of a Showgirl"
    },
    {
      src: new URL('../assets/galeria/img4.webp', import.meta.url).href,
      titulo: "Equipo Especializado",
      descripcion: "Fearleeeessss"
    },
    {
      src: new URL('../assets/galeria/img5.jpeg', import.meta.url).href,
      titulo: "Investigación Científica",
      descripcion: "Tay en Argentina"
    },
    {
      src: new URL('../assets/galeria/img6.jpg', import.meta.url).href,
      titulo: "Trabajo en Equipo",
      descripcion: "Reputation Tour"
    }
  ];

  useEffect(() => {
    if (reproduccionAutomatica) {
      const intervalo = setInterval(() => {
        setDiapositivaActual((prev) => (prev + 1) % imagenes.length);
      }, 4000);
      return () => clearInterval(intervalo);
    }
  }, [reproduccionAutomatica, imagenes.length]);

  const siguienteDiapositiva = () => {
    setDiapositivaActual((prev) => (prev + 1) % imagenes.length);
    setReproduccionAutomatica(false);
  };

  const anteriorDiapositiva = () => {
    setDiapositivaActual((prev) => (prev - 1 + imagenes.length) % imagenes.length);
    setReproduccionAutomatica(false);
  };

  const irADiapositiva = (indice: number) => {
    setDiapositivaActual(indice);
    setReproduccionAutomatica(false);
  };

  return (
    <section id="galeria" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Galería Profesional</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un vistazo al mundo de la anatomía patológica a través de imágenes que 
            capturan la esencia de nuestro trabajo diario en el laboratorio.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Carrusel principal */}
          <div className="relative mb-12">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${diapositivaActual * 100}%)` }}
              >
                {imagenes.map((imagen, indice) => (
                  <div key={indice} className="w-full flex-shrink-0 relative">
                    <div className="relative mx-auto max-w-4xl">
                      {/* Marco estilo Polaroid */}
                      <div className="bg-white p-4 shadow-2xl transform hover:scale-105 transition-all duration-300 mx-4">
                        <div className="relative overflow-hidden">
                          <img
                            src={imagen.src}
                            alt={imagen.titulo}
                            className="w-full h-96 object-cover"
                            loading="lazy"
                          />
                          {/* Capa superpuesta con información */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4 text-white">
                              <h3 className="text-xl font-semibold mb-2">{imagen.titulo}</h3>
                              <p className="text-sm text-gray-200">{imagen.descripcion}</p>
                            </div>
                          </div>
                        </div>
                        {/* Título estilo Polaroid */}
                        <div className="pt-4 pb-2">
                          <h3 className="text-lg font-semibold text-gray-800 text-center">
                            {imagen.titulo}
                          </h3>
                          <p className="text-sm text-gray-600 text-center mt-1">
                            {imagen.descripcion}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controles de navegación */}
            <button
              onClick={anteriorDiapositiva}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={siguienteDiapositiva}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-10"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicadores de puntos */}
          <div className="flex justify-center space-x-3 mb-8">
            {imagenes.map((_, indice) => (
              <button
                key={indice}
                onClick={() => irADiapositiva(indice)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  indice === diapositivaActual
                    ? 'bg-teal-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Miniaturas */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {imagenes.map((imagen, indice) => (
              <button
                key={indice}
                onClick={() => irADiapositiva(indice)}
                className={`relative group overflow-hidden rounded-lg transition-all duration-300 ${
                  indice === diapositivaActual
                    ? 'ring-4 ring-teal-500 scale-105'
                    : 'hover:scale-105 hover:shadow-lg'
                }`}
              >
                {/* Mini Polaroid */}
                <div className="bg-white p-2 shadow-lg">
                  <img
                    src={imagen.src}
                    alt={imagen.titulo}
                    className="w-full h-20 object-cover"
                    loading="lazy"
                  />
                  <div className="pt-2">
                    <p className="text-xs font-medium text-gray-800 truncate">
                      {imagen.titulo}
                    </p>
                  </div>
                </div>
                
                {/* Capa de selección */}
                <div className={`absolute inset-0 transition-opacity duration-200 ${
                  indice === diapositivaActual
                    ? 'bg-teal-500/20'
                    : 'bg-black/0 group-hover:bg-black/10'
                }`}>
                  {indice === diapositivaActual && (
                    <div className="absolute top-1 right-1">
                      <Camera className="text-teal-600" size={16} />
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Control de reproducción automática */}
          <div className="text-center mt-8">
            <button
              onClick={() => setReproduccionAutomatica(!reproduccionAutomatica)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                reproduccionAutomatica
                  ? 'bg-teal-600 text-white hover:bg-teal-700'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {reproduccionAutomatica ? 'Pausar presentación' : 'Reproducir presentación'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galeria;
