import React from 'react';
import {GoogleMap, Marker} from 'react-google-maps';
import GoogleMapsWrapper from './GoogleMapsWrapper';

class MapArea extends React.Component {
    render() {
        return(
            <GoogleMapsWrapper
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCMh8-5D3mJSXspmJrhSTtt0ToGiA-JLBc&libraries=geometry,drawing,places" // libraries=geometry,drawing,places
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `600px`, width: `80%`, float: 'right'}} />}
                mapElement={<div style={{ height: `100%` }} />}
                defaultZoom={12}
                defaultCenter={{ lat: 40.7484, lng: -73.9857 }}>
            </GoogleMapsWrapper>
        );
    }
}

export default MapArea;
