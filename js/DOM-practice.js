// var promptAnswer = prompt("What's your name?");

// var retrievedSpan = document.getElementById("name");

// console.log("promptAnswer", promptAnswer);
// console.log("retrievedSpan", retrievedSpan);
//
// retrievedSpan.innerHTML = promptAnswer;

var weather = "Today's weather is 45 degrees and mostly cloudy! Bundle up its pretty cold! 🥶"
var retrievedSpan = document.getElementById("weather");

retrievedSpan.innerHTML = weather

//document --> the name of DOM Object
//methods that retrieve objects from DOM
//getElementById() --> by id --> will only return one element
//getElementsByClass() --> by class
//getElementsByTagName --> by tag