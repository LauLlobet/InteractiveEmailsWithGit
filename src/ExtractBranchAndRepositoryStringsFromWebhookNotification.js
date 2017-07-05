var fs = require('fs');
//var gcloud = require("gcloud");

function ExtractBranchAndRepositoryStringsFromWebhookNotification() {}

ExtractBranchAndRepositoryStringsFromWebhookNotification.prototype.findBranch = function(jsonString) {
	var ref = this.getRef(jsonString);
	return this.splitRef(ref)[2];

};


ExtractBranchAndRepositoryStringsFromWebhookNotification.prototype.getRef = function(jsonString) {
	return jsonString.ref;
};

ExtractBranchAndRepositoryStringsFromWebhookNotification.prototype.splitRef = function(refString) {
	return refString.split("/");
};

module.exports = ExtractBranchAndRepositoryStringsFromWebhookNotification;