const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AttractionSchema = new Schema({
  name: {
    type:String,
    required:true
  },
  lat: {
    type: Number,
    required:true
  },
  lng: {
    type:Number,
    required:true
  },
  description: {
    type:String,
    required:true
  },
  BartObj: {
    name: String,
    
  }

});

module.exports = Attractions = mongoose.model('attractions', AttractionSchema);
