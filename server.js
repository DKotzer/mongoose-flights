//Dependencies
const express = require("express");
const mongoose = require("mongoose");

//Port configuration
const PORT = 4000;

//Initialize Express Application
const app = express();

app.listen(PORT, () => console.log(`App is using port: ${PORT}`));

const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);

const indexRoute = require("./routes/index");
const flightsRoute = require("./routes/flights");

//Mount Routes
app.use("/", indexRoute);
app.use("/", flightsRoute);

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
