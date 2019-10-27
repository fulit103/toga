import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style/components/step.scss';
import back from '../assets/static/items/back.png';
import pizza from '../assets/static/recipe/pizza.png';

const Step = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='Arrow__back'>
          <Link to='/food'>
            <img src={back} alt='' />
          </Link>
        </div>
        <div className='step__step'>
          <h3> 8 de 10 </h3>
        </div>
        <div>
          <h4>Ingredientes </h4>
        </div>
      </div>
      <div className='instruction__pic'>
        <img src={pizza} alt='' />
      </div>
      <div className='instructions'>
        <p>En un bol ponemos todos los ingredientes de la masa: harina, agua, levadura, aceite y sal y mezclamos bien con una cuchara. Una masa de pizza es como un pan sencillo. Se puede hacer con cualquier tipo de harina y la cantidad de agua será aproximadamente de la mitad de la de harina. Si usamos una harina con más cantidad de gluten (harina de fuerza) entonces necesitaremos algo más de agua y si utilizamos una harina normal (como la de hoy) con la mitad de agua (por harina) y un poco más será suficienteEn un bol ponemos todos los ingredientes de la masa: harina, agua, levadura, aceite y sal y mezclamos bien con una cuchara. Una masa de pizza es como un pan sencillo. Se puede hacer con cualquier tipo de harina y la cantidad de agua será aproximadamente de la mitad de la de harina. Si usamos una harina con más cantidad de gluten (harina de fuerza) entonces necesitaremos algo más de agua y si utilizamos una harina normal (como la de hoy) con la mitad de agua (por harina) y un poco más será suficiente </p>
      </div>
    </div>
  );
};

export default Step;
