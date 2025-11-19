import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import Client from "./components/Client"
import Protfolio from './components/Protfolio'
import Technologies from './components/Technologies'
import ContactUs from './components/ContactUs'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <div className='dark:bg-black relative'>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
       <Hero />
       <Client />
       <Protfolio />
       <Technologies />
       <ContactUs />
       <Footer theme={theme} />

    


    </div>
  )
}

export default App