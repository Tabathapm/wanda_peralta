import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { useReveal } from '../hooks/useReveal';

const educacion = [
  {
    titulo: 'Técnico Universitario en Anatomía Patológica',
    institucion: 'Universidad Nacional de La Matanza - UNLaM',
    locacion: 'Buenos Aires, Argentina',
    periodo: '2023 - Presente',
    promedio: '8/10',
    descripcion: 'Formación especializada en técnicas histológicas y citológicas.',
  },
];

const Educacion = () => {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="educacion" className="py-24 bg-white dark:bg-gray-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="Formación" title="Formación Académica" />

        <div className="max-w-4xl mx-auto">
          {educacion.map((edu) => (
            <div key={edu.titulo} ref={ref} className="reveal relative">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center shadow-lg shadow-emerald-600/30">
                    <GraduationCap className="text-white" size={22} />
                  </div>
                </div>

                <div className="flex-1 bg-emerald-50/70 dark:bg-emerald-900/10 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{edu.titulo}</h3>
                      <h4 className="text-lg text-emerald-600 dark:text-emerald-300 font-medium">{edu.institucion}</h4>
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      <div className="flex flex-col sm:items-end gap-1">
                        <span className="flex items-center space-x-1">
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
                    <span className="inline-flex items-center space-x-1 bg-emerald-100 dark:bg-emerald-800/40 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded-full text-sm font-medium">
                      <Award size={14} />
                      <span>Nota media: {edu.promedio}</span>
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300">{edu.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educacion;