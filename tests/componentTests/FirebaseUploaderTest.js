var chai = require('chai');
var fs = require('fs');
var rimraf = require('rimraf');
var expect = chai.expect; // we are using the "expect" style of Chai
var FirebaseUploader = require('./../../src/FirebaseUploader');
var http = require('http');

function auxUrlExist(url, path, callback) {
  var options = {
      host: url,
      port: 80,
      path: path
    };
    var content = "";   

    var req = http.request(options, function(res) {
        res.setEncoding("utf8");
        res.on("data", function (chunk) {
            content += chunk;
        });
        res.on("end", function () {
       if(content === "WWWWWWWW\n"){
            callback(content);
            return;
          }
          callback();        
        });
    });
    req.end();
}



describe('FirebaseUploader', function() {
  it('constructor\'s succeed callback should be called if the firebase file is updated.', function(done) {
    this.timeout(10000);
    //rimraf.sync("./tmp");
    var uploader = new FirebaseUploader();
    uploader.upload('./images/AAA.txt',
      function(path) {
      auxUrlExist("storage.googleapis.com",path,function(err){
        if(!err){
          done();
        }else{
          done("not in a public url err: "+err);    
        }       
      });
    }, function(args) {
      done(args);
    });
  });
});

describe('FirebaseUploader', function() {
  it('constructor\'s FAIL if file doesent exist.', function(done) {
    this.timeout(10000);
    //rimraf.sync("./tmp");
    var uploader = new FirebaseUploader();
    uploader.upload('./images/AAAQQQ.txt',
      function(path) {
      auxUrlExist("storage.googleapis.com",path,function(err){
        if(!err){
          done("ghost file, it shouldn't exist");
        }else{
          done("  ");    
        }       
      });
    }, function(args) {
      done();
    });
  });
});
