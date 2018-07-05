var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");

var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require("./app/routing/htmlRoutes.js")(app)
require("./app/routing/apiRoutes.js")(app)

// app.get("/testRoute", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/home.html"));
// })

// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "/app/public/survey.html"));
// })

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});