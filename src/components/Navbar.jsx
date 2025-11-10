import React from 'react';
import assets from '../assets/assets';

const Navbar = ({ theme, setTheme }) => {
  return (
    <nav
      className={`flex justify-between items-center px-6 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-50 transition-all duration-500
        ${
          theme === 'dark'
            ? 'bg-gradient-to-r from-[#1E40AF]/95 via-[#A678E3]/90 to-[#6EC1E4]/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.5)]'
            : 'bg-gradient-to-r from-[#6EC1E4]/90 via-[#A678E3]/80 to-[#1E40AF]/90 backdrop-blur-xl shadow-md'
        }`}
    >
      {/* Logo */}
      <img
        src={assets.logo1}
        alt="Techspire Solutions"
        className="w-36 sm:w-44 hover:scale-105 transition-transform drop-shadow-lg"
      />

      {/* Links */}
      <div
        className={`flex items-center gap-6 text-sm font-semibold transition-all 
        ${theme === 'dark' ? 'text-white' : 'text-white'}`}
      >
        {['Home', 'About', 'Services', 'Portfolio', 'Client', 'Contact Us'].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
            className="relative group"
          >
            {item}
            <span
              className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-[#6EC1E4] via-[#A678E3] to-[#1E40AF]
              transition-all duration-300 group-hover:w-full"
            ></span>
          </a>
        ))}
      </div>

      {/* Connect Button */}
      <a
        href="#contact-us"
        className="hidden sm:flex items-center gap-2 text-sm font-semibold 
        text-white bg-gradient-to-r from-[#6EC1E4] via-[#A678E3] to-[#1E40AF]
        py-2 px-6 rounded-full shadow-lg hover:scale-105 hover:shadow-[0_0_15px_rgba(166,120,227,0.7)] transition-all duration-300"
      >
        Connect <img src={assets.arrow_icon} width={14} alt="" />
      </a>
    </nav>
  );
};

export default Navbar;
