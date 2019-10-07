import { connect } from 'react-redux';
import { updateListing, fetchListing } from '../../actions/listing_actions';
import ListingForm from './listing_form';

//NEED TO MAKE SEPERATE COMPONENT THAT RENDERS FORM BECAYSE OF FETCHLISTING

const msp = (state, ownProps) => {
    const listingId = ownProps.match.params.listingId;
    const listing = state.entities.listings[listingId];
    return {
        listing, listingId
    }
}

const mdp = dispatch => {
    return {
        action: listing => dispatch(updateListing(listing)),
        fetchListing: id => dispatch(fetchListing(id))
    }
}

export default connect(msp, mdp)(ListingForm);