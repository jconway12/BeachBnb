import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar';
import SignupContainer from './session_forms/signup_container';
import LoginContainer from './session_forms/login_container';
import HomepageComponent from './homepage/homepage';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = props => (
  <div>

    <header id='nav-bar-container'>
      <NavBarContainer />
    </header>
    
      <Switch>
        <AuthRoute to="/signup" exact component={SignupContainer}/>
        <AuthRoute to="/login" exact component={LoginContainer}/>
        <Route to="/" component={HomepageComponent}/>
      </Switch>
 </div>
)



export default App;