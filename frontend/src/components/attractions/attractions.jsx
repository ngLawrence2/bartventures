import React from 'react';
import BartMap from '../map/map.jsx';
import attractions from '../seeds.jsx';

//comment

class Attractions extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const displayAttractions = this.props.attractions.map( (attr,idx) => {
      return (
        <div key = {idx} className="displayAttractions">
          <p className="attractions-name">{attr.name}</p>
            <img className="all-attraction-photos" src={ attr.image } />
            <p className="attractions-desc">{attr.description}</p>
            <br></br><br></br>
        </div>
      );
    });


    return (
      <div className="attractions-body">
          <div className="attractions-header">
          Places to <div className="attractions-explore"> Explore</div>
          </div>
          <div>
            <ul className="test-list">
                {displayAttractions}
            </ul>
          </div>
      </div>
    );
  }
}

export default Attractions;
