import React, { useState } from 'react';
import '../css/dropdown.css';

const Dropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('C++');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown-menu">
      <div className={`dropdown-header ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
        {selectedLanguage}
        <span className={`dropdown-icon ${isDropdownOpen ? 'rotate' : ''}`}>&#9662;</span>
      </div>
      {isDropdownOpen && (
        <div className="dropdown-options">
          <div
            className={`dropdown-option ${selectedLanguage === 'C++' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('C++')}
          >
            C++
          </div>
          <div
            className={`dropdown-option ${selectedLanguage === 'Python' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('Python')}
          >
            Python
          </div>
          <div
            className={`dropdown-option ${selectedLanguage === 'Java' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('Java')}
          >
            Java
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
