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

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300" id="portfolio-content">
      <Header />
      <main>
        <Yo />
        <SobreMi />
        <Experiencia />
        <Educacion />
        <Herramientas />
        <Intereses />
        <Reconocimientos />
      </main>
      <Footer />
    </div>
  );
}

export default App;