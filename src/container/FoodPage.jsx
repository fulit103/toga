/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../assets/style/components/foodPage.scss';
import 'react-tabs/style/react-tabs.css';
import ReactStars from 'react-stars';
import Like from '../assets/static/items/corazon.png';
import pizza from '../assets/static/recipe/pizza.png';

const FoodPage = (props) => {
  return (
    <>
      <div>
        <div>
          <Link to='/'>
            Atras
          </Link>
        </div>
        <div className= 'main__food'>
          <img src={pizza} alt='Icon like' />
        </div>
        <div className='step_like'>
          <div className='step_by_step'>
            <button>Paso a paso</button>
          </div>
          <div className="corazon">
            <button>
              <img src={Like} alt='Icon like' />
            </button>
          </div>
        </div>
        </div>
          <div className='recipe' >
            <h1>pizza</h1>
            <label>two cake rols a cup of coffe a dount</label>
            <ReactStars
              count={5}
              size={24}
              color2='#ffd700'
            />
          </div>
        <div>
          <Tabs>
            <TabList>
              <Tab>Ingredientes</Tab>
              <Tab>intrucciones</Tab>
              <Tab>Inf. nutricional</Tab>
            </TabList>
            <TabPanel>
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
        <div>
          <button>
            Comprar Ingredientes
          </button>
        </div>
    </>
  );
};

export default FoodPage;
