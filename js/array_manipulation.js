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