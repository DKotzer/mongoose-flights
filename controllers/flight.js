const Flight = require("../models/Flight");
const moment = require("moment");

//HTTP GET - Load an Add flights form
exports.flight_create_get = (req, res) => {
  //   const newFlight = new Flight();

  res.render("flight/add");
};

//HTTP Post flight create
exports.flight_create_post = (req, res) => {
  console.log(req.body);
  const newFlight = new Flight(req.body);
  // Obtain the default date
  // const dt = newFlight.departs;
  // // Format the date for the value attribute of the input
  // const departsDate = dt.toISOString().slice(0, 16);
  // res.render("flight/add", { departsDate });
  //save flight
  //below is an example of promises
  newFlight
    .save() //if this is true, .then line is executed
    .then(() => {
      res.redirect("/flight/index");
    })
    .catch(() => {
      //this catches errors
      console.log(err);
      res.send(err);
    });
};
//changing value in add.ejs to <%=departsDate%> does not work. value="2022-03-06T08:30"

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
