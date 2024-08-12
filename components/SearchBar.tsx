"use client";
import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the search functionality here
    console.log("Search query:", query);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col md:flex-row gap-4 items-center justify-center"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for help or tutorials..."
        className="border border-gray-300 rounded-lg py-2 px-4 w-full md:w-1/2"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
