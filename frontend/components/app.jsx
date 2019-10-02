import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar';
import SignupContainer from './session_forms/signup_container';
import LoginContainer from './session_forms/login_container';
import HomepageComponent from './homepage/homepage';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Modal from './modal/modal';


const App = props => {
  return (
    <>
  <div id="nav-homepage">
      <Modal />
    <header id='nav-bar-container'>
      <NavBarContainer />
    </header>
        {/* <AuthRoute path="/login" exact component={LoginContainer} />
        <AuthRoute path="/signup" exact component={SignupContainer}/> */}
        <Route exact path="/" component={HomepageComponent}/>
  </div>
  <div id="search-options"></div>
  </>
  )
}



export default App;