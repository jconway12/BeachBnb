import React from 'react';
import { connect } from 'react-redux';
import CreateListingContainer from '../listings/create_listing_container';
import UpdateListingContainer from '../listings/edit_listing_container';
import { Link } from 'react-router-dom';
import { fetchListings } from '../../actions/listing_actions';
import { fetchReservations } from '../../actions/reservation_actions';
import { openModal, closeModal } from "../../actions/modal_actions";
import { updateBio } from '../../actions/user_actions';
import ProfileForm from './profile_form';
import HostResShow from './host_reservation_show';
import {fetchUser} from '../../actions/user_actions';

class HostProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchListings();
        this.props.fetchUser(this.props.userId);
        // debugger
    }

    render() {
        const user = this.props.user || {};
        const all_listings = this.props.listings || [];
        const reservations = this.props.reservations || [];
        const listings = [];
        for (let i = 0; i < all_listings.length; i++) {
            if (all_listings[i].owner_id === user.id) {
                listings.push(all_listings[i]);
            }
        }
        const listingLabel = listings.length === 0 ? "They have no current listings" : "Available Listings: ";
        // debugger
        return (
            <div className="profile-page covered-by-search">
                <div className="profile-box">
                    <img src={user.photoURL} alt="" />
                    <div id='reviews'>
                        <h3><img src={window.checkURL} /> <div>0 reviews</div></h3>
                        <h3><img src={window.checkURL} /> <div>Verified</div></h3>
                    </div>
                    <div id='provided'>
                        <h2>{user.first_name} provided</h2>
                        <h3><img src={window.checkURL} /> <div>Email Address</div></h3>
                    </div>
                </div>
                <div className="profile-description">
                    <h1>Hi, I'm {user.first_name}</h1>
                    <div id='bio'>
                        <p>{user.bio}</p>
                        <p><img src={window.houseURL} />{user.hometown ? `Lives in ${user.hometown}` : "Hometown not specified"}</p>
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
    const userId = ownProps.match.params.userId;
    const user = state.entities.users[userId];
    const listings = Object.values(state.entities.listings);
    return {
        user, userId, listings
    }
}

const mdp = dispatch => {
    return {
        fetchUser: id => dispatch(fetchUser(id)),
        fetchListings: () => dispatch(fetchListings())
    }
}

export default connect(msp, mdp)(HostProfile);