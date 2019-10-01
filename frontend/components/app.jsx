import React from 'react';
import { Route, Link } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar';
import SignupContainer from './session_forms/signup_container';
import LoginContainer from './session_forms/login_container';

//import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = props => (
  <div>

    <div id='nav-bar-container'>
      <NavBarContainer />
    </div>

    {/* <Route to="/"/> */}
    <Route to="/signup" component={SignupContainer}/>
    <Route to="/login" component={LoginContainer}/>
 </div>
)



export default App;