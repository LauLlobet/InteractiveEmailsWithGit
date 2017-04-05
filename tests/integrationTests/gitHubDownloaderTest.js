///some comments

var chai = require('chai');
var fs = require('fs');
var rimraf = require('rimraf');
var expect = chai.expect; // we are using the "expect" style of Chai
var GitHubRepository = require('./../../src/GitHubRepository');
var GitHubDownloader = require('./../../src/GitHubDownloader');

describe('GitHubRepository', function() {
      it('constructor\'s succeed callback should be called if the repository is downloaded and it must be in the temp folder.', function(done) {    
        this.timeout(20000); 
        rimraf.sync("./tmp");
        var gitHubRepository = new GitHubRepository("LauLlobet", "cvFromGithub", function() {
          gitHubRepository.setBranch("master", function() {
            var gitHubDownloader = new GitHubDownloader();
            gitHubDownloader.download(gitHubRepository, function() {
              if(fs.existsSync("tmp/package.json")){                done();
              }else{
                done("file doesn't exist");
              }
            }, function() {
              done("Download failed");
            });
          }, function(){
            done("setting branch fail")
          });
        },function(){
            done("creating repo branch fail")
        });
      })
});
      