//import React from 'react';
import Header from './components/Header';
import Hero from './components/Yo';
import About from './components/SobreMi';
import Experience from './components/Experiencia';
import Educacion from './components/Educacion';
import Tools from './components/Herramientas';
import Interests from './components/Intereses';
import Awards from './components/Reconocimientos';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50" id="portfolio-content">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Educacion />
        <Tools />
        <Interests />
        <Awards />
      </main>
      <Footer />
    </div>
  );
}

export default App;