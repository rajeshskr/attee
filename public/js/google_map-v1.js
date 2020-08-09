/* eslint-disable no-undef */
/* eslint-disable no-var */


let mymap = L.map('map', {
  scrollWheelZoom: false
}).setView([13.0464517, 80.2196773], 15);
L.marker([13.0464517, 80.2196773]).addTo(mymap);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 20,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoicmFqZXNoc2F0aHlha3VtYXIiLCJhIjoiY2tkMzMycnd3MHY5NjJ6cnlodWxtb2Q5dCJ9.5fz4AFXj_YCjqSqAzC8wQg'
}).addTo(mymap);
