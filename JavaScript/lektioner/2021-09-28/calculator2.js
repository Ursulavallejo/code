let number1 = 2
let number2 = number1 * 2  //4

function addition() {
    return number1 + number2
}

let sum = addition()
console.log('sum=',sum)
console.log('addition()=', addition())

console.log('-------------------------')
//
function addition() {
    return number1 + number2
}
console.log('addition()=' , addition ())

// subtraction
function subtraction () {
    return number1 - number2
}
console.log('subtraction()=' , subtraction ())

//multiplikation
function multiplication () {
    return number1 * number2
}
console.log('multiplication ()=' , multiplication  ())

//division
function division () {
    return number1 / number2
}
console.log('division ()=' , division  ())
console.log('-------------------------')

function addTwoNumbers(tal1, tal2) {
    return tal1 + tal2
}
console.log('addTwoNumbers()=', addTwoNumbers(2,4))

function subtractTwoNumbers(tal1, tal2) {
    return tal1 - tal2
}
console.log('subtractTwoNumbers()=', subtractTwoNumbers(2,4))

function divideTwoNumbers(tal1, tal2) {
    return tal1 / tal2
}
console.log('divideTwoNumbers()=', divideTwoNumbers(2,4))

function multiplyTwoNumbers(tal1, tal2) {
    return tal1 * tal2
}
console.log('multiplyTwoNumbers()=', multiplyTwoNumbers(2, 4))

console.log('-------------------------')
console.log('addTwoNumbers()=', addTwoNumbers(2,4))
console.log('subtractTwoNumbers()=', subtractTwoNumbers(number1,number2))
console.log('divideTwoNumbers()=',divideTwoNumbers(number1,number2))
console.log('multiplyTwoNumbers()=',multiplyTwoNumbers(number1,number2))
