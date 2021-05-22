import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: "",
  version: "weekly",
  libraries: ["places"]
});

const mapOptions = {
  center: {
    lat: 0,
    lng: 0
  },
  zoom: 4
};

// Promise
loader
  .load()
  .then(() => {
    new google.maps.Map(document.getElementById("map"), mapOptions);
  })
  .catch(e => {
    // do something
  });

  // Callback
loader.loadCallback(e => {
    if (e) {
      console.log(e);
    } else {
      new google.maps.Map(document.getElementById("map"), mapOptions);
    }
  });
  
