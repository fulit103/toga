import React from 'react';
import Search from '../component/Search';
import Categories from '../component/Categories';
import Types from '../component/Types';
import KindOfFood from '../component/KindOfFood';
import FoodScroll from '../component/FoodScroll';
import FoodScrollItem from '../component/FoodScrollItem';
import '../assets/style/App.scss';

const Home = () => (
  <>
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
  </>
);

export default Home;
