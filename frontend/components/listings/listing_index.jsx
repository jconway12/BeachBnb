import React from 'react';
import { connect } from 'react-redux';
import {fetchListings} from '../../actions/listing_actions';
import ListingItem from './listing_item';

class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.props.city) {
    this.props.fetchListings({city: this.props.city});
    } else {
      this.props.fetchListings();
    }
  }

  handleClick() {
    this.props.history.push(`/search`) //update to fix correct search path
  }

  render() {
    const listings = this.props.listings || [];
    return (
      <>
        <h1 className="section-heading covered-by-search" onClick={this.handleClick}>Where to stay ></h1>
      <ul className="listings-index">
        {listings.map(listing => {
          return <ListingItem key={listing.id} listing={listing}/>
        })}
      </ul>
      </>
    )
  }
}

const msp = (state, ownProps) => {
  const listings = Object.values(state.entities.listings);
  const city = ownProps.match.params.city || null;
  return {
    listings, city
  }
}

const mdp = dispatch => {
  return {
    fetchListings: (filter) => dispatch(fetchListings(filter))
  }
}

export default connect(msp, mdp)(ListingIndex);