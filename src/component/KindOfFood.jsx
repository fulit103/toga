import React from 'react';
import '../assets/style/components/KindOfFood.scss';
import kindFood from '../assets/static/categories/icons8-donut-128.png';

const KindOf = () => (
  <section className='food__kind__category'>
    <figure className='food__kind_img'>
      <img src={kindFood} alt='comida caliente' />
    </figure>
    <p className='food__kind__subtitle'>
          hot
    </p>
  </section>
);

export default KindOf;
