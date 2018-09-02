import React from 'react';
import BartMap from '../map/map.jsx';
import attractions from '../seeds.jsx';


class Attractions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="attractions-body">
          <div className="attractions-header">
          Places to Explore
          </div>
          <div>
            <ul className="test-list">
              <p className="attractions-desc">{attractions[9].name}</p>
              <img src={ attractions[9].image } />
                <p className="attractions-desc">{attractions[9].description}</p>
            </ul>
          </div>
      </div>
    );
  }
}

export default Attractions;
