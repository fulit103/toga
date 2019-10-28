import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Link } from 'react-router-dom';
import '../assets/style/components/pageaddress.scss';

const mapStyles = {
  width: '100%',
  height: '100%'
};
 
export class PageAddress extends Component {
  render() {
    return (
      <div className='map-container-address'>
        <div className='header'>
          <Link to='/shop' className='atras'>
            Atras
          </Link>
          <input className='address-input' type='text' placeholder='tu direccion'></input>
        </div>
        <div className='footer'>
          <Link to='/' className='button-primary'>
            Siguiente
          </Link>
        </div>
        <Map
          className='map'
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
          lat: -1.2884,
          lng: 36.8233
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
  apiKey: 'AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'
})(PageAddress);

