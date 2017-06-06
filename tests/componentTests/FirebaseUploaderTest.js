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
      callback();
    });
  req.end();
}

describe('FirebaseUploader', function() {
  it('constructor\'s succeed callback should be called if the firebase file is updated.', function(done) {
    rimraf.sync("./tmp");
    var firebaseUploaderTest = new FirebaseUploader(function() {
      done();
    }, function(args) {
      done(args);
    });
    // var firebaseUploaderTest = new FirebaseUploader("./pseudoalgorithm.txt","tempForTests", function() {
    //       auxUrlExist("www.stackoverflow.com","questions/26007187/node-js-check-if-a-remote-url-exists", function () {
    //         done();
    //       });
    //   },function() {
    //     done("Error. Connection not succeed");

    //   });

  });
});