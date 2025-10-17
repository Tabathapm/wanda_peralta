//import React from 'react';
import Header from './components/Header';
import Yo from './components/Yo';
import SobreMi from './components/SobreMi';
import Experiencia from './components/Experiencia';
import Educacion from './components/Educacion';
import Herramientas from './components/Herramientas';
import Intereses from './components/Intereses';
import Reconocimientos from './components/Reconocimientos';
import Footer from './components/Footer';
import Galeria from './components/Galeria';

function App() {
  return (
    <div className="min-h-screen bg-gray-50" id="portfolio-content">
      <Header />
      <main>
        <Yo />
        <SobreMi />
        <Experiencia />
        <Educacion />
        <Herramientas />
        <Intereses />
        <Reconocimientos />
        <Galeria />
      </main>
      <Footer />
    </div>
  );
}

export default App;