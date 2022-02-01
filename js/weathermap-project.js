// mapboxgl.accessToken = mapboxKey;
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v9',
//     zoom: 10,
//     center: [-98.58803, 29.57544]
// });

function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = month + ' ' + date + ' ' + year;
    return time;
}

let latitude = 29.423017;
let longitude = -98.48527;


mapboxgl.accessToken = mapboxKey;
const coordinates = document.getElementById('coordinates');
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 9
});

const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([longitude, latitude])
    .addTo(map);

function onDragEnd() {
    const lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
}

marker.on('dragend', onDragEnd);

$.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&appid=${weatherMapKey}&units=imperial`).done(function (data) {
    // console.log(data);
    for (let i = 0; i < 5; i++) {
        console.log(data)
        $("#weather").append(`<div class="col card">
            <div class="">${data.daily[i].temp.day}° / ${data.daily[i].temp.night}</div>
            <div class="">Description: ${data.daily[i].weather[0].description}</div>
            <div class="">Humidity: ${data.daily[i].humidity}</div>
            <div class="">Wind Speed: ${data.daily[i].wind_speed}</div>
            </div>`)
    }
    // $(".container").append(`<p>${data.daily[0].temp.day}°</p>`)
})

// mapboxgl.accessToken = mapboxKey;
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/streets-v9',
//     zoom: 10,
//     center: [-98.58803, 29.57544]
// });



