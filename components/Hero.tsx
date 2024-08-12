// components/Hero.tsx
import React from "react";
import SearchBar from "./SearchBar";
import CTAButton from "./CTAButton";
import FeatureHighlights from "./FeatureHighlights";
import NewsletterSignup from "./NewsletterSignup";

const Hero = () => {
  return (
    <section className="relative overflow-hidden text-white py-24">
      {/* Video Background */}
      <video
        className="absolute top-0 h-screen left-0 w-full object-cover -z-10"
        autoPlay
        muted
        loop
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>

      <div className="relative container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Your Go-To Solution for Computer Troubleshooting and Learning
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Expert advice, tutorials, and support for all your computer needs.
        </p>
        <div className="mb-8">
          <SearchBar />
        </div>
        <div className="mt-8 flex flex-col gap-4 items-center">
          <CTAButton text="Get Help Now" link="/get-help" />
          <CTAButton text="Explore Tutorials" link="/pages/tutorials" />
        </div>
        {/* Optionally include NewsletterSignup here if needed */}
      </div>
    </section>
  );
};

export default Hero;
