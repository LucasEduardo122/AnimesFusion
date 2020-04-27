import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/home"  component={Home}/> || <Route exact path="/"  component={Home}/> 
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register}/>
        </Switch>
    </BrowserRouter>
)


export default Routes;