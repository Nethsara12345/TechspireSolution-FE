import React, { useState, useEffect } from "react";

// ✅ Import slider images
import hero1 from "../assets/hero-bg.jpeg.jpg";
import hero2 from "../assets/hero-bg2.jpg";
import hero3 from "../assets/hero-bg3.jpeg";

// ✅ Store all images in an array
const images = [hero1, hero2, hero3];

const Hero = () => {
  // ✅ Track the currently visible slide index
  const [current, setCurrent] = useState(0);

  // ✅ Automatically change image every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  // ✅ Go to the next slide manually
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  // ✅ Go to the previous slide manually
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      id="home"
      className="relative w-full h-[90vh] flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* ✅ Image slides */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* ✅ Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* ✅ Content text */}
      <div className="relative z-10 max-w-3xl px-4">
        <p className="text-lg sm:text-xl font-medium">
          Powerful Digital Solutions With
        </p>
        <h1 className="text-3xl sm:text-5xl font-extrabold mt-2 bg-gradient-to-r from-[#6EC1E4] via-[#A678E3] to-[#1E40AF] bg-clip-text text-transparent">
          Techspire Solutions
        </h1>
        <p className="text-sm sm:text-lg mt-2 font-light">
          Empowering your business through cutting-edge technology
        </p>

        <a
          href="#contact-us"
          className="mt-6 inline-block bg-gradient-to-r from-[#6EC1E4] via-[#A678E3] to-[#1E40AF]
                     text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-all shadow-lg"
        >
          Get Started
        </a>
      </div>

      {/* ✅ Manual navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white text-2xl px-3 py-2 rounded-full z-20 transition"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white text-2xl px-3 py-2 rounded-full z-20 transition"
      >
        ›
      </button>
    </div>
  );
};

export default Hero;
