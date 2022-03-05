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

//export router
module.exports = router;
