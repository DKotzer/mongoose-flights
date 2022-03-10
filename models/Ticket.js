const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
  seat: {type: String, match: /[A-F][1-9]\d?$/},
  price: Number,
  flight: {Flight},
});



const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;