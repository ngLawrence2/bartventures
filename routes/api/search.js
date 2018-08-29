const express = require("express");
const Request = require("request");
const router = express.Router();

router.get("/:budet/:loc", (req, res) => {
  Request.get("https://api.bart.gov/api/stn.aspx?cmd=stns&key=ZIBS-5QIW-985T-DWE9", (error,response,body) => {
    if(error) {
      return console.dir(error);
    }
    let keys = Object.keys(body);
    let data = JSON.parse(body);
      console.log(data.root.stations);
  });
});

module.exports = router;
