var express = require("express");
var mongoose = require("mongoose");
var routes = require("./routes");
var exphbs = require("express-handlebars");
require('dotenv').config()

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine","handlebars");

app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoscraperdb";
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
})