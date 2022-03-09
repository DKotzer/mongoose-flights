const express = require("express");

const router = express.Router();

router.use(express.urlencoded({ extended: true }));

//import article controller
const movieCntrl = require("../controllers/movie");

router.get("/movie/add", movieCntrl.movie_create_get);
router.post("/movie/add", movieCntrl.movie_create_post);

router.get("/movie/addreview", movieCntrl.review_create_get);
router.post("/movie/addreview", movieCntrl.review_create_post);

router.get("/movie/index", movieCntrl.movie_index_get);

router.get("/movie/detail", movieCntrl.movie_show_get);

//export router
module.exports = router;
