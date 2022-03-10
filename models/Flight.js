const mongoose = require("mongoose");


const destinationSchema = mongoose.Schema({
  airport: {type: String, enum: ['AUS','DFW','DEN',"LAX","SAN"]},
  arrival: Date,
});

const flightSchema = mongoose.Schema({
  airline: {type: String, enum: ['American', 'Southwest', 'United']},
  airport: { type: String, default: "DEN" },
  flightNo: {type: Number, min: 10, max: 9999},
  departs: { type: Date, default: Date.now() + 31540000000},
  destinations: [destinationSchema],
});

const Flight = mongoose.model("Flight", flightSchema);
const Destination = mongoose.model("Destination", flightSchema);

module.exports = {Flight};
// module.exports = Destination;

