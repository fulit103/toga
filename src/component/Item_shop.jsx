import React from 'react';
import plus from '../assets/static/items/plus.png';
import less from '../assets/static/items/less.png';
import Plato from '../assets/static/items/plato-1.png';
import '../assets/style/components/ShoppingCart.scss';

const itemShop = (props) => {
  return (
    <div className='item'>
      <div className='product'>
        <div className='pic__item'>
          <img src={Plato} alt='' />
        </div>
        <div className='name__item'>
          <p>Pizza</p>
        </div>
      </div>
      <div className='product_price'>
        <div className='plus'>
          <img src={plus} alt='' />
        </div>
        <div className='price'>
          <p>$12.000</p>
        </div>
        <div className='less'>
          <img src={less} alt='' />
        </div>
      </div>
    </div>
  );
};

export default itemShop;
