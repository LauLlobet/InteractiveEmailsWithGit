var fs = require('fs');
//var gcloud = require("gcloud");

function FirebaseUploader(pathToFile,success, fail) {

	var gcs = require('@google-cloud/storage')({
		projectId: "borram",
		keyFilename: 'auths/borram-f2062742b6bc.json'
	});

	var bucket = gcs.bucket('borram-5bbd8.appspot.com');

	bucket.upload(pathToFile, function(err, file) {
		if (!err) {
			//console.log("mountains.png is now in your bucket.");
			//console.log("URL: https://storage.cloud.google.com/borram-5bbd8.appspot.com/AAA.txt");
					
		file.makePublic().then(function(){
			                    //https://storage.googleapis.com/[BUCKET_NAME]/[OBJECT_NAME]
		    	success('/borram-5bbd8.appspot.com/AAA.txt');
		  	}).catch(function(error){
				fail();
			});
		  }else{
			fail();
		  }
	});
	

}




module.exports = FirebaseUploader;