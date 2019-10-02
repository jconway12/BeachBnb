import React from 'react';
import { Link } from "react-router-dom";

class NavBarDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.logoutHelper = this.logoutHelper.bind(this);
  }

  logoutHelper() {
    this.props.logout().then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <div id="nav-dropdown">
        <Link to="">Profile</Link>
        <Link to=""><input type="submit" value="Log Out" onClick={this.logoutHelper}/></Link>
      </div>
    );
  }
}

export default NavBarDropdown;