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
          <NavBarContainer home={true}/>
        </header>
        <HomepageComponent />
        <CitiesIndex />
        <footer id='home-footer'><a href="https://github.com/jconway12/BeachBnb"><div><img src={window.gitURL} /></div></a></footer>
      </div>
    </>
  )
}



export default Home;