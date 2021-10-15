//Else If Statements

/*
The else if statement always comes after the if statement and before the else statement. The else if statement also takes a condition.
 else if statements are a great tool if we need to check multiple conditions.

 Let’s take a look at the syntax:*/
let stopLight = 'yellow';

if (stopLight === 'red') {
    console.log('Stop!');
} else if (stopLight === 'yellow') {
    console.log('Slow down.');
} else if (stopLight === 'green') {
    console.log('Go!');
} else {
    console.log('Caution, unknown!');
}
// another example:

let season = 'summer';

if (season === 'spring') {
    console.log('It\'s spring! The trees are budding!');
} else if(season === 'winter'){
    console.log('It\'s winter! Everything is covered in snow.');
} else if(season === 'fall'){
    console.log('It\'s fall! Leaves are falling!');
}else if(season === 'summer'){
    console.log('It\'s sunny and warm because it\'s summer!');
}else {
    console.log('Invalid season.');}

//A switch statement provides an alternative syntax that is easier to read and write. A switch statement looks like this:
let groceryItem = 'papaya';

switch (groceryItem) {
    case 'tomato':
        console.log('Tomatoes are $0.49');
        break;
    case 'lime':
        console.log('Limes are $1.49');
        break;
    case 'papaya':
        console.log('Papayas are $1.29');
        break;
    default:
        console.log('Invalid item');
        break;
}

// Prints 'Papayas are $1.29'

/*
The switch keyword initiates the statement and is followed by ( ... ), which contains the value that each case will compare. In the example, the value or expression of the switch statement is groceryItem.
    Inside the block, { ... }, there are multiple cases. The case keyword checks if the expression matches the specified value that comes after it. The value following the first case is 'tomato'. If the value of groceryItem equalled 'tomato', that case‘s console.log() would run.
    The value of groceryItem is 'papaya', so the third case runs— Papayas are $1.29 is logged to the console.
    The break keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block. Note: Without break keywords, the first matching case will run, but so will every subsequent case regardless of whether or not it matches—including the default. This behavior is different from if/else conditional statements that execute only one block of code.
    At the end of each switch statement, there is a default statement. If none of the cases are true, then the code in the default statement will run.*/

let athleteFinalPosition = 'first place';

switch (athleteFinalPosition){
    case 'first place':
        console.log('You get the gold medal!');
        break;
    case 'second place':
        console.log('You get the silver medal!');
        break;
    case 'third place':
        console.log('You get the bronze medal!');
        break;
    default:
        console.log('No medal awarded.');
        break;
}
