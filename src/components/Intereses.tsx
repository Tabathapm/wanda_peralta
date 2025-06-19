import React from 'react';
import { BookOpen, Camera, Leaf, Users, Heart, Microscope } from 'lucide-react';

const Interests = () => {
  const interests = [
    {
      title: "Investigación Médica",
      icon: <Microscope size={32} />,
      color: "bg-teal-500",
      description: "Seguimiento de avances en patología molecular y nuevas técnicas diagnósticas."
    },
    {
      title: "Fotografía Científica",
      icon: <Camera size={32} />,
      color: "bg-purple-500",
      description: "Captura de imágenes microscópicas y documentación de hallazgos patológicos."
    },
    {
      title: "Lectura Científica",
      icon: <BookOpen size={32} />,
      color: "bg-blue-500",
      description: "Actualización constante a través de revistas especializadas en anatomía patológica."
    },
    {
      title: "Jardinería",
      icon: <Leaf size={32} />,
      color: "bg-green-500",
      description: "Cultivo de plantas medicinales y estudio de la botánica aplicada."
    },
    {
      title: "Voluntariado",
      icon: <Users size={32} />,
      color: "bg-orange-500",
      description: "Participación en campañas de prevención y educación sanitaria comunitaria."
    },
    {
      title: "Bienestar",
      icon: <Heart size={32} />,
      color: "bg-red-500",
      description: "Práctica de yoga y mindfulness para mantener el equilibrio personal."
    }
  ];

  const achievements = [
    "🔬 Publicación de caso clínico en revista especializada",
    "📸 Archivo personal de más de 500 imágenes histológicas",
    "📚 Miembro activo de la Sociedad Española de Anatomía Patológica",
    "🌱 Huerto urbano con plantas medicinales tradicionales",
    "👥 Voluntaria en campañas de detección precoz de cáncer",
    "🧘‍♀️ Instructora certificada de técnicas de relajación"
  ];

  return (
    <section id="intereses" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Intereses y Actividades</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantengo un equilibrio entre mi desarrollo profesional y personal, 
            cultivando intereses que enriquecen mi perspectiva como profesional de la salud.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {interests.map((interest, index) => (
            <div key={index} className="group bg-gray-50 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className={`w-16 h-16 ${interest.color} rounded-full flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                {interest.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{interest.title}</h3>
              <p className="text-gray-600 leading-relaxed">{interest.description}</p>
            </div>
          ))}
        </div>

        {/* Personal Achievements */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Logros y Contribuciones Personales
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow duration-200">
                  <span className="text-2xl">{achievement.split(' ')[0]}</span>
                  <span className="text-gray-700 font-medium">{achievement.substring(achievement.indexOf(' ') + 1)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg border">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mi Filosofía Profesional</h3>
            <blockquote className="text-lg text-gray-700 italic leading-relaxed">
              "Cada muestra que proceso representa una historia humana única. 
              Mi compromiso va más allá de la técnica: es contribuir con precisión 
              y dedicación al diagnóstico que puede cambiar la vida de una persona. 
              La formación continua y el cuidado personal me permiten ofrecer 
              siempre lo mejor de mí en esta noble profesión."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;