const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const user = require('./routes/user');

const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(err => {
    console.log(err);
  });

app.use('/user', user);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("server is up on port " + port);
});