Private lessons on how to build a backend with Node.js and TDD
===============================================================
Given by **Lau Llobet** to [**Oscar V**](https://github.com/OscarValcarcel)

From Feb.17 to Sept.17

## Objective
* Build a backend using current tools (GitHub API, NetSend API, Firebase, Heroku)
* See the TDD workflow (failing test first, SOLID, Walking Skeleton first)
* Learn Javascript from scratch (following an OO desing)
* Learn Git (following [git successful branching model](http://nvie.com/posts/a-successful-git-branching-model/))

## What does the project do?
* It listens for GitHub pushes at a certain repository
* When a push is done it looks for a index.html file in that version of the push.
* It gets the images that the html has (in relative paths to the repository files).
* It uploads the images in Firebase as public access.
* It replaces the url of the images with the Firebase public paths. 
* Finally it sends an email of this generated htmls index via NetSend to a certain address.


![alt text](https://github.com/LauLlobet/teaching--Emailsender-When-Push/raw/master/plan.png "Logo Title Text 1")
* Finally we used Heroku instead of Lambda and we used NetSend instead of MailChimp




