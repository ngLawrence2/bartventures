const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const events = require('./routes/api/events');
const bodyParser = require('body-parser');
const passport = require('passport');
const seeder = require('mongoose-seed');
const search = require("./routes/api/search");


require('./config/passport')(passport);


mongoose
    .connect(db, {useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch( err => console.log(err));


    // seeder.connect(db, function() {
    //
    //   // Load Mongoose models
    //   seeder.loadModels([
    //     'models/Attraction.js',
    //
    //   ]);
    //
    //   // Clear specified collections
    //   seeder.clearModels(['Attractions'], function() {
    //
    //     // Callback to populate DB once collections have been cleared
    //     seeder.populateModels(data, function() {
    //       seeder.disconnect();
    //     });
    //
    //   });
    // });

    // Data array containing seed data - documents organized by Model
    var data = [
        {
            'model': 'Attractions',
            'documents': [
                {
                  'name': "Oakland Chinatown",
                  'Bartobj': {name: "12th St. Oakland City Center", abbr: "12TH", lat: "37.803768", lng: "-122.271450"},
                  'lat': "37.7986",
                  'lng': "-122.2668",
                  'description': "The Chinatown neighborhood in Oakland is a pan-Asian neighborhood which reflects Oakland's diverse Asian American community. Chinese were the first Asians to arrive in Oakland in the 1850s, followed by Japanese in the 1890s, Koreans in the 1900s, and Filipinos in the 1930s and 1940s. Southeast Asians began arriving in the 1970s during the Vietnam War. Many Asian languages and dialects can be heard in Chinatown due to its diverse population."
                },
                {
                  'name': "Dolores Park",
                  'Bartobj': {name: "Downtown Berkeley", abbr: "DBRK", lat: "37.870104", lng: "-122.268133"},
                  'lat': "37.7596",
                  'lng': "-122.4269",
                  'description': "Mission Dolores Park, often abbreviated to Dolores Park, is a Leave No Trace city park in San Francisco, California. Dolores Park offers several features including many tennis courts, a basketball court, a multi-purpose court, a soccer field, a pissoir, a children's playground, and a dog play area. The southern half of the park is also notable for its views of the Mission district, downtown, the San Francisco Bay and the East Bay.",
                }
            ]
        }
    ];

app.get("/", (req, res) => res.send(" Bart App for Tourists"));
const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server is running on port ${port}`));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/events", events);
app.use("/api/search", search);
app.use(passport.initialize());
