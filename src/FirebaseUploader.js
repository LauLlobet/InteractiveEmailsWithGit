var fs = require('fs');
//var gcloud = require("gcloud");

function FirebaseUploader(success, fail) {

	var gcs = require('@google-cloud/storage')({
		projectId: "borram",
		keyFilename: 'src/borram-f2062742b6bc.json'
	});

	var bucket = gcs.bucket('borram-5bbd8.appspot.com');

	bucket.upload('./images/AAA.txt', function(err, file) {
		if (!err) {
			console.log("mountains.png is now in your bucket.");
			console.log("URL: https://storage.cloud.google.com/borram-5bbd8.appspot.com/AAA.txt");
			success();
			return;
		} 
		fail(err);
	});
	

}




module.exports = FirebaseUploader;