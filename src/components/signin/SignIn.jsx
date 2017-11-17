import React from 'react';
import {Redirect} from 'react-router-dom';
import * as firebase from 'firebase';


class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username : "",
            password : ""
        };
        let config = {
            apiKey: "AIzaSyD0DJ5yPL8NLLabk3FbPl-z1FeCk6AlfKI",
            authDomain: "tom-and-jerry-a4bd1.firebaseapp.com",
            databaseURL: "https://tom-and-jerry-a4bd1.firebaseio.com",
            storageBucket: "tom-and-jerry-a4bd1.appspot.com"
        };
        firebase.initializeApp(config);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.username || !this.state.password) {
            //fields cannot be empty
        } else {
            firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password).then(() => {
                console.log('success signing in');
                this.props.history.push('./map');
            }).catch(function(error) {
                // Handle Errors here.
                let errorCode = error.code;
                let errorMessage = error.message;
                //cannot sign in
                console.log("error signingin");
                alert("wrong credentials");
                // ...
            });
        }
    };

    updateField = (fieldName, event) => {
        let newState = {};
        newState[fieldName] = event.target.value;
        this.setState(newState);
    };

    render() {
        return(
            <div className="signup-form">
                <h2>Sign In</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username:</label>
                        <input type="text" id="username" value={this.state.username}
                               onChange={this.updateField.bind(null, 'username')}/>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" value={this.state.password1}
                               onChange={this.updateField.bind(null, 'password')}/>
                        <input type="submit" className="button"/>
                </form>
            </div>
        );
    }
}


export default SignIn;
