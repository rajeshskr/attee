// /* eslint-disable no-var */

// const CLIENT_ID='AIzaSyDT46LMwZZRkYi5zgvwSV1Wo4C6kXSwhpo';
// var google;

// function init() {
//   // Basic options for a simple Google Map
//   // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//   // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
//   var myLatlng = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
//   // 39.399872
//   // -8.224454
    
//   var mapOptions = {
//     // How zoomed in you want the map to start at (always required)
//     zoom: 7,

//     // The latitude and longitude to center the map (always required)
//     center: myLatlng,

//     // How you would like to style the map. 
//     scrollwheel: false,
//     styles: [{ 'featureType': 'administrative.land_parcel', 'elementType': 'all', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'landscape.man_made', 'elementType': 'all', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'poi', 'elementType': 'labels', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'road', 'elementType': 'labels', 'stylers': [{ 'visibility': 'simplified' }, { 'lightness': 20 }] }, { 'featureType': 'road.highway', 'elementType': 'geometry', 'stylers': [{ 'hue': '#f49935' }] }, { 'featureType': 'road.highway', 'elementType': 'labels', 'stylers': [{ 'visibility': 'simplified' }] }, { 'featureType': 'road.arterial', 'elementType': 'geometry', 'stylers': [{ 'hue': '#fad959' }] }, { 'featureType': 'road.arterial', 'elementType': 'labels', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'road.local', 'elementType': 'geometry', 'stylers': [{ 'visibility': 'simplified' }] }, { 'featureType': 'road.local', 'elementType': 'labels', 'stylers': [{ 'visibility': 'simplified' }] }, { 'featureType': 'transit', 'elementType': 'all', 'stylers': [{ 'visibility': 'off' }] }, { 'featureType': 'water', 'elementType': 'all', 'stylers': [{ 'hue': '#a1cdfc' }, { 'saturation': 30 }, { 'lightness': 49 }] }]
//   };

    

//     // Get the HTML DOM element that will contain your map 
//     // We are using a div with id="map" seen below in the <body>
//   var mapElement = document.getElementById('map');

//   // Create the Google Map using out element and options defined above
//   var map = new google.maps.Map(mapElement, mapOptions);
    
//   var addresses = ['Brooklyn'];

//   for (var x = 0; x < addresses.length; x++) {
//     $.getJSON(`https://maps.googleapis.com/maps/api/geocode/json?address=${addresses[x]}&sensor=false&key=${CLIENT_ID}`, null, data => {
//       var p = data.results[0].geometry.location;
//       var latlng = new google.maps.LatLng(p.lat, p.lng);
//       new google.maps.Marker({
//         position: latlng,
//         map: map,
//         icon: 'images/loc.png'
//       });

//     });
//   }
    
// }
// google.maps.event.addDomListener(window, 'load', init);


let mymap = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoicmFqZXNoc2F0aHlha3VtYXIiLCJhIjoiY2tkMzMycnd3MHY5NjJ6cnlodWxtb2Q5dCJ9.5fz4AFXj_YCjqSqAzC8wQg'
}).addTo(mymap);
