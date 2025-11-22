import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Client from './components/Client';
import Contact from './components/Contact';
import ServiceDetails from './components/ServiceDetails'; 

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    <BrowserRouter>
      <div className="dark:bg-black bg-white relative">
        <Navbar theme={theme} setTheme={setTheme} />

        <Routes>

          
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <Client />
                <Contact />
              </>
            }
          />

         
          <Route path="/services/:id" element={<ServiceDetails />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
