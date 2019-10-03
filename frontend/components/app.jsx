import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar';
import SignupContainer from './session_forms/signup_container';
import LoginContainer from './session_forms/login_container';
import HomepageComponent from './homepage/homepage';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Modal from './modal/modal';
import ListingIndexContainer from './listings/listing_index';
import Home from './home';

const App = props => {
  return (
    <>
    {/* <div id="nav-homepage">
      <Modal />
    <header id='nav-bar-container'>
      <NavBarContainer />
    </header>
        <Route exact path="/" component={Home}/>
    </div> */}
  <div>
    <Modal />
    <div id="white-nav">
      <Route path="/index" component={NavBarContainer} />
    </div>
      <Route exact path="/" component={Home} />
  </div>
  <div id="search-options">
    {/* category pages */}
    <ProtectedRoute path="/index" component={ListingIndexContainer} />     {/* must add location id to url path */}
  </div>
  </>
  )
}



export default App;