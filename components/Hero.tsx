// Hero.js
"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden text-white h-screen flex items-center justify-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
        autoPlay
        muted
        loop
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>

      <div className="text-center px-6 md:px-12 lg:px-24 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Solving Tech Problems, One Click at a Time
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">
          Your trusted partner for reliable IT support, anytime, anywhere.
        </p>
        <a
          href="#services"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
