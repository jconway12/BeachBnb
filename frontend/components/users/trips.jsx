import React from 'react';
import {connect} from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import { fetchReservations } from '../../actions/reservation_actions';
import ListingItem from '../listings/listing_item';

class Trips extends React.Component {
    componentDidMount() {
        this.props.fetchListings();
        // debugger
        this.props.fetchReservations(this.props.user.id);
        // debugger
    }

    render() {
        const reservations = this.props.reservations || [];
        const propsListings = this.props.listings || {};
        const listings = [];

        for(let i = 0; i < reservations.length; i++) {
            const listingId = reservations[i].listing_id;
            if(propsListings[listingId]) {
                listings.push(propsListings[listingId]);
            }
        }
        
        return (
            <div className="trips">
                <h1>Upcoming Plans</h1>
                <ul className="listings-index">
                    {listings.map(lis => {
                       return <ListingItem key={lis.id} listing={lis}/>;
                    })}
                </ul>
                <h1>Where You've Been</h1>
                <ul className='listings-index'>
                    
                </ul>
            </div>
        )
    }
}

const msp = (state, ownProps) => {
    const userId = state.session.id;
    const user = state.entities.users[userId];
    const listings = state.entities.listings;
    const reservations = Object.values(state.entities.reservations);
    // debugger
    return {
        user, listings, reservations
    }
}

const mdp = dispatch => {
    return {
        fetchListings: () => dispatch(fetchListings()),
        fetchReservations: userId => dispatch(fetchReservations(userId)),
    }
}

export default connect(msp, mdp)(Trips);
