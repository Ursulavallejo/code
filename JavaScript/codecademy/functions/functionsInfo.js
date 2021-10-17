// Functions

/*A function is a reusable block of code that groups together a sequence of statements to perform a specific task.*/

//We can calculate the area of one rectangle with the following code:

const width = 10;
const height = 6;
const area =  width * height;
console.log(area); // Output: 60

//Imagine being asked to calculate the area of three different rectangles:

const width1 = 10;
const height1 = 6;
const area1 =  width1 * height1;
console.log(area1)
// Area of the second rectangle
const width2 = 4;
const height2 = 9;
const area2 =  width2 * height2;
console.log(area2)
// Area of the third rectangle
const width3 = 10;
const height3 = 10;
const area3 =  width3 * height3;
console.log(area3)

//Function Declarations:
/*
consists of:
-The function keyword.
-The name of the function, or its identifier, followed by parentheses.
- A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, { }.*/

//Take a look at example of hoisting: !!

greetWorld(); // Output: Hello, World!

function greetWorld() {
    console.log('Hello, World!');
}
getReminder()
function getReminder() {
    console.log('Water the plants.')
}
greetInSpanish()
function greetInSpanish(){
    console.log('Buenas Tardes.')
}

//Calling a Function

function sayThanks(){
    console.log('Thank you for your purchase! We appreciate your business.');
}
sayThanks();
sayThanks();
sayThanks();

//Parameters and Arguments
/*So far, the functions we’ve created execute a task without an input. However, some functions can take inputs and use the inputs to perform a task. When declaring a function, we can specify its parameters. Parameters allow functions to accept input(s) and perform a task using the input(s). We use parameters as placeholders for information that will be passed to the function when it is called.*/

/*
function calculateArea (width , height){
    console.log(width * height);
}
*/
function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
sayThanks('Cole')

//Default Parameters:

function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

// other example:
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}
makeShoppingList()
makeShoppingList('lettuce') // 1st item is replaced

//Return
/*To pass back information from the function call, we use a return statement.
    To create a return statement, we use the return keyword followed by the value that we wish to return. If the value is omitted, undefined is returned instead.
    The return keyword is powerful because it allows functions to produce an output. We can then save the output to a variable for later use.
    */

function rectangleArea(width, height) {
    if (width < 0 || height < 0) {
        return 'You need positive integers to calculate area!';
    }
    return width * height;
}console.log(rectangleArea(5, 7))

//exempel
const numOfMonitors = monitorCount(5 , 4)

function monitorCount(rows , columns){
    return rows * columns
}
console.log(numOfMonitors) // print 20


//Helper functions

/*
These functions being called within another function are often referred to as helper functions. Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.*/

function multiplyByNineFifths(number) {
    return number * (9/5);
}
function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
}
console.log(getFahrenheit(15))   // Returns 59

/*
In the example above:

    getFahrenheit() is called and 15 is passed as an argument.
    The code block inside of getFahrenheit() calls multiplyByNineFifths() and passes 15 as an argument.
multiplyByNineFifths() takes the argument of 15 for the number parameter.
    The code block inside of multiplyByNineFifths() function multiplies 15 by (9/5), which evaluates to 27.
27 is returned back to the function call in getFahrenheit().
getFahrenheit() continues to execute. It adds 32 to 27, which evaluates to 59.
Finally, 59 is returned back to the function call getFahrenheit(15).
    We can use functions to section off small bits of logic or tasks, then use them when we need to. Writing helper functions can help take large and difficult tasks and break them into smaller and more manageable tasks.*/

const totalCost = costOfMonitors(5,4)
function monitorCount2(rows, columns) {
    return rows * columns;
}
function costOfMonitors(rows, columns){
    return monitorCount2(rows, columns) * 200
}
console.log(totalCost) // Print 4000

//Function Expressions

/*
A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.
 */