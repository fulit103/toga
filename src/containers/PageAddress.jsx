import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Link } from 'react-router-dom';
import back from '../assets/static/items/back.png';
import '../assets/style/components/pageaddress.scss';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class PageAddress extends Component {
  render() {
    return (
      <div className='map-container-address'>
        <div className='header'>
          <Link to='/shop' className='atras'>
            <img src={back} alt='' />
          </Link>
          <div className='address_input'>
            <input type='text' placeholder='¿A donde llevamos tù comida?' />
          </div>
        </div>
        <div className='footer'>
          <Link to='/pay' className='button-primary'>
            Siguiente
          </Link>
        </div>
        <Map
          className='map'
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 4.65652735888384,
            lng: -74.05815354641328,
          }}

          fullscreenControl={false}
          streetViewControl={false}
          scaleControl={false}
          mapTypeControl={false}
          panContro={false}
          zoomControl={false}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw',
})(PageAddress);

