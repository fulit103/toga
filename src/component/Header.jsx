/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/components/header.scss';
import userIcon from '../assets/static/profile.png';

const Header = () => (
  <header className='header'>
    <Link to='/'>
      <div className='header__logo'>
          Toga
      </div>
    </Link>
    <img src={userIcon} alt='profile' className='header__profile' />
  </header>
);

export default Header;
