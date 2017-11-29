var chai = require('chai');
var GithubWebhooksPropertiesExtractorFactory = require('./../../src/GithubWebhooksPropertiesExtractorFactory');
var expect = chai.expect; // we are using the "expect" style of Chai
var json = {
  "ref": "refs/heads/newBranch",
  "before": "5b13d030c9a9ebecb462c1aa1f71cc3ed5aacc4f",
  "after": "093fdcca8a48fc92648b98632e425f54abf1052f",
  "created": false,
  "deleted": false,
  "forced": false,
  "base_ref": null,
  "compare": "https://github.com/LauLlobet/emailTreeTest/compare/5b13d030c9a9...093fdcca8a48",
  "commits": [{
    "id": "093fdcca8a48fc92648b98632e425f54abf1052f",
    "tree_id": "27232db99ce7f1ecd80c383ffb1cc3de81570528",
    "distinct": true,
    "message": "first tests",
    "timestamp": "2017-05-10T20:32:36+02:00",
    "url": "https://github.com/LauLlobet/emailTreeTest/commit/093fdcca8a48fc92648b98632e425f54abf1052f",
    "author": {
      "name": "Lau",
      "email": "lau@MacBook-Air-de-Lau.local"
    },
    "committer": {
      "name": "Lau",
      "email": "lau@MacBook-Air-de-Lau.local"
    },
    "added": [
      "borra23"
    ],
    "removed": [

    ],
    "modified": [

    ]
  }],
  "head_commit": {
    "id": "093fdcca8a48fc92648b98632e425f54abf1052f",
    "tree_id": "27232db99ce7f1ecd80c383ffb1cc3de81570528",
    "distinct": true,
    "message": "first tests",
    "timestamp": "2017-05-10T20:32:36+02:00",
    "url": "https://github.com/LauLlobet/emailTreeTest/commit/093fdcca8a48fc92648b98632e425f54abf1052f",
    "author": {
      "name": "Lau",
      "email": "lau@MacBook-Air-de-Lau.local"
    },
    "committer": {
      "name": "Lau",
      "email": "lau@MacBook-Air-de-Lau.local"
    },
    "added": [
      "borra23"
    ],
    "removed": [

    ],
    "modified": [

    ]
  },
  "repository": {
    "id": 82217526,
    "full_name": "LauLlobet/emailTreeTest",
    "owner": {
      "name": "LauLlobet",
      "email": "lau.llobet@gmail.com",
      "login": "LauLlobet",
      "id": 25221511,
      "avatar_url": "https://avatars1.githubusercontent.com/u/25221511?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/LauLlobet",
      "html_url": "https://github.com/LauLlobet",
      "followers_url": "https://api.github.com/users/LauLlobet/followers",
      "following_url": "https://api.github.com/users/LauLlobet/following{/other_user}",
      "gists_url": "https://api.github.com/users/LauLlobet/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/LauLlobet/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/LauLlobet/subscriptions",
      "organizations_url": "https://api.github.com/users/LauLlobet/orgs",
      "repos_url": "https://api.github.com/users/LauLlobet/repos",
      "events_url": "https://api.github.com/users/LauLlobet/events{/privacy}",
      "received_events_url": "https://api.github.com/users/LauLlobet/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/LauLlobet/emailTreeTest",
    "description": null,
    "fork": false,
    "url": "https://github.com/LauLlobet/emailTreeTest",
    "forks_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/forks",
    "keys_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/teams",
    "hooks_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/hooks",
    "issue_events_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/issues/events{/number}",
    "events_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/events",
    "assignees_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/assignees{/user}",
    "branches_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/branches{/branch}",
    "tags_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/tags",
    "blobs_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/languages",
    "stargazers_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/stargazers",
    "contributors_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/contributors",
    "subscribers_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/subscribers",
    "subscription_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/subscription",
    "commits_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/contents/{+path}",
    "compare_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/merges",
    "archive_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/downloads",
    "issues_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/issues{/number}",
    "pulls_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/labels{/name}",
    "releases_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/releases{/id}",
    "deployments_url": "https://api.github.com/repos/LauLlobet/emailTreeTest/deployments",
    "created_at": 1487273068,
    "updated_at": "2017-02-17T16:10:48Z",
    "pushed_at": 1494441162,
    "git_url": "git://github.com/LauLlobet/emailTreeTest.git",
    "ssh_url": "git@github.com:LauLlobet/emailTreeTest.git",
    "clone_url": "https://github.com/LauLlobet/emailTreeTest.git",
    "svn_url": "https://github.com/LauLlobet/emailTreeTest",
    "homepage": null,
    "size": 3,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "Python",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "stargazers": 0,
    "master_branch": "master"
  },
  "pusher": {
    "name": "LauLlobet",
    "email": "lau.llobet@gmail.com"
  },
  "sender": {
    "login": "LauLlobet",
    "id": 25221511,
    "avatar_url": "https://avatars1.githubusercontent.com/u/25221511?v=3",
    "gravatar_id": "",
    "url": "https://api.github.com/users/LauLlobet",
    "html_url": "https://github.com/LauLlobet",
    "followers_url": "https://api.github.com/users/LauLlobet/followers",
    "following_url": "https://api.github.com/users/LauLlobet/following{/other_user}",
    "gists_url": "https://api.github.com/users/LauLlobet/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/LauLlobet/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/LauLlobet/subscriptions",
    "organizations_url": "https://api.github.com/users/LauLlobet/orgs",
    "repos_url": "https://api.github.com/users/LauLlobet/repos",
    "events_url": "https://api.github.com/users/LauLlobet/events{/privacy}",
    "received_events_url": "https://api.github.com/users/LauLlobet/received_events",
    "type": "User",
    "site_admin": false
  }
};



describe('Create extractor objects specialized on extracting repository info from github webhooks', function() {
	it('Get ref should get any property string following the json path provided', function(done) {
		var githubWebhooksPropertiesExtractorFactory = new GithubWebhooksPropertiesExtractorFactory();
		var repoExtractor = githubWebhooksPropertiesExtractorFactory.create("repository");
		var repoName = repoExtractor.getProperty(json);

		expect(repoName).to.equal("emailTreeTest");
		done();
	});

	it('Get ref should get any property string following the json path provided', function(done) {
		var githubWebhooksPropertiesExtractorFactory = new GithubWebhooksPropertiesExtractorFactory();
		var nameExtractor = githubWebhooksPropertiesExtractorFactory.create("name");
		var userName = nameExtractor.getProperty(json);

		expect(userName).to.equal("LauLlobet");
		done();
	});
});
