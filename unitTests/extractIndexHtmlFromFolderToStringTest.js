var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var extractIndexHtmlFromFolderToString = require('./../src/ExtractIndexHtmlFromFolderToString');

describe('ExtractIndexHtmlFromFolderToString', function() {
	it.only('shoud extract idex from folder', function(done) {
		
		var htmlInitial = '1234567890';
		var exec = require('child_process').exec;
		var cmd = 'mkdir tmpBORRAMSIPOTS & echo '+htmlInitial+'> ./tmpBORRAMSIPOTS/index.html';

		exec(cmd, function(error, stdout, stderr) {
		 	var ei = new extractIndexHtmlFromFolderToString("tmpBORRAMSIPOTS");
			ei.doIt(function(ans){
				expect(ans).to.equal(htmlInitial+"\r\n");
				done();
			},function(ans){
				done("err");
			});
			
		});
		
	});

});