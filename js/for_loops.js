function showMultiplicationTable(x) {
    for (let i = 1; i <= 10; i++) {
        let answer = x * i;
        console.log(x + " x " + i + " = " + answer);
    }
}

showMultiplicationTable(7)

for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 180) + 20;
    if (randomNum % 2 === 0) {
        console.log(randomNum + " is even.")
    } else {
        console.log(randomNum + " is odd.")
    }
}

for (let i = 1; i <= 9; i++) {
    let output = "";
    for (j = 1; j <= i; j++) {
        output += i;
    }
    console.log(output)
}

for (let i = 100; i >= 5; i-=5) {
    console.log(i);
}