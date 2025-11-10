// 1. Most basic way to create objects and assign key values and methods to them
/* let animal = {}

animal.name = 'Leo'
animal.enegrgy = 10

animal.eat = function (amount) {
  console.log(`${this.name} is eating.`)
  this.energy += amount
}
animal.sleep = function (length) {
  console.log(`${this.name} is sleeping.`)
  this.energy += length
}

animal.play = function (length) {
  console.log(`${this.name} is playing.`)
  this.energy -= length
}
 */
// 2. Object creation via functional instantiation
/* function Animal(name, energy) {
  let animal = {}
  animal.name = name
  animal.energy = energy

  animal.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }
  animal.sleep = function (length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  }
  animal.play = function (length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
  return animal
} */
// 3. Functional instantiation with shared methods - this saves memory by not recreating the same object over and over
/* const animalMethods = {
  eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  },
  sleep(length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  },
  play(length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  },
}

function Animal(name, energy) {
  let animal = {}
  animal.name = name
  animal.energy = energy
  animal.eat = animalMethods.eat
  animal.sleep = animalMethods.sleep
  animal.play = animalMethods.play

  return animal
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)
leo.play(2)
snoop.play(5)
console.log(leo.energy, snoop.energy)
 */
/* const parent = {
  name: 'Stacey',
  age: 35,
  heritage: 'Irish',
}

const child = Object.create(parent)
child.name = 'Ryan'
child.age = 7

console.log(child.name)
console.log(child.age)
console.log(child.heritage)

 */
const animalMethods = {
  eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  },
  sleep(length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  },
  play(length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  },
}

const Animal = Object.create(animalMethods)
function Animal(name, energy) {
  let animal = Object.create(animalMethods)
  animal.name = name
  animal.energy = energy
  return animal
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)
leo.play(2)
snoop.play(5)
console.log(leo.energy, snoop.energy)
