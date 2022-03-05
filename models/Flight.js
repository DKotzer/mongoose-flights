const mongoose = require("mongoose");

const flightSchema = mongoose.Schema({
  airline: String,
  airport: { type: String, default: "DEN" },
  flightNo: Number,
  departs: { type: Date, default: Date.now() },
});

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;
