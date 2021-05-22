// AGNES VAILLE FALLS
var trail0 = {
    name : "Agnes Vaille Falls",
    lat: 38.71363894781356,
    lon:  -106.23284433353807, 
    sourceURL: "https://dayhikesneardenver.com/agnes-vaille-falls-hike/",
    image: "assets/trailPictures/AgnesVailleFalls.jpg"
};

// CAVE TRAIL AT CASTLEWOOD CANYON
var trail1 = {
    name : "Cave Trail At Castlewood Canyon",
    lat: 39.35473428425068,
    lon: -104.76567824164951,
    sourceURL: "https://dayhikesneardenver.com/cave-trail-castlewood-canyon/",
    image: "assets/trailPictures/CastlewoodCanyon.jpg"
};

//Kenosha-pass-hike
var trail2 = {
    name : "Kenosha Pass Hike",
    lat: 39.428147834862216,
    lon:  -105.75537822939526, 
    sourceURL: "https://dayhikesneardenver.com/kenosha-pass-hike/",
    image: "assets/trailPictures/Kenosha.jpg"
};  

//Silver-Dollar-murray-lakes-trail
var trail3 = {
    name : "Silver Dollar Murray Lakes Trail",
    lat: 39.63383387963697,
    lon:  -105.72499156161547, 
    sourceURL: "https://dayhikesneardenver.com/silver-dollar-murray-lakes-trail/",
    image: "assets/trailPictures/SliverDollarLakes.jpg"
};
//Chimney-Gulch-Trail-windy-saddle-park
var trail4 = {
    name : "Chimney Gulch Trail Windy Saddle Park",
    lat: 39.754775710150405,
    lon:  -105.2301925078648, 
    sourceURL: "https://dayhikesneardenver.com/chimney-gulch-trail-windy-saddle-park/",
    image: "assets/trailPictures/ChimneyGulchTrail.jpg"
};
//Bear-peak-near-boulder
var trail5 = {
    name : "Bear Peak Near Boulder",
    lat: 39.94865790179421,
    lon:  -105.25743634842041, 
    sourceURL: "https://dayhikesneardenver.com/bear-peak-near-boulder/",
    image: "assets/trailPictures/BearPeak.jpg"
};
//Four-lakes-and-waterfall-loop-rocky-mountain-national-park
var trail6 = {
    name : "Four Lakes And Waterfall Loop Rocky Mountain National Park",
    lat: 40.31942120417979,
    lon:  -105.64347195009509, 
    sourceURL: "https://dayhikesneardenver.com/4-lakes-and-waterfall-loop-rocky-mountain-national-park",
    image: "assets/trailPictures/FourLakesLoop.jpg"
};
//Elk Valley Trail in Roxborough State park 
var trail7 = {
    name : "Elk Valley Trail in Roxborough State Park",
    lat: 39.438441022206185,
    lon: -105.06845996764503,
    sourceURL: "https://dayhikesneardenver.com/elk-valley-trail-roxborough-state-park/",
    image: "assets/trailPictures/ElkValleyRoxboroughTrail.jpg"
};

//Chautauqua-loop-boulder-colorado
var trail8 = {
    name : "Chautauqua Loop Boulder Colorado",
    lat: 40.035893195528004,
    lon:  -105.27624178470296, 
    sourceURL: "https://dayhikesneardenver.com/chautauqua-loop-boulder-colorado/",
    image: "assets/trailPictures/ChautauquaLoop.jpg"
};
//Rocky Mountain National Park
var trail9 = {
    name : "Rocky Mountain National Park",
    lat : 40.208710255449716,
    lon: -105.56656213326917,
    sourceURL:"https://dayhikesneardenver.com/bluebird-lake-hike-rocky-mountain-national-park/",
    image: "assets/trailPictures/BluebirdLakeRockyMountainNationalPark.jpg"
};
 //Paint Mine Hike
var trail10 = {
    name : "Paint Mine Hike",
    lat : 39.02405554843337,
    lon: -104.27112178045748,
    sourceURL:"https://dayhikesneardenver.com/paint-mines-hike-near-colorado-springs/",
    image: "assets/trailPictures/PaintMinesHike.jpg"
};
 //Maroon Bells
var trail11 = {
    name : "Maroon Bells",
    lat : 39.11677081615352,
    lon: -106.93253885267049,
    sourceURL:"https://dayhikesneardenver.com/maroon-bells-colorado/",
    image: "assets/trailPictures/MaroonBellsTrail.jpg"
};
 //Indian-creek loop
var trail12 = {
    name : "Indian Creek Loop",
    lat : 39.380205124755314, 
    lon: -105.10505170459511,  
    sourceURL:"https://dayhikesneardenver.com/indian-creek-loop-hike/",
    image: "assets/trailPictures/IndianCreekTrail.jpg"
};
 //Santa fe Palmer lake
var trail13 = {
    name : "Santa Fe Palmer Lake",
    lat : 39.123760838766586, 
    lon: -104.91118009019083,
    sourceURL:"https://dayhikesneardenver.com/santa-fe-regional-trail-palmer-lake/",
    image: "assets/trailPictures/SantaFeRegionalTrail.jpg"
};
 //Golden Gate Canyon
var trail14 = {
    name : "Golden Gate Canyon",
    lat : 39.84353838629611,
    lon: -105.40434703353188,
    sourceURL:"https://dayhikesneardenver.com/horseshoe-trail-golden-gate-canyon-park/",
    image: "assets/trailPictures/HorseshoeTrailGoldenGateCanyonPark.jpg"
};
 //Loveland Pass   
var trail15 = {
    name : "Loveland Pass",
    lat : 39.6789050490315,
    lon: -105.87842037951032,
    sourceURL:"https://dayhikesneardenver.com/mt-sniktau-hike-loveland-pass/",
    image: "assets/trailPictures/Mt.SniktauLovelandPass.jpg"
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