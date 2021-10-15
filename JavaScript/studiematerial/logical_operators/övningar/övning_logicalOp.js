//Logiska operatorer

//LOGICAL AND
/*
const AND = (1 + 1 == 2) && (2 + 2 == 4)
console.log(AND)  // True
*/

/*
const AND = (1 + 1 == 2) && (2 + 2 == 5)
console.log(AND)  // False
*/

//LOGICAL OR

/*
const OR = (1 + 1 == 2) || (2 + 2 == 4)
console.log(OR)  // True
*/
/*
const OR = (1 + 1 == 2) || (2 + 2 == 5)
console.log(OR)  // True
*/

/*
const OR = (1 + 1 == 3) || (2 + 2 == 5)
console.log(OR)  // False
*/

//LOGICAL NOT

/*
const NOT = !(1 + 1 == 2)
console.log(NOT)  // False
*/

/*
const NOT = !(1 + 1 == 3)
console.log(NOT)  // True
*/
//Övningar 1
/*
const NOT = !("John" == "John")
console.log(NOT)  // False
*/

/*
const NOT = !("John" == "Lea")
console.log(NOT)  // True
*/

//Övningar 2
/*
let x = true
let y = false
const NOT = !(x == y)
console.log(NOT)  // True
*/
/*
let x = true
let y = true
const NOT = !(x == y)
console.log(NOT)  // false
*/

/*let x = true
let y = false
const NOT = (x == y)
console.log(NOT)  // false*/

//Övningar 3

let x = true
let y = 5
let p = "Lea"
let u = " Persson"
let z = p + u
const NOT = !((x+y) == (x+y))
const comp = ((x+y) == (x+y))
console.log(NOT)  // false
console.log(comp)  // true
console.log(`${z} ${y} ${x}`)
//const AND = (z == (u+p)) && ((u+p) == z)  //false
//const OR = (z == (u+p)) || ((u+p) == z) // false
//const AND = (u == p) && (u == z) // false    !! why false ? both are a string !!
//const OR = (u === p) || (u === z) // false    !! why false ? both are a string !!
console.log(typeof z)
//console.log(AND)
//console.log(OR)
const OR = (p  == u) || (z == u)
console.log(OR)