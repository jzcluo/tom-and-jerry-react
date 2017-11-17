import React, {Component} from 'react';
import ButtonArea from './ButtonArea';
import * as firebase from 'firebase';

class Home extends Component {

    constructor(props) {
        super(props);
        let config = {
            apiKey: "AIzaSyD0DJ5yPL8NLLabk3FbPl-z1FeCk6AlfKI",
            authDomain: "tom-and-jerry-a4bd1.firebaseapp.com",
            databaseURL: "https://tom-and-jerry-a4bd1.firebaseio.com",
            storageBucket: "tom-and-jerry-a4bd1.appspot.com"
        };
        firebase.initializeApp(config);
    }

    render() {
        return(
            <div className="home-display">
                <ButtonArea/>
            </div>
        );
    }
}

export default Home;
