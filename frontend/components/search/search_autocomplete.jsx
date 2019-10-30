import React from 'react';
import {connect} from 'react-redux';
import {fetchListings} from '../../actions/listing_actions';

class SearchAutocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchListings()
    }

    handleClick(e) {
        const sBar = document.getElementById("search-bar-input");
        sBar.value = e.target.innerText;
        document.getElementById('autocomplete-dropdown').innerHTML = "";
    }

    unique(cities) {
        const newCities = [];
        cities.forEach(c => {
            if (!newCities.includes(c)) {
                newCities.push(c);
            }
        })

        return newCities;
    }

    render() {
        let cities = this.props.cities || [];
        cities = this.unique(cities);
        const value = this.props.value || "";

        return (
        <div id="autocomplete-dropdown">
            <ul>
                {cities.map(city => {
                    if (city.includes(this.props.value)) {
                        return <li key={city} onClick={this.handleClick}>{city}</li>;
                    }
                })}
            </ul>
        </div>
        )
    }
}

const msp = state => {
    const listings = Object.values(state.entities.listings);
    const cities = listings.map(lis => {
        return lis.city;
    })

    return {
        listings, cities
    }
}

const mdp = dispatch => {
    return {
        fetchListings: () => dispatch(fetchListings())
    }
}

export default connect(msp, mdp)(SearchAutocomplete);