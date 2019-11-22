import React, { useState } from 'react';
import '../assets/style/components/KindOfFood.scss';
import kindFood from '../assets/static/categories/icons8-donut-128.png';
import { connect } from 'react-redux';
import {setFilterKindSelected} from '../actions/index';

const KindOfFood = (props) => {
  const { name, selected_kind, _id, url } = props;  
  console.log(props);

  const handleClick = (event) => {
    //props.setFilterKindSelected(_id)
  }

  return (
    <section className='food__kind__category' onClick={handleClick} style={{backgroundColor: selected_kind===_id?'yellow':'white' }}>
      <figure className='food__kind_img'>
        <img src={url} alt='comida caliente' />
      </figure>
      <p className='food__kind__subtitle'>
        {name}
      </p>
    </section>
  );
};

const mapDispatchToProps = {
  setFilterKindSelected 
}

export default connect(null, mapDispatchToProps)(KindOfFood);
