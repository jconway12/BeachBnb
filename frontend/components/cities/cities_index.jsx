import React from 'react';
import {connect} from 'react-redux';
import {fetchListings, getCitiesFromListings } from '../../actions/listing_actions';
import {withRouter} from 'react-router-dom';

class CitiesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cities: ["Boston", "London", "Sydney", "New York", "Tokyo", "Buenos Aires"], lowerIdx: 0, uppderIdx: 5 }
    this.incrementRange = this.incrementRange.bind(this);
    this.decrementRange = this.decrementRange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(city) {
    const that = this;
    return () => {
      that.props.history.push(`/listings/${city}`)
    }
  }

  componentDidMount() {
    // this.props.fetchListings();
  }

  incrementRange() {
    if(this.state.uppderIdx < 6) {
     this.setState({lowerIdx: this.state.lowerIdx + 1, uppderIdx: this.state.uppderIdx + 1});
    }
  }

  decrementRange() {
    if (this.state.lowerIdx > 0) {
      this.setState({ lowerIdx: this.state.lowerIdx - 1, uppderIdx: this.state.uppderIdx - 1 });
    }
  }

  renderImage(city) {
    if (city === "Boston") {
      return <img src={window.bostonURL} />;
    } else if (city === "New York") {
      return <img src={window.newyorkURL} />;
    } else if (city === "London") {
      return <img src={window.londonURL} />;
    } else if (city === "Sydney") {
      return <img src={window.sydneyURL} />;
    } else if (city === "Buenos Aires") {
      return <img src={window.buenosairesURL} />;
    } else if (city === "Tokyo") {
      return <img src={window.tokyoURL} />;
    }
  }

  render() {
    const cities = this.state.cities.slice(this.state.lowerIdx, this.state.uppderIdx);
    return (
      <>
      <div className="cities-container">
          <div id="decrementer" onClick={this.decrementRange}>{"<"}</div>
        {cities.map((city, idx) => {
          return (
            <div key={idx} className="city-element">
              <div className="city-image" onClick={this.handleClick(city)}>
                {this.renderImage(city)}
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

export default withRouter(connect(msp, mdp)(CitiesIndex));