import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
/*global google*/
const mapOptions = {

  center: {
    lat: 37.773972,
    lng: -122.431297
  },
  zoom: 13
};


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

            defaultCenter = { { lat: 37.773972, lng: -122.431297 }}
            defaultZoom = { 11 }

            defaultCenter = { { lat: 37.801239, lng: -122.258301 }}
            defaultZoom = { 10 }

            >
            </ GoogleMap>
        ))
        return (
           <div className="map-container" ref="map">

        <GoogleMapExample className='google-map'
                    containerElement={<div className='map' style={{ width: `64%`, height: `90%`}}/> }
    mapElement={ <div style={{height: `100%`}} />}
        />
            </div>


        );
    }
}

export default withRouter(BartMap);
