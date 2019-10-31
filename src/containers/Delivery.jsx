import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Link } from 'react-router-dom';
import '../assets/style/components/Delivery.scss';

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
            Atras
          </Link>
        </div>
        <div className='box__information'>
          <div className='entertime'>
            <h5>23:34</h5>
            <p>tiempo de entrega</p>
          </div>
          <div className='travel'>
            <h5>5 km</h5>
            <p>recorrido</p>
          </div>
        </div>
        <div className='footer'>
          <Link to='/' className='button-primary'>
            recibido
          </Link>
        </div>
        <Map
          className='map'
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 4.6097100,
            lng: -74.0817500,
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
