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
