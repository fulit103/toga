import React from 'react';
import '../assets/style/components/search.scss';

const Search = () => (
  <div>
    <section className='busqueda'>
      <input type='text' className='busqueda__input' placeholder='Ej: Torta Chocolate' />
    </section>
  </div>
);

export default Search;
