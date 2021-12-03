let theNum = 2;

while (theNum <= 65536) {
    console.log(theNum)
    theNum *= 2;
    // theNum = theNum * 2 just shorthand
}

let allCones = Math.floor(Math.random() * 50) + 50;

do {
    let conesToPurchase = Math.floor(Math.random() * 5) + 1;
    if (conesToPurchase <= allCones) {
        console.log(conesToPurchase + " cones sold!")
        allCones -= conesToPurchase
    } else {
        console.log("Cannon sell you " + conesToPurchase + ", I only have " + allCones + "!")
    }
    console.log(allCones)
} while (allCones > 0)

console.log("Yay! I sold all the cones!")
