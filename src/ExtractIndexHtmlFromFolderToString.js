var fs = require('fs');


function ExtractIndexHtmlFromFolderToString(pathToFolder) {
 this.pathToFolder = pathToFolder;

	
}

ExtractIndexHtmlFromFolderToString.prototype.doIt = function(success, fail){
	    var file = this.pathToFolder + "/index.html";
	    fs.readFile(file,'utf8', function(err, data){
	    	if(!err){
	    		success(data.toString());
	    	}else{
	    		fail(err);
	    	}
	    });


		//success('1234567890');
};




module.exports = ExtractIndexHtmlFromFolderToString;