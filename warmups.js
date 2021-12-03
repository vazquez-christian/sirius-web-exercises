// const API_KEY = 'sdfdsmkfmsdkfmsdfksdmf'
//
//
// function tryToGetADrink(isAtBar, bac, age, cashOnHand) { //the function definition contains parameters
//
//
//     let canHaveADrink = (isAtBar && bac < .08 && age >= 21 && cashOnHand >= 5.00);
//
//     if (canHaveADrink) {
//         console.log("Here you go have a brewski!")
//     } else {
//         console.log("No beer for you.")
//     }
// }
//
// console.log("First invocation:");
// tryToGetADrink(true, .07, 20, 5.01);
// when you CALL (invoke) the function, you pass ARGUMENTS

function goodDayToFly(notCloudy, planesInSky) {
    let canFly = (notCloudy && planesInSky < 10);

    if (canFly) {
        console.log("Get your aviators out it's a good day to fly.")
    } else {
        console.log("Nope not today junior.")
    }
}

goodDayToFly(true, 5)

function sumOfNumbers(a, b) {
    return a + b;
}

console.log(
    sumOfNumbers(4, 9)
)

function differenceOfNumbers(a, b) {
    return a - b;
}

console.log(
    differenceOfNumbers(4, 9)
)

function productOfNumbers(a, b) {
    return a * b;
}

console.log(
    productOfNumbers(4, 9)
)

function dividendOfNumber(a, b) {
    return a / b;
}

console.log(
    dividendOfNumber(22, 7)
)

function remainderOfNumbers(a, b) {
    return a % b;
}

console.log(
    remainderOfNumbers(4, 9)
)

function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("Good morning CodeUp!"))

var isAGoodDog = true;

"use strict";
//MORNING WARMUP

/*if sunny i would wear shorts and a tshirt with a hat
if raining i would wear a jacket with pants
if snowing i would wear a warm coat and a beanie
 */

//let weather = "rainy";
//if statement
//if weather = "sunny"
// if (weather === "sunny") {
//     console.log("wear t-shirt");
// } else if (weather === "rainy") {
//     console.log("bring an umbrella");
// } else if (weather === "snowy") {
//     console.log("wear lots of jackets")
// } else {
//     console.log("wear whatever")
// }

let myAge = 22;
let actualAge = 21;

function checkAge(givenAge, realAge) {
    if (givenAge === realAge) {
        console.log('myAge is my actual age.')
    } else {
        console.log(("That's cool."))
    }
}

checkAge(21, actualAge)

//Create 5 different variables that holds 5 different number grades. (ex: let laurasGrade = 99) Write a function that accepts the five number grades grades, and returns each of their letter grades based on their number grades.
// Scoring: A: 90 + , B: 80 - 89, C: 70-79, D: 60 - 69, F: 60 -
let christiansGrade = 89;
let michaelsGrade = 98;
let justinsGrade = 67;
let kylesGrade = 76;
let seansGrade = 88;

function letterGrade(studentGrade) {
    if (studentGrade >= 90) {
        console.log("Your grade is an A.")
    } else if (studentGrade >= 80) {
        console.log('Your grade is a B.')
    } else if (studentGrade >= 70) {
        console.log("Your grade is a C.")
    } else if (studentGrade >= 60) {
        console.log("Your grade is a D.")
    } else {
        console.log("Your grade is an F.")
    }
}

letterGrade(christiansGrade)
letterGrade(michaelsGrade)
letterGrade(justinsGrade)
letterGrade(kylesGrade)
letterGrade(seansGrade)
letterGrade(10)

//"=" is for assigning
//"==" value
//"===" type AND value

//ternary is short hand
// condition ? if true- do this : do this
//? = if : = else

// let numGrade = 80
// numGrade >= 80 && numGrade <= 80
//     ? console.log("you got a B")
//     : console.log("not a grade");
//
// let weather = "snowy";
// switch (weather) {
//     case "sunny":
//         console.log("sunglasses");
//         break;
//     case "rainy":
//         console.log("umbrella");
//         break;
//     case "snowy":
//         console.log("beanie");
// }
var scores = [243, 300, 146, 289]
let avg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

function bowlerAvg(score) {
    return avg(score)
}

console.log(bowlerAvg(scores))

function divThreeFive(topScore) {
    if (topScore === 300 && topScore % 3 == 0 || topScore % 5 == 0) {
        return true
    }
}

console.log(divThreeFive(300))

let bowlingName = "ThEbEsTbOwLiNgPlAcEever"

function toLower(str) {
    return bowlingName.toLowerCase().split("").join(" ")
}

console.log(toLower(bowlingName))

let score = 109
let name = "bowling is Fun"
let isBowlingFun = true
let players = ["tom", "jerry", "Garfield"]

function type(input) {
    return typeof input;
}

console.log(type(score))
console.log(type(name))
console.log(type(isBowlingFun))
console.log(type(players))

function allTheAbove(a, b, c, d) {
    return a, b, c, d
}

console.log(allTheAbove(bowlerAvg(scores), divThreeFive(300), toLower(bowlingName), type(score)))

function myFunction(firstName, lastName) {
    return firstName + " " + lastName;
}

function thatsNotMyName(name) {
    if (name === "Laura") {
        return "That's me! I'm " + name + "!";
    } else {
        return "That's not me!"
    }
}

console.log(myFunction("Christian", "Vazquez"))
console.log(thatsNotMyName("Christian"))
