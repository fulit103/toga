import React from 'react';
import '../assets/style/components/CreditCard.scss';

const CreditCard = () => {
  render () {
  return (
    <div className='body'>
      <div className='credit-card'>
        <div className='credit-card__logo'>Logo </div>

        <div className='credit-card__number'>
          {props.number}
        </div>

        <div className='credit-card__info'>
          <div className='credit-card__info_name'>
            <div className='credit-card__info_label'>Nombre</div>
            <div>{props.name}</div>
          </div>

          <div className='credit-card__info_expiry'>
            <div className='credit-card__info_label'>Valido hasta </div>
            <div>{props.expiry}</div>
          </div>
        </div>

      </div>

    </div>
  );
  };
};

export default CreditCard;
