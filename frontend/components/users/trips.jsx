import React from 'react';
import {connect} from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import { fetchReservations } from '../../actions/reservation_actions';
import ListingItem from '../listings/listing_item';
import {Link} from 'react-router-dom';

class Trips extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchListings();
        // debugger
        this.props.fetchReservations(this.props.user.id);
        // debugger
    }

    render() {
        const reservations = this.props.reservations || [];
        const propsListings = this.props.listings || {};
        const new_listings = [];
        const old_listings = [];

        for(let i = 0; i < reservations.length; i++) {
            const res = reservations[i];
            const listingId = reservations[i].listing_id;
            if(propsListings[listingId]) {
                const listing = propsListings[listingId];
                if (res.passed) {
                    old_listings.push(listing);
                } else {
                    new_listings.push(listing);
                }
            }
        }
        
        return (
            <div className="trips">
                <h1 className="covered-by-search">Upcoming Plans</h1>
                <ul className="trips-index">
                    {new_listings.map(lis => {
                        return <ListingItem key={lis.id} listing={lis} upcoming={true}/>;
                    })}
                </ul>
                <h1 id="covered">Where You've Been</h1>
                <ul className='trips-index'>
                    {old_listings.map(lis => {
                        return <ListingItem key={lis.id} listing={lis} />;
                    })}
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
        fetchReservations: (userId) => dispatch(fetchReservations(userId)),
    }
}

export default connect(msp, mdp)(Trips);
