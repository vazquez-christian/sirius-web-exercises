let students = ["Gerald", "Mark", "Mina", "Jason", "Justin", "Justin"];
//[] = arrays
//anything within the commas = elements
//array indices always start at 0
//access Justin's value
// re-assign that value to = justin + lastName
console.log(students.length)
console.log(students)
console.log(students[4])
let favFoods = ["Pizza", "Tacos", "Burritos", "Eggs", "Chorizo"];

console.log(favFoods)
favFoods[0] += " 1"
console.log(favFoods[0])
favFoods[1] += " 2"
console.log(favFoods[1])
favFoods[2] += " 3"
console.log(favFoods[2])

let indexOfMina = students.indexOf("Mina")
let otherIndexOfMina = students.lastIndexOf("Mina")
console.log(otherIndexOfMina)
console.log(indexOfMina)

//METHODS
//ACCESSING ELEMENTS FROM AN ARRAY
//nameOfArray[position within the array] arrays always start at 0
//accessing arrays return the value inside of that position

let christian = ['Laura', 22, 'Abq', 'Mac', 2021, ['pizza', 'ice cream', 'cookies']]
let age = christian[1]
console.log(age)
let innerArr = christian[5]
console.log(innerArr[1])