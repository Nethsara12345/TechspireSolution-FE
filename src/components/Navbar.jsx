import React from 'react'
import assets from '../assets/assets'

const Navbar = ({theme, setTheme}) => {
  return (
    <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'> 
      
          <img src={theme === 'dark' ? assets.logo1 : assets.logo1} className='w-32 sm:w-40' alt='' />

          <div className='text-gray-700 dark:text-white sm:text-sm max-sm:w-60
           max-sm:pl-10 max-sm:fixed top-0 bottom-0 right-0 right-0 max-sm:min-h-screen
           max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white
           max-sm:pt-20 flex sm:items-center gap-5 transition-all'>


            <a href="#" className='sm:hover:border-b'>Home</a>
            <a href="#about" className='sm:hover:border-b'>About</a>
            <a href="#services" className='sm:hover:border-b'>Services</a>
            <a href="#portfolio" className='sm:hover:border-b'>Portfolio</a>
            <a href="#client" className='sm:hover:border-b'>Client</a>
            <a href="#contact-us" className='sm:hover:border-b'>Contact Us</a>


{/*            Testing */}

          </div>

          <div>
            <a href="#contact-us" className='text-sm max-sm:hidden flex 
            items-center gap-2 bg-primary text-white py-2 px-6 rounded-full
            cursor-pointer hover:scale-105 transition-all'>
              Connect <img src={assets.arrow_icon} width={14} alt='' />
            </a>  
          </div>

    </div>
  )
}

export default Navbar
