import React from 'react';
import BartMap from './map/map.jsx';
import Search from './search/search.jsx';


class SplashPage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.getBartStations(100, "16TH");
  }

  render() {
    return <div>
        <Search getBartStations={this.props.getBartStations} getAllBartStations={this.props.allBarts} />
        <BartMap location={this.props.allBartStations} />
      </div>;
  }
}

export default SplashPage;
