console.log("Hello world!");

var postJSON = require("./src/postJSON");
var app = require("express")();
var http = require("http").Server(app);
var request = require('request');


app.post('/', function(request, response){
  console.log(request.body);      // your JSON
  response.send(JSON.stringify(request));    // echo the result back
  //response.send("TEST");

});

app.get('/', function(req, res) {  

  res.send("TEST");
});

 var server = app.listen(process.env.PORT || 8080, function() {
        var port = server.address().port;
        console.log("App now running on port", port);
 });