import React from 'react';
import { Link, withRouter } from "react-router-dom";

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
        <Link className="dropdown-item" to="/profile">Profile</Link>
        <input className="dropdown-item" type="submit" value="Log Out" onClick={this.logoutHelper}/>
      </div>
    );
  }
}

export default withRouter(NavBarDropdown);