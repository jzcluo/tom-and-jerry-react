import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import './main.css';
import Header from './components/Header';
import Home from './components/home/Home';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp';
import Map from './components/map/Map';
import Graph from './components/graph/Graph';



import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <Header/>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/signin" component={ SignIn } />
                <Route path="/signup" component={ SignUp } />
                <Route path='/map' component={ Map } />
                <Route path='/graph' component={ Graph } />
            </Switch>
        </BrowserRouter>
    </div>
    , document.getElementById("root")
);
registerServiceWorker();
