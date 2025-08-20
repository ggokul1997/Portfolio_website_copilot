import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const App: React.FC = () => (
  <div className="bg-bg min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
