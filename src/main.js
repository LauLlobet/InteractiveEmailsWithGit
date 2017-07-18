var express = require('express')
  , app = express.createServer();

app.use(express.bodyParser());

app.post('/', function(request, response){
  console.log(request.body+" hola");      // your JSON
  response.send(request.body);    // echo the result back
});

app.get('/', function(req, res) {

  res.send("TEST");
});

app.listen(3000);