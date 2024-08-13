"use client";
import React from "react";
import CTAButton from "@/components/CTAButton";
import SearchBar from "@/components/SearchBar";

export default function GetHelp() {
  const handleSearch = (query: string) => {
    // Implement the search logic or navigation to search results page if needed
    console.log("Search query:", query);
  };

  return (
    <main className="min-h-screen flex flex-col gap-8 items-center justify-center text-center py-24 bg-gray-100">
      <section className="w-full max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          We're Here to Help
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Whether you need support with a technical issue or have a question,
          our team is ready to assist you. Explore our resources or contact us
          directly.
        </p>
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <CTAButton
          text="Contact Support"
          link="/pages/contact-support"
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        />
        <CTAButton
          text="Browse FAQs"
          link="/pages/browse-faqs"
          className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg"
        />
        <CTAButton
          text="Submit a Help Request"
          link="/pages/help-request"
          className="w-full py-4 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg"
        />
        <CTAButton
          text="Explore Tutorials"
          link="/pages/tutorials"
          className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
        />
      </section>
    </main>
  );
}
