import React from 'react';
import { connect } from 'react-redux';
import {fetchListing} from '../../actions/listing_actions';
import ReservationForm from '../reservations/reservation_form';
import ListingMap from './listing_map';
import {fetchUser} from '../../actions/user_actions';
import ReviewIndex from '../reviews/review_index';
import {Link} from 'react-router-dom';

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
    // this.userHelper = this.userHelper.bind(this);
    // this.state = {owner: null};
  }

  updateBounds() {
    return null;
  }

  componentDidMount() {
    // debugger
    window.scrollTo(0, 0);
    this.props.fetchListing(this.props.listingId);
    this.props.fetchUser(this.props.ownerId);
  }

  // userHelper() {
  //   // debugger
  //   const ownerId = this.props.listing.owner_id;
  //   this.props.fetchUser(ownerId);
  //   this.setState({owner: this.props.users[ownerId]});
  // }

  render() {
    // debugger
    const listing = this.props.listing || {};
    // if(this.props.listing) {
    //   this.userHelper();
    // }
    // const owner = this.props.users[listing.owner_id] || {};
    const owner = this.props.users[this.props.ownerId] || {};
    // debugger
    // debugger
    return (
      <div className="show-container">
      <div className="image-container">
          <img src={listing.photoURL} alt="" />
      </div>
      <div className="description">
        <div>
          <h1>{listing.title}</h1>
          <p>Description:
          <p id='desc'>{listing.description}</p>
            </p>

        </div>
          <div className="profile-image">
            <Link to={`/host/${owner.id}/profile`}><img src={owner.photoURL} alt="" />
            <p id="owner">{owner.first_name}</p></Link>
          </div>
      </div>
      <div className="reserve-form">
        <div className="res-text">
            ${listing.rate} <p>per night</p>
        </div>
        <div className="reservation-form">
        <ReservationForm listingId={this.props.listingId}/>
        </div>
      </div>
      <div className="reviews-container">
        <h3>Reviews:</h3>
        <ReviewIndex reviewableId={this.props.listingId} reviewableType={"Listing"}/>
      </div>
      <div className="map-container">
          <ListingMap listings={[listing]} updateBounds={this.updateBounds}/>
      </div>
      </div>
    )
  }
}

const msp = (state, ownProps) => {
  // debugger
  // const listings = state.entities.listings;
  const id = ownProps.match.params.listingId;
  const listing = state.entities.listings[id];
  const ownerId = ownProps.match.params.userId;
  const users = state.entities.users;

  return {
    listing, listingId: id, users, ownerId
  }
}

const mdp = dispatch => {
  return {
    fetchListing: id => dispatch(fetchListing(id)),
    fetchUser: id => dispatch(fetchUser(id))
  }
}

export default connect(msp, mdp)(ListingShow);

