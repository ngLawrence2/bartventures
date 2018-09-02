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
<<<<<<< HEAD
              <p className="attractions-desc">{attractions[9].name}</p>
              <img src={ attractions[9].image } />
                <p className="attractions-desc">{attractions[9].description}</p>
=======
                <p className="attractions-name">{attractions[0].name}</p>
                  <img className="all-attraction-photos" src={attractions[0].image}/>
                  <p className="attractions-desc">{attractions[0].description}</p>
                  <br></br>
                <p className="attractions-name">{attractions[1].name}</p>
                  <img className="all-attraction-photos" src={attractions[1].image}/>
                  <p className="attractions-desc">{attractions[1].description}</p>
                  <br></br>
                <p className="attractions-name">{attractions[2].name}</p>
                  <img className="all-attraction-photos" src={attractions[2].image}/>
                  <p className="attractions-desc">{attractions[2].description}</p>
                  <br></br>
                <p className="attractions-name">{attractions[3].name}</p>
                  <img className="all-attraction-photos" src={attractions[3].image}/>
                  <p className="attractions-desc">{attractions[3].description}</p>
                  <br></br>
                <p className="attractions-name">{attractions[4].name}</p>
                  <img className="all-attraction-photos" src={attractions[4].image}/>
                  <p className="attractions-desc">{attractions[4].description}</p>
                  <br></br>
                <p className="attractions-name">{attractions[5].name}</p>
                  <img className="all-attraction-photos" src={attractions[5].image}/>
                  <p className="attractions-desc">{attractions[5].description}</p>

              <li>Attraction8 Photo and Title here</li>
                <p className="attractions-desc">Description8 here</p>
              <li>Attraction9 Photo and Title here</li>
                <p className="attractions-desc">Description9 here</p>
              <li>Attraction10 Photo and Title here</li>
                <p className="attractions-desc">Description10 here</p>
>>>>>>> 8eeedc124f1d48022ba1f8d3ce004ce3d8105554
            </ul>
          </div>
      </div>
    );
  }
}

export default Attractions;
