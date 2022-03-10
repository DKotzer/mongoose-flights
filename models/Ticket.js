const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = mongoose.Schema({
  seat: {type: String, match: /[A-F][1-9]\d?$/},
  price: Number,
  flight:  {type: Schema.Types.ObjectId, ref: 'Flight'},
});



const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;