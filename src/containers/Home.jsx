import React, {useEffect,useState} from 'react';
import { connect } from 'react-redux';
import Search from '../component/Search';
import Categories from '../component/Categories';
import Types from '../component/Types';
import KindOfFood from '../component/KindOfFood';
import FoodScroll from '../component/FoodScroll';
import FoodScrollItem from '../component/FoodScrollItem';
import {setFilterTextSearch, setKinds} from '../actions/index';
import '../assets/style/App.scss';
import debounce from 'lodash/debounce';
import axios from 'axios';

const Home = (props) => {
  const { kinds, foods, home_filter } = props;  
  
  const handleChangeText = debounce(function (query) {    
    console.log(query)
    //props.setFilterTextSearch(query)
  }, 1000);

  /*useEffect( () => {      
    
    const fetchData = async () => {
      let res1 = await axios.get("http://localhost:3000/api/kinds");  
      //let res2 = await axios.get("http://localhost:3000/api/foods")
      let { data } = res1;
      props.setKinds(data)
    }    

    fetchData();
    
  },[]);*/

  return (
    <>
      <Search /*onChange={handleChangeText}*/ text={home_filter.text_search}/>
      <Categories>
        <Types>
          { kinds.map((item) => <KindOfFood  selected_kind={home_filter.kind} key={item._id} name={item.name} url={item.url}/>)}
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
    home_filter: state.home_filter
  };
};

const mapDispatchToProps = {
  setFilterTextSearch,
  setKinds
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
