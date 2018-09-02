const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const events = require('./routes/api/events');
const bodyParser = require('body-parser');
const passport = require('passport');
const search = require('./routes/api/search');

const seeder = require('mongoose-seed');


require('./config/passport')(passport);

mongoose
    .connect(db, {useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch( err => console.log(err));

    // seeder.connect(db, function() {
    //
    //   // Load Mongoose models
    //   seeder.loadModels([
    //     'models/Attraction.js'
    //   ]);
    //
    //   // Clear specified collections
    //   seeder.clearModels(['attractions'], function() {
    //     console.log("model");
    //     // Callback to populate DB once collections have been cleared
    //     seeder.populateModels(data, function() {
    //       seeder.disconnect();
    //     });
    //
    //   });
    // });



app.get("/", (req, res) => res.send(" Bart App for Tourists"));
const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server is running on port ${port}`));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/events", events);
app.use('/api/search', search);

app.use(passport.initialize());


// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': 'attractions',
        'documents': [
            {
                'test': '3213421'
            },
            {
                'test': '3242154'
            }
        ]
    }
];
