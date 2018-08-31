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
  }

  handleChange(e) {
      this.setState({value:e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let currentLoc = this.props.coords.latitude + " " + this.props.coords.longitude;

    this.props.getBartStations(this.state.budget, "16TH");
    // this.props.getBartStations(this.state.budget,"Dsa");
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.isGeolocationAvailable !== nextProps.isGeolocationAvailable) {
      console.log('works');
      return this.displayBartSelectorForm();
    }
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  displayBartSelectorForm() {
      if(!this.props.isGeolocationAvailable) {
        return (
          <select value = {this.state.value} onChange = {this.handleChange}>
            <option value="16TH">16TH</option>
          </select>
        );
      } else {
        return (
          <div>Not working</div>
        );
      }
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
