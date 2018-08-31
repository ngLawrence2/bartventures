import React from 'react';
import {geolocated} from 'react-geolocated';
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
      value: '16TH'
    };
    this.update=this.update.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.displayBartSelectorForm=this.displayBartSelectorForm.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.closestStation = this.closestStation.bind(this);
  }

  handleChange(e) {
      this.setState({value:e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let currentLoc = this.props.coords.latitude + " " + this.props.coords.longitude;
    //default when user puts a string or no value
    if(this.state.budget === '' || isNaN(parseInt(this.state.budget))) {
      this.props.getBartStations(100,this.state.value);
      return;
    }
    this.props.getBartStations(this.state.budget, this.state.value);
  }


  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  displayBartSelectorForm() {
        return (
          <select value = {this.state.value} onChange = {this.handleChange}>
            {this.props.getAllBartStations.map((bart,idx) => <option key={idx} value={bart.abbr}>{bart.name}</option>)}
          </select>
        );
  }

  getDistance(stationA, stationB ) {
    let distance = Math.pow(stationA.lat - stationB.lat,2) + Math.pow(stationA.lng - stationB.lng, 2);
    return Math.pow(distance, 0.5);
  }

  closestStation() {
    let closest = "16th St. Mission";
    if(this.props.coords) {
    let currentLocation = { lat: this.props.coords.latitude, lng: this.props.coords.longitude};
    let distance = Math.pow(37.765062 - this.props.coords.latitude, 2) + Math.pow(-122.419694 - this.props.coords.longitude,2);
    this.getAllBartStations.forEach( bart => {
      if ( this.getDistance(bart, currentLocation) < distance ) {
        console.log(closest);
        closest = bart.name;
      }
    }
  )
  }
  this.setState({value: closest});
}



  render() {

    const bartSelector = this.displayBartSelectorForm();
    return (

      <div>

        <form className='budget'>
       $
         <input className='budget'  type = "text" onChange={this.update("budget")} value={this.state.budget} placeholder="Enter your budget" />
        {bartSelector}

         <button className="search-btn" onClick={this.handleSubmit}>Show me routes!</button>
       </form>

      </div>
    );

    // return !this.props.isGeolocationAvailable
    //   ? <div>Your browser does not support Geolocation</div>
    //   : !this.props.isGeolocationEnabled
    //     ? <div>Geolocation is not enabled</div>
    //     : this.props.coords
    //       ?
    //       <div >
    //         <div className="current-coords"> {this.props.coords.latitude}
    //           {this.props.coords.longitude}
    //         </div>
    //                 <form className='budget'>
    //                 $
    //                   <input className='budget'  type = "text" onChange={this.update("budget")} value={this.state.budget} placeholder="Enter your budget" />
    //                   <input className='current-location' type = "text" onChange={this.update("location")} value={this.state.location} placeholder="Enter your address" />
    //                   <button className="search-btn" onClick={this.handleSubmit}>Show me routes!</button>
    //                 </form>
    //
    //               </div>
    //
    //       : <div>Getting the location data&hellip; </div>;
    }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Search);
// export default Search;
