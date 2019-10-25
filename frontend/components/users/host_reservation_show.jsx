import React from 'react';
import {connect} from 'react-redux';
import {fetchListing} from '../../actions/listing_actions';
import {fetchAllReservations} from '../../actions/reservation_actions';
import {fetchUser} from '../../actions/user_actions';
import {Link} from 'react-router-dom';

class HostResShow extends React.Component {
    componentDidMount() {
        this.props.fetchListing(this.props.listingId);
        this.props.fetchAllReservations();
    }

    quickSort(reservations) {
        if (reservations.length <= 1) {

            return reservations;
        }

        const pivot = reservations[0];
        const left = [];
        const right = [];

        for(let i = 1; i < reservations.length; i++) {
            if (reservations[i].start_date < pivot.start_date) {
                left.push(reservations[i]);
            } else {
                right.push(reservations[i]);
            }
        }

        const sortedLeft = this.quickSort(left);
        const sortedRight = this.quickSort(right);

        return sortedLeft.concat([pivot].concat(sortedRight));
    }


    render() {
        const listing = this.props.listing || {};
        const allReservations = this.props.reservations || [];
        let reservations = [];
        if (listing != {} && listing.reservations != undefined) {
        for(let i = 0; i < allReservations.length; i++) {
             if (listing.reservations.includes(allReservations[i].id)) {
                reservations.push(allReservations[i]);
             }
         }
        }
        reservations = this.quickSort(reservations);
        const noRes = reservations.length === 0 ? <h1>No Upcoming Reservations</h1> : <h1>Upcoming Reservations</h1>;
  
        return (
            <div className="reservation-show">
                {noRes}
                <ul>
                    {reservations.map(res => {
                        return <div className="res-item" key={res.id}>
                            <div>Start Date: {res.start_date}</div>
                            <div>End Date: {res.end_date}</div>
                            <div>Number of Guests: {res.num_guests}</div>
                            <Link to={`/host/${res.renter_id}/profile`}>Renter Profile</Link>
                        </div>
                    })}
                </ul>
            </div>
        )
    }
}

const msp = (state, ownProps) => {
    const listingId = ownProps.match.params.listingId;
    const listing = state.entities.listings[listingId];
    const reservations = Object.values(state.entities.reservations);
    return {
        listingId, listing, reservations
    }
}

const mdp = dispatch => {
    return {
        fetchListing: id => dispatch(fetchListing(id)),
        fetchAllReservations: () => dispatch(fetchAllReservations()),
        fetchUser: id => dispatch(fetchUser(id))
    }
}

export default connect(msp, mdp)(HostResShow);