"use strict";

let array = [1, 2, 3, true, false];

let birthdayObject = {
    month: "November",
    day: 22,
    getDetails: function () {
        return this.month + " " + this.day
    }
}

let person = {
    name: "Jack",
    birthday: birthdayObject,
    isTall: false
}

//let person = new Object();
const newPropertyName = "firstName"

// person[newPropertyName] = "Christian Vazquez";
// person.birthday = "Aug 5th";
// person.isTall = true;


//console.log(person);

let dog = {
    breed: "Husky",
    colors: ["brown", "black", "white"],
    sex: "F",
    name: "Luna",
    isFloofer: true,
    bark: function (loud) {
        if (loud) {
            console.log("Woof woof!");
        } else {
            console.log("ruf ruf")
        }
    },
    getDetails: function () {
        return this.colors[0] + " " + this.breed + " named " + this.name;
    }
};

function createDog(name, colors, breed) {
    return {
        colors: colors,
        name: name,
        breed: breed,
        getDetails: function () {
            return this.colors[0] + " " + this.breed + " named " + this.name;
        }
    }
};

