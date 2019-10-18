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
        // this.props.fetchReservations(this.props.user.id);
    }

    render() {
        const all_listings = this.props.listings || [];
        const reservations = this.props.reservations || [];
        const listings = [];
        for(let i = 0; i < all_listings.length; i++) {
            if(all_listings[i].owner_id == this.props.user.id) {
                listings.push(all_listings[i]);
            }
        }
        const listingLabel = listings.length === 0 ? "You have no current listings" : "Your listings: ";
        return  (
            <div className="profile-page covered-by-search">
                <div className="profile-box">
                    <img src={this.props.user.photoURL} alt="" />
                    {/* {ADD UPLOAD IMAGE FORM} */}
                </div>
                <div className="profile-description">
                    <h1>Hi, I'm {this.props.user.first_name}</h1>
                    <div className="add-listing">
                      <Link to="/listings/new">Add New Listing</Link>
                    </div>
                
                <ul className='listings'>
                        <h3>{listingLabel}</h3>
                        {listings.map(lis => {
                            return (
                                <li key={lis.id}>{lis.title}</li>
                                )
                        })}  
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