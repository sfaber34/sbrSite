// google.maps.event.addDomListener(window, 'load', initMap);
window.onload = function() {
  var map;
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.98812, lng: -105.0961352},
    zoom: 17
  });
  var marker = new google.maps.Marker({
    position: {lat: 39.98812, lng: -105.0961352},
    map: map,
    animation: google.maps.Animation.DROP
  });
};
