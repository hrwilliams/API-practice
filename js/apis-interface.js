var Person = require('./../js/apis.js').personModule;
var apiKey = "AIzaSyB7z5_ciyY1vycomQjg-ze5wzKwHafvQig";

$(document).ready(function() {
  $('#greeting-form').submit(function(event)){
    event.preventDefault();
    var name = ('#name').val()
    var coolPerson = new Person("x");
    var output = newPerson.greeting(name)
     $('#greeting').append(output);
  });
  $('#mapLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showMap').text("The city you have chosen is " + city + ".");
  });
});
