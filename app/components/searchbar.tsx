// components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ width = 'w-full', height = 'h-10' }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle search submission here (e.g., call API or filter data)
    console.log('Search term:', searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
        className={`px-3 py-2 rounded-md focus:outline-none focus:ring ring-blue-500 ${width} ${height} bg-white text-black`}
      />
      <button
        type="submit"
        className={`ml-2 px-4 py-2 rounded-md bg-black text-white hover:bg-gray-700 focus:outline-none ${height}`}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
