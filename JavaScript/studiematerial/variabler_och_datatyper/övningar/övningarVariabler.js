//variabler
/*

let x = 5;
let y = 6;
const z = x + y;

console.log(z)
*/

//Exempel med variablerna price1, price2 och total:
/*
let price1 = 5;
let price2 = 6;
let total = price1 + price2;

console.log(total)
*/

//primitiva datatyper

/*
let length = 16;                                    // Number
let lastName = "Johnson";                           // String
let x = { firstName: "John", lastName: "Doe" };     //object

console.log(typeof length )
console.log(typeof lastName)
console.log(typeof x )
*/

//Undefined - odefinierad

/*
let greetUser                                     // undefined - "har inte blivit definierad"
let greetUser = undefined                         // Samma som ovan men definieras

console.log(typeof greetUser)
console.log(greetUser)
*/

//Empty Values - Tomma värden

/*
let car = "";                                       // Värdet är "",
console.log(typeof car)                                   // typeof är "string"
console.log(car)
*/

//String - Sträng

/*
const sayHello = "Hey! Wellcome to my tutorial"     // string

console.log(typeof sayHello)
console.log(sayHello)
*/

//Number - Nummer
/*
const elite = 1337                                  // number

console.log(typeof elite)
console.log(elite)
*/

//Boolean - Sann eller Falsk

/*const isTeacher = true                              // boolean

console.log(typeof isTeacher)
console.log(isTeacher)*/

//Null
/*
const noValue = null                                // null - "har blivit definierad men fått värdet null"

console.log(typeof noValue)                               // Object - bugg från JavaScripts urprung
console.log(noValue)*/

//Begreppet datatyper
/*

let x = 16 + 4 + "Volvo";
console.log(x)        //20Volvo
*/

/*
let x = "Volvo" + 16 + 4;
console.log(x)   //Volvo164*/


//Extra stora eller extra små siffror kan skrivas med vetenskaplig (exponentiell) notation:
/*

let y = 123e5;      // 12300000
let z = 123e-5;     // 0.00123
console.log(y, z)
*/

//JavaScript Booleans

/*let x = 5;
let y = 5;
let z = 6;
console.log(x == y)       // Returns true
console.log(x == z)       // Returns false*/

//JavaScript Arrays  [].

/*let cars = ["Saab", "Volvo", "BMW"];

console.log(cars[0])    // returns "Saab"
console.log(cars[1])    // returns "Volvo"
console.log(cars[2])    // returns "BMW"*/

//JavaScript Objects

/*
let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

console.log(person.firstName)   // Returns "John"
console.log(person.age)         // Returns "50"
*/

//Primitiv data
/*

console.log (typeof "John")              // Returns "string"
console.log (typeof 3.14 )               // Returns "number"
console.log (typeof true )               // Returns "boolean"
console.log (typeof false )             // Returns "boolean"
console.log (typeof x )                  // Returns "undefined" (if x has no value)
*/

//Complex data

/*
console.log(typeof { name: 'John', age: 34 } )   // Returns "object"
console.log(typeof [1, 2, 3, 4] )                // Returns "object" (not "array", see note below)
console.log(typeof null)                         // Returns "object"
console.log(typeof function myFunc() {
}   )                                // Returns "function"
*/


//Övningar

//2. Skapa en variabel för varje datatyp och lagra något i den:
/*
//sträng
let a = "string"
console.log(typeof a)
//number
let number = 52
console.log(typeof number)
//decimaltal
let decimal= 23e-4
console.log(typeof decimal)
//boolean
let eat = true
console.log(typeof eat)
//undefined
let x
let z = undefined
console.log(typeof x)
console.log(typeof z)
//null
let noValue = null
console.log(typeof noValue)*/

//3. Skapa en Array med värden

let bake = ["brownie", "selma", "cheeseCake", "donuts" ]
console.log(bake[0])
console.log(bake[1])
console.log(bake[2])
console.log(bake[3])

//4.Skapa ett object som innehåller alla datatyper
let pet = {type: "Katt",name: "Anki", age: 1, old: false }
console.log(pet.age)
console.log(pet.name)
console.log(pet.type)
console.log(pet.old)

//5. Skapa 2 variabler och lägg ihop

// sträng
let firstName = "Ursula"
let familyName = "Vallejo"
console.log(firstName + " " + familyName)
// nummer
let x = 10
let y = 20
console.log(x + y)
// decimaltal
let a = 10e-3
let b = 20e1
console.log(a , b)
// boolean

let p = 5
let u = 10
console.log(p>u)
console.log(p<u)
