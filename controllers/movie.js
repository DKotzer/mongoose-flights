const Movie = require("../models/Movie");

exports.movie_create_get = (req, res) => {
  //   const newFlight = new Flight();

  res.render("movie/add");
};

exports.movie_create_post = (req, res) => {
  console.log(req.body);
  const newMovie = new Movie(req.body);

  newMovie
    .save() //if this is true, .then line is executed
    .then(() => {
      res.redirect("/movie/index");
    })
    .catch(() => {
      //this catches errors
      console.log(err);
      res.send(err);
    });
};

exports.review_create_get = (req, res) => {
  //   const newFlight = new Flight();

  res.render("movie/addreview");
};

//Fix Me
exports.review_create_post = (req, res) => {
  let movie = Movie.findById({ _id: req.query.id });
  // console.log(req.body);
  console.log(req.query.id);
  movie.review.push(review);

  // Movie.findById({ _id: req.query.id }).then();

  // review.push({ review });
  // Movie.findById(review, (error, review) => {
  //   review.push(review);
  // });
};

//HTTP GET - movies index
exports.movie_index_get = (req, res) => {
  Movie.find()
    .then((movies) => {
      res.render("movie/index", { movies: movies }); //this moment means moment: moment
    })
    .catch((err) => {
      console.log(err);
    });
};

//HTTP Get movie by ID
exports.movie_show_get = (req, res) => {
  console.log("query id: " + req.query.id);
  Movie.findById(req.query.id)
    // .populate("review")
    .then((movie) => {
      // console.log(movie);
      res.render("movie/detail", { movie }); // same as movie: movie, moment: moment
    })
    .catch((err) => {
      console.log(err);
    });
};

// exports.movie_create_post = (req, res) => {
//   console.log(req.body);
//   let movie = new Movie(req.body);
//   movie
//     .save()
//     .then(() => {
//       req.body.author.forEach((author) => {
//         Author.findById(author, (error, author) => {
//           author.movie.push(movie);
//           author.save();
//         });
//       });
//       res.redirect("/movie/index");
//     })
//     .catch(() => {
//       //this catches errors
//       console.log(err);
//       // res.send("Error 418!");
//     });
// };
