const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js");

mapboxgl.accessToken = "pk.eyJ1IjoiZGhhcmFybmFpayIsImEiOiJjamQxdXVkanUyMWRmMnFxbzJpeHd6a3Q3In0.uieIWKAd0exxCAQ8PmxAEw";

const fullstackCoords = [-74.009, 40.705] // NY
// const fullstackCoords = [-87.6320523, 41.8881084] // CHI

const map = new mapboxgl.Map({
  container: "map",
  center: fullstackCoords, // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker('activities', fullstackCoords);
marker.addTo(map);

fetch('/api/attractions')
  .then((result) => {
    result.json();
  })
  .then((attractions) => {
   attractions.forEach(attraction => {
      const select = document.createElement('select');
      let option = document.getElementById(`${attraction}-choices`);
      option.optionValue = attraction.id
      option.innerText = attraction.name
      return select.append(option);
      })
    })
    .catch(console.error)
