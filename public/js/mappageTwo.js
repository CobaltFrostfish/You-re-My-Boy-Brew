const initMap = async (locations) => {
  mapboxgl.accessToken = "pk.eyJ1Ijoiam1uZmlyZSIsImEiOiJja3AwNTBrMDUwcGllMm5scW81ejB3dm85In0.f3sp4fDOV3SNCPxG4ExOEw"
  // let map = new mapboxgl.Map({
  //   container: 'map', // container id
  //   style: 'mapbox://styles/mapbox/streets-v11', // style URL
  //   center: [-104.9903, 39.7392], // starting position [lng, lat] need to find a person's geolocation with coords
  //   zoom: 9 // starting zoom
  // });


  const markers = []
  locations = JSON.parse(locations);

  locations.forEach(location => {
    // console.log(location)
    let lngLat = [];
    lngLat.push(location.longitude, location.latitude);

    if (lngLat[0] != null && lngLat[1] != null) {
      // console.log(lngLat)
      let marker = {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: lngLat
        },
        properties: {
          title: location.name,
          description: location.brewery_type ,
					website_url: location.website_url,
					address: location.street,
        }
      }
      markers.push(marker);
    }
  });

  const geojson = {
    type: 'FeatureCollection',
    features: markers
  };
  // add markers to map
  geojson.features.forEach(function (marker) {
    // create a HTML element for each feature
    let el = document.createElement('div');
    el.className = 'marker';
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({
          offset: 25
        }) // add popups
        .setHTML(`<h3> ${marker.properties.title} </h3>
				<p>  ${marker.properties.address} </p>
				<p>  ${marker.properties.description} </p>
				<h5><a href="${marker.properties.website_url}"> Website Link </a></h5>`))
      .addTo(map);
  });
}

const initTable = (i) => {
	i = JSON.parse(i);

	const tableData = document.getElementById('tableBody');

	const mapTableData = i.map(i => {
		return `<tr>
		<td>${i.name}</td>
		<td>${i.street} ${i.city}, ${i.state}</td>
		<td><a href='${i.url}'>Link</a></td>
		<th scope="col">
			<a class="btnLinks" id="brewButton" href="/" target="_blank">View</a>
		</th>
		</tr>`
		// the / in the code above needs to be tied to the brew id
	});

	const joinString = mapTableData.join('');

	return tableData.appendChild(joinString);
};

const searchCity = async (cityName) => {
  // console.log(cityName);
  let city = cityName.substring(0, 1).toUpperCase() + cityName.substring(1);

  fetch('/api/map', {
    method: 'POST',
    body: JSON.stringify({
      city
    }),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(res => res.json()).then(json => {initMap(json);})
};

const searchHandler = async (event) => {
  event.preventDefault();
  // console.log(event)
  // Collect values from the users input city 
  const city = document.querySelector('#find_city').value.trim();
  searchCity(city)
};

document.querySelector('#form_search').addEventListener('submit', searchHandler);











// mapboxgl.accessToken = "pk.eyJ1Ijoiam1uZmlyZSIsImEiOiJja3AwNTBrMDUwcGllMm5scW81ejB3dm85In0.f3sp4fDOV3SNCPxG4ExOEw"
// let map = new mapboxgl.Map({
//     container: 'map', // container id
//     style: 'mapbox://styles/mapbox/streets-v11', // style URL
//     center: [-104.9903, 39.7392], // starting position [lng, lat] need to find a person's geolocation with coords
//     zoom: 9 // starting zoom
//     });

//     /**
//      * when user inserts cooords for a location /or uses their current location
//      * send a request over to generate locations for breweries
//      * appending them to a GeoJson object
//      * sends back information
//      */
//     //let geojson be set to the user posting city 
//     //return a geoJSON object with coordinates all breweries in the city
// //let geoJSON = await fetch Post "cityName", return the below format VAR
//      const geojson = {
//         type: 'FeatureCollection',
//         features: [{
//           type: 'Feature',
//           geometry: {
//             type: 'Point',
//             coordinates: [-104.9903, 39.7392]
//           },
//           properties: {
//             title: 'Find Beer!',
//             description: 'Denver, Colorado'
//           }
//         },
//         {
//           type: 'Feature',
//           geometry: {
//             type: 'Point',
//             coordinates: [-105.230484, 39.754185]
//           },
//           properties: {
//             title: 'Find Beer!',
//             description: 'Golden, Colorado'
//           }
//         }]
//       };

//       // add markers to map
// geojson.features.forEach(function(marker) {

//     // create a HTML element for each feature
//     let el = document.createElement('div');
//     el.className = 'marker';

//     // make a marker for each feature and add to the map
//     new mapboxgl.Marker(el)
//       .setLngLat(marker.geometry.coordinates)
//       .addTo(map);

//       new mapboxgl.Marker(el)
//       .setLngLat(marker.geometry.coordinates)
//       .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
//         .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
//       .addTo(map);
//   });