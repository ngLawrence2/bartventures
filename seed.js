const express = require("express");
const Request = require('request');
const router = express.Router();

router.get("/:budget/:loc", (req, res) => {
    // Request.get("https://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y", (error, response, body) => {
    Request.get("https://api.bart.gov/api/stn.aspx?cmd=stns&key=QMBS-5LIW-9J2T-DWE9&json=y", (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        // console.log(body["root"]);
        // console.log(body);
        // console.log(Object.keys(body));
        // res.send(body["root"]);
        let keys = Object.keys(body);
        console.log(body[keys[0]]);

    });
});

module.exports = router;