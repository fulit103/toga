/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import '../assets/style/components/foodScrollItem.scss';

const foodScrollItem = () => (
  <div className='food__scroll__item table'>
    <div className='corazon'>
      <button>
        <img src='img/items/corazon.png' alt='' />
      </button>
    </div>
    <figure className='food__scroll__img'>
      <img src='img/items/plato-1.png' alt='' className='food__img' />
    </figure>
    <div className='descripcion'>
      <label className='food__scroll_price'>
        $12.000
      </label>
      <label className='food__scroll__title'>
        Pastel de Rollo
      </label>
      <label className='food__scroll__description'>
        Descripcion del pastel de rollo
      </label>
    </div>
    <button className='food__scroll__buy'>
        Comprar ingredientes
    </button>
  </div>
);

export default foodScrollItem;
