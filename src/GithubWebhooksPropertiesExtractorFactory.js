var ExtractPropertiesFromObjectFollowingAPathOfNestedAttributes = require("./ExtractPropertiesFromObjectFollowingAPathOfNestedAttributes");

function GithubWebhooksPropertiesExtractorFactory(){

}

GithubWebhooksPropertiesExtractorFactory.prototype.create = function(objectType){

	if(objectType == "repository"){
		return new ExtractPropertiesFromObjectFollowingAPathOfNestedAttributes("repository.full_name", 1);
	}else if (objectType == "name") {
		return new ExtractPropertiesFromObjectFollowingAPathOfNestedAttributes("repository.full_name", 0);
	}
	
	 
};


module.exports = GithubWebhooksPropertiesExtractorFactory;