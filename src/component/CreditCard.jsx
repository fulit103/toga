import React from 'react';
import Cards from 'react-credit-cards';
import { Link } from 'react-router-dom';
import '../assets/style/components/CreditCard.scss';

const CreditCard = () => {
  return (
    <div className='body'>
      <div className='credit-card'>
        <div className='credit-card__logo'>Logo </div>

        <div className='credit-card__number'>
          1234 1232 2343 2134
        </div>

        <div className='credit-card__info'>
          <div className='credit-card__info_name'>
            <div className='credit-card__info_label'>Nombre</div>
            <div>Julian </div>
          </div>

          <div className='credit-card__info_expiry'>
            <div className='credit-card__info_label'>Valido hasta </div>
            <div>12/24</div>
          </div>
        </div>
      </div>
      <div className='form'>
        <input type='number' name='' id='' placeholder='nùmero' />
        <input type='text' name='' id='' placeholder='nombre' />
        <input type='date' name='' id='' placeholder='fecha de expiraciòn' />
      </div>
      <Link to='/delivery' className='button_pay'>
            pagar
      </Link>
    </div>
  );
};

export default CreditCard;
