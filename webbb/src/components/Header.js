import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <header>
      <div id="logo">Tim White</div>
      <nav>
        <ul>
          <li>
            <a
              href="#main-section"
              className={activeSection === 'main' ? 'active' : ''}
              onClick={() => handleNavClick('main')}
            >
              Main
            </a>
          </li>
          <li>
            <a
              href="#additional-info"
              className={activeSection === 'additional' ? 'active' : ''}
              onClick={() => handleNavClick('additional')}
            >
              Additional
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
