const express = require("express");
const Request = require('request');
const router =  express.Router();

router.get("/:budget/:loc", (req,res) => {
  let stations = [];
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
     for(let i = 0 ; i < 48 ; i++) {
       stations.push(data.root.stations.station[i].abbr);
     }
    res.send(stations);
  });

    console.log(stations.length);
});

module.exports = router;
