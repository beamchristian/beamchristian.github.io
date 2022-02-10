const mongoose = require('mongoose');

const { Schema } = mongoose;

const aboutSchema = new Schema({
  description: {
    type: String,
  },
});

const About = mongoose.model('About', aboutSchema);

module.exports = About;
