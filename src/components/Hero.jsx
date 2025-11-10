import React from "react";
import heroImg from "../assets/hero-bg.jpeg.jpg";  

const Hero = () => {
  return (
    <div 
      id="home"
      className="relative w-full h-[90vh] flex items-center justify-center text-center text-white"
    >
      <img 
        src={heroImg}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-3xl px-4">
        <p className="text-lg sm:text-xl font-medium">
          Powerful Digital Solutions With
        </p>
        <h1 className="text-3xl sm:text-5xl font-extrabold mt-2 text-yellow-400">
          Techspire Solutions
        </h1>
        <p className="text-sm sm:text-lg mt-2 font-light">
          Empowering your business through cutting-edge technology
        </p>

        <a 
          href="#contact-us"
          className="mt-6 inline-block bg-primary text-white px-8 py-3 rounded-full 
                     font-medium hover:scale-105 transition-all"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Hero;
