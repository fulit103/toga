import React from 'react';
import Header from '../component/Header';
import Search from '../component/Search';
import Categories from '../component/Categories';
import Types from '../component/Types';
import KindOfFood from '../component/KindOfFood';
import FoodScroll from '../component/FoodScroll';
import FoodScrollItem from '../component/FoodScrollItem';
import '../assets/style/App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <Search />
    <Categories>
      <Types>
        <KindOfFood />
        <KindOfFood />
        <KindOfFood />
        <KindOfFood />
        <KindOfFood />
      </Types>
      <FoodScroll>
        <FoodScrollItem />
        <FoodScrollItem />
        <FoodScrollItem />
        <FoodScrollItem />
        <FoodScrollItem />
      </FoodScroll>
    </Categories>
  </div>
);

export default App;
