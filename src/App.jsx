import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import Client from "./components/Client";
import Protfolio from './components/Protfolio';
import ContactUs from './components/ContactUs';

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.
  getItem('theme') : 'light')

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme} />
       <Hero />
       <Client />
       <Protfolio />
       <ContactUs />
    </div>
  )
}

export default App