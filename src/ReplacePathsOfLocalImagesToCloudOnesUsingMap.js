function ReplacePathsOfLocalImagesToCloudOnesUsingMap() {

}

ReplacePathsOfLocalImagesToCloudOnesUsingMap.prototype.doIt = function(localHtml, imageSourceMap) {
	var result = localHtml;
	for (var i in imageSourceMap) {
		var regExp = new RegExp('src="'+i+'"', 'g');
		result = result.replace(regExp, 'src="' + imageSourceMap[i] +'"');
	}
    

    //
	return result;
};



module.exports = ReplacePathsOfLocalImagesToCloudOnesUsingMap;
