import { MapPin, Mail, Phone, Linkedin, Microscope, Sparkles } from 'lucide-react';

const Yo = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 text-white">
      {/* Base: gradiente principal (distinto en claro/oscuro para que ambos tengan profundidad) */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-700 to-cyan-900 dark:from-gray-950 dark:via-brand-950 dark:to-black" />

      {/* Halo radial superior izquierdo, da un punto de luz */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.18),transparent_45%)]" />

      {/* Textura de puntos sutil, aporta detalle sin sumar peso visual */}
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-soft-light"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* Viñeta inferior para separar del resto de la página con más contraste */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      {/* Blobs decorativos */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-300/40 rounded-full blur-3xl animate-blob mix-blend-screen" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl animate-blob [animation-delay:2s] mix-blend-screen" />
        <div className="absolute -bottom-24 left-1/3 w-72 h-72 bg-teal-200/30 rounded-full blur-3xl animate-blob [animation-delay:4s] mix-blend-screen" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur px-4 py-1.5 rounded-full text-sm font-medium text-brand-50 mb-6">
              <Sparkles size={16} />
              Disponible para nuevas oportunidades
            </span>

            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-sm">
              Wanda Peralta
            </h1>
            <h2 className="text-xl lg:text-2xl text-brand-100 mb-6 font-medium">
              Técnica Universitaria en Anatomía Patológica
            </h2>
            <p className="text-lg text-brand-50/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Especialista en procesamiento de muestras histológicas y citológicas, técnicas de tinción
              y diagnóstico citológico.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
              <div className="flex items-center space-x-2 text-brand-50">
                <Mail size={18} />
                <span>wandaperalta850@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-brand-50">
                <Phone size={18} />
                <a
                  href="https://wa.me/541169023229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                  title="Enviar mensaje por WhatsApp"
                >
                  +54 11 6902 3229
                </a>
              </div>
              <div className="flex items-center space-x-2 text-brand-50">
                <MapPin size={18} />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/wanda-peralta-mercado/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 border border-white/10 rounded-full hover:bg-white/20 hover:-translate-y-1 transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative w-72 h-72 lg:w-80 lg:h-80">
              {/* Resplandor detrás del ícono */}
              <div className="absolute inset-0 bg-brand-300/30 rounded-full blur-2xl animate-float" />

              {/* Anillo exterior sutil */}
              <div className="absolute inset-0 rounded-full border border-white/10 animate-float" />

              {/* Círculo de vidrio con el ícono */}
              <div className="absolute inset-6 bg-white/10 rounded-full backdrop-blur border border-white/20 flex items-center justify-center shadow-2xl shadow-black/20">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-white/15 to-transparent flex items-center justify-center">
                  <Microscope size={104} strokeWidth={1.25} className="text-white drop-shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Yo;