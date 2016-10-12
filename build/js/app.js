(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Person = require('./../js/apis.js').personModule;
var apiKey = "AIzaSyB7z5_ciyY1vycomQjg-ze5wzKwHafvQig";

$(document).ready(function() {
  $('#greeting-form').submit(function(event){
    event.preventDefault();
    var name = $('#name').val()
    var coolPerson = new Person("x");
    var output = coolPerson.greeting(name)
     $('#greeting').append(output);
  });
  $('#mapLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showMap').text("The city you have chosen is " + city + ".");
  });
});

},{"./../js/apis.js":2}],2:[function(require,module,exports){
function Person(userName) {
  this.user = userName;
}

Person.prototype.greeting = function(name) {
  var output = "hello" + name
  return output;
};

exports.personModule = Person;

},{}]},{},[1]);
