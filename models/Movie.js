const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  name: String,
  reviews: [],
  // reviews: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Flight",
  //   },
  // ],

  // departs: { type: Date, default: Date.now },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
