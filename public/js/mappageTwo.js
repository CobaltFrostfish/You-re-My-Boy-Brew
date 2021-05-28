mapboxgl.accessToken = "pk.eyJ1Ijoiam1uZmlyZSIsImEiOiJja3AwNTBrMDUwcGllMm5scW81ejB3dm85In0.f3sp4fDOV3SNCPxG4ExOEw"

let map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-104.9903, 39.7392], // starting position [lng, lat]
    zoom: 8 // starting zoom
    });
    
    /**
     * when user inserts cooords for a location /or uses their current location
     * send a request over to generate locations for breweries
     * appending them to a GeoJson object
     * sends back information
     */
    //let geojson be set to the user posting city 
    //return a geoJSON object with coordinates all breweries in the city
//let geoJSON = await fetch Post "cityName", return the below format VAR
const geojson = {
		type: 'FeatureCollection',
		features: [
			{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-104.990385, 40.418114]
			},
			properties: {
				title: 'Rock Bottom Brewery',
				description: 'Loveland, CO',
				url: "http://www.rockbottom.com",
				address: "6025 Sky Pond Dr"
			}
		},
			{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-104.8667206, 39.38269495]
			},
			properties: {
				title: '105 West Brewing Co',
				description: 'Castle Rock, CO',
				url: "http://www.105westbrewing.com",
				address: "1043 Park St"
			}
		},
			{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-105.1319826, 39.9782443]
			},
			properties: {
				title: '12Degree Brewing',
				description: 'Louisville, CO',
				url: "http://www.12degree.com",
				address: "820 Main S"
			}
		},
			{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-104.9426656, 39.5659575]
			},
			properties: {
				title: '3 Freaks Brewing',
				description: 'Highlands Ranch, CO',
				url: "http://www.3freaksbrewery.com",
				address: "7140 E County Line Rd"
			}
		},
			{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-107.8769912, 37.27997215]
			},
			properties: {
				title: 'Animas Brewing Co',
				description: 'Durango, CO',
				url: "http://www.animasbrewing.com",
				address: "7140 E County Line Rd"
			}
		},
			{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-104.822433, 39.98642943]
			},
			properties: {
				title: 'Big Choice Brewing',
				description: 'Brighton, CO',
				url: "http://www.bigchoicebrewing.com",
				address: "21 S 1st Ave"
			}
		},
			{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-104.7875038, 40.3899004]
			},
			properties: {
				title: 'Crabtree Brewing',
				description: 'Greeley, CO',
				url: "http://www.crabtreebrewing.com",
				address: "2961 W 29th Ste"
			}
		},
			{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-105.0067758, 39.761363]
			},
			properties: {
				title: 'Prost Brewing',
				description: 'Denver, CO',
				url: "http://www.prostbrewing.com",
				address: "2540 19th St"
			}
		},
			{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-105.2378323, 40.0238083]
			},
			properties: {
				title: 'Stein Brewing Company',
				description: 'Boulder, CO',
				url: "http://www.jwellsbrewery.com",
				address: "2516 49th St"
			}
		}
	]
	};

// add markers to map
geojson.features.forEach(function(marker) {
    // create a HTML element for each feature
    let el = document.createElement('div');
    el.className = 'marker';
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);
		// Attach popups to markers
		new mapboxgl.Marker(el)
		.setLngLat(marker.geometry.coordinates)
		.setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
			// .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
			.setHTML(`<h3> ${marker.properties.title} </h3>
								<p>  ${marker.properties.address} </p>
								<p>  ${marker.properties.description} </p>
								<h5><a href="${marker.properties.url}"> Website Link </a></h5>`))
		.addTo(map);
});
