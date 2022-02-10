const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema({
  name: {
    type: String,
    required: 'Project Must Have a name!',
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  repo: {
    type: String,
  },
  deployment: {
    type: String,
  },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
