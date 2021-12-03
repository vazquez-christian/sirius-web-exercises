"use strict";

let samsDogs = ["Chuchi", "Duke", "Bun"];
console.log("before", samsDogs);

samsDogs.unshift("Luke");

console.log("after unshift", samsDogs);

samsDogs.push("Rex");

console.log("after push", samsDogs);

console.log("Removing last index");

samsDogs.pop()

console.log("after pop", samsDogs);

console.log("Fetching index of \"Duke\"");

console.log(samsDogs.indexOf("Duke"));

let sliced = samsDogs.slice(0, 1);

console.log("sliced", sliced);

console.log("Reversing array...");

samsDogs.reverse();

console.log(samsDogs);

console.log("Sorting array...");

samsDogs.sort();

console.log(samsDogs);

console.log('samsDogs as a string', samsDogs.join(", "));

let myNums = [3, 4, 6, 1]

console.log([...samsDogs, ...myNums]);

console.log([5.3, ...myNums]);

console.log([...myNums, 5.3]);