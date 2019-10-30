import { render } from 'react-dom';
import React from 'react';
import CreditCard from './CreditCard';

render(
  <div className='container'>
    <CreditCard
      name='Julian'
      number='4321 1234 2345 0293'
      expiry='04/2028'
    />
  </div>,
  mountNode,
);
