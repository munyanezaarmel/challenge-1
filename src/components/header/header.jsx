import React, { useState } from 'react';
import logo from "../../../public/images/rice.png";
import { RiMenu3Line } from 'react-icons/ri';

const Header = () => {
  const [showList, setShowList] = useState(false);

  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Logo" />
      <ul className={`header__list ${showList ? 'header__list--show' : ''}`}>
        <li className="header__list-item header__list-item--active">Home</li>
        <li className="header__list-item">Menu</li>
        <li className="header__list-item">Services</li>
        <li className="header__list-item">Map</li>
        <li className="header__list-item">About</li>
      </ul>
      <RiMenu3Line 
        className="header__menu-icon"
        onClick={() => setShowList(!showList)}
      />
      
    </header>
  );
};

export default Header;
