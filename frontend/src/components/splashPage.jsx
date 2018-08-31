import React from 'react';
import BartMap from './map/map.jsx';
import Search from './search/search.jsx';
import Attractions from './attractions/attractions';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
  }

  //default to get all bart stations
  componentDidMount() {
    this.props.getBartStations(100, "16TH");
  }

  render() {
    return <div>
        <Search getBartStations={this.props.getBartStations} getAllBartStations={this.props.allBarts} />
        <BartMap location={this.props.allBartStations} />
        <Attractions  />
      </div>;
  }
}

export default SplashPage;
