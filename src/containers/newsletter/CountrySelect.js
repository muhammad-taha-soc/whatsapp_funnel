// src/CountrySelect.js
import React, { useState } from 'react';

const countries = [
  { name: 'United States', code: 'us', flag: 'https://flagcdn.com/us.svg' },
  { name: 'Canada', code: 'ca', flag: 'https://flagcdn.com/ca.svg' },
  { name: 'United Kingdom', code: 'gb', flag: 'https://flagcdn.com/gb.svg' },
  { name: 'Australia', code: 'au', flag: 'https://flagcdn.com/au.svg' },
  // Add more countries as needed
];

const CountrySelect = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setSearchTerm(country.name);
    setDropdownOpen(false);
  };

  const dropdownStyles = {
    position: 'absolute',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%',
    maxHeight: '200px',
    overflowY: 'auto',
    zIndex: 1000,
  };

  const inputStyles = {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer', // Show pointer cursor
  };

  const itemStyles = {
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: 'transparent',
  };

  const imgStyles = {
    width: '20px',
    height: '20px',
    marginRight: '10px',
    borderRadius: '50%', // Make the images rounded
  };

  const dropdownIconStyles = {
    marginLeft: '10px',
    cursor: 'pointer',
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div style={{ position: 'relative', width: '300px' }}>
      <div
        style={inputStyles}
        role="button"
        tabIndex={0}
        onClick={toggleDropdown}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            toggleDropdown();
          }
        }}
      >
        {selectedCountry ? (
          <>
            <img
              src={selectedCountry.flag}
              alt={`${selectedCountry.name} Flag`}
              style={imgStyles}
            />
            {selectedCountry.name}
          </>
        ) : (
          <span>Select a country...</span>
        )}
        <span style={dropdownIconStyles}>&#9660;</span> {/* Dropdown icon */}
      </div>
      {isDropdownOpen && (
        <div style={dropdownStyles}>
          {filteredCountries.map((country, index) => (
            <div
              key={country.code}
              style={{
                ...itemStyles,
                backgroundColor:
                  hoveredIndex === index ? '#f0f0f0' : 'transparent',
              }}
              role="button"
              tabIndex={0}
              onClick={() => handleSelectCountry(country)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSelectCountry(country);
                }
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              <img
                src={country.flag}
                alt={`${country.name} Flag`}
                style={imgStyles}
              />
              {country.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountrySelect;
