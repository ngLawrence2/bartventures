const express = require("express");
const Request = require('request');
const axios = require('axios');
const router =  express.Router();


router.get("/:budget/:loc", (req,res) => {
  let stations = [];
  axios.get("https://api.bart.gov/api/stn.aspx?cmd=stns&key=QMBS-5LIW-9J2T-DWE9&json=y").then((response) => {
     let keys = Object.keys(response);
     let data = response.data;
     for(let i = 0 ; i < 48 ; i++) {
       let stationObj = {
         name: data.root.stations.station[i].name,
         abbr: data.root.stations.station[i].abbr,
         lat: data.root.stations.station[i].gtfs_latitude,
         lng: data.root.stations.station[i].gtfs_longitude
       };
       stations.push(stationObj);
     }

    let promiseArray = [];
    stations.forEach(station => {
      let fareAPIUrl = "http://api.bart.gov/api/sched.aspx?cmd=fare&orig=" + req.params.loc +"&dest=" + station.abbr + "&date=today&key=QMBS-5LIW-9J2T-DWE9&json=y";
      promiseArray.push(axios.get(fareAPIUrl).then((fareResponse) => {
          let farePriceToDest = fareResponse.data.root.trip.fare;
          let priceDiff = farePriceToDest - req.params.budget;
          if (priceDiff <= 0) {
            return station;
          }else {
            return null;
          }
      }));
    });
    return Promise.all(promiseArray);
  }).then((responseArray) => {
    res.json(responseArray);
  }).catch( err => {
      console.log(err);
    })

});

module.exports = router;
