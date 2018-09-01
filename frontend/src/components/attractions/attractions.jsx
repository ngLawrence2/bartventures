import React from 'react';
import BartMap from '../map/map.jsx';
import atractions from '../seeds.jsx';


class Attractions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="attractions-body">
          Places to Explore
          <div>
            <ul className="test-list">
              <li>{atractions[0].name}</li>
              <li>{atractions[1].name}</li>
              <li>{atractions[2].name}</li>
            </ul>
          </div>
      </div>
    );
  }
}

export default Attractions;
