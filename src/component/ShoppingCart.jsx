/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import '../assets/style/components/ShoppingCart.scss';
import back from '../assets/static/items/back.png';
import plus from '../assets/static/items/plus.png';
import less from '../assets/static/items/less.png';

const ShoppingCart = ({ children }) => {
  return (
    <div className='screen'>
      <div className='order__title'>
        <div className='Arrow__back_s'>
          <Link to='/food'>
            <img src={back} alt='' />
          </Link>
        </div>
        <div className='myorden'>
          <h1>Mi orden</h1>
        </div>
      </div>
      <div className='orden__list'>
        <div className='order__list_numerpeople'>
          <div className='personas'>
            <p>Número de Personas</p>
          </div>
          <div className='add__people'>
            <img src={plus} alt='mas' />
            <p>    1      </p>
            <img src={less} alt='menos' />
          </div>
        </div>
        <div className='order__list__title'>
          <h2>Ingredientes</h2>
        </div>
        {children}
        <div className='total'>
          <div className='total__items'>
            <div className='total__item--number'>
              <h3> Total </h3>
            </div>
            <div className='total__item--price'>
              <p>$65.000</p>
            </div>
          </div>
        </div>
      </div>
      <div className='button__want'>
        <Link className='button__buy' to='/address'>
              ¡Lo quiero!
        </Link>
      </div>
    </div>
  );
};

export default (ShoppingCart);

//
