var apiKey = "AIzaSyB7z5_ciyY1vycomQjg-ze5wzKwHafvQig";

$(document).ready(function() {
  $('#mapLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showMap').text("The city you have chosen is " + city + ".");
  });
});
