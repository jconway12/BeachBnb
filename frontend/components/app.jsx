import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar';
import HomepageComponent from './homepage/homepage';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Modal from './modal/modal';
import ListingIndexContainer from './listings/listing_index';
import Home from './home';
import ListingShowContainer from './listings/listing_show';

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
      <Route path="/listings" component={NavBarContainer} />
    </div>
      <Route exact path="/" component={Home} />
  </div>
  <div id="search-options">
    {/* category pages */}
      <Route exact path="/listings" component={ListingIndexContainer} />{/* must add location id to url path */}
      <Route path="/listings/:listingId" component={ListingShowContainer} />
  </div>
  </>
  )
}



export default App;