//
// let i;
// for( i = 0; i <5; ){
//     console.log("i = " + i);  // i = 0, 1, 2, 3, 4
//     i = i + 1;
// }
// console.log(i); // i = 5

/*
let isTrue = true
let x = 4
while (isTrue) {
    console.log( '     *')
    console.log('   * * *')
    console.log( '  * * * * *')
    console.log( '* * * * * * *')
    if ( x === 4) {
        console.log()
        isTrue = false;
    }
    x++
}
*/


for (let i = 0; i < 4; i++) {
    let array = ['      *', '    * * *', '  * * * * *', '* * * * * * *'];
    console.log(array[i])
}



//function pyramid(j) {
let j = 4
    for (let i = 2; i < j + 3; i++) {
        console.log(" ".repeat(j + 2 - i) + "*".repeat((i - 2) + (i - 1)));
    }
//}
//pyramid(4);

let n = 5;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = 1; j <= n - i; j++) {
        string += " ";
    }
    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);;