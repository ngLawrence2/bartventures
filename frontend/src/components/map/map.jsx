import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
// import { withGoogleMap, GoogleMap } from 'react-google-maps';
/*global google*/
// const mapOptions = {
//   center: {
//     lat: 37.773972,
//     lng: -122.431297
//   },
//   zoom: 13
// };
//
//
// class BartMap extends React.Component {
//     constructor(props) {
//     super(props)
//         this.state = {
//             center: {
//                 lat: 37.773972,
//                 lng: -122.431297
//             },
//             zoom: 13
//         };
//    }

    // componentDidMount() {
    //   this.map = new google.maps.Map(document.getElementById('map'), {
    //     center: this.state.center,
    //     zoom: this.state.zoom
    //   });
    // }

    // initMap() {
    //     () => (
    //     map = new google.maps.Map(document.getElementById('map'), {
    //         center: { lat: 37.773972, lng: -122.431297 },
    //         zoom: 8
    //     })
    //     );
    // }

<<<<<<< HEAD

    // render() {
    //   return(
    //     <div ref="map"></div>
    //   );
    // }

    // render() {
    //     const GoogleMapExample = withGoogleMap(props => (
    //         <GoogleMap
    //         defaultCenter = { { lat: 37.773972, lng: -122.431297 }}
    //         defaultZoom = { 11 }
    //         >
    //         </ GoogleMap>
    //     ))
    //     return (
    //        <div className="map" ref="map">
    //         Is Map Showing
    //     <GoogleMapExample
    //     containerElement={ <div style={{ height: `980px`, width:
    // '750px'}}/> }
    // mapElement={ <div style={{height: `100%`}} />}
    //     />
    //         </div>
    //     );
    // }
// }
// export default BartMap;
const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} = require("react-google-maps");

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC6YAgT1yN0cWU3StfFuG17o-G5BBf--4g&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentWillUpdate(prevProps) {
      
    },
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();
      DirectionsService.route({
       origin: new google.maps.LatLng(37.808350, -122.268602),
       destination: new google.maps.LatLng(37.803768, -122.271450),
       travelMode: google.maps.TravelMode.DRIVING,
       waypoints: [
            {
               location: new google.maps.LatLng(38.3212, -122.32123)
            },
            // {
            //    location: new google.maps.LatLng(14.552444,121.044488)
            // }
       ]
    }, (result, status) => {
       if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
             directions: result,
          });
       } else {
         console.error(`error fetching directions ${result}`);
       }
    });

      DirectionsService.route({
        origin: new google.maps.LatLng(37.852803, -122.270062),
        destination: new google.maps.LatLng(37.664245, -122.443960),
        travelMode: google.maps.TravelMode.TRANSIT,
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
             dir: result,

          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
=======
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
>>>>>>> 8b44bf2fc2c761421c6a870d4892f769a8488f6d
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
  >
    {props.directions && <DirectionsRenderer directions={props.directions}/> }
  </GoogleMap>
);

export default MapWithADirectionsRenderer;

// export default withRouter(BartMap);
