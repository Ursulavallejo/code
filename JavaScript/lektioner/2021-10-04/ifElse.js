/*console.log('Hej')

if (false || true){
    console.log('Condition was true')
}else {
    console.log('Condition was false')
}*/
/*
let isTrue = true
if (isTrue) {
    console.log('Condition was true')
}else if (!isTrue){
    console.log('Condition was false')
}*/
/*
let number = 0
if (number === 1) {
    console.log('number is = one')
}else if (number === 2){
    console.log('number is = two')
}else {
    console.log('number is not 1 or 2')
}
}*/
/*
let greeting = ''
let hour = 10

if (hour <10){
    greeting = 'God morgon'
}else if (hour < 20){
    greeting = 'God dag'
}else {
    greeting = 'God kväll'
}
console.log(greeting)
*/


let myHour = 10  // Global variable
function getGreeting(hour, minutes){
    let greeting = ''  //local variable
    if (hour <10){
        greeting = 'God morgon'
    }else if (hour < 20){
        greeting = 'God dag'
    }else {
        greeting = 'God kväll'
    }
   return greeting
}

console.log(getGreeting(14, 12))
console.log(getGreeting(myHour))

myHour = new Date().getHours()
console.log(myHour)
console.log(getGreeting(myHour))
