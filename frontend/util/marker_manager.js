
export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(listings) {
    // console.log("time to update");
    const listingsObj = {};
    for (let i = 0; i < listings.length; i++) {
      if (!Object.keys(this.markers).includes(listings[i].id)) {
        const marker = this.createMarkerFromBench(listings[i]);
        this.markers[listings[i].id] = marker;
      }

      listingsObj[listings[i].id] = listings[i];
    }

    Object.keys(this.markers).forEach(id => {
      // debugger
      if (listingsObj[id] == undefined) {
        this.removeMarker(this.markers[id]);
        delete this.markers[id];
      }
    });
  }

  createMarkerFromListing(listing) {
    const pos = new google.maps.LatLng(listing.lat, listing.lng);

    const marker = new google.maps.Marker({
      position: pos,
      map: this.map
    });

    return marker;
  }

  removeMarker(marker) {
    // debugger
    marker.setMap(null);
    marker = null;
  }
}