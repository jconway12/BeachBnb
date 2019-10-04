import React from 'react';
import {connect} from 'react-redux';
import {fetchListings, getCitiesFromListings } from '../../actions/listing_actions';

class CitiesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cities: [] }
  }
  componentDidMount() {
    this.props.fetchListings();
  }

  render() {
    let cities;
    if (this.props.listings) {
      cities = this.props.getCities(this.props.listings)
    } else {
       cities = [];
    }
    return (
      <div className="cities-container">
        {cities.map((city, idx) => {
          return (
            <div key={idx} className="city-element">
              <div className="city-image">
                <div className="city-info">{city}</div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

const msp = state => {
  const listings = Object.values(state.entities.listings);
  return { listings }
}

const mdp = dispatch => {
  return {
    fetchListings: () => dispatch(fetchListings()),
    getCities: (listings) => getCitiesFromListings(listings)
  }
}

export default connect(msp, mdp)(CitiesIndex);