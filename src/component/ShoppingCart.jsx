/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import '../assets/style/components/ShoppingCart.scss';
import back from '../assets/static/items/back.png';
import plus from '../assets/static/items/plus.png';
import less from '../assets/static/items/less.png';
import Plato from '../assets/static/items/plato-1.png';

import { withRouter } from 'react-router-dom';


class ShoppingCart extends React.Component {

  constructor(props, context) {
    super(props, context)

  }

  redirectToAddress(){
    console.log("address");
    this.props.history.push("/address");
  }

  render(){
    
    return (
      <div className='screen'>
        <div className='order__title'>
          <div className='Arrow__back'>
            <Link to='/food'>
              <img src={back} alt='' />
            </Link>
          </div>
          <div className='myorden'>
            <h1>Mi orden</h1>
          </div>
        </div>
        <div className='orden__list'>
          
          <div className='order__list_numerpeople'>
            <div className='personas'>
              <p># de Personas</p>
            </div>
            <div className='add__people'>
              <img src={plus} alt='mas' />
              <input type='number' name='' id='' />
              <img src={less} alt='menos' />
            </div>
          </div>
          <div className='order__list__title'>
            <h2>Ingredientes</h2>
          </div>
          <div className='item'>
            <div className='pic__item'>
              <img src={Plato} alt='' />
              <div className='name__item'>
                <p>Pizza</p>
              </div>
            </div>
            <div className='price'>
              <p>$12.000</p>
            </div>
          </div>
          <div className='item'>
            <div className='pic__item'>
              <img src={Plato} alt='' />
              <div className='name__item'>
                <p>Pizza</p>
              </div>
            </div>
            <div className='price'>
              <p>$12.000</p>
            </div>
          </div>
          <div className='item'>
            <div className='pic__item'>
              <img src={Plato} alt='' />
              <div className='name__item'>
                <p>Pizza</p>
              </div>
            </div>
            <div className='price'>
              <p>$12.000</p>
            </div>
          </div>
          <div className='item'>
            <div className='pic__item'>
              <img src={Plato} alt='' />
              <div className='name__item'>
                <p>Pizza</p>
              </div>
            </div>
            <div className='price'>
              <p>$12.000</p>
            </div>
          </div>
          <div className='item'>
            <div className='pic__item'>
              <img src={Plato} alt='' />
              <div className='name__item'>
                <p>Pizza</p>
              </div>
            </div>
            <div className='price'>
              <p>$12.000</p>
            </div>
          </div>
          <div className='total'>
            <div className='total__items'>
              <div className='total__item--number'>
                <h3> Total </h3>
              </div>
              <div className='total__item--price'>
                <p>$65.000</p>
              </div>
            </div>
          </div>
        </div>
        <div className='button__want'>
          <button className='button__buy' onClick={this.redirectToAddress.bind(this)}>
            ¡Lo quiero!
          </button>
        </div>
      </div>
    )
  }
  
};

export default withRouter(ShoppingCart);
