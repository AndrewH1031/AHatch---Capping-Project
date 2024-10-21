function swapLocations()
{
    var id=document.getElementsByName("swapButton")[0].id;

    if(id == 1)
    {
        document.getElementById("tripEnd").appendChild(document.getElementById("tripDropDown"));
        document.getElementById("tripStart").appendChild(document.getElementById("tripSearchBar"));
        document.getElementsByName("swapButton")[0].id = 0;
    }
    else
    {
        document.getElementById("tripStart").appendChild(document.getElementById("tripDropDown"));
        document.getElementById("tripEnd").appendChild(document.getElementById("tripSearchBar"));
        document.getElementsByName("swapButton")[0].id = 1;
    }
}



function searchMap()
{
    const map = document.getElementById("tripMap");
    const input = document.getElementById("tripSearchBar");
    const searchBox = new google.maps.places.SearchBox(input);

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    map.addListener("bounds_changed", () => { searchBox.setBounds(map.getBounds()); });

    let markers = [];

    searchBox.addListener("places_changed", () =>
    {
    const places = searchBox.getPlaces();
    if(places.length == 0) { return; }

    markers.forEach((marker) => marker.setMap(null));
    markers = [];

    const bounds = new google.maps.LatLngBounds();

    places.forEach((place) => {
        if(!place.geometry || !place.geometry.location) { return; }

        const icon = {
            url: place.icon,
            size: new google.maps.Point(0, 0),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(25, 25)
        };

        markers.push(new google.maps.Marker({map, icon, title: place.name, position: place.geometry.location}));

        if (place.geometry.viewport) { bounds.union(place.geometry.viewport); } else { bounds.extend(place.geometry.location); }

        });

        map.fitBounds(bounds);

    });

}

window.searchMap = searchMap;