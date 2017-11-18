import React, { Component } from 'react';
import * as firebase from 'firebase';

class Header extends Component {

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

    render() {
        return (
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Tom and Jerry</h1>
            </header>
            {this.props.children}
          </div>
        );
    }
}

export default Header;
