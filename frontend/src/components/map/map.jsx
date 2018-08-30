import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
<<<<<<< HEAD:frontend/src/components/map.jsx
=======
/*global google*/
const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  },
  zoom: 13
};

>>>>>>> 63b95a1bf2330abd4051167464f004aca6961672:frontend/src/components/map/map.jsx

class BartMap extends React.Component {
    constructor(props) {
      super(props)
        this.state = {
            center: {
                lat: 37.773972,
                lng: -122.431297
            },
            zoom: 13
        };
    }

    render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
<<<<<<< HEAD:frontend/src/components/map.jsx
              defaultCenter = { { lat: 37.773972, lng: -122.431297 }}
              defaultZoom = { 11 }
            ></ GoogleMap>
        ))
        return (
           <div className="map" ref="map">

             <GoogleMapExample
               containerElement={ <div style={{ height: `980px`, width:'750px'}}/> }
               mapElement={ <div style={{height: `100%`}} />}
              />

=======
            defaultCenter = { { lat: 37.773972, lng: -122.431297 }}
            defaultZoom = { 11 }
            >
            </ GoogleMap>
        ))
        return (
           <div className="map" ref="map">
            Is Map Showing
        <GoogleMapExample
        containerElement={ <div style={{ height: `980px`, width:
    '750px'}}/> }
    mapElement={ <div style={{height: `100%`}} />}
        />
>>>>>>> 63b95a1bf2330abd4051167464f004aca6961672:frontend/src/components/map/map.jsx
            </div>
        );
    }
}
export default BartMap;

// export default withRouter(BartMap);
