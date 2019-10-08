
import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { Link, withRouter } from 'react-router-dom';

class ListingMap extends React.Component {
  constructor(props) {
    super(props);
    // this.firstListing = this.props.listings[0];
  }

  componentDidMount() {
    // debugger
    // set the map to show SF
    const mapOptions = {
      center: { lat: this.firstLat, lng: this.firstLng }, //  MAKE THIS CHANGEABLE BASED ON LOCATION
      zoom: 13
    };

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    // const updateFilter = this.props.updateFilter.bind(this);
    // const _handleClick = this._handleClick.bind(this);

    //listener for updating bounds
    this.map.addListener('idle', () => {
      const latLngBound = this.map.getBounds();
      const nE = latLngBound.getNorthEast();
      const sW = latLngBound.getSouthWest();

      const bounds = { northEast: { lat: nE.lat(), lng: nE.lng() }, southWest: { lat: sW.lat(), lng: sW.lng() } };
      debugger
        this.props.updateBounds(bounds);
    });

    //click listener > add in if you choose to use for new listing
    // this.map.addListener('click', (e) => {
    //   const latitude = e.latLng.lat();
    //   const longitude = e.latLng.lng();
    //   console.log(latitude);
    //   console.log(longitude);
    //   const coords = { lat: latitude, lng: longitude };
    //   // _handleClick(coords);
    // })

    this.MarkerManager.updateMarkers(this.props.listings);
  }

  //QUESTION ON ARRAY COMPARISON
  componentDidUpdate(oldProps) {
    if (oldProps.listings.length != this.props.listings.length || oldProps.listings[0] != this.props.listings[0]) {
      this.MarkerManager.updateMarkers(this.props.listings);
      this.map.setCenter(new google.maps.LatLng(this.firstLat, this.firstLng));
    }
  }

  //for creating new listing 
  // _handleClick(coords) {
  //   this.props.history.push({
  //     pathname: "/listings/new",
  //     search: `lat=${coords.lat}&lng=${coords.lng}`
  //   });
  // }

  render() {
    const firstListing = this.props.listings[0];
    // debugger
    if (firstListing) {
      this.firstLat = firstListing.lat;
      this.firstLng = firstListing.lng;
    } else {
      this.firstLat = 37.7758;
      this.firstLng = -122.435;
    }
    return (
      <>
        <div id='map-container' ref={map => this.mapNode = map}>
        </div>
      </>
    )
  }
}

export default withRouter(ListingMap);