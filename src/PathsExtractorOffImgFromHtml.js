function PathsExtractorOffImgFromHtml() {

}

PathsExtractorOffImgFromHtml.prototype.doIt = function(initial) {
	var m;
	var urls = [];
	var rex = /<img\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?/g;

	while (m = rex.exec(initial)) {
		urls.push(m[1]);
	}
	return urls;

};

module.exports = PathsExtractorOffImgFromHtml;
