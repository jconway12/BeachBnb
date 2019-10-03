import React from 'react';
import { Link } from "react-router-dom";

class NavBarDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.logoutHelper = this.logoutHelper.bind(this);
  }

  logoutHelper() {
    this.props.logout();
  }

  render() {
    return (
      <div id="nav-dropdown">
        <Link className="dropdown-item" to="">Profile</Link>
        <input className="dropdown-item" type="submit" value="Log Out" onClick={this.logoutHelper}/>
      </div>
    );
  }
}

export default NavBarDropdown;