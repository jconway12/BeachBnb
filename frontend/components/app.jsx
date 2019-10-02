import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar';
import SignupContainer from './session_forms/signup_container';
import LoginContainer from './session_forms/login_container';
import HomepageComponent from './homepage/homepage';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = props => {
  return (
  <div>

    <header id='nav-bar-container'>
      <NavBarContainer />
    </header>
        <AuthRoute path="/login" exact component={LoginContainer} />
        <AuthRoute path="/signup" exact component={SignupContainer}/>
        <Route exact path="/" component={HomepageComponent}/>
 </div>
  )
}



export default App;