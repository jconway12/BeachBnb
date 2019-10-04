import React from 'react';
import {connect} from 'react-redux';
import {fetchListings, getCitiesFromListings } from '../../actions/listing_actions';

class CitiesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cities: [], lowerIdx: 0, uppderIdx: 5 }
    this.incrementRange = this.incrementRange.bind(this);
    this.decrementRange = this.decrementRange.bind(this);
  }

  componentDidMount() {
    this.props.fetchListings();
  }

  incrementRange() {
     this.setState({lowerIdx: this.state.lowerIdx + 1, uppderIdx: this.state.uppderIdx + 1});
  }

  decrementRange() {
    if (this.state.lowerIdx > 0) {
      this.setState({ lowerIdx: this.state.lowerIdx - 1, uppderIdx: this.state.uppderIdx - 1 });
    }
  }

  render() {
    let cities;
    if (this.props.listings) {
      cities = this.props.getCities(this.props.listings).slice(this.state.lowerIdx, this.state.uppderIdx);
    } else {
       cities = [];
    }
    return (
      <>
      <div className="cities-container">
          <div id="decrementer" onClick={this.decrementRange}>{"<"}</div>
        {cities.map((city, idx) => {
          return (
            <div key={idx} className="city-element">
              <div className="city-image">
                <div className="city-info">{city}</div>
              </div>
            </div>
          )
        })}
        <div id="incrementer" onClick={this.incrementRange}>{">"}</div>
      </div>
      </>
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