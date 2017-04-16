var express = require("express");
var app = express();

// Set up a URL route

// bind the app to listen for connections on a specified port
var port = process.env.PORT || 3000;

app.listen(port);

console.log("Listening on port " + port);



app.use(express.static('src/client'));
// Render some console log output