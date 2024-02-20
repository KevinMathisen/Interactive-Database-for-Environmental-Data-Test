var map = L.map('map', {
  center: [60.5, 12.09],
  zoom: 7, // Adjust the initial zoom level as needed
  zoomControl: false // Disable the default zoom control
});

var redIcon = L.icon({
  iconUrl: '../img/circle.svg',
  //shadowUrl: 'img/icon.png',

  iconSize:     [15, 15], // size of the icon
  // shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [7, 7], // point of the icon which will correspond to marker's location
  // shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.control.zoom({
  position: 'bottomleft' // You can customize the position ('topleft', 'topright', 'bottomleft', 'bottomright')
}).addTo(map);

// Used to style the lines
var myStyle = {
    "color": "#748686",
    "weight": 3,
    "opacity": 0.65
};


class place {
  constructor(lat, long) {
    this.lat = lat;
    this.long = long;
  }
}

const a = new place(61.041926, 10.001893);
const b = new place(61.6448776, 10.1286729);
const c = new place(60.9894528, 9.5900531);

let places = [a, b, c];
console.log(places);



L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

var myPositionMarker = L.marker([60.5, 11.09]).addTo(map).bindPopup('A marker on OpenStreetMap.');

places.forEach((agds) => {
  L.marker([agds.lat, agds.long], {icon: redIcon}).addTo(map).bindPopup('A marker on OpenStreetMap.');
});


L.marker([60.5, 12.09], {icon: redIcon}).addTo(map).bindPopup('A marker on OpenStreetMap.');

var myLines = [{
  "type": "LineString",
  "coordinates": [[10.001893, 61.041926],[9.8286729, 61.3448776], [10.1286729, 61.6448776]]
}];


L.geoJSON(myLines, {style: myStyle}).addTo(map);


myPositionMarker.on("click", function() {
  let exampleMarker = document.getElementById('afsidg');
  console.log(exampleMarker);
  exampleMarker.classList.toggle('rightSidePos');
  exampleMarker.classList.toggle('rightSideGone');
});