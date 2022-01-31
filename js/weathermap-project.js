mapboxgl.accessToken = mapboxKey;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.58803, 29.57544]
});


$.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${29.423017}&lon=${-98.48527}&exclude=minutely,hourly&appid=${weatherMapKey}&units=imperial`).done(function (data) {
    console.log(data);
    for (let i = 0; i < 5; i++) {
        $("#weather").append(`<div>${data.daily[i].temp.day}° / ${data.daily[i].temp.night}</div>`,
            `<div>Description: ${data.daily[i].weather[0].description}</div>`,
            `<div>Humidity: ${data.daily[i].humidity}</div>`,
            `<div>Wind Speed: ${data.daily[i].wind_speed}</div>`)
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

$("#mapPlace").click(function () {
    $("#place")
        new MapboxGeocoder({
            accessToken: mapboxKey,
            mapboxgl: mapboxgl
        })

})