import React from 'react';
import { connect } from 'react-redux';
import Search from '../component/Search';
import Categories from '../component/Categories';
import Types from '../component/Types';
import KindOfFood from '../component/KindOfFood';
import FoodScroll from '../component/FoodScroll';
import FoodScrollItem from '../component/FoodScrollItem';
import '../assets/style/App.scss';

class Home extends Component {
// const Home = (props) => {
  // const { kinds, foods } = props;
ponerNombres = () => {
  return this.props.kinds.map((kinds) => (
    <KindOfFood key={item.id} />
  ));
};

render() {
  return (
    <>
      <Search />
      <Categories>
        <Types>
          {this.ponerNombres()}
        </Types>
        {/* // <FoodScroll>
          //   { foods.map((item) => <FoodScrollItem key={item.id} {...item} />)}
          // </FoodScroll> */}
      </Categories>
    </>
  );
  // };
}
};

const mapStateToProps = (reducers) => {
  return reducer.KindReducer;
};

export default connect(mapStateToProps, null)(Home);
