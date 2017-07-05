var fs = require('fs');
//var gcloud = require("gcloud");

function ExtractBranchAndRepositoryStringsFromWebhookNotification() {}

ExtractBranchAndRepositoryStringsFromWebhookNotification.prototype.findBranch = function(jsonString) {
	var ref = this.getRef(jsonString);
	return this.splitRef(ref)[1];

};


ExtractBranchAndRepositoryStringsFromWebhookNotification.prototype.getRef = function(jsonString) {
	return jsonString.repository.full_name;
};

ExtractBranchAndRepositoryStringsFromWebhookNotification.prototype.splitRef = function(refString) {
	return refString.split("/");
};

module.exports = ExtractBranchAndRepositoryStringsFromWebhookNotification;