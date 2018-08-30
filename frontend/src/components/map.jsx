import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
/*global google*/
const mapOptions = {
<<<<<<< HEAD
  center: {
    lat: 37.773972,
    lng: -122.431297
  },
  zoom: 13
};
=======

    center: {
        lat: 37.773972,
        lng: -122.431297
    },
    zoom: 13
}; 
>>>>>>> b6220034b4cbcbcca1e3e769fecaf1cb2621188b


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
    // initMap() {
    //     () => (
    //     map = new google.maps.Map(document.getElementById('map'), {
    //         center: { lat: 37.773972, lng: -122.431297 },
    //         zoom: 8
    //     })
    //     );
    // }

    render() {
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
<<<<<<< HEAD
            defaultCenter = { { lat: 37.773972, lng: -122.431297 }}
            defaultZoom = { 11 }
=======
            defaultCenter = { { lat: 37.801239, lng: -122.258301 }}
            defaultZoom = { 10 }
>>>>>>> b6220034b4cbcbcca1e3e769fecaf1cb2621188b
            >
            </ GoogleMap>
        ))
        return (
           <div className="map" ref="map">
<<<<<<< HEAD
            Is Map Showing
        <GoogleMapExample
        containerElement={ <div style={{ height: `980px`, width:
=======
            {/* Is Map Showing */}
        <GoogleMapExample  
        containerElement={ <div style={{ height: `980px`, width: 
>>>>>>> b6220034b4cbcbcca1e3e769fecaf1cb2621188b
    '750px'}}/> }
    mapElement={ <div style={{height: `100%`}} />}
        />
            </div>


        );
    }
}

export default withRouter(BartMap);
