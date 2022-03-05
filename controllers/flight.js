const Flight = require("../models/Flight");
const moment = require("moment");

//HTTP GET - Load an Add flights form
exports.flight_create_get = (req, res) => {
  res.render("flight/add");
};

//HTTP Post
exports.flight_create_post = (req, res) => {
  console.log(req.body);
  let flight = new Flight(req.body);

  //save flight
  //below is an example of promises
  flight
    .save() //if this is true, .then line is executed
    .then(() => {
      res.redirect("/");
    })
    .catch(() => {
      //this catches errors
      console.log(err);
      res.send(err);
    });
};
//HTTP GET - flights index
exports.flight_index_get = (req, res) => {
  Flight.find()
    .then((flights) => {
      res.render("flight/index", { flights: flights, moment }); //this moment means moment: moment
    })
    .catch((err) => {
      console.log(err);
    });
};
