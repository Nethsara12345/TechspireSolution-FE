import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import AboutUs from './components/aboutus'
import Servise from './components/servise'
import Client from "./components/Client"
import Protfolio from './components/Protfolio'
import Technologies from './components/Technologies'
import ContactUs from './components/ContactUs'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import ServiseDetails from './components/serviseDetails'

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <div className='dark:bg-black relative'>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <AboutUs />
            <Servise />
            <Client />
            <Protfolio />
            <Technologies />
            <ContactUs />
            <Footer theme={theme} />
          </>
        } />
        <Route path="/services/:id" element={<ServiseDetails theme={theme} />} />
      </Routes>
    </div>
  )
}

export default App