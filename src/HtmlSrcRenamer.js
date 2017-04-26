//mocha tests --recursive --watch

var ghdownload = require('github-download');
var getJSON = require("./getJSON");
var oauth = require("./oauth");


function HtmlSrcRenamer(path) {
  this.path = path;
}

String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

HtmlSrcRenamer.prototype.doIt = function(initial) {
  return initial.replaceAll("src=\"", "src=\"" + this.path);
};



module.exports = HtmlSrcRenamer;