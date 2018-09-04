import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withGoogleMap, GoogleMap , Marker } from 'react-google-maps';
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
      
        const GoogleMapExample = withGoogleMap(props => (
            <GoogleMap
            defaultCenter = { { lat: 37.773972, lng: -122.431297 }}
            defaultZoom = { 10 }>

            { this.props.bartMarkers.map((bart, index)=> {
              let loc = { lat: bart.lat, lng: bart.lng};
        return (
          <Marker
            key={index+"bart"}
            options= {{icon: 'http://maps.google.com/mapfiles/marker_green.png'}}
            position={loc}
            title= {bart.name}
            onClick={props.onMarkerClick}
          />
        )
      })}


      { this.props.attractionMarkers.map((attr, index)=> {
        let loc = {lat: attr.lat, lng: attr.lng};
        return (
          <Marker
            key={index+"attr"}
            position={loc}
            title= {attr.name}
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
