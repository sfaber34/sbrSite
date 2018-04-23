// google.maps.event.addDomListener(window, 'load', initMap);

var map;
var service;
var infowindow;
window.onload = function() {

  var pyrmont = {lat: 39.9884327, lng: -105.0963015};

  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 17
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: pyrmont,
    radius: 20,
    name: 'South Boulder Road Liquors'
  }, callback);
};

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  infowindow.setContent(place.name);
  infowindow.open(map, marker);

  google.maps.event.addListener(marker, 'click', function() {

    launchMap();
  });
}
