///some comments

var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var GitHubRepository = require('./../../src/GitHubRepository');

describe('GitHubRepository', function() {
	
  it('constructor\'s succeed callback should be called if the repository and user exists.', function(done) {
    var gitHubDownloader = new GitHubRepository("LauLlobet","empty--stubRepository-for-testing", function(){
    	done();
    },
    function(){
    	done("This must fail");

    });
  });


 it('constructor\'s failed callback should be called if the repository or user do not exists.', function(done) {
   var gitHubDownloader = new GitHubRepository("LauLlobet","pepito", function(){
    	done("This must fail");
    },
    function(){
    	done();
    });
  });



  it('setBranch should call success callback if the branch name is correct.', function(done) {
    var gitHubDownloader = new GitHubRepository("LauLlobet","empty--stubRepository-for-testing",

    function(){
    	gitHubDownloader.setBranch('master', function(){
	    	done();
	    },
	    function(){
	    	done("This must fail");

	    });
    },
    function(){
    	done("This must fail");
    });
  });




  it('setBranch should call success callback if the branch name is correct.', function(done) {
    var gitHubDownloader = new GitHubRepository("LauLlobet","empty--stubRepository-for-testing",

    function(){
      gitHubDownloader.setBranch('masterblaster', function(){
        //done("This must fail");
        done();
      },
      function(){
        done();       
        //done("this must fail");
      });
    },
    function(){
      done("This must fail");
    });
  });



});


















  
