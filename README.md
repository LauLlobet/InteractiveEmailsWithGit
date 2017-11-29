Private lessons on how to build a backend with Node.js and TDD
===============================================================
Given by **Lau Llobet** to [**Oscar V**](https://github.com/OscarValcarcel)

From Feb.17 to Sept.17

## Objective
* Build a backend using current tools (GitHub API, NetSend API, Firebase, Heroku)
* See the TDD workflow (failing test first, SOLID, Walking Skeleton first)
* Learn Javascript
* Learn Git (following [git successful branching model](http://nvie.com/posts/a-successful-git-branching-model/))

## What does the project do?
* It listens for GitHub pushes in a certain repository
* When a push is done it fetches the index.html file in that version of the push.
* It looks for the images that the html has (in relative paths)
* It uploads the images in Firebase as public access
* And replaces the url of the images with the Firebase public 
* Finally it sends an email via NetSend to a certain person.


![alt text](https://github.com/LauLlobet/teaching--Emailsender-When-Push/raw/master/plan.png "Logo Title Text 1")





