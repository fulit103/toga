/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/components/foodScrollItem.scss';
import Like from '../assets/static/items/corazon.png';
import Plato from '../assets/static/items/plato-1.png';

const FoodScrollItem = (props) => {
  const { title, price, description } = props;
  return (
    <div className='food__scroll__item table'>
      <div className='corazon'>
        <button>
          <img src={Like} alt='Icon like' />
        </button>
      </div>
      <figure className='food__scroll__img'>
        <img src={Plato} alt='food' className='food__img' />
      </figure>
      <div className='descripcion'>
        <label className='food__scroll_price'>
          $
          {price}
        </label>
        <label className='food__scroll__title'>
          {title}
        </label>
        <label className='food__scroll__description'>
          {description}
        </label>
      </div>
      <Link className='food__scroll__buy' to="/food">
          Ver mas
      </Link>
    </div>
  );
};

export default FoodScrollItem;
