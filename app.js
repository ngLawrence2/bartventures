const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const events = require('./routes/api/events');
const bodyParser = require('body-parser');
const passport = require('passport');
const seeder = require('mongoose-seed');


require('./config/passport')(passport);


mongoose
    .connect(db, {useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch( err => console.log(err));


    seeder.connect(db, function() {

      // Load Mongoose models
      seeder.loadModels([
        'models/Attraction.js',

      ]);

      // Clear specified collections
      seeder.clearModels(['Attractions'], function() {

        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function() {
          seeder.disconnect();
        });

      });
    });

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
                  'description': "The Chinatown neighborhood in Oakland is a pan-Asian neighborhood which reflects Oakland's diverse Asian American community. Chinese were the first Asians to arrive in Oakland in the 1850s, followed by Japanese in the 1890s, Koreans in the 1900s, and Filipinos in the 1930s and 1940s. Southeast Asians began arriving in the 1970s during the Vietnam War. Many Asian languages and dialects can be heard in Chinatown due to its diverse population.",
                  'image': 'https://s15.postimg.cc/gc1q8fgzv/Chinatown_Oakland.jpg'
                },
                {
                  'name': "Dolores Park",
                  'Bartobj': {name: "16th St. Mission", abbr: "16TH", lat: "37.765062", lng: "-122.419694"},
                  'lat': "37.7596",
                  'lng': "-122.4269",
                  'description': "Mission Dolores Park, often abbreviated to Dolores Park, is a Leave No Trace city park in San Francisco, California. Dolores Park offers several features including many tennis courts, a basketball court, a multi-purpose court, a soccer field, a pissoir, a children's playground, and a dog play area. The southern half of the park is also notable for its views of the Mission district, downtown, the San Francisco Bay and the East Bay.",
                  'image': 'https://s15.postimg.cc/sqoi8vitn/dolores.jpg'
                },
                {
                  'name': "UCB Campus",
                  'Bartobj': {name: "Downtown Berkeley", abbr: "DBRK", lat: "37.870104", lng: "-122.268133"},
                  'lat': "37.8719",
                  'lng': "-122.2585",
                  'description': "The University of California, Berkeley (UC Berkeley) is a public research university in Berkeley, California. Founded in 1868, Berkeley is the flagship institution of the ten research universities affiliated with the University of California system.",
                  'image': 'https://s15.postimg.cc/5qhuw7d6j/UCB.jpg'
                },
                {
                  'name': "Embarcadero",
                  'Bartobj': {name: "Embarcadero", abbr: "EMBR", lat: "37.792874", lng: "-122.397020"},
                  'lat': "37.7993",
                  'lng': "-122.3977",
                  'description': "Major street in the port area of San Francisco that has become a bustling area of shops, businesses and sightseeing attractions.",
                  'image': 'https://s15.postimg.cc/6eqpfi6uz/embarcadero.jpg'
                },
                {
                  'name': "Lake Merritt",
                  'Bartobj': {name: "Lake Merritt", abbr: "LAKE", lat: "37.797027", lng: "-122.265180"},
                  'lat': "37.8012",
                  'lng': "-122.2583",
                  'description': "Lake Merritt is a large tidal lagoon in the center of Oakland, California, just east of Downtown. It is surrounded by parkland and city neighborhoods. It is historically significant as the United States' first official wildlife refuge, designated in 1870, and has been listed as a National Historic Landmark since 1963, and on the National Register of Historic Places since 1966. The lake features grassy shores; several artificial islands intended as bird refuges; an interpretive center called the Rotary Nature Center; a boating center where sailboats, canoes and rowboats can be rented and classes are held; and a fairy tale themed amusement park called Children's Fairyland. A popular walking and jogging path runs along its perimeter. The circumference of the lake is 3.4 miles (5.5 km) and its area is 155 acres (63 ha).",
                  'image': 'https://s15.postimg.cc/6ss1engjf/lake_marritt.jpg'
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
app.use(passport.initialize());
