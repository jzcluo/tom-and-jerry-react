import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ButtonArea extends Component {
    render() {
        return (
            <div className="button-area-display">
                <p>Welcome to Tom and Jerry Lets show you some Rats</p>
                <Link to='/signin' className="button">Sign In</Link>
                <Link to='/signup' className="button">Sign Up</Link>
            </div>
        );
    }
}

export default ButtonArea;
