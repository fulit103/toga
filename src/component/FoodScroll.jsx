import React from 'react';
import '../assets/style/components/foodScroll.scss';

const FoodScroll = ({ children }) => (
  <section className='food__scroll'>
    {children}
  </section>
);

export default FoodScroll;
