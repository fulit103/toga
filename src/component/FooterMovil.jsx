import React from 'react';
import check from '../assets/static/items/check.png';
import Profile from '../../docs/profile.png';
import home from '../assets/static/items/home.png';
import search from '../assets/static/items/search.png';
import '../assets/style/components/footer.scss';
import { Link } from 'react-router-dom';

const FooterMovil = () => {
  return (
    <div className='foot'>
      <Link to='/'>
        <img src={home} alt='Home' />
      </Link>
      <Link to='/'>
        <img src={search} alt='search' />
      </Link>
      <Link to='/'>
        <img src={check} alt='check' />
      </Link>
      <Link to='/'>
        <div className='pic'>
          <img src={Profile} alt='profile' />
        </div>
      </Link>
    </div>
  );
};

export default FooterMovil;
