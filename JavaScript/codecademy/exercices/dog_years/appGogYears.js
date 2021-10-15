// how old I am
let myAge = 43
// early dog years
let earlyYears = 2
earlyYears *= 10.5
// setting the value for later years because we already accounted for the first two years
let laterYears = myAge - 2
// Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years.
laterYears *= 4

console.log(earlyYears)
console.log(laterYears)
// Value representing my age in dog years
let myAgeInDogYears = earlyYears + laterYears
// value holding my name in lowercase
let myName = 'Ursula'.toLowerCase()
// printing ,my name, my years and my years represented in dog years
console.log(`My name is ${myName}, ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
