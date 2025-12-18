import React, { useState } from 'react'; // 1. useState-ni import qilish shart
import './Header.css'; 
import Logo from "./image/logo.svg"; 

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          
          <div className="header__logo">
            <a href="/" className='header__logos'>
              <img src={Logo} alt="logo" width="50" />Artificial Intelligence
            </a>
          </div>

          {/* 3. Dinamik klass qo'shish: isOpen true bo'lsa 'active' klassi qo'shiladi */}
          <nav className={`header__nav ${isOpen ? "active" : ""}`} id='nav-links'>
            <ul className="header__list">
              <li><a href="#" className="header__link">Home</a></li>
              <li><a href="#" className="header__link">About</a></li>
              <li><a href="#" className="header__link">Services</a></li>
              <li><a href="#" className="header__link">Contact</a></li>
            </ul>
            <button className="header__btn">Sign In</button>
          </nav>

          {/* 4. Hamburger tugmasiga ham 'open' klassini berish (X shakliga aylanishi uchun) */}
          <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;