import React from 'react';
import { GoogleMap,withGoogleMap,withScriptjs } from 'react-google-maps';

//https://github.com/tomchentw/react-google-maps/issues/636
//google map wrapper
const GoogleMapsWrapper = withScriptjs(withGoogleMap(props => {
  return <GoogleMap {...props}>{props.children}</GoogleMap>
}));

export default GoogleMapsWrapper;
