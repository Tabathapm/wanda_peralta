import { Briefcase, Calendar, MapPin } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { useReveal } from '../hooks/useReveal';

const experiencias = [
  {
    titulo: 'Práctica Universitaria',
    lugar: 'Hospital Cuenca Alta Néstor Kirchner',
    locacion: 'Buenos Aires, Argentina',
    periodo: 'Jul 2023 - Jun 2024',
    descripcion: [
      'Realización de IHQ en aparato',
      'Utilización del procesador automático',
      'Inclusión en parafina',
      'Cortes histológicos en microtomo de rotación',
      'Coloraciones de rutina y técnicas especiales',
      'Montaje y entrega',
      'Retiro de muestras en quirófano e ingreso de las mismas al servicio',
      'Tareas de archivo',
      'Procesado y coloración de muestras ginecológicas y no ginecológicas',
    ],
    tecnologias: ['Histología', 'Citología', 'Inmunohistoquímica', 'Microscopía', 'Control de Calidad'],
  },
  {
    titulo: 'Práctica Universitaria',
    lugar: 'Centro Rossi',
    locacion: 'Buenos Aires, Argentina',
    periodo: 'Jul 2024 - Dic 2024',
    descripcion: [
      'Procesamiento de muestras histológicas y citológicas para diagnóstico',
      'Realización de técnicas de tinción especiales (HE, PAS, Tricrómico, etc.)',
      'Manejo de equipos automatizados de procesamiento histológico',
      'Supervisión de protocolos de calidad y bioseguridad en el laboratorio',
    ],
    tecnologias: ['Histología', 'Citología', 'Inmunohistoquímica', 'Microscopía', 'Control de Calidad'],
  },
  {
    titulo: 'Citotécnica',
    lugar: 'Red Pathology',
    locacion: 'Buenos Aires, Argentina',
    periodo: 'Jun 2025 - Jun 2025',
    descripcion: ['Proceso de coloración de muestras citológicas mediante la técnica de Papanicolaou (PAP)'],
    tecnologias: ['Citología', 'Control de Calidad'],
  },
  {
    titulo: 'Practicante Universitaria',
    lugar: 'Universidad Nacional de La Matanza - UNLaM',
    locacion: 'Buenos Aires, Argentina',
    periodo: 'Abr 2023 - Presente',
    descripcion: [
      'Procesado y coloración de muestras ginecológicas y no ginecológicas (PAAF, líquidos de derrames, lavados, orina, etc.)',
      'Screening de citología ginecológica cervicovaginal',
      'Screening de citología no ginecológica',
    ],
    tecnologias: ['Citología', 'Control de Calidad'],
  },
  {
    titulo: 'Practicante Universitaria',
    lugar: 'Hospital General de Agudos Francisco Santojanni',
    locacion: 'Buenos Aires, Argentina',
    periodo: 'Abr 2025 - Presente',
    descripcion: [
      'Procesado y coloración de muestras ginecológicas y no ginecológicas (PAAF, líquidos de derrames, lavados, orina, etc.)',
      'Utilización del procesador automático',
      'Inclusión en parafina',
      'Cortes histológicos en microtomo de rotación',
      'Coloraciones de rutina y técnicas especiales, montaje y entrega',
      'Tareas de archivo',
    ],
    tecnologias: ['Citología', 'Histología', 'Microscopía', 'Control de Calidad'],
  },
];

const TarjetaExperiencia = ({ exp, esUltimo }: { exp: (typeof experiencias)[number]; esUltimo: boolean }) => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="reveal relative mb-12 last:mb-0">
      {!esUltimo && (
        <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-brand-300 to-brand-100 dark:from-brand-700 dark:to-gray-800 hidden md:block" />
      )}

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-700 rounded-full flex items-center justify-center shadow-lg shadow-brand-600/30">
            <Briefcase className="text-white" size={22} />
          </div>
        </div>

        <div className="flex-1 bg-white dark:bg-gray-800/60 p-6 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{exp.titulo}</h3>
              <h4 className="text-lg text-brand-600 dark:text-brand-300 font-medium">{exp.lugar}</h4>
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>{exp.periodo}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <MapPin size={16} />
                  <span>{exp.locacion}</span>
                </span>
              </div>
            </div>
          </div>

          <ul className="space-y-2 mb-4">
            {exp.descripcion.map((item) => (
              <li key={item} className="text-gray-600 dark:text-gray-300 flex items-start">
                <span className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {exp.tecnologias.map((tecnologia) => (
              <span
                key={tecnologia}
                className="px-3 py-1 bg-brand-50 dark:bg-brand-900/40 text-brand-700 dark:text-brand-200 text-sm rounded-full font-medium"
              >
                {tecnologia}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Experiencia = () => {
  return (
    <section id="experiencia" className="py-24 bg-gray-50 dark:bg-gray-950 scroll-mt-24">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="Trayectoria" title="Experiencia Profesional" />

        <div className="max-w-4xl mx-auto">
          {experiencias.map((exp, index) => (
            <TarjetaExperiencia key={`${exp.lugar}-${exp.periodo}`} exp={exp} esUltimo={index === experiencias.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiencia;