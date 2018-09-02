import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
<<<<<<< HEAD
import { withGoogleMap, GoogleMap , Marker } from 'react-google-maps';
=======
import { withGoogleMap, GoogleMap } from 'react-google-maps';
// import data from './seeds';

>>>>>>> 659f419954433b83147e46e910005cd0a35698e4
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
    //     () => (pull
    //     map = new google.maps.Map(document.getElementById('map'), {
    //         center: { lat: 37.773972, lng: -122.431297 },
    //         zoom: 8
    //     })
    //     );
    // }


    render() {
<<<<<<< HEAD

=======
        // const bartData = data;
>>>>>>> 659f419954433b83147e46e910005cd0a35698e4
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
            defaultCenter = { { lat: 37.773972, lng: -122.431297 }}
            defaultZoom = { 11 }>

            { this.props.markers.map((marker, index)=> {
        return (
          <Marker
            position={marker}
            title="Click to zoom"
            onClick={props.onMarkerClick}
          />
        )
      })}
            </ GoogleMap>
        ))

        return (
            <div className="map-container" ref="map">
                <GoogleMapExample className='google-map'
                            containerElement={<div className='map' style={{ width: `64%`, height: `87.5%`}}/> }
                            mapElement={ <div style={{height: `100%`}}/>}


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
