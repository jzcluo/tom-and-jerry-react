import React from 'react';
import {Redirect} from 'react-router-dom';
import * as firebase from 'firebase';


class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username : "",
            password1 : "",
            password2 : ""
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
        if (this.state.password1 != this.state.password2) {
            alert("password must match");
        } else {

            firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password1).then(() => {
                console.log("signup success");
                this.props.history.push('./map');
            }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
                console.log("signup failed");
                alert("there has been an error in creating your account");
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
            <div class="signup-form">
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username:</label>
                        <input type="text" id="username" value={this.state.username}
                               onChange={this.updateField.bind(null, 'username')}/>
                        <label htmlFor="password1">Password:</label>
                        <input type="password" id="password1" value={this.state.password1}
                               onChange={this.updateField.bind(null, 'password1')}/>
                        <label htmlFor="password2">Confirm Password:</label>
                        <input type="password" id="password2" value={this.state.password2}
                           onChange={this.updateField.bind(null, 'password2')}/>
                        <input type="submit" className="button"/>
                </form>
            </div>
        );
    }
}


export default SignUp;
