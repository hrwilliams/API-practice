(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Person(userName) {
  this.user = userName;
}

Person.prototype.greeting = function(name) {
  var output = "hello " + name;
  return output;
};

exports.personModule = Person;

},{}],2:[function(require,module,exports){
var Person = require('./../js/apis.js').personModule;
var apiKey = "AIzaSyB7z5_ciyY1vycomQjg-ze5wzKwHafvQig";

$(document).ready(function() {
  $('#greeting-form').submit(function(event){
    event.preventDefault();
    var name = $('#name').val();
    var coolPerson = new Person("x");
    var output = coolPerson.greeting(name);
     $('#greeting').append(output);
  });
  // $('#mapLocation').click(function() {
  //   var latitude = $('#latitude').val();
  //   $('#latitude').val("");
  //   var longitude = $('#longitude').val();
  //   $('#longitude').val("");
  //   $('.showMap').text("The city you have chosen is " + city + ".");
  //   $.get('https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&callback=initMap', function(response) {
  //     console.log(response);
  //   });
  // });
});

$(document).ready(function() {
  $('#bikeQuery').click(function() {
    var searchTerm = $('#query').val();
    $('#query').val("");
    // $('.showBikes').text("Your search: " + searchTerm);
    $.get('https://bikeindex.org:443/api/v2/bikes_search?page=1&per_page=1&query=' + searchTerm, function(response) {
      console.log(response);
    //  $('.showBikes').text("Here is a bike " + response.bikes.title);
   });
  });
});

var apiKey = "xxx";

$('#mapLocation').click(function() {
  var latitude = $('#latitude').val();
  $('#latitude').val("");
  var longitude = $('#longitude').val();
  $('#longitude').val("");
  // $('.showMap').text("The city you have chosen is " + city + ".");
  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 45, lng: -122},
      zoom: 8
    });
  }
  $.get('https://maps.googleapis.com/maps/api/js?key=' + apiKey + '&callback=initMap', function(response) {
    console.log(response);
  });
  $('.map');
});

},{"./../js/apis.js":1}]},{},[2]);
