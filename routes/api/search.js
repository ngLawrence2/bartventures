const express = require("express");
const Request = require('request');
const axios = require('axios');
const router =  express.Router();


router.get("/:budget/:loc", (req,res) => {
  let stations = [];
<<<<<<< HEAD
  Request.get("https://api.bart.gov/api/stn.aspx?cmd=stns&key=QMBS-5LIW-9J2T-DWE9&json=y", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    // console.log(body["root"]);
    // console.log(body);
    // console.log(Object.keys(body));
     // res.send(body["root"]);
     let keys = Object.keys(body);
     let data = JSON.parse(body);

=======
  axios.get("https://api.bart.gov/api/stn.aspx?cmd=stns&key=QMBS-5LIW-9J2T-DWE9&json=y").then((response) => {
     let keys = Object.keys(response);
     let data = response.data;
>>>>>>> d957a4a485ebf12f773717e8b6b4253cd7c70e6f
     for(let i = 0 ; i < 48 ; i++) {
       let stationObj = {
         name: data.root.stations.station[i].name,
         abbr: data.root.stations.station[i].abbr,
         lat: data.root.stations.station[i].gtfs_latitude,
<<<<<<< HEAD
         lon: data.root.stations.station[i].gtfs_longitude,
       };
       stations.push(stationObj);
     }
    res.send(stations);
  });
  // console.log(stations.slice(30));
=======
         lng: data.root.stations.station[i].gtfs_longitude
       };
       stations.push(stationObj);
     }
    let promiseArray = [];
    stations.forEach(station => {
      // promiseArray.push(axios.get("url"))
    //  console.log(station);
      let fareAPIUrl = "http://api.bart.gov/api/sched.aspx?cmd=fare&orig=" + req.params.loc +"&dest=" + station.abbr + "&date=today&key=QMBS-5LIW-9J2T-DWE9&json=y";
    //  console.log(fareAPIUrl);
      axios.get(fareAPIUrl).then((fareResponse) => {
          let farePriceToDest = fareResponse.data.root.trip.fare;
          // console.log("orig : "+ req.params.loc + " dest: " + station.abbr + "fare: "+ farePriceToDest );
          // console.log(farePriceToDest <= req.params.budget);
          let priceDiff = farePriceToDest - req.params.budget;
          if (priceDiff <= 0) {
            promiseArray.push(station);
            console.log("orig : "+ req.params.loc + " dest: " + station.abbr + "fare: "+ farePriceToDest );
            // console.log(farePriceToDest + " " + station.abbr);
          }
      });
    })
    return Promise.all(promiseArray);
  }).then((responseArray) => {
    console.log(responseArray);
    res.send(responseArray);
  }).catch( err => {
      console.log(err);
    })

>>>>>>> d957a4a485ebf12f773717e8b6b4253cd7c70e6f

});

module.exports = router;
