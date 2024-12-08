import React from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full max-w-md mb-4">
      <input
        type="text"
        placeholder="Search templates..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-3 border border-gray-300 rounded-lg w-full pl-10 text-black"
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
};

export default SearchBar;