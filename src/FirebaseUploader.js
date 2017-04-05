var fs = require('fs');

function FirebaseUploader(option, success, fail) {
	success();
	const keyFilename = "./interactiveemailtree-firebase-adminsdk-quhof-bffd73b347.json"; //replace this with api key file
	const projectId = "my-project-id-should-go-here" //replace with your project id
	const bucketName = `${projectId}.appspot.com`;

	const gcs = require('@google-cloud/storage')({
		projectId,
		keyFilename
	});

	const bucket = gcs.bucket(bucketName);



}

module.exports = FirebaseUploader;