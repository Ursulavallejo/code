/*
Variables:
In programming, a variable is a container for a value.
variables label and store data in memory. There are only a few things you can do with variables:

-Create a variable with a descriptive name.
-Store or update information stored in a variable.
-Reference or “get” information stored in a variable.

It is important to distinguish that variables are not values; they contain values and represent them with a name.

There are a few general rules for naming variables:

-Variable names cannot start with numbers.
-Variable names are case sensitive, so myName and myname would be different variables. It is bad practice to create two variables that have the same name using different cases.
-Variable names cannot be the same as keywords.

Create a Variable: let

The let keyword signals that the variable can be reassigned a different value. Take a look at the example:
 */
let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito
/*
we can declare a variable without assigning the variable a value. In such a case, the variable will be automatically initialized with a value of undefined:

 */
let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350
/*
Create a Variable: const
 is short for the word constant.
 A const variable cannot be reassigned because it is constant. If you try to reassign a const variable, you’ll get a TypeError.

 Constant variables must be assigned a value when declared. If you try to declare a const variable without a value, you’ll get a SyntaxError.
 */
const myName = 'Gilberto';
console.log(myName); // Output: Gilberto
/*
Mathematical Assignment Operators:

we can use variables and math operators to calculate new values and assign them to a variable.
 */

//   let w = 4;
//   w = w + 1;
//console.log(w); // Output: 5

//We could re-write the code above to be:use built-in mathematical assignment operators. +=
let w = 4;
w += 1;
console.log(w); // Output: 5

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15

let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100

let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

/*
The Increment and Decrement Operator:

the increment operator (++) and decrement operator (--).
The increment operator will increase the value of the variable by 1. The decrement operator will decrease the value of the variable by 1.
 The variable’s value is updated and assigned as the new value of that variable.
 For example:
 */
let a = 10;
a++;
console.log(a); // Output: 11

let b = 20;
b--;
console.log(b); // Output: 19

/*
String Concatenation with Variables:

The + operator can be used to combine two string values even if those values are being stored in variables:

 */
let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.');
// Output: 'I own a pet armadillo.'

/*
String Interpolation:

We can insert, or interpolate, variables into strings using template literals. Check out the following example where a template literal is used to log strings together:
- a template literal is wrapped by backticks `
- Inside the template literal, you’ll see a placeholder, ${myPet}. The value of myPet is inserted into the template literal.
- When we interpolate `I own a pet ${myPet}.`, the output we print is the string: 'I own a pet armadillo.'
 */
const myPet2 = 'armadillo';
console.log(`I own a pet ${myPet2}.`);
// Output: I own a pet armadillo.

/*
typeof operator:

 it can be useful to keep track of the data types of the variables in your program. If you need to check the data type of a variable’s value, you can use the typeof operator.
 */
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true;
console.log(typeof unknown3); // Output: boolean

//exercise:
console.log( '- - - - - - - - - - - - - - -' );
let animalColor = 'blue'
let ageAnimal = 12
console.log(typeof animalColor);
console.log(typeof ageAnimal);
console.log(`My pet is ${animalColor}. And have ${ageAnimal} years old. `);
console.log(typeof animalColor + typeof ageAnimal );
console.log(typeof`My pet is ${animalColor}. And have ${ageAnimal} years old. `);   // Outcome: string