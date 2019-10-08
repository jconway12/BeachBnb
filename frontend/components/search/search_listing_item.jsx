import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SearchItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.history.push(`/users/${this.props.listing.owner_id}/listings/${this.props.listing.id}`)
  }

  render() {
    let beds;
    if (this.props.listing.num_beds == 1) {
      beds = "bed";
    } else {
       beds = 'beds';
    }
    return (
    <div className="search-item" onClick={this.handleClick}>
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

export default withRouter(SearchItem);