console.log("Hello world!");

var postJSON = require("./src/postJSON");
var app = require("express")();
var http = require("http").Server(app);
var request = require('request');
var bodyParser = require('body-parser');
var GithubWebhooksPropertiesExtractorFactory = require('./src/GithubWebhooksPropertiesExtractorFactory');
var GitHubDownloader = require('./src/GitHubDownloader');
var GitHubRepository = require('./src/GitHubRepository');

app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());


app.post('/', function(request, response) {
	var factoryWHprop = new GithubWebhooksPropertiesExtractorFactory();
	var nameExtractor = factoryWHprop.create("name");
	var repositoryExtractor = factoryWHprop.create("repository");
	var name = nameExtractor.getProperty(request.body);
	var repository = repositoryExtractor.getProperty(request.body);
    
    response.send(request.body); // echo the result back

   	var d = new Date();
	var n = d.getMilliseconds(); 
	var tempfolder = "./tmp_" + n + "_" + Math.round(Math.random() * 1000);

	var gitHubRepository = new GitHubRepository(name, repository, function() {
		
		console.log("success creating repo");
		gitHubRepository.setBranch("master", function() {
			
			console.log("success set branch");
			gitHubRepository.download(tempfolder, function() {
				console.log("success downloading repo and creating local directory!!");

			}, function() {
				console.log("Download failed");
			});
		}, function() {
			console.log("setting branch fail")
		});
	}, function() {
		console.log("creating repo branch fail")
	});

	//response.send("TEST2");

});

app.get('/', function(req, res) {

	res.send("TEST");
});

var server = app.listen(process.env.PORT || 8080, function() {
	var port = server.address().port;
	console.log("App now running on port", port);
});