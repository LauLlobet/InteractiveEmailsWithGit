var chai = require('chai');
var fs = require('fs');
var expect = chai.expect; // we are using the "expect" style of Chai
var extractIndexHtmlFromFolderToString = require('./../src/ExtractIndexHtmlFromFolderToString');

describe('ExtractIndexHtmlFromFolderToString', function() {
	it.only('shoud extract idex from folder', function(done) {

		var htmlInitial = '1234567890';
		var folder = "tmpBORRAMSIPOTS";
		if (!fs.existsSync(folder)) {
			fs.mkdirSync(folder);
		}

		fs.writeFile(folder + "/index.html", htmlInitial, function(err) {
			if (err) {
				throw err;
			}
			var ei = new extractIndexHtmlFromFolderToString(folder);
			ei.doIt(function(ans) {
				expect(ans).to.equal(htmlInitial);
				done();
			}, function(ans) {
				done(ans);
				console.log(ans);
			});
			console.log("The file was succesfully saved!");
		});


	});
});