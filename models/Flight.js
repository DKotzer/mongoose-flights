const mongoose = require("mongoose");

const destinationSchema = mongoose.Schema({
  airport: { type: String, default: "DEN" },
  arrival: Date,
});

const flightSchema = mongoose.Schema({
  airline: String,
  airport: { type: String, default: "DEN" },
  flightNo: Number,
  departs: { type: Date, default: Date.now() + 31540000000},
  destinations: [destinationSchema],
});

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;

// movies: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Movie",
//     },
//   ],
