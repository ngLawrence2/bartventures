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
          Places to <div className="attractions-explore"> Explore</div>
          </div>
          <div>
            <ul className="test-list">
                <p className="attractions-name">{attractions[9].name}</p>
                  <img className="all-attraction-photos" src={ attractions[9].image } />
                  <p className="attractions-desc">{attractions[9].description}</p>
                  <br></br><br></br>
                <p className="attractions-name">{attractions[0].name}</p>
                  <img className="all-attraction-photos" src={attractions[0].image}/>
                  <p className="attractions-desc">{attractions[0].description}</p>
                  <br></br><br></br>
                <p className="attractions-name">{attractions[1].name}</p>
                  <img className="all-attraction-photos" src={attractions[1].image}/>
                  <p className="attractions-desc">{attractions[1].description}</p>
                  <br></br><br></br>
                <p className="attractions-name">{attractions[2].name}</p>
                  <img className="all-attraction-photos" src={attractions[2].image}/>
                  <p className="attractions-desc">{attractions[2].description}</p>
                  <br></br><br></br>
                <p className="attractions-name">{attractions[3].name}</p>
                  <img className="all-attraction-photos" src={attractions[3].image}/>
                  <p className="attractions-desc">{attractions[3].description}</p>
                  <br></br><br></br>
                <p className="attractions-name">{attractions[4].name}</p>
                  <img className="all-attraction-photos" src={attractions[4].image}/>
                  <p className="attractions-desc">{attractions[4].description}</p>
                  <br></br><br></br>
                <p className="attractions-name">{attractions[13].name}</p>
                  <img className="all-attraction-photos" src={attractions[13].image}/>
                  <p className="attractions-desc">{attractions[13].description}</p>
            </ul>
          </div>
      </div>
    );
  }
}

export default Attractions;
