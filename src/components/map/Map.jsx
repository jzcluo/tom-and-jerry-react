import React from 'react';
import MapArea from './MapArea';
import MapOptionBar from './MapOptionBar';
import * as firebase from 'firebase';

class Map extends React.Component {

    constructor() {
        super();
        let config = {
            apiKey: "AIzaSyD0DJ5yPL8NLLabk3FbPl-z1FeCk6AlfKI",
            authDomain: "tom-and-jerry-a4bd1.firebaseapp.com",
            databaseURL: "https://tom-and-jerry-a4bd1.firebaseio.com",
            storageBucket: "tom-and-jerry-a4bd1.appspot.com"
        };
        firebase.initializeApp(config);
    }


    handleButtonClick = (startDate, endDate) => {
        //modify startDate and endDate to expected format
        let startDateString = startDate.format('YYYY/MM/DD hh:mm:ss');
        let endDateString = endDate.format('YYYY/MM/DD hh:mm:ss');


        let database = firebase.database();
        let entriesRef = database.ref('/').child('Entries');
        entriesRef.orderByChild('Created Date').startAt(startDateString).endAt(endDateString).limitToFirst(10).once('value', (snapshot) => {
            console.log(snapshot[0]);
            snapshot.forEach(function(childSnapshot) {
                var childData = childSnapshot.val();
                console.log(childData);
            });
        });
    };

    render() {
        return(
            <div>
                <MapOptionBar onClick={(startDate, endDate) => this.handleButtonClick(startDate, endDate)}/>
                <MapArea />
            </div>
        );
    }

}

export default Map;
