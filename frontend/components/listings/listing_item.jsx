import React from 'react';
import {Link} from 'react-router-dom';

class ListingItem extends React.Component {
  render() {
    return (
      <div className="listing-item">
        <Link to={`/listings/${this.props.listing.id}`}>
        <div className="index-img">

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