function initAutocomplete() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.758, lng: -111.8765 },
    zoom: 10,
    disableDefaultUI: true,
    mapTypeId: "roadmap",
  });
  // Create the search box and link it to the UI element
  const input = document.getElementById("pac-input");
  const searchBox = new google.maps.places.SearchBox(input);

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });

  let markers = [];
  let previousInfoWindow = null;

  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];

    const bounds = new google.maps.LatLngBounds();
    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        return;
      }

      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };

      // Adds marker for each new search
      const marker = new google.maps.Marker({
        map,
        icon,
        title: place.name,
        position: place.geometry.location,
      });

      marker.addListener("click", () => {
        if (previousInfoWindow) {
          previousInfoWindow.close();
        }

        const infoWindow = new google.maps.InfoWindow({
          content: `<h3>${place.name}</h3><p>${place.formatted_address}</p>`,
        });
        infoWindow.open(map, marker);
        previousInfoWindow = infoWindow;
      });
      markers.push(marker);

      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

window.initAutocomplete = initAutocomplete;