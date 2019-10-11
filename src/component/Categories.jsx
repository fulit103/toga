/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../assets/style/components/categories.scss';

const Categories = ({ children }) => (
  <div className='categories'>
    <div className='food__title'>
      <h1>Hora del desayuno</h1>
      <label>Que quieres comer hoy</label>
    </div>
    {children}
  </div>
);

export default Categories;
