import React from 'react';
import { connect } from 'react-redux';
import {fetchListing} from '../../actions/listing_actions';
import ReservationForm from '../reservations/reservation_form';

class ListingShow extends React.Component {
  componentDidMount() {
    this.props.fetchListing(this.props.listingId);
  }

  render() {
    const listing = this.props.listing || {};
    return (
      <div class="show-container">
      <div className="image-container">

      </div>
      <div className="description">
        <h1>{listing.title}</h1>
        <p>{listing.description}</p>
      </div>
      <div className="reserve-form">
        <div >
          ${listing.rate} per night
        </div>
      </div>
      <div className="map-container">

      </div>
      </div>
    )
  }
}

const msp = (state, ownProps) => {
  const id = ownProps.match.params.listingId;
  const listing = state.entities.listings[id];
  return {
    listing, listingId: id
  }
}

const mdp = dispatch => {
  return {
    fetchListing: id => dispatch(fetchListing(id))
  }
}

export default connect(msp, mdp)(ListingShow);

