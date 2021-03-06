import React from 'react';
import {connect} from 'react-redux';
import {fetchListing} from '../../actions/listing_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchReservations } from '../../actions/reservation_actions';
import ListingItem from '../listings/listing_item';


//we need: listing w/ link to listing show, start and end date of reservation, location
class ReservationShow extends React.Component {
    componentDidMount() {
        this.props.fetchListing(this.props.listingId);
        this.props.fetchUser(this.props.userId);
        this.props.fetchReservations(this.props.userId);
    }

    render() {
        const user = this.props.user || {};
        const listing = this.props.listing || {};
        // const userRes = user.reservations || [];
        // const listingRes = listing.reservations || [];
        const reservations = this.props.reservations || {};
        const reservationArr = Object.values(reservations);
        let reservation = {};
        for (let i = 0; i < reservationArr.length; i++) {
            // debugger
            if (reservationArr[i]["renter_id"] === this.props.userId && reservationArr[i]["listing_id"] === parseInt(this.props.listingId)) {
                // debugger
                reservation = reservationArr[i];
            }
        }
        // const reservation = reservations[reservationId] || {};
        // debugger
        return (
            <div className="reservation-show covered-by-search">
            <h1>You are going to {listing.city}!</h1>
            <h2>Dates: {reservation.start_date} to {reservation.end_date}</h2>
            <h2>Number of guests: {reservation.num_guests}</h2>            
            <div className="listing-click">
                <ListingItem className="res-listing" key={listing.id} listing={listing} />
            </div>
            </div>
        )
    }
}

const msp = (state, ownProps) => {
    //have user from current user and listing from params.. how to get reservations? (NORMALIZE JBUILDER STATE)
    const listingId = ownProps.match.params.listingId;
    const userId = state.session.id;
    const listing = state.entities.listings[listingId];
    const user = state.entities.users[userId];
    const reservations = state.entities.reservations;

    return {
        listingId, userId, listing, user, reservations
    }
}

const mdp = dispatch => {
    return {
        fetchUser: id => dispatch(fetchUser(id)),
        fetchListing: id => dispatch(fetchListing(id)),
        fetchReservations: (userId) => dispatch(fetchReservations(userId))
    }
}

export default connect(msp, mdp)(ReservationShow);