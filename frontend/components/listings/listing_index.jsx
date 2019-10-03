import React from 'react';
import { connect } from 'react-redux';
import {fetchListings} from '../../actions/listing_actions';
import ListingItem from './listing_item';

class ListingIndex extends React.Component {
  componentDidMount() {
    this.props.fetchListings();
  }

  render() {
    const listings = this.props.listings || [];
    return (
      <>
      <h1 className="section-heading">Where to stay</h1>
      <ul className="listings-index">
        {listings.map(listing => {
          return <ListingItem key={listing.id} listing={listing}/>
        })}
      </ul>
      </>
    )
  }
}

const msp = state => {
  const listings = Object.values(state.entities.listings);
  return {
    listings
  }
}

const mdp = dispatch => {
  return {
    fetchListings: () => dispatch(fetchListings())
  }
}

export default connect(msp, mdp)(ListingIndex);