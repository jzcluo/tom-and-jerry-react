import React from 'react';
import MapOptionBar from './MapOptionBar';
import {Marker} from 'react-google-maps';
import GoogleMapsWrapper from './GoogleMapsWrapper';
import * as firebase from 'firebase';

class Map extends React.Component {

    constructor(props) {
        super(props);
        let config = {
            apiKey: "AIzaSyD0DJ5yPL8NLLabk3FbPl-z1FeCk6AlfKI",
            authDomain: "tom-and-jerry-a4bd1.firebaseapp.com",
            databaseURL: "https://tom-and-jerry-a4bd1.firebaseio.com",
            storageBucket: "tom-and-jerry-a4bd1.appspot.com"
        };
        firebase.initializeApp(config);
        this.state = {
            ratSightingData : []
        };
    }


    handleButtonClick = (startDate, endDate) => {
        //modify startDate and endDate to expected format
        let startDateString = startDate.format('YYYY/MM/DD hh:mm:ss');
        let endDateString = endDate.format('YYYY/MM/DD hh:mm:ss');

        if(endDateString < startDateString) {
            alert('End date has to be after start date');
            return;
        }

        let database = firebase.database();
        let entriesRef = database.ref('/').child('Entries');
        let ratDataArr = [];
        entriesRef.orderByChild('Created Date').startAt(startDateString).endAt(endDateString).limitToFirst(10).once('value', (snapshot) => {
            snapshot.forEach(function(childSnapshot) {
                let childData = childSnapshot.val();
                ratDataArr.push(childData);
            });
            this.setState({ratSightingData : ratDataArr});
        });
    };

    render() {
        return(
            <div>
                <MapOptionBar onClick={(startDate, endDate) => this.handleButtonClick(startDate, endDate)}/>
                <GoogleMapsWrapper
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCMh8-5D3mJSXspmJrhSTtt0ToGiA-JLBc&libraries=geometry,drawing,places" // libraries=geometry,drawing,places
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `600px`, width: `80%`, float: 'right'}} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    defaultZoom={12}
                    defaultCenter={{ lat: 40.7484, lng: -73.9857 }}>
                    {this.state.ratSightingData.map((data) => {
                        return <Marker key={data['Incident Zip'] + data['Latitude'] + data['Created Date']} position={{lat:Number(data.Latitude), lng:Number(data.Longitude)}}/>
                    })}

                </GoogleMapsWrapper>
            </div>
        );
    }

}

export default Map;
