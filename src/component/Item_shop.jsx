import React from 'react';
import '../assets/style/components/ShoppingCart.scss';
import plus from '../assets/static/items/plus.png';
import less from '../assets/static/items/less.png';
import Plato from '../assets/static/items/plato-1.png';

const itemShop = () => {
  return (
    <div className='item'>
      <div className='pic__item'>
        <img src={Plato} alt='' />
        <div className='name__item'>
          <p>Pizza</p>
        </div>
      </div>
      <div className='price'>
        <div className='plus'>
          <img src={plus} alt='' />
        </div>
        <p>$12.000</p>
      </div>
      <div className='less'>
        <img src={less} alt='' />
      </div>
    </div>
  );
};

export default itemShop;
