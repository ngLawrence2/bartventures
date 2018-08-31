import React from 'react';
import {geolocated} from 'react-geolocated';

// return (
//   <div>
//     <form>
//       <input type = "text" onChange={this.update("budget")} value={this.state.budget} placeholder="Enter your budget" />
//       <input type = "text" onChange={this.update("location")} value={this.state.location} placeholder="Enter your address" />
//       <button className="search-btn" onClick={this.handleSubmit}>Show me routes!</button>
//
//     </form>
//   </div>
// );


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
