
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import Strategy from './components/Strategy';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main>
        <Hero />
        <Pillars />
        <Strategy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
