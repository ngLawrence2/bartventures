const express = require("express");
const Request = require('request');
const axios = require('axios');
const Attraction = require('../../models/Attraction');
const router =  express.Router();


router.get("/:budget/:loc", (req,res) => {
  console.log("consodsajodsa0dsa");
  //create a variable
  let currentStation;
  //create loc into a bart station
  let stations = [];
  console.log(req.params.loc);
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

  //console.log(req.params.loc);
       //calculate which distance is shorter
       stations.push(stationObj);
    //   console.log(stations);
     }


    let promiseArray = [];
    stations.forEach(station => {
      //do not use params loc

      let fareAPIUrl = "http://api.bart.gov/api/sched.aspx?cmd=fare&orig=" + req.params.loc +"&dest=" + station.abbr + "&date=today&key=QMBS-5LIW-9J2T-DWE9&json=y";
      promiseArray.push(axios.get(fareAPIUrl).then((fareResponse) => {
          let farePriceToDest = fareResponse.data.root.trip.fare;
          let priceDiff = farePriceToDest - req.params.budget;
          if (priceDiff <= 0) {
            return station.name;
          }else {
            return null;
          }
      }));
    });
    return Promise.all(promiseArray);
  }).then((responseArray) => {
    const resultArray = responseArray.filter(obj => obj!==null);
    Attraction.find({ 'Bartobj.name': {$in : resultArray}}).exec( (err, attr) => {
      console.log(attr);
      res.json(attr);
    });
    // res.json(resultArray);

  }).catch( err => {
      console.log(err);
    })

});

module.exports = router;
