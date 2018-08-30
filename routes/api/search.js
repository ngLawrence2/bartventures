const express = require("express");
const Request = require('request');
const axios = require('axios');
const router =  express.Router();


<<<<<<< HEAD

=======
>>>>>>> b6220034b4cbcbcca1e3e769fecaf1cb2621188b
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
<<<<<<< HEAD
=======

>>>>>>> d957a4a485ebf12f773717e8b6b4253cd7c70e6f

>>>>>>> b6220034b4cbcbcca1e3e769fecaf1cb2621188b
});

module.exports = router;
