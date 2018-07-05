var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/testRoute", function(req, res) {
    res.send("hello")
})

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});