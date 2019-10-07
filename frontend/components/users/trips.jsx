import React from 'react';
import {connect} from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import { fetchReservations } from '../../actions/reservation_actions';
import ListingItem from '../listings/listing_item';

class Trips extends React.Component {
    componentDidMount() {
        this.props.fetchListings();
        this.props.fetchReservations(this.props.user.id);
    }

    render() {
        const reservations = this.props.reservations || [];
        const listings = [];
        reservations.forEach(res => {
            listingId = res.listing_id;
            listings << this.props.listings[listingId];
        });

        return (
            <div className="trips">
                <h1>Upcoming Plans</h1>
                <ul>
                    {listings.map(lis => {
                       return <ListingItem key={lis.id} listing={lis}/>;
                    })}
                </ul>
                <h1>Where You've Been</h1>
            </div>
        )
    }
}

const msp = (state, ownProps) => {
    const userId = state.session.id;
    const user = state.entities.users[userId];
    const listings = Object.values(state.entities.listings);
    const reservations = Object.values(state.entities.reservations);

    return {
        user, listings
    }
}

const mdp = dispatch => {
    return {
        fetchListings: () => dispatch(fetchListings()),
        fetchReservations: userId => dispatch(fetchReservations(userId)),
    }
}

export default connect(msp, mdp)(Trips);
