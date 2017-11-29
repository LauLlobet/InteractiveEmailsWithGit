var fs = require('fs');
//var gcloud = require("gcloud");

function ExtractPropertiesFromObjectFollowingAPathOfNestedAttributes(prop, position) {
	this.property = prop;
	this.position = position;
}


ExtractPropertiesFromObjectFollowingAPathOfNestedAttributes.prototype.getRef = function(jsonString) {
	var paths = this.property.split(".");
	var current = jsonString;

	  for (var i = 0; i < paths.length; ++i) {
	    if (current[paths[i]] == undefined) {
	      return undefined;
	    } else {
	      current = current[paths[i]];
	    }
	  }
	  return current;
};

ExtractPropertiesFromObjectFollowingAPathOfNestedAttributes.prototype.getProperty = function(jsonString) {
	var ref = this.getRef(jsonString);
	return this.splitRef(ref)[this.position];
};

ExtractPropertiesFromObjectFollowingAPathOfNestedAttributes.prototype.splitRef = function(refString) {
	return refString.split("/");
};

module.exports = ExtractPropertiesFromObjectFollowingAPathOfNestedAttributes;
