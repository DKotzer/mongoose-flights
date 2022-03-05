//API's

exports.index_get = (req, res) => {
  res.render("home/index", {
    welcomeMessage: "Welcome to Mongoose Flights App",
  });
};
// exports.index_get = (req, res) => {
//   res.render("home/index", { welcomeMessage: "Welcome" });
// };
