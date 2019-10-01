import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {logout} from '../../actions/session_actions';


class NavBar extends React.Component {
  componentDidMount() {
    // debugger
  }

  render() {
    // debugger
    if (this.props.currentUser) {
      return (
        <div id='nav-bar'>
          {/* <img src="" alt=""/>
          <Link to="">Become a Host</Link>
          <Link to="">Saved</Link>
          <Link to="">Trips</Link>
          <Link to="">Messages</Link>
          <Link to="">Help</Link>
          <Link to="/profile"></Link> */}
          <h1>{this.props.currentUser.first_name}</h1>
          <button onClick={this.props.logout}>Log Out</button>
        </div>
      )
    } else {
      return (
        <div id='nav-bar'>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      )
    }
  }
}

const msp = state => {
  // debugger
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  return {
    currentUser
  }
}

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(msp, mdp)(NavBar);


//INFO: (logo), become a host, saved, trips, messages, help, (userprofile) ----FIX LINKS!

