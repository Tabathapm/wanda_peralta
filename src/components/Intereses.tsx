import { BookOpen, Camera, Microscope, LucideIcon } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { useReveal } from '../hooks/useReveal';

interface Interes {
  titulo: string;
  icono: LucideIcon;
  color: string;
  descripcion: string;
}

const intereses: Interes[] = [
  {
    titulo: 'Investigación Médica',
    icono: Microscope,
    color: 'from-brand-500 to-brand-600',
    descripcion: 'Seguimiento de avances y nuevas técnicas.',
  },
  {
    titulo: 'Fotografía Científica',
    icono: Camera,
    color: 'from-purple-500 to-purple-600',
    descripcion: 'Captura de imágenes microscópicas y documentación de hallazgos patológicos.',
  },
  {
    titulo: 'Lectura Científica',
    icono: BookOpen,
    color: 'from-blue-500 to-blue-600',
    descripcion: 'Actualización constante a través de revistas especializadas en anatomía patológica.',
  },
];

const TarjetaInteres = ({ interes }: { interes: Interes }) => {
  const ref = useReveal<HTMLDivElement>();
  const Icono = interes.icono;

  return (
    <div
      ref={ref}
      className="reveal group bg-gray-50 dark:bg-gray-800/60 p-6 rounded-2xl border border-transparent hover:border-brand-100 dark:hover:border-brand-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
    >
      <div
        className={`w-16 h-16 bg-gradient-to-br ${interes.color} rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        <Icono size={30} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{interes.titulo}</h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{interes.descripcion}</p>
    </div>
  );
};

const Intereses = () => {
  return (
    <section id="intereses" className="py-24 bg-white dark:bg-gray-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Fuera del laboratorio"
          title="Intereses y Actividades"
          description="Mantengo un equilibrio entre mi desarrollo profesional y personal, cultivando intereses que enriquecen mi perspectiva como profesional de la salud."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {intereses.map((interes) => (
            <TarjetaInteres key={interes.titulo} interes={interes} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intereses;