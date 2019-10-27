/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// eslint-disable-next-line import/no-unresolved
import '../assets/style/components/foodpage.scss';
import 'react-tabs/style/react-tabs.css';
import ReactStars from 'react-stars';
import Like from '../assets/static/items/corazon.png';
import pizza from '../assets/static/recipe/pizza.png';

const FoodPage = (props) => {
  return (
    <div className='container_recipe'>
      <div className='container_recipe__header' >
        <div className='container_recipe__back'>
          <Link to='/'>
            Atras
          </Link>
        </div>
        <div className='main__food  picture'>
          <img src={pizza} alt='pic_recipe' width='80%' />
        </div>
        <div className='step_like'>

          <div className='corazon'>
            <button>
              <img src={Like} alt='Icon like' />
            </button>
          </div>

          <div className='step-by-step'>
            <button type='button' className='button-primary'>Paso a paso</button>
          </div>
          
        </div>
      </div>
      <div className='food-info'>
        <div className='recipe_title'>
          <div className='recipe_title'>
            <h1>Pizza</h1>
          </div>
          <label>La mejor forma de hacer pizza en casa es hacerla sin complicaciones, sin prisas ni preocupaciones.</label>
          <ReactStars
            className='stars'
            count={5}
            size={24}
            color2='#ffd700'
          />
          
        </div>
        
        <div className='inf-box instructions'>
          <Tabs>
            <TabList>
              <Tab>Ingredientes</Tab>
              <Tab>Instrucciones</Tab>
              <Tab>Inf. Nutricional</Tab>
            </TabList>
            <TabPanel>
              <li> 300 g de harina </li>
              <li> 160 g de agua </li>
              <li> 5 g de levadura de panadería instantánea </li>
              <li> 20 g de aceite de oliva virgen extra </li>
              <li> 1 cucharadita de sal </li>
              <li> 200 g de salsa de tomate </li>
              <li> 100 g de mozzarella </li>
              <li> 100 g de jamón de york 
                <Link to='/address'> Address</Link>
              </li>
              
            </TabPanel>
            <TabPanel>
              <p>En un bol ponemos todos los ingredientes de la masa: harina, agua, levadura, aceite y sal y mezclamos bien con una cuchara. Una masa de pizza es como un pan sencillo. Se puede hacer con cualquier tipo de harina y la cantidad de agua será aproximadamente de la mitad de la de harina. Si usamos una harina con más cantidad de gluten (harina de fuerza) entonces necesitaremos algo más de agua y si utilizamos una harina normal (como la de hoy) con la mitad de agua (por harina) y un poco más será suficienteEn un bol ponemos todos los ingredientes de la masa: harina, agua, levadura, aceite y sal y mezclamos bien con una cuchara. Una masa de pizza es como un pan sencillo. Se puede hacer con cualquier tipo de harina y la cantidad de agua será aproximadamente de la mitad de la de harina. Si usamos una harina con más cantidad de gluten (harina de fuerza) entonces necesitaremos algo más de agua y si utilizamos una harina normal (como la de hoy) con la mitad de agua (por harina) y un poco más será suficiente </p>
            </TabPanel>
            <TabPanel>
              <li> 11,21 gramos de proteina </li>
              <li> 15,20 gramos de grasa </li>
              <li> 28,5 gramos de carbohidratos </li>
              <li> 2,2 gramos de fibra </li>
            </TabPanel>
          </Tabs>
        </div>

        <div className='div-button-buy'>
          <button className='button-primary'>
            Comprar Ingredientes
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodPage;
