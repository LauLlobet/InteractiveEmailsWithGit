//mocha tests --recursive --watch

var ghdownload = require('github-download');
var getJSON = require("./getJSON");
var oauth = require("../auths/oauth");
var GitHubDownloader = require('./GitHubDownloader');


function GitHubRepository(user, repositoryName, succed, fail) {
  this.user = user;
  this.repositoryName = repositoryName;
  this.options = require('./gitHubApiRequests.json');
  this.isExisting(succed, fail);
}

GitHubRepository.prototype.download = function(folder, success, fail) {
   var downloader = new GitHubDownloader();
   downloader.download(this,folder,success, fail);


  };



GitHubRepository.prototype.isExisting = function(succed, fail) {
  this.setPath('/repos/' + this.user + '/' + this.repositoryName);
  this.jsonFromApiIsFound(succed, fail);
};

GitHubRepository.prototype.setPath = function(path) {
  this.options.path = path + oauth;

};

GitHubRepository.prototype.setBranch = function(branchName, succed, fail) {
  this.branchName = branchName;
  this.isExistingBranch(succed, fail);
};

GitHubRepository.prototype.isExistingBranch = function(succed, fail) {
  this.setPath('/repos/' + this.user + '/' + this.repositoryName);
  this.jsonFromApiIsFound(succed, fail);
};


GitHubRepository.prototype.jsonFromApiIsFound = function(succed, fail) {
  getJSON(this.options, function(status, result) {
    //console.log("------>" + result.message);
    if (result.message === "Not Found") {
      fail();
      return;

    }
    succed();
  });
};

module.exports = GitHubRepository;
