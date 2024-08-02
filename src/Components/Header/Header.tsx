import React from 'react';
import logo from '../../assets/images/logo.png';
const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={logo} alt='Nail Salon Logo' />
      </div>
      <nav className='header__nav'>
        <ul className='header__nav-list'>
          <li className='header__nav-item'>
            <a href='#home' className='header__nav-link'>
              Home
            </a>
          </li>
          <li className='header__nav-item'>
            <a href='#services' className='header__nav-link'>
              Services
            </a>
          </li>
          <li className='header__nav-item'>
            <a href='#about' className='header__nav-link'>
              About Us
            </a>
          </li>
          <li className='header__nav-item'>
            <a href='#contact' className='header__nav-link'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
