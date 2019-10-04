import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar';
import HomepageComponent from './homepage/homepage';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import CitiesIndex from "./cities/cities_index";


const Home = props => {
  return (
    <>
      <div id="nav-homepage">
        <Modal />
        <header id='nav-bar-container'>
          <NavBarContainer />
        </header>
        <HomepageComponent />
        <CitiesIndex />
      </div>
    </>
  )
}



export default Home;