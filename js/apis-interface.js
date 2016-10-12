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
