import React from 'react';

class SearchItem extends React.Component {
  render() {
    let beds;
    if (this.props.listing.num_beds == 1) {
      beds = "bed";
    } else {
       beds = 'beds';
    }
    return (
    <div className="search-item">
        <div className="search-description">
          <h3>{this.props.listing.title} - {this.props.listing.num_beds} {beds}</h3>
          <p>{this.props.listing.description}</p>
        </div>
        <div className="search-image">
          <img src={this.props.listing.photoURL} alt=""/>
        </div>
    </div>
    )
  }
}

export default SearchItem;