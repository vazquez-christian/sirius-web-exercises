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
