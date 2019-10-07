import { connect } from 'react-redux';
import { createListing } from '../../actions/listing_actions';
import ListingForm from './listing_form';

const msp = state => {
    const currUserId = state.session.id;
    const listing = {owner_id: currUserId, title: "", description: "", rate: 0, num_beds: 1, city: "", lat: null, lng: null};
    return {
        listing
    }
}

const mdp = dispatch => {
    return {
        action: listing => dispatch(createListing(listing))
    }
}

export default connect(msp, mdp)(ListingForm);