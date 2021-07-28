function createMap(universities) {

    var map = L.map("map", {
        center: [40.73, -100.0059],
        zoom: 5,
        // layers: [streetMap, universities]
    });
    // Create the tile layer that will be the background of our map
    L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/streets-v11",
        accessToken: API_KEY
    }).addTo(map);

    // // Create a baseMaps object to hold the lightmap layer
    // var baseMaps = {
    //     "Street Map": streetMap
    // };

    // // Create an overlayMaps object to hold the universities layer
    // var overlayMaps = {
    //     "University Names": universities
    // };

    // Create the map object with options
    // var map = L.map("map", {
    //     center: [40.73, -100.0059],
    //     zoom: 5,
    //     layers: [streetMap, universities]
    // });

    //     // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
    //     L.control.layers(baseMaps, overlayMaps, {
    //         collapsed: false
    //     }).addTo(map);
    // }

    function createMarkers(data) {

        // Pull the "stations" property off of data.data


        // Initialize an array to hold bike markers
        var universityMarkers = [];

        // Loop through the stations array
        for (var index = 0; index < data.length; index++) {


            // console.log(data[index].location)

            // var station = data[index];

            // For each station, create a marker and bind a popup with the station's name
            var universityMarker = L.marker(data[index].location)
                // .bindPopup("<h3>" + station.name + "<h3><h3>Capacity: " + station.capacity + "</h3>");

            // Add the marker to the universityMarkers array
            universityMarkers.push(universityMarker);
        }

        // Create a layer group made from the bike markers array, pass it into the createMap function
        createMap(L.layerGroup(universityMarkers));
    }
    d3.csv("../static/data/form_inputs.csv").then(createMarkers);


};

createMap("../static/data/form_inputs.csv");
//Perform an API call to the Citi Bike API to get station information.Call createMarkers when complete



// d3.csv('../static/data/form_inputs.csv').then(d => {
//     console.log(d);
//     console.log(d[0].location)
//     console.log(d.length)