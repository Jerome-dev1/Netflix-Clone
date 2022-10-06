console.log('hello world')
console.log('Jermome Hidalgo')

// // variables (var, const, let)
let name = 'peter pan'
console.log('name')

let sentence = 'how are you doin today, nice to see you, hope you have a great day!'

// operators
fruits = prompt('what is your favorite fruit?')

console.log(fruits)

// * / ** + -

food = Number(prompt('how much was the food'))
tipPercentage = Number(prompt('tip %?')) / 100
tipAmount = food * tipPercentage
total = food + tipAmount

console.log('tip amount', tipAmount)
console.log('total', total)
alert(tipAmount)

// user input

/* data types (strings, numbers) 
numbers = 1, 5, 10, 100, 2.5
strings = 'hello', "what is up"
arrays = []
objects = {}
boolean = true / false


/* Math Operators
Multiply *
Divide /
Exponents **
Modulo/Reminders % 5%2
Add +
Subtract -
*/

/* Math methods
Floor = Rounds down
Ceil = Rounds up
Random - gives you a random number
*/

// Baby weather app (conditionals)
// if rain = 'Grab your umbrella'
// else = 'Wear your sunglasses'
// let weather = prompt('How is the weather')

// if (weather == 'rainy') {
//   console.log('Grab your umbrella')
// } else {
//   console.log('Wear your sunglasses')
// }


// conditional operators
// ==, ===, >, <, <=, >=, !=, !==


// Functions
// this is the function called 'sayMyName'
// and it has 0 arguments
// does: it logs out your name to the console
function sayMyName() {
  console.log('Hidalgo')
}

sayMyName()

// this is a function called "sayMyName2"
// and it has 1 argument called `name`
// does: it logs out your name to console
function sayMyName2(name) {
  console.log(name)
}

sayMyName2('Jerome')


greeting('Johnny Depp')

function sum(a, b) {
  // return
  return a + b
}

num1 = sum(1, 2)
console.log(num1)

function calculateFoodTotal(food, tip) {
  const tipPercentage = tip / 100
  const tipAmount = food * tipPercentage
  const total = sum(food, tipAmount)
  return total
}

console.log(calculateFoodTotal(300, 20))

// ES6
// Arrow Function => 
// arrow function with explicit return
const sumArrow = (a, b) => {
  return a + b
}

// arrow function with implicit return 
// IMPORTANT: for implicit return, remove squigglies
const sumArrow2 = (a, b) => a + b

console.log(sumArrow2(10, 50))

// Arrays
const groceries = ['🍌', '🍎', '🍊', '🍐']
console.log(groceries)

// grab the 2nd index
console.log(groceries[2])

// Array methods
groceries.push('🍪')
console.log(groceries)

groceries.push('🫐')
console.log(groceries)

// // Array slice
// start from 0 INCLUSIVE un UP 6 [0, 1, 2, 3, 4, 5]
console.log(groceries.slice(0, 6))

console.log(groceries.slice(1, 4))

// array method (slice, push, indexOf, length)
console.log(groceries.indexOf('🍐'))
console.log(groceries.length)

// // OBJECTS
const person = {
  name: 'leonardo',
  shirt: 'white'
}

// // access object: dot notation vs bracket notation
console.log(person.name)
console.log(person.shirt)

// // bracket notaion
console.log(person['name'])
console.log(person['shirt'])

person.phone = '111-222-333-4444'
console.log(person.phone)

console.log(person)

// // person2
const person2 = {
  name: 'jerome',
  shirt: 'gray'
}
// dot notation
console.log(person2.name)
console.log(person2.shirt)
// bracket notation
console.log(person2['name'])
console.log(person2['shirt'])

person2['phone'] = ('991-825-7389')
console.log(person2['phone'])

console.log(person2)

// Es6 arrow function (2 arguments)
// Object
// Template literal
// method Math.floor()
const introducer = (name, shirt) => {
  const person = {
    name: name,
    shirt: shirt,
    assets: 100000,
    liabilities: 50000,
    netWorth: function() {
      return this.assets - this.liabilities
    }
  }

  const intro = `hi my name is ${person.name} and the color of my shirt is ${person.shirt} and my net 
worth is $${person.netWorth()} USD`

  return intro
}

console.log(introducer('jerome', 'gray'))


const fruits = ['🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐', '🍌', '🍎', '🍊', '🍐']

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])

for (const fruit of fruits) {
  console.log(fruit)
}

const numbers = [1, 2, 3, 4, 5, 6]

const double = (numbers) => {
  let result = []
  for (const number of numbers) {
    result.push(number ** 2)
  }

  return result
}

console.log(double([1, 2, 3, 4, 5, 6]))

// [2, 4, 6, 8, 10, 12]

const howManyLetters = (phrase) => {
  let result = 0;

  for (const index in phrase) {
    console.log(Number(index) + 1)
    result = (Number(index) + 1)
  }

  return { result }
}

const phrase = prompt('write your phrase')
console.log(howManyLetters(phrase))

// [1, 2, 3, 4]
// result = 0;
// result = 1;
// result = 3;
// result = 6;
// result = 10;

const sumArray = (numbers) => {
  let result = 0;

  // for loop
  for (const number of numbers) {
    console.log(number)
    result = result + number
  }

  return { result }
}

const number = [1, 2, 3, 4]
console.log(sumArray(nums))


const max = (numbers) => {
  let result = numbers[0]

  for (const number of numbers) {
    if (number > result) {
      result = number
    }
  }
  return { result }
}

console.log(max([1, 2, 3, 4, 1, 2, 1, 2]))


// incremental operators
const letterFrequency = (phrase) => {
  console.log(phrase)

  let frequency = {}
  for (const letter of phrase) {
    if (letter in frequency) {
      frequency[letter] += 1
    } else {
      frequency[letter] = 1
    }

  }
  return frequency
}

console.log(letterFrequency('haha'))

const wordFrequency = (phrase) => {
  const words = phrase.split(' ')
  return letterFrequency(words)
}

console.log(wordFrequency('lol what lol yo yo yo'))
// incremental operators


// higher order functions
// map it loops and returns an array
// filter loops and returns an array with matching conditions
// reduce

let result = [1, 2, 3, 4,].map(number => number * 2)
console.log(result)

// MAP
const doubleMap = (numbers) => {
  return numbers.map(number => number * 2)
}
console.log(doubleMap([1, 2, 3]))

// FILTER
const filter = (numbers, greaterThan) => {
  let result = []
  for (const number of numbers) {
    if (number > greaterThan) {
      result.push(number)
    }
  }
  return result
}
// console.log(filter([1, 2, 3, 4, 5, 6], 3))

// const nums = [1, 2, 3, 4, 5, 6,]
// console.log(nums.filter(nums => nums > 4 || nums < 2))

const actors = [
  {name: 'johnny', netWorth: 2000000},
  {name: 'amber', netWorth: 10},
  {name: 'leonardo', netWorth: 10000000},
  {name: 'jaybee', netWorth: 170000000},
  {name: 'mark', netWorth: 130000000},
]

// let person = actors.filter(actor => actor.netWorth > 10)
// console.log(person)
// let names = person.map(actor => actor.name).join(', ')

// Playground.innerHTML = `<h1>${names}</h1>`

// // Reduce
// sum all of the net worth
// SUM: think about reduce
// reduce takes in a function as an argument
// reduce loops and gives you back the accumulator

function Multiply(prev, curr) {

  return prev * curr
}

const nums = [1, 2, 3, 4]
const currentPreview = nums.reduce(Multiply)

console.log(currentPreview)
