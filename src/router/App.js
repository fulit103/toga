/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NoFound from '../containers/NoFound';
import Layout from '../component/Layout';
import FoodPage from '../containers/FoodPage';
import PageAddress from '../containers/PageAddress';
import ShoppingCart from '../component/ShoppingCart';
import Step from '../component/Step';
import pay from '../component/CreditCard.jsx';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/food' component={FoodPage} />
        <Route exact path='/adress' component={PageAddress} />
        <Route exact path='/shop' component={ShoppingCart} />
        <Route exact path='/step' component={Step} />
        <Route exact path='/pay' component={pay} />
        <Route component={NoFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
