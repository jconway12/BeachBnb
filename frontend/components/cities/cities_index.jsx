import React from 'react';
import {connect} from 'react-redux';
import {fetchListings, getCitiesFromListings } from '../../actions/listing_actions';
import {withRouter} from 'react-router-dom';

class CitiesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cities: ["Cabo", "Rio", "Phuket", "Montevideo", "Cartagena", "Sydney", "Lagos"], lowerIdx: 0, uppderIdx: 5 }
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
    if(this.state.uppderIdx < 7) {
     this.setState({lowerIdx: this.state.lowerIdx + 1, uppderIdx: this.state.uppderIdx + 1});
    }
  }

  decrementRange() {
    if (this.state.lowerIdx > 0) {
      this.setState({ lowerIdx: this.state.lowerIdx - 1, uppderIdx: this.state.uppderIdx - 1 });
    }
  }

  renderImage(city) {
    if (city === "Lagos") {
      return <img src={window.lagosURL} />;
    } else if (city === "Phuket") {
      return <img src={window.phuketURL} />;
    } else if (city === "Rio") {
      return <img src={window.rioURL} />;
    } else if (city === "Sydney") {
      return <img src={window.sydneyURL} />;
    } else if (city === "Cartagena") {
      return <img src={window.cartagenaURL} />;
    } else if (city === "Montevideo") {
      return <img src={window.montevideoURL} />;
    } else if(city === "Cabo") {
     return <img src={window.caboURL} />;
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