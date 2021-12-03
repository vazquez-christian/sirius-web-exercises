let userNum = 0;

do {
    userNum = Number(prompt("Gimme an odd number between 1 and 50."))
    if (userNum < 1 || userNum > 50) {
        alert("Number isn't odd.")
    } else if (userNum % 2 === 0) {
        alert("Number is not odd.")
    } else if (isNaN(userNum)) {
        alert("That's not a number.")
    } else {
        alert("See that's a number!")
        break;
    }
} while (true)

console.log("Number to skip is " + userNum)

for (let i = 1; i <= 50; i+=2) {
    if (i === userNum) {
        console.log("Yikes, skipping number: " + userNum)
        continue;
    }
    console.log("Here is an odd number: " + i)
}