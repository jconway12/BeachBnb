import React from 'react';
import {connect} from 'react-redux';
import CreateListingContainer from '../listings/create_listing_container';
import UpdateListingContainer from '../listings/edit_listing_container';
import {Link} from 'react-router-dom';
import {fetchListings} from '../../actions/listing_actions';
import { fetchReservations } from '../../actions/reservation_actions';

class Profile extends React.Component {
    componentDidMount() {
        this.props.fetchListings();
        this.props.fetchReservations(this.props.user.id);
    }

    render() {
        const all_listings = this.props.listings || [];
        const reservations = this.props.reservations || [];
        const listings = [];
        for(let i = 0; i < all_listings.length; i++) {
            if(all_listings[i].owner_id == this.props.user.id) {
                lsitings << all_listings[i];
            }
        }

        return  (
            <div className="profile-page">
                <h1>Hi, I'm {this.props.user.first_name}</h1>
                <div className="listing-form">
                    <p>ask about how to go about host profile...</p>
                </div>
                <div className='listings-reservations'>
                    <ul className="reservations">
                        <h3>Your upcoming trips: </h3>
                        {reservations.map(res => {
                            return <li key={res.id}>{res.city}</li>;
                        })}
                    </ul>
                    <ul className='listings'>
                        <h3>Your listings: </h3>
                        {listings.map(lis => {
                            return <li key={lis.id}>{lis.title}</li>;
                        })}
                        <Link to="/listings/new">Add Listing</Link>
                    </ul>
                </div>
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

export default connect(msp, mdp)(Profile);