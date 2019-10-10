import React from 'react';
import {Link} from 'react-router-dom';

class ListingItem extends React.Component {
  render() {
    // debugger
    let link = `/users/${this.props.listing.owner_id}/listings/${this.props.listing.id}`;
    if (this.props.upcoming) {
      link = `/listings/${this.props.listing.id}/reservations`
    } 

     return (
      <div className="listing-item">
        <Link to={link}>
        <div className="index-img">
          <img src={this.props.listing.photoURL} alt=""/>
        </div>
        </Link>
        <div className="index-desc">
          <h5>{this.props.listing.title}</h5>
          <p>
            {this.props.listing.description}
          </p>
          <h6>${this.props.listing.rate}/night</h6>
        </div>
      </div>
    )
  }
}

export default ListingItem;