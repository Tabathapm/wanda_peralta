// import React from 'react';
import { MapPin, Mail, Phone, Linkedin, FileText } from 'lucide-react';

const Yo = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
              Wanda Peralta
            </h1>
            <h2 className="text-xl lg:text-2xl text-teal-100 mb-6">
              Técnica Universitaria en Anatomía Patológica
            </h2>
            <p className="text-lg text-teal-50 mb-8 leading-relaxed max-w-2xl">
              Especialista en procesamiento de muestras histológicas y citológicas, técnicas de tinción 
              y diagnóstico citológico. 
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center space-x-2 text-teal-100">
                <Mail size={18} />
                <span>wandaperalta850@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-teal-100">
                <Phone size={18} />
                <span>+54 11 6902 3229</span>
              </div>
              <div className="flex items-center space-x-2 text-teal-100">
                <MapPin size={18} />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>

            <div className="flex gap-4 mt-6 justify-center lg:justify-start">
              <a href="https://www.linkedin.com/in/wanda-peralta-mercado/" target='_blank' className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200">
                <Linkedin size={20}/>
              </a>
              {/* <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-200">
                <FileText size={20} />
              </a> */}
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center">
              <div className="w-72 h-72 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-6xl">🔬</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Yo;