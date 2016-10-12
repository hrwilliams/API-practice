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
