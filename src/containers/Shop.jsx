import React from 'react';
import ShoppingCart from '../component/ShoppingCart';
import Item from '../component/Item_shop';
import { connect } from 'react-redux';
import '../assets/style/components/ShoppingCart.scss';

const Shop = (props) => {
  const {ingredients} = props;
  return (
    <>
      <ShoppingCart>
        {ingredients.map( item => {
          return (
            <Item nombre={item.nombre} key={item.id} valor={item.valor} />
          )
        })}        
      </ShoppingCart>
    </>
  );
};

const mapStateToProps = (state) => {
  return {    
    ingredients: state.shopping_cart,
  };
};

export default connect(mapStateToProps, null)(Shop);
