import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../container/Home';
import Login from '../container/Login';
import Register from '../container/Register';
import NoFound from '../container/NoFound';
import Layout from '../component/Layout';
import FoodPage from '../container/FoodPage';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/food' component={FoodPage} />
        <Route component={NoFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
