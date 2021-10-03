#Book JavaScript & JQuery by Jon Ducket

#### www.javascriptbook.com

##* Chapter 1:
Objects and methods.
Example exercise file c01.

     document.write('God afternoon');

##* Chapter 2:

###Basic Javascript:

1. Statements:

Each individual instruction or step is known as statement. Each one start in a new line and should end with a semicolon.
Semicolon indicates when a step is over and indicates should move to the next step.

Javascript is case- sensitive. Be careful of capital letters.

Code Blocks>Often be used to group together many more statements. The code blocks can be identified as is a statement surrounded by curly braces. Is not followed by semicolon.

2. Comments:

A good practice is to write comments to explain what your code does.
we can use: 
Multi-line comments     /* text*/
Single-line comments    // text 

3. Variable:

We can store data in variables. The data stored in a variable can change or vary each time a script runs.

To declare a variable we need to use let (previously var).
that way we give a name to the variable.

let= variable keyword

quantity= variable name or identifier. If is some than one world must be writing using the camelCase format.

    let quantity;

Once you have created a value you can tell the information you like to store. We assign a value to the variable.

= is an assigment operator.

    quantity = 3;

####* Data Types: primary

Javascript distinguishes between:
numbers (0-9), strings ('Hi, Ivy') and booleans (true and false).

* Using variable to store a number.
exempel c02/js/numeric-variable.js

* Using variable to store a string.
  exempel c02/js/string-variable.js

* Using quotes inside a string.
We can surround double quotes or single in the string.

Other example is a technique called escaping the quotation characters. Using the backwards slash before any type of quote marks that appears within a string. Tell the reader is part of a string rather than the end.

  exempel c02/js/string-with-quotes.js

* Using variable to store a boolean.
  exempel c02/js/boolean-variable.js

* Shorthand for creating variables.
  exempel c02/js/shorthand-variable.js

1. Variables are declared and values assigned in the same statement. 
let price= 5;

2. Three variables are declared on the same line, then values assigned to each.
let price, quantity, total ;
price = 5;

3.Two variables are declared and assigned values on the same line. Then one is declared and assigned a value on the next line.
let price = 5, quantity = 14;
let total  = price * quantity;

####* ARRAYS: []
type of variable that stores a list of values.

example: we use square brakets. Called literal and is better to use this one when we program.
c02/js/array-literal.js

let colors;
colors = ['white' , 'black' , 'custom'];

Different technique = array constructor uses the array keyword and values are specified in the parentheses ().

Array();

    * Values in  array are called index. Index values start with 0.
    * Each array has a property called lenght wich hold the number of items in the array.