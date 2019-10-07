import { connect } from 'react-redux';
import { updateListing } from '../../actions/listing_actions';
import ListingForm from './listing_form';

const msp = (state, ownProps) => {
    const listingId = ownProps.match.params.listingId;
    const listing = state.listings[listingId];
    return {
        listing
    }
}

const mdp = dispatch => {
    return {
        action: listing => dispatch(updateListing(listing))
    }
}

export default connect(msp, mdp)(ListingForm);