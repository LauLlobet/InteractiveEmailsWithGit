var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var pathsExtractor = require('./../../src/PathsExtractorOffImgFromHtml');

describe('PathsExtractorOffImgFromHtml', function() {
	it('shoud extract all the images paths from a html file', function(done) {
		var htmlInitial = '<!DOCTYPE html>' +
			'<html>' +
			'<body>' +
			'<h2>Spectacular Mountain</h2>' +
			'<img src="./img/pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;">' +
			'<img src="img/pic_mountain2.jpg" alt="Mountain View" style="width:304px;height:228px;">' +
			'<img alt="Mountain View" style="width:304px;height:228px; src="img/img/pic_mountain3.png" ">' +
			'</body>' +
			'</html>';

			
		var arrayExpected = ["./img/pic_mountain.jpg","img/pic_mountain2.jpg", "img/img/pic_mountain3.png"];


		var pe = new pathsExtractor();
		var ans = pe.doIt(htmlInitial);
		expect(ans).to.deep.have.same.members(arrayExpected);
		done();
	});

});