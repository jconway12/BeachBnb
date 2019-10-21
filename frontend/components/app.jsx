import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar';
import HomepageComponent from './homepage/homepage';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import Modal from './modal/modal';
import ListingIndexContainer from './listings/listing_index';
import Home from './home';
import ListingShowContainer from './listings/listing_show';
import ProfileContainer from './users/profile';
import TripsContainer from './users/trips';
import CreateListingContainer from './listings/create_listing_container';
import UpdateListingContainer from './listings/edit_listing_container';
import SearchListings from './search/search_listings';
import SearchBar from './search/search_bar';
import ReservationShow from './reservations/reservation_show';
import HomeModal from './homepage/home_modal';

const App = props => {
  return (
    <>
  <div>
    <Modal />
    <div id="white-nav">
          <Route path={["/listings", "/profile", "/trips", "/users/:userId/listings", "/search"]} component={NavBarContainer} />
    </div>
      <Route exact path="/" component={Home} />
  </div>
  <div id="search-options">
    <Switch>
      <Route path="/temp/search" component={SearchBar} /> //TEMPORARY
      <ProtectedRoute path="/search/:bounds/:city/:min_price/:max_price/:min_beds/:max_beds/:start_date/:end_date" component={SearchListings}/>
      <ProtectedRoute path="/listings/new" component={CreateListingContainer} />
      <ProtectedRoute path="/listings/:listingId/edit" component={UpdateListingContainer} />
      <ProtectedRoute path="/users/:userId/listings/:listingId" component={ListingShowContainer} />
      <ProtectedRoute path="/listings/:listingId/reservations" component={ReservationShow}/>
      <Route exact path="/listings/:city" component={ListingIndexContainer} />
      <Route exact path="/listings" component={ListingIndexContainer} />
      <ProtectedRoute path="/profile" component={ProfileContainer} />
      <ProtectedRoute path="/trips" component={TripsContainer} />
      <Route path="/home/modal" component={HomeModal} />
    </Switch>
  </div>
  </>
  )
}



export default App;