
// import React from 'react';
// import MarkerManager from '../../util/marker_manager';
// import { Link, withRouter } from 'react-router-dom';

// class ListingMap extends React.Component {

//   componentDidMount() {
//     // set the map to show SF
//     const mapOptions = {
//       center: { lat: 37.7758, lng: -122.435 }, //  MAKE THIS CHANGEABLE BASED ON LOCATION
//       zoom: 13
//     };

//     // wrap this.mapNode in a Google Map
//     this.map = new google.maps.Map(this.mapNode, mapOptions);
//     this.MarkerManager = new MarkerManager(this.map);

//     // const updateFilter = this.props.updateFilter.bind(this);
//     // const _handleClick = this._handleClick.bind(this);

//     //listener for updating bounds
//     this.map.addListener('idle', () => {
//       const latLngBound = this.map.getBounds();
//       const nE = latLngBound.getNorthEast();
//       const sW = latLngBound.getSouthWest();

//       const bounds = { northEast: { lat: nE.lat(), lng: nE.lng() }, southWest: { lat: sW.lat(), lng: sW.lng() } };
//       // updateFilter("bounds", bounds);
//     });

//     //click listener 
//     this.map.addListener('click', (e) => {
//       const latitude = e.latLng.lat();
//       const longitude = e.latLng.lng();
//       console.log(latitude);
//       console.log(longitude);
//       const coords = { lat: latitude, lng: longitude };
//       // _handleClick(coords);
//     })

//     this.MarkerManager.updateMarkers(this.props.listings);
//   }

//   //QUESTION ON ARRAY COMPARISON
//   componentDidUpdate(oldProps) {
//     if (oldProps.listings.length != this.props.listings.length || oldProps.listings[0] != this.props.listings[0]) {
//       this.MarkerManager.updateMarkers(this.props.listings);
//     }
//   }

//   // _handleClick(coords) {
//   //   this.props.history.push({
//   //     pathname: "benches/new",
//   //     search: `lat=${coords.lat}&lng=${coords.lng}`
//   //   });
//   // }

//   render() {
//     return (
//       <>
//         <div id='map-container' ref={map => this.mapNode = map}>
//         </div>
//       </>
//     )
//   }
// }

// export default withRouter(ListingMap);