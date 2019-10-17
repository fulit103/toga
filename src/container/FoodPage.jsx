import React from 'react';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReactStars from 'react-stars';
import Like from '../assets/static/items/corazon.png';

const FoodPage = props => {
  return (
    <>
      <div>
        <div>
          <Link to="/">
            Atras
          </Link>
        </div>
        <div>
          <div>
            <button>Paso a paso</button>
            <button>
              <img src={Like} alt='Icon like' />
            </button>
          </div>
          <div>
            <h1>Cacke Roll Set</h1>
            <label>two cake rols a cup of coffe a dount</label>
            <ReactStars
            count={5}            
            size={24} 
            color2={'#ffd700'} />
          </div>
          <Tabs>
            <TabList>
              <Tab>Title 1</Tab>
              <Tab>Title 2</Tab>
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
      </div>
    </>
  );
}

export default FoodPage;