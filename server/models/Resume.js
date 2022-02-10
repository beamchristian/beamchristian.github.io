const mongoose = require('mongoose');

const { Schema } = mongoose;

const resumeSchema = new Schema({
  pdf: {
    type: String,
  },
});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
