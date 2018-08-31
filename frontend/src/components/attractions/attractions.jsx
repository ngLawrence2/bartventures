import React from 'react';
import BartMap from '../map/map.jsx';


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
              <li>Attraction1 Title here</li>
              <li>Attraction2 Title here</li>
              <li>Attraction3 Title here</li>
            </ul>
          </div>
      </div>
    );
  }
}

export default Attractions;
