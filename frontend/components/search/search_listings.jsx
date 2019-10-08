import React from 'react';
import {connect} from 'react-redux';
import {fetchListings} from '../../actions/listing_actions';
import ListingMap from '../listings/listing_map';
import SearchItem from './search_listing_item';

class SearchListings extends React.Component {
    constructor(props) {
        super(props);
        this.bounds = {};
        this.updateBounds = this.updateBounds.bind(this);
    }

    componentDidMount() {
        this.props.fetchListings({...this.bounds, ...this.props.filters});
    }

    componentDidUpdate(oldProps) {
        if (this.props.filters.city != oldProps.filters.city ||
            this.props.filters.min_price != oldProps.filters.min_price || 
            this.props.filters.max_price != oldProps.filters.max_price || 
            this.props.filters.min_beds != oldProps.filters.min_beds || 
            this.props.filters.max_beds != oldProps.filters.max_beds) {    
            this.props.fetchListings({...this.bounds, ...this.props.filters});
        }
    }

    updateBounds(bounds) {
        debugger
       this.bounds = bounds;
    //    this.props.fetchListings({...this.bounds, ...this.props.filters});
    }

    render() {
        const listings = this.props.listings || {};
        // debugger
        return (
            <div className="search-listings covered-by-search">
                <div className="found-listings">
                    <ul>
                        {listings.map(lis => {
                            return <SearchItem key={lis.id} listing={lis}/>
                        })}
                    </ul>
                </div>
                <div className="side-map">
                    <ListingMap listings={listings} updateBounds={this.updateBounds}/>
                </div>
            </div>
        )
    }
}

const msp = (state, ownProps) => {
    const listings = Object.values(state.entities.listings);
    const city = ownProps.match.params.city;
    const min_price = ownProps.match.params.min_price;
    const max_price = ownProps.match.params.max_price;
    const min_beds = ownProps.match.params.min_beds;
    const max_beds = ownProps.match.params.max_beds;

    return {
        listings,
        filters: { city, min_price, max_price, min_beds, max_beds}
    }
}

const mdp = dispatch => {
    return {
        fetchListings: (filter) => dispatch(fetchListings(filter))
    };
}

export default connect(msp, mdp)(SearchListings);
