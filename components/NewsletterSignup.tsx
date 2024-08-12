"use client";
import React, { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription functionality here
    console.log("Subscribed email:", email);
  };

  return (
    <form
      onSubmit={handleSubscribe}
      className="flex flex-col items-center gap-4"
    >
      <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="border border-gray-300 rounded-lg py-2 px-4 w-full md:w-1/2"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
      >
        Subscribe
      </button>
    </form>
  );
};

export default NewsletterSignup;
