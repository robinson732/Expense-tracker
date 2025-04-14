import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
    />
  );
}

export default SearchBar;