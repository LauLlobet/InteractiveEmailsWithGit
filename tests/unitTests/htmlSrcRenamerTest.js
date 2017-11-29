var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var HtmlSrcRenamer = require('./../../src/HtmlSrcRenamer');

describe('HtmlSrcRenamer', function() {
	it('shoud change paths of image to provided one', function(done) {
		var htmlInitial = '<!DOCTYPE html>' +
			'<html>' +
			'<body>' +
			'<h2>Spectacular Mountain</h2>' +
			'<img src="img/pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;">' +
			'</body>' +
			'</html>';

		var htmlFinal = '<!DOCTYPE html>' +
			'<html>' +
			'<body>' +
			'<h2>Spectacular Mountain</h2>' +
			'<img src="http://dummyfirebaserepo.com/12345678/img/pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;">' +
			'</body>' +
			'</html>';

		var newPath = "http://dummyfirebaserepo.com/12345678/";
		var htmlSrcRenamer = new HtmlSrcRenamer(newPath);
		var ans = htmlSrcRenamer.doIt(htmlInitial);
		//assert(ans,htmlFinal,"they have to be the same");
		expect(ans).to.equal(htmlFinal);
		done();
	});


	it('HtmlSrcRenamer shoud change more than one path of image to provided one', function(done) {
		var htmlInitial = '<!DOCTYPE html>' +
			'<html>' +
			'<body>' +
			'<h2>Spectacular Mountain</h2>' +
			'<img src="img/pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;">' +
			'<img src="img/pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;">' +
			'</body>' +
			'</html>';

		var htmlFinal = '<!DOCTYPE html>' +
			'<html>' +
			'<body>' +
			'<h2>Spectacular Mountain</h2>' +
			'<img src="http://dummyfirebaserepo.com/12345678/img/pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;">' +
			'<img src="http://dummyfirebaserepo.com/12345678/img/pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;">' +
			'</body>' +
			'</html>';

		var newPath = "http://dummyfirebaserepo.com/12345678/";
		var htmlSrcRenamer = new HtmlSrcRenamer(newPath);
		var ans = htmlSrcRenamer.doIt(htmlInitial);
		expect(ans).to.equal(htmlFinal);
		done();
	});


});
