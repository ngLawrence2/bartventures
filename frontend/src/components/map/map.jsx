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
            >
            </ GoogleMap>
        ))
        return (
            <div className="map-container" ref="map">

                <GoogleMapExample className='google-map'
                            containerElement={<div className='map' style={{ width: `64%`, height: `87.5%`}}/> }
                            mapElement={ <div style={{height: `100%`}} />}
                />
                <span className='disclaimer'>Bart Venture doesn't speak for Bart, and the sole purpose of this app is to provide
                    people with information on where a certain budget can get you to by Bart.
                </span>
            </div>
        );
    }
}
export default BartMap;

// export default withRouter(BartMap);
