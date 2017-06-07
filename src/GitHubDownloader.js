var fs = require('fs');
var ghdownload = require('github-download');


function GitHubDownloader() {

}

GitHubDownloader.prototype.download = function(gitHubRepository, folder, success, fail) {
	//fs.writeFileSync('./tmp/dummy.txt','fjjdffd');
	//fs.writeFileSync('./tmp/dummy2222.txt','dfghdfgh');

	//{user: 'jprichardson', repo: 'vcsurl', ref: 'master'}

	ghdownload({
			user: 'LauLlobet',
			repo: 'cvFromGithub',
			ref: '24feb'
		}, folder)
		.on('dir', function(dir) {
			//console.log(dir);
		})
		.on('file', function(file) {
			//console.log(file);
		})
		.on('zip', function(zipUrl) { //only emitted if Github API limit is reached and the zip file is downloaded 
			//console.log(zipUrl);
		})
		.on('error', function(err) {
			//console.error(err);
			fail();
		})
		.on('end', function() {
			success();
		});



};



module.exports = GitHubDownloader;