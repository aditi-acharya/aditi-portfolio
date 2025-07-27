import React from 'react';
import { Element } from 'react-scroll';

import Navbar from './components/NavBar';
import About from './components/About';
import Experience from './components/Experiences';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App min-h-screen bg-gradient-to-br from-[#30133b] via-[#551a55] to-[#d9adff] text-white font-mono">
      <Navbar />

      <main className="pt-20">
        <Element name="about">
          <About />
        </Element>

        <Element name="experience">
          <Experience />
        </Element>

        <Element name="projects">
          <Projects />
        </Element>

        <Element name="skills">
          <Skills />
        </Element>
      </main>

      <Footer />
    </div>
  );
};

export default App;
