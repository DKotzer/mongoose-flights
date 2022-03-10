const express = require("express");
// let methodOverride = require("method-override");

const router = express.Router();
// router.use(methodOverride("_method"));

router.use(express.urlencoded({ extended: true }));

//import article controller
const flightCntrl = require("../controllers/flight");

//routes
router.get("/flight/add", flightCntrl.flight_create_get);
router.post("/flight/add", flightCntrl.flight_create_post);

router.get("/flight/index", flightCntrl.flight_index_get);

router.get("/flight/detail", flightCntrl.detail_create_get);

router.post("/flight/addDestination/:id", flightCntrl.destination_create_post);

router.get("/flight/addticket/", flightCntrl.ticket_create_get);

router.post("/flight/addticket/:id", flightCntrl.ticket_create_post);

router.get("/flight/detail/delete", flightCntrl.destination_delete_get);

//export router
module.exports = router;
