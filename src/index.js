import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './router/App';
import reducers from './reducers';

const store = createStore(
  reducers,
  {},

  // 'foods': [
  //   {
  //     'id': 1,
  //     'price': '10.000',
  //     'title': 'Pastel de pollo',
  //     'description': 'Descripcion del pastel de pollo',
  //     'img': '',
  //   },
  //   {
  //     'id': 2,
  //     'price': '15.000',
  //     'title': 'Pastel de pollo',
  //     'description': 'Descripcion del pastel de pollo',
  //     'img': '',
  //   },
  //   {
  //     'id': 3,
  //     'price': '12.000',
  //     'title': 'Pastel de pollo',
  //     'description': 'Descripcion del pastel de pollo',
  //     'img': '',
  //   },
  //   {
  //     'id': 4,
  //     'price': '16.000',
  //     'title': 'Pastel de pollo',
  //     'description': 'Descripcion del pastel de pollo',
  //     'img': '',
  //   },
  // ],
  // 'kinds': [
  //   {
  //     'id': 1,
  //     'name': 'chocolates',
  //     'img': '',
  //   },
  //   {
  //     'id': 2,
  //     'name': 'empanadas',
  //     'img': '',
  //   },
  //   {
  //     'id': 3,
  //     'name': 'arepas',
  //     'img': '',
  //   },
  // ],
// };
);
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('App'),
);
