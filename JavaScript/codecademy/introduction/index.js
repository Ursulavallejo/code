/*
-There are 7 fundamental data types in JavaScript: strings, numbers, booleans, null, undefined, symbol, and object.

-Numbers are any number without quotes: 23.8879

-Strings are characters wrapped in single or double quotes: 'Sample String'

-The built-in arithmetic operators include +, -, *, /, and %.

-Objects, including instances of data types, can have properties, stored information. The properties are denoted with a . after the name of the object, for example: 'Hello'.length.

-Objects, including instances of data types, can have methods which perform actions. Methods are called by appending the object or instance with a period, the method name, and parentheses. For example: 'hello'.toUpperCase().

Properties:
Every string instance has a property called length that stores the number of characters in that string.
The . is another operator! We call it the dot operator.
 */
console.log('Hello'.length);
console.log('Teaching the world how to code'.length);

/*
Methods :
methods are actions we can perform. JavaScript provides a number of string methods.
We call, or use, these methods by appending an instance with:

a period (the dot operator)
the name of the method
opening and closing parentheses
E.g. 'example string'.methodName().

*/
console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true
/*
On the first line, the .toUpperCase() method is called on the string instance 'hello'. The result is logged to the console. This method returns a string in all capital letters: 'HELLO'.

On the second line, the .startsWith() method is called on the string instance 'Hey'. This method also accepts the character 'H' as an input, or argument, between the parentheses. Since the string 'Hey' does start with the letter 'H', the method returns the boolean true.

 */
// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

/*
Built-in Objects:
Built-in objects, including Math, are collections of methods and properties that JavaScript provides.
For example, if you wanted to perform more complex mathematical operations than arithmetic, JavaScript has the built-in Math object.
The great thing about objects is that they have methods! Let’s call the .random() method from the built-in Math object:
 */
console.log(Math.random()); // Prints a random number between 0 and 1

/*
In the example above, we called the .random() method by appending the object name with the dot operator, the name of the method, and opening and closing parentheses. This method returns a random number between 0 (inclusive) and 1 (exclusive).

    To generate a random number between 0 and 50, we could multiply this result by 50, like so:
 */
console.log(Math.random() * 50);

/*
The example above will likely evaluate to a decimal. To ensure the answer is a whole number, we can take advantage of another useful Math method called Math.floor().

Math.floor() takes a decimal number, and rounds down to the nearest whole number. You can use Math.floor() to round down a random number like this:

Math.floor(Math.random() * 50);

In this case:

1.Math.random generates a random number between 0 and 1.
2.We then multiply that number by 50, so now we have a number between 0 and 50.
3.Then, Math.floor() rounds the number down to the nearest whole number.
If you wanted to see the number printed to the terminal, you would still need to use a console.log() statement:
 */
console.log(Math.floor(Math.random() * 50)); // Prints a random whole number between 0 and 50

console.log(Math.ceil(43.8)); // Math object that returns the smallest integer greater than or equal to a decimal number. Prints 44

//method on the built-in Number object that checks if a number is an integer:
console.log(Number.isInteger(2017)); // Print True
console.log(Number.isInteger(34.2)); // Prints false
