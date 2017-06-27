var chai = require('chai');
var fs = require('fs');
var expect = chai.expect; // we are using the "expect" style of Chai
var ReplacePathsOfLocalImagesToCloudOnesUsingMap = require('./../src/ReplacePathsOfLocalImagesToCloudOnesUsingMap');

describe('replacePathsOfLocalImagesToCloudOnesUsingMapTest', function() {
	it('shoud replace one path of local image with the existing path of the file uploaded to Firebase Storage', function(done) {
		var htmlInitial = '<!DOCTYPE html>' +
			'<html>' +
			'<body>' +
			'<h2>Spectacular Mountain</h2>' +
			'<img src="img/pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;">' +
			'</body>' +
			'</html>';

		var indexHtmlCloudifiedExpected = '<!DOCTYPE html>' +
			'<html>' +
			'<body>' +
			'<h2>Spectacular Mountain</h2>' +
			'<img src="http://firebaseStorage.com/repo1/mailingCampaing1/pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;">' +
			'</body>' +
			'</html>';

		var mapOfImagesPath = {};
		mapOfImagesPath["img/pic_mountain.jpg"] = "http://firebaseStorage.com/repo1/mailingCampaing1/pic_mountain.jpg";
		
		var pe = new ReplacePathsOfLocalImagesToCloudOnesUsingMap();
		var htmlcloudified = pe.doIt(htmlInitial, mapOfImagesPath);
		expect(htmlcloudified).to.equal(indexHtmlCloudifiedExpected);
		done();

	});


	it('shoud replace paths in multiple ocurrences of html file to the existing ones of the files uploaded to Firebase Storage', function(done) {
		var htmlInitial = '<!DOCTYPE html>' +
			'<html>' +
			'<body>' +
			'<h2>Spectacular Mountain</h2>' +
			'<img src="img/pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;">' +
			'<img src="./pic_mountain2.png" alt="Mountain View" style="width:304px;height:228px;">' +
			'<img src="pic_mountain3.gif" alt="Mountain View" style="width:304px;height:228px;">' +
			'<img src="img/pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;">' +
			'</body>' +
			'</html>';

		var indexHtmlCloudifiedExpected = '<!DOCTYPE html>' +
			'<html>' +
			'<body>' +
			'<h2>Spectacular Mountain</h2>' +
			'<img src="http://firebaseStorage.com/repo1/mailingCampaing1/pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;">' +
			'<img src="http://firebaseStorage.com/repo1/mailingCampaing1/pic_mountain2.png" alt="Mountain View" style="width:304px;height:228px;">' +
			'<img src="http://firebaseStorage.com/repo1/mailingCampaing1/pic_mountain3.gif" alt="Mountain View" style="width:304px;height:228px;">' +
			'<img src="http://firebaseStorage.com/repo1/mailingCampaing1/pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;">' +
			'</body>' +
			'</html>';

		var mapOfImagesPath = {};
		mapOfImagesPath["img/pic_mountain.jpg"] = "http://firebaseStorage.com/repo1/mailingCampaing1/pic_mountain.jpg";
		mapOfImagesPath["./pic_mountain2.png"] = "http://firebaseStorage.com/repo1/mailingCampaing1/pic_mountain2.png";
		mapOfImagesPath["pic_mountain3.gif"] = "http://firebaseStorage.com/repo1/mailingCampaing1/pic_mountain3.gif";

		var pe = new ReplacePathsOfLocalImagesToCloudOnesUsingMap();
		var htmlcloudified = pe.doIt(htmlInitial, mapOfImagesPath);
		expect(htmlcloudified).to.equal(indexHtmlCloudifiedExpected);
		done();

	});


	it('shoud replace paths in multiple ocurrences of html file to the existing ones of the files uploaded to Firebase Storage even the names are trickyer', function(done) {
		var htmlInitial = '<!DOCTYPE html>' +
			'<html>' +
			'<body>' +
			'<h2>Spectacular Mountain</h2>' +
			'<img src="img/pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;">' +
			'<img src="other/img/pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;">' +
			'<img src="pic_mountain3.gif" alt="Mountain View" style="width:304px;height:228px;">' +
			'<img src="img/pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;">' +
			'</body>' +
			'</html>';

		var indexHtmlCloudifiedExpected = '<!DOCTYPE html>' +
			'<html>' +
			'<body>' +
			'<h2>Spectacular Mountain</h2>' +
			'<img src="http://firebaseStorage.com/repo1/mailingCampaing1/pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;">' +
			'<img src="http://firebaseStorage.com/repo1/mailingCampaing1/pic_mountainBIS.png" alt="Mountain View" style="width:304px;height:228px;">' +
			'<img src="http://firebaseStorage.com/repo1/mailingCampaing1/pic_mountain3.gif" alt="Mountain View" style="width:304px;height:228px;">' +
			'<img src="http://firebaseStorage.com/repo1/mailingCampaing1/pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;">' +
			'</body>' +
			'</html>';

		var mapOfImagesPath = {};
		mapOfImagesPath["img/pic_mountain.jpg"] = "http://firebaseStorage.com/repo1/mailingCampaing1/pic_mountain.jpg";
		mapOfImagesPath["other/img/pic_mountain.jpg"] = "http://firebaseStorage.com/repo1/mailingCampaing1/pic_mountainBIS.png";
		mapOfImagesPath["pic_mountain3.gif"] = "http://firebaseStorage.com/repo1/mailingCampaing1/pic_mountain3.gif";

		var pe = new ReplacePathsOfLocalImagesToCloudOnesUsingMap();
		var htmlcloudified = pe.doIt(htmlInitial, mapOfImagesPath);
		expect(htmlcloudified).to.equal(indexHtmlCloudifiedExpected);
		done();
		//

	});
	it('shoud replace paths in multiple ocurrences of html file to the existing ones of the files uploaded to Firebase Storage even the names are more and more tricky', function(done) {
		var htmlInitial = '<!DOCTYPE html>' +
			'<html>' +
			'<body>' +
			'<h2>Spectacular Mountain example of my pic called "mountain.png" </h2>' +
			'<img src="mountain.png" alt="Mountain View" style="width:304px;height:228px;">' +
			'</body>' +
			'</html>';

		var indexHtmlCloudifiedExpected = '<!DOCTYPE html>' +
			'<html>' +
			'<body>' +
			'<h2>Spectacular Mountain example of my pic called "mountain.png" </h2>' +
			'<img src="http://firebaseStorage.com/repo1/mailingCampaing1/mountain.png" alt="Mountain View" style="width:304px;height:228px;">' +
			'</body>' +
			'</html>';

		var mapOfImagesPath = {};
		mapOfImagesPath["mountain.png"] = "http://firebaseStorage.com/repo1/mailingCampaing1/mountain.png";
		
		var pe = new ReplacePathsOfLocalImagesToCloudOnesUsingMap();
		var htmlcloudified = pe.doIt(htmlInitial, mapOfImagesPath);
		expect(htmlcloudified).to.equal(indexHtmlCloudifiedExpected);
		done();

	});


});