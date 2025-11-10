import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Client from './components/Client';
import Contact from './components/Contact';

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div className="dark:bg-black bg-white relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Client />
      <Contact />
    </div>
  );
};

export default App;
