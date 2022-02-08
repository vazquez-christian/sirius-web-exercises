"use strict";

//.map() Creates a new array populated with the results of calling a provided function on every element in the array. must be set into a variable
//let newArray = example.map(map => yadayadayada);

//.filter() creates a new array with all elements that pass the test implemented by the provided function
//let mexFood = foods.filter(food => yadayadadya === "mexican-food")

//.reduce() executes a callback function that takes two parameters (previousValue, currentValue) on each element in the array.
//The final result of running the reducer across all elements of the array as a single value.

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let userLang = users.filter(user => user.languages.length >= 3);

console.log(userLang);

let email = users.map(user => user.email)
console.log(email)

let yearsOfExp = users.reduce((currentValue, previousValue) => currentValue + previousValue);

console.log(yearsOfExp)