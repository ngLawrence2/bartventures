const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AttractionSchema = new Schema({
  test: {
    type:String,
    required:true
  }
});

module.exports = Attractions = mongoose.model('attractions', AttractionSchema);
