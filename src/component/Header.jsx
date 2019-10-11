import React from 'react';
import '../assets/style/components/header.scss';

const Header = () => (
  <header className='header'>
    <div className='header__logo'>
            Toga
    </div>
    <img src='img/profile.png' alt='profile' className='header__profile' />
  </header>
);

export default Header;
