import React from 'react';
import { connect } from 'react-redux';
import Search from '../component/Search';
import Categories from '../component/Categories';
import Types from '../component/Types';
import KindOfFood from '../component/KindOfFood';
import FoodScroll from '../component/FoodScroll';
import FoodScrollItem from '../component/FoodScrollItem';
import '../assets/style/App.scss';

const Home = (props) => {
  const { kinds, foods } = props;
  return (
    <>
      <Search />
      <Categories>
        <Types>
          { kinds.map((item) => <KindOfFood key={item.id} {...item} />)}
        </Types>
        <FoodScroll>
          { foods.map((item) => <FoodScrollItem key={item.id} {...item} />)}
        </FoodScroll>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    kinds: state.kinds,
    foods: state.foods,
  };
};

export default connect(mapStateToProps, null)(Home);
