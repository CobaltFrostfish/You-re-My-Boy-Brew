mapboxgl.accessToken = "pk.eyJ1Ijoiam1uZmlyZSIsImEiOiJja3AwNTBrMDUwcGllMm5scW81ejB3dm85In0.f3sp4fDOV3SNCPxG4ExOEw"
let map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-104.9903, 39.7392], // starting position [lng, lat] need to find a person's geolocation with coords
    zoom: 9 // starting zoom
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
        features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-104.9903, 39.7392]
          },
          properties: {
            title: 'Find Beer!',
            description: 'Denver, Colorado'
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-105.230484, 39.754185]
          },
          properties: {
            title: 'Find Beer!',
            description: 'Golden, Colorado'
          }
        }]
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

      new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
      .addTo(map);
  });

 