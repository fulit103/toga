import React from 'react';
import error from '../assets/static/icon/404.png';
import '../assets/style/components/nofound.scss';

const Nofound = () => (
  <div className='notfound'>
    <h1 className='tittle_error'>Ups... esta receta aun no esta disponible</h1>
    <img src={error} alt='error 404' />
  </div>
);

export default Nofound;
