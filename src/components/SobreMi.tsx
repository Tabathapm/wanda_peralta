import { User, Target, Heart } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { useReveal } from '../hooks/useReveal';

const tarjetas = [
  {
    icono: User,
    color: 'from-brand-500 to-brand-600',
    titulo: 'Perfil Profesional',
    texto:
      'Técnica en Anatomía Patológica especializada en histopatología y citología, con un enfoque centrado en la excelencia técnica y la precisión diagnóstica.',
  },
  {
    icono: Target,
    color: 'from-blue-500 to-blue-600',
    titulo: 'Objetivos',
    texto:
      'Continuar especializándome en técnicas avanzadas de diagnóstico y contribuir al desarrollo de protocolos de calidad en laboratorios de anatomía patológica.',
  },
  {
    icono: Heart,
    color: 'from-rose-500 to-rose-600',
    titulo: 'Vocación',
    texto:
      'Mi pasión es contribuir al diagnóstico preciso que permite a los médicos brindar el mejor tratamiento posible a cada paciente.',
  },
];

const Tarjeta = ({ icono: Icono, color, titulo, texto }: (typeof tarjetas)[number]) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal group text-center p-8 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-transparent hover:border-brand-100 dark:hover:border-brand-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div
        className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        <Icono className="text-white" size={30} />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{titulo}</h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{texto}</p>
    </div>
  );
};

const SobreMi = () => {
  const quoteRef = useReveal<HTMLDivElement>();

  return (
    <section id="sobre-mi" className="py-24 bg-white dark:bg-gray-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="Quién soy" title="Sobre Mí" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tarjetas.map((tarjeta) => (
            <Tarjeta key={tarjeta.titulo} {...tarjeta} />
          ))}
        </div>

        <div ref={quoteRef} className="reveal mt-16 max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-br from-brand-50 to-white dark:from-gray-800 dark:to-gray-800/60 p-8 md:p-10 rounded-2xl shadow-lg border border-brand-100/50 dark:border-gray-700">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-5xl text-brand-300 dark:text-brand-500 font-display">
              "
            </span>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Mi Filosofía Profesional
            </h3>
            <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed">
              Cada muestra que proceso representa una historia humana única. Mi compromiso va más
              allá de la técnica: es contribuir con precisión y dedicación al diagnóstico que puede
              cambiar la vida de una persona. La formación continua y el cuidado personal me
              permiten ofrecer siempre lo mejor de mí en esta noble profesión.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;