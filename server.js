//Dependencies
const express = require("express");
const mongoose = require("mongoose");

//Port configuration
const PORT = 4000;

//Initialize Express Application
const app = express();



app.use(express.static("public"));
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);

const indexRoute = require("./routes/index");
const flightsRoute = require("./routes/flights");
const moviesRoute = require("./routes/movies");

//Mount Routes
app.use("/", indexRoute);
app.use("/", flightsRoute);
app.use("/", moviesRoute);

//checks views folder for layout.ejs

app.set("view engine", "ejs");

//import routes
mongoose.connect(
  "mongodb://127.0.0.1:27017/mongoose-flights",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("mongodb connected successfully!");
  }
);

app.get("/", (req, res) => {
  res.render("home/another");
});
app.listen(PORT, () => console.log(`App is using port: ${PORT}`));