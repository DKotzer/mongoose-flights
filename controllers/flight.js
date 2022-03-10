const { Flight } = require("../models/Flight");
const Ticket = require("../models/Ticket");
const moment = require("moment");
const req = require("express/lib/request");

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
    .catch((err) => {
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

//HTTP Get - details by id
exports.detail_create_get = (req, res) => {
  console.log("target id-" + req.query.id);
  Flight.findById(req.query.id)
    .then(async (flight) => {
      let tickets = await Ticket.find({ flight: flight.id });
      console.log(tickets);
      res.render("flight/detail", { flight, moment, tickets });
    })
    .catch((err) => {
      console.log(err);
    });
};
//HTTP delete details by ID
exports.destination_delete_get = (req, res) => {
  console.log("req query-delete id :" + req.query.id);
  console.log(Flight.findOne({ destinations: { destination: req.query.id } }));
  //how to log current url?
  Flight.findOneAndDelete({ destinations: { destination: req.query.id } })
    .then((flights) => {
      console.log("delete test- " + flights);
      // console.log(flight);
      res.redirect("back");
    })
    .catch((err) => {
      console.log(err);
    });
};

//HTTP Post - destination by id
exports.destination_create_post = (req, res) => {
  Flight.findById(req.params.id, (error, flight) => {
    // let aport = req.body.airport;
    // let hideMe = document.getElementById(`${aport}`); //how else can I do this
    // hideMe.classList.add("hidden");
    flight.destinations.push(req.body);
    flight.save();
    res.redirect(`/flight/detail?id=${req.params.id}`);
  });
};
// HTTP Get - ticket by id
exports.ticket_create_get = (req, res) => {
  Flight.findById(req.query.id)
    .then((flight) => {
      res.render("flight/addTicket", { flight });
    })
    .catch((err) => {
      res.send(err);
    });
};

//HTTP Post - ticket by ID
exports.ticket_create_post = (req, res) => {
  const newTicket = new Ticket(req.body);
  console.log("trouble shooting ticketpost: " + req.params.id);
  newTicket.flight = req.params.id;
  newTicket
    .save()

    .then(() => {
      res.redirect(`/flight/detail?id=${req.params.id}`);
    })
    .catch((err) => {
      res.send(err);
    });

  // let ticket = new Ticket(req.body);
  // ticket.flight = req.params.id;
  console.log(req.params.id);
};

// Obtain the default date
// const dt = newFlight.departs;
// // Format the date for the value attribute of the input
// const departsDate = dt.toISOString().slice(0, 16);
// res.render("flight/add", { departsDate });
//save flight
//below is an example of promises

// HTTP Get - ticket by id
// exports.ticket_create_get = (req,res => {
//   Flight.findById(req.params.id, function(err, flight) {
//     console.log(req.params.id);
//     Ticket.find({flight: flight._id}, function(err, tickets) {
//     });
// });
// })

// router.get("/flight/addTicket/:id", flightCntrl.ticket_create_get)
