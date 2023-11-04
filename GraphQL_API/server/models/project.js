const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: String,
  weight: Number,
  description: String,
  // tasks: Array,
});

module.exports = mongoose.model('Project', projectSchema);