/*
Conditional Statements:

A conditional statement checks a specific condition(s) and performs a task based on the condition(s).

-if, else if, and else statements
-comparison operators
-logical operators
-truthy vs falsy values
-ternary operators
-switch statement

If Statement:

The if keyword followed by a set of parentheses () which is followed by a code block, or block statement, indicated by a set of curly braces {}.

Inside the parentheses (), a condition is provided that evaluates to true or false.

If the condition evaluates to true, the code inside the curly braces {} runs, or executes.

If the condition evaluates to false, the block won’t execute.
 */
if (true) {
    console.log('This message will print!');
}
// Prints: This message will print!

let sale = true
sale = false  // wont print if we re-assigned to false.
if (sale){
    console.log('Time to buy!');
}

/*
If...Else Statements:

In many cases, we’ll have code we want to run if our condition evaluates to false.

If we wanted to add some default behavior to the if statement, we can add an else statement to run a block of code when the condition evaluates to false.

An else statement must be paired with an if statement, and together they are referred to as an if...else statement.

-Uses the else keyword following the code block of an if statement.
-Has a code block that is wrapped by a set of curly braces {}.
-The code inside the else statement code block will execute when the if statement’s condition evaluates to false.

if...else statements allow us to automate solutions to yes-or-no questions, also known as binary decisions.

 */
if (false) {
    console.log('The code in this block will not run.');
} else {
    console.log('But the code in this block will!');
}
// Prints: But the code in this block will!

/*
Comparison Operators:

sometimes we need to use different types of operators to compare values. These operators are called comparison operators.

Here is a list of some handy comparison operators and their syntax:

Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
Is equal to: ===
Is not equal to: !==

Comparison operators compare the value on the left with the value on the right. For instance:
 */
10 < 12 // Evaluates to true