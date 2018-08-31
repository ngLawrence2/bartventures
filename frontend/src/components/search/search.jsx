import React from 'react';
import {geolocated} from 'react-geolocated';
// import { withGoogleMap, GoogleMap } from 'react-google-maps';
/*global google*/
// 
// const currgeocoder = new google.maps.Geocoder();
//
// function initializeCurrent(latcurr, longcurr) {
//
//   console.log(latcurr + "-- ######## --" + longcurr);
//
//   if (latcurr != '' && longcurr != '') {
//     var myLatlng = new google.maps.LatLng(latcurr, longcurr);
//     return getCurrentAddress(myLatlng);
//   }
// }
//
// function getCurrentAddress(location) {
//   currgeocoder.geocode({
//     'location': location
//
//   }, function(results, status) {
//
//     if (status == google.maps.GeocoderStatus.OK) {
//       console.log(results[0]);
//       $("#address").html(results[0].formatted_address);
//     } else {
//       alert('Geocode was not successful for the following reason: ' + status);
//     }
//   });
// }


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: '',
    };
    this.update=this.update.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let currentLoc = {
      lat: this.props.coords.latitude,
      lng: this.props.coords.longitude
    }
    this.props.getBartStations(this.state.budget, currentLoc);
    // this.props.getBartStations(this.state.budget,"Dsa");
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }


  render() {

    return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ?
          <div className="current-coords">
              {this.props.coords.latitude}
              {this.props.coords.longitude}

                    <form>
                      <input type = "text" onChange={this.update("budget")} value={this.state.budget} placeholder="Enter your budget" />
                      <input type = "text" onChange={this.update("location")} value={this.state.location} placeholder="Enter your address" />
                      <button className="search-btn" onClick={this.handleSubmit}>Show me routes!</button>
                    </form>

                  </div>

          : <div>Getting the location data&hellip; </div>;
    }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Search);
// export default Search;
