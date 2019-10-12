import React from 'react';
import '../assets/style/components/header.scss';
import userIcon from '../assets/static/profile.png';

const Header = () => (
  <header className='header'>
    <div className='header__logo'>
        Toga
    </div>
    <img src={userIcon} alt='profile' className='header__profile' />
  </header>
);

export default Header;
