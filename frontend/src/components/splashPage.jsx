import React from 'react';
import BartMap from './map/map.jsx';
import Search from './search/search.jsx';
import {geolocated} from 'react-geolocated';
import AttractionsContainer from './attractions/attractionsContainer.js';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
  }

  //default to get all bart st
  componentDidMount() {

    this.props.getBartStations(100, "16TH");
  }

  render() {
    const markerConst = [{ lat: 37.773972, lng: -122.431297 } ,{ lat: 38.23123, lng: -122.931297 } ];
    return <div>
        <Search getBartStations={this.props.getBartStations} getAllBartStations={this.props.allBarts} loc={this.props.coords} clearErrors={this.props.clearErrors} />
        <BartMap location={this.props.allBartStations} markers ={markerConst} />
        <AttractionsContainer/>
      </div>;
  }
}

export default SplashPage;
