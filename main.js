console.log("Hello world!");

var postJSON = require("./src/postJSON");
var app = require("express")();
var http = require("http").Server(app);
var request = require('request');


app.post('/',function(){
		console.log("sending email");
		var url  = "https://api.sendgrid.com/v3/mail/send";
		var headerVal = "Bearer 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" ;
		var data  = '{"personalizations": [{"to": [{"email": "lau.llobet@gmail.com"}]}],"from": {"email": "lau.llobet@gmail.com"},"subject": "Hello, World!","content": [{"type": "text/plain", "value": "Heya!Yupiiiiiii"}]}';

		postJSON(data,url,headerVal);

	});

http.listen(8888,function(){
	console.log("escoltant");	
})
