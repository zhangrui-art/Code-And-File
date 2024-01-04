const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  director: {
    type: String,
  }
})

const MovieModel = mongoose.model('movies', MovieSchema);

module.exports = MovieModel;