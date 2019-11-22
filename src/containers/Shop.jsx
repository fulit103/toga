import React from 'react';
import ShoppingCart from '../component/ShoppingCart';
import Item from '../component/Item_shop';

import '../assets/style/components/ShoppingCart.scss';

const Shop = () => {
  return (
    <>
      <ShoppingCart>
        <Item />
      </ShoppingCart>
    </>
  );
};

export default (Shop);
