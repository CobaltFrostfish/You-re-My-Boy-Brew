// AGNES VAILLE FALLS
var trail0 = {
    name : "Agnes Vaille Falls",
    lat: 38.71363894781356,
    lon:  -106.23284433353807, 
    sourceURL: "https://dayhikesneardenver.com/agnes-vaille-falls-hike/",
    image: "assets/trailPictures/AgnesVailleFalls.jpg"
};

    
trailsArray = [trail0, trail1, trail2, trail3, trail4, trail5, trail6, trail7, trail8, trail9, trail10, trail11, trail12, trail13, trail14, trail15];

// mapbox access token
var access_token = 'pk.eyJ1IjoiY3doaXJsIiwiYSI6ImNrbXBtYTlsOTBmejEydW1hem5jaGF0eDEifQ.0-SvFdQTk2LJ77SUO_i1hA';

// checks to see if local storage has coordinates, and sets the coordinates equal to Denver CO if it doesn't
if ((localStorage.getItem('lastLat') === null )|| (localStorage.getItem('lastLon') === null)) {
    var lastLat = 39.7392;
    var lastLon = -104.9903;
} else {
    var lastLat = localStorage.getItem('lastLat');
    var lastLon = localStorage.getItem('lastLon');
}

// sets up an empty map shell to load a mapbox tile into
var mymap = L.map('mapid').setView([lastLat, lastLon], 13);

//generates a mapbox tile, and loads it into mymap
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 10,
    id: 'mapbox/outdoors-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: access_token
}).addTo(mymap);

// dynamically creates cards for each trail object
function initCards () {
    for (const index in trailsArray) {
        // This line should make a div to pack the image and text divs into
        $(`<div class="card" style=width:200px; id=trail${index}></div>`).appendTo($('#map-size'));

        // This line should make a div, set the image as the background and pack it into the above div
        $(`<div class="card-divider">${trailsArray[index].name}</div>`).appendTo($(`#trail${index}`));

        // This line should make an image of the trail
        $(`<img src=${trailsArray[index].image}></img>`).appendTo($(`#trail${index}`));

        // This line should make a div, populate it with the URL to a live website with more info on the trail.
        $(`<a href=${trailsArray[index].sourceURL} class="card-section"> Explore More About This Hike </a>`).appendTo($(`#trail${index}`));

        //This creates markers on the map for each trail
        var marker = L.marker([trailsArray[index].lat, trailsArray[index].lon]).addTo(mymap);

    }
}

initCards();

$('.card').on('click', function () {
    // pans the map over to the clicked on trail marker
    mymap.panTo(new L.LatLng(trailsArray[this.id.match(/\d+/g).map(Number)].lat, trailsArray[this.id.match(/\d+/g).map(Number)].lon));

    //This creates a marker to display the popup on
    var marker = L.marker([trailsArray[this.id.match(/\d+/g).map(Number)].lat, trailsArray[this.id.match(/\d+/g).map(Number)].lon]).addTo(mymap);

    // display popup with the trails name
    marker.bindPopup(`${trailsArray[this.id.match(/\d+/g).map(Number)].name}`).openPopup();

    // saves lat and lon of last clicked trail into client storage
    localStorage.setItem('lastLat', trailsArray[this.id.match(/\d+/g).map(Number)].lat);
    localStorage.setItem('lastLon', trailsArray[this.id.match(/\d+/g).map(Number)].lon);

    //scrolls up to the map on trail click
    $("#mapid").get(0).scrollIntoView();
});