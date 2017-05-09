var chai = require('chai');
var fs = require('fs');
var rimraf = require('rimraf');
var expect = chai.expect; // we are using the "expect" style of Chai
var GitHubRepository = require('./../../src/GitHubRepository');
var GitHubDownloader = require('./../../src/GitHubDownloader');
var FirebaseUploader = require('./../../src/FirebaseUploader');
var http = require('http');

function auxUrlExist(url, path, callback) {
  var options = {
      method: 'HEAD',
      host: url,
      port: 80,
      path: path
    },
    req = http.request(options, function(r) {
      console.log(r.headers);
      console.log(r.content);
      callback();
    });
  req.end();
}

describe('FirebaseUploader', function() {
  it.only('constructor\'s succeed callback should be called if the firebase file is updated.', function(done) {
    this.timeout(10000);
    rimraf.sync("./tmp");
    var firebaseUploaderTest = new FirebaseUploader("./images/BBB.txt", function() {
           auxUrlExist("storage.cloud.google.com","borram-5bbd8.appspot.com/AAA.txt", function () {
             done();
           });
     },function() {
         done("Error. Connection not succeed");

     });

  });
});