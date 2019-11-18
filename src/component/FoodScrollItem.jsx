/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/style/components/foodScrollItem.scss';
import Like from '../assets/static/items/corazon.png';
import Plato from '../assets/static/items/plato-1.png';
import { connect } from 'react-redux';
import { setFoodSelected } from '../actions/index'

const FoodScrollItem = (props) => {

  let history = useHistory();

  const handlerClick = () => {
    props.setFoodSelected(props.id)
    history.push(`/food/${props.id}`);
  };

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
      <button className='food__scroll__buy' onClick={()=>handlerClick()} >
          Ver mas
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  setFoodSelected 
}


export default connect(null, mapDispatchToProps)(FoodScrollItem);
