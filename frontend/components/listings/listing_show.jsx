import React from 'react';
import { connect } from 'react-redux';
import {fetchListing} from '../../actions/listing_actions';
import ReservationForm from '../reservations/reservation_form';
import ListingMap from './listing_map';

class ListingShow extends React.Component {
  componentDidMount() {
    this.props.fetchListing(this.props.listingId);
  }

  render() {
    const listing = this.props.listing || {};
    return (
      <div className="show-container">
      <div className="image-container">

      </div>
      <div className="description">
        <div>
          <h1>{listing.title}</h1>
          <p>{listing.description}</p>
        </div>
      </div>
      <div className="reserve-form">
        <div >
            ${listing.rate} <p>per night</p>
        </div>
        <div className="reservation-form">
        <ReservationForm listingId = {this.props.id}/>
        </div>
      </div>
      <div className="map-container">
          {/* <ListingMap listings={this.props.listings}/> */}
      </div>
      </div>
    )
  }
}

const msp = (state, ownProps) => {
  const listings = state.entities.listings;
  const id = ownProps.match.params.listingId;
  const listing = state.entities.listings[id];
  return {
    listing, listingId: id, listings
  }
}

const mdp = dispatch => {
  return {
    fetchListing: id => dispatch(fetchListing(id))
  }
}

export default connect(msp, mdp)(ListingShow);

