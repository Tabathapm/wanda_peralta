import { Microscope, FlaskConical, Shield, Wrench, LucideIcon } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { useReveal } from '../hooks/useReveal';

interface Habilidad {
  nombre: string;
  nivel: number;
}

interface Categoria {
  titulo: string;
  icono: LucideIcon;
  color: 'teal' | 'blue' | 'purple' | 'green';
  herramientas: Habilidad[];
}

const herramientasCategoria: Categoria[] = [
  {
    titulo: 'Técnicas Histológicas',
    icono: Microscope,
    color: 'teal',
    herramientas: [
      { nombre: 'Hematoxilina-Eosina (HE)', nivel: 95 },
      { nombre: 'Tricrómico de Masson', nivel: 80 },
      { nombre: 'PAS (Ácido Peryódico de Schiff)', nivel: 90 },
      { nombre: 'Reticulina de Gomori', nivel: 85 },
      { nombre: 'Giemsa', nivel: 87 },
      { nombre: 'Jones', nivel: 85 },
    ],
  },
  {
    titulo: 'Técnicas Especializadas',
    icono: FlaskConical,
    color: 'blue',
    herramientas: [
      { nombre: 'Inmunohistoquímica', nivel: 70 },
      { nombre: 'Citología Ginecológica', nivel: 95 },
      { nombre: 'Citología de Líquidos', nivel: 90 },
      { nombre: 'Técnicas de Congelación', nivel: 78 },
      { nombre: 'Microscopía Electrónica', nivel: 13 },
      { nombre: 'Hibridación in situ', nivel: 13 },
    ],
  },
  {
    titulo: 'Equipos de Laboratorio',
    icono: Wrench,
    color: 'purple',
    herramientas: [
      { nombre: 'Micrótomo Rotatorio', nivel: 100 },
      { nombre: 'Procesador de Tejidos', nivel: 92 },
      { nombre: 'Estación de Inclusión', nivel: 95 },
      { nombre: 'Teñidor Automático', nivel: 88 },
      { nombre: 'Criostato', nivel: 70 },
      { nombre: 'Microscopio Óptico', nivel: 100 },
    ],
  },
  {
    titulo: 'Bioseguridad y Calidad',
    icono: Shield,
    color: 'green',
    herramientas: [
      { nombre: 'Protocolos de Bioseguridad', nivel: 95 },
      { nombre: 'Control de Calidad', nivel: 92 },
      { nombre: 'Gestión de Residuos', nivel: 90 },
      { nombre: 'Documentación ISO', nivel: 50 },
      { nombre: 'Auditorías Internas', nivel: 50 },
      { nombre: 'Trazabilidad de Muestras', nivel: 87 },
    ],
  },
];

const clasesDeColores: Record<Categoria['color'], { bg: string; text: string; progress: string }> = {
  teal: { bg: 'bg-brand-100 dark:bg-brand-900/40', text: 'text-brand-600 dark:text-brand-300', progress: 'bg-gradient-to-r from-brand-400 to-brand-600' },
  blue: { bg: 'bg-blue-100 dark:bg-blue-900/40', text: 'text-blue-600 dark:text-blue-300', progress: 'bg-gradient-to-r from-blue-400 to-blue-600' },
  purple: { bg: 'bg-purple-100 dark:bg-purple-900/40', text: 'text-purple-600 dark:text-purple-300', progress: 'bg-gradient-to-r from-purple-400 to-purple-600' },
  green: { bg: 'bg-green-100 dark:bg-green-900/40', text: 'text-green-600 dark:text-green-300', progress: 'bg-gradient-to-r from-green-400 to-green-600' },
};

const TarjetaCategoria = ({ categoria }: { categoria: Categoria }) => {
  const ref = useReveal<HTMLDivElement>();
  const colores = clasesDeColores[categoria.color];
  const Icono = categoria.icono;

  return (
    <div
      ref={ref}
      className="reveal bg-white dark:bg-gray-800/60 p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300"
    >
      <div className="flex items-center mb-6">
        <div className={`w-14 h-14 ${colores.bg} rounded-xl flex items-center justify-center mr-4`}>
          <Icono className={colores.text} size={28} />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{categoria.titulo}</h3>
      </div>

      <div className="space-y-4">
        {categoria.herramientas.map((herramienta) => (
          <div key={herramienta.nombre} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700 dark:text-gray-200">{herramienta.nombre}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{herramienta.nivel}%</span>
            </div>
            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
              <div
                className={`${colores.progress} h-2.5 rounded-full transition-all duration-1000 ease-out`}
                style={{ width: `${herramienta.nivel}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Herramientas = () => {
  return (
    <section id="herramientas" className="py-24 bg-gray-50 dark:bg-gray-950 scroll-mt-24">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Competencias"
          title="Competencias Técnicas"
          description="Dominio de técnicas especializadas en anatomía patológica, manejo de equipos de laboratorio y aplicación de protocolos de calidad y bioseguridad."
        />

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {herramientasCategoria.map((categoria) => (
            <TarjetaCategoria key={categoria.titulo} categoria={categoria} />
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800/60 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
              Competencias Adicionales
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Sistemas de Gestión</h4>
                <div className="space-y-2">
                  <span className="inline-block bg-brand-100 dark:bg-brand-900/40 text-brand-800 dark:text-brand-200 px-3 py-1 rounded-full text-sm font-medium">
                    ISO 15189
                  </span>
                </div>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Idiomas</h4>
                <div className="space-y-2">
                  <span className="inline-block bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium mr-2">
                    Español (Nativo)
                  </span>
                  <span className="inline-block bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                    Inglés (Técnico)
                  </span>
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