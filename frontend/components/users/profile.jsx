import React from 'react';
import {connect} from 'react-redux';
import CreateListingContainer from '../listings/create_listing_container';
import UpdateListingContainer from '../listings/edit_listing_container';
import {Link} from 'react-router-dom';
import {fetchListings} from '../../actions/listing_actions';
import { fetchReservations } from '../../actions/reservation_actions';
import { openModal, closeModal } from "../../actions/modal_actions";
import { updateBio } from '../../actions/user_actions';
import ProfileForm from './profile_form';
import HostResShow from './host_reservation_show';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.handleModalClick = this.handleModalClick.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.modalHelper = this.modalHelper.bind(this);
    }

    componentDidMount() {
        this.props.fetchListings();
        // this.props.fetchReservations(this.props.user.id);
        const form = document.getElementById('prof-form');
        form.style.height = "0px";
    }

    handleModalClick() {
        this.props.openModal('user');
    }

    renderForm() {
        const form = document.getElementById('prof-form');
        form.style.height = "400px";
    }

    modalHelper() {
        this.props.openModal('listing');
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
                    <div className="edit-profile-link" onClick={this.handleModalClick}>Update Photo</div>
                    <div id='reviews'>
                        <h3><img src={window.checkURL} /> <div>0 reviews</div></h3>
                        <h3><img src={window.checkURL} /> <div>Verified</div></h3>
                    </div>
                    <div id='provided'>
                        <h2>{this.props.user.first_name} provided</h2>
                        <h3><img src={window.checkURL} /> <div>Email Address</div></h3>
                    </div>
                </div>
                <div className="profile-description">
                    <h1>Hi, I'm {this.props.user.first_name}</h1>
                    <div onClick={this.renderForm} id="edit-prof-link">Edit Profile</div>
                    <div id='prof-form'><ProfileForm user={this.props.user} updateUser={this.props.updateUser} /></div>
                    <div id='bio'>
                        <p>{this.props.user.bio}</p>
                        <p><img src={window.houseURL} />Lives in {this.props.user.hometown}</p>
                    </div>
                    <div className="add-listing">
                      {/* <Link to="/listings/new">Add New Listing</Link> */}
                      <div id="add-listing" onClick={this.modalHelper}>Add New Listing</div>
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
        closeModal: () => dispatch(closeModal()),
        openModal: modal => dispatch(openModal(modal)),
        updateUser: user => dispatch(updateBio(user))
    }
}

export default connect(msp, mdp)(Profile);