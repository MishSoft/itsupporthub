// Hero.js
"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden text-white py-24">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        muted
        loop
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative  rounded-xl container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Your Go-To Solution for Computer Troubleshooting and Learning
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Expert advice, tutorials, and support for all your computer needs.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/get-help"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
          >
            Get Help Now
          </a>
          <a
            href="/tutorials"
            className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
          >
            Explore Tutorials
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
