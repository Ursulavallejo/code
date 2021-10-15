// source: https://github.com/ArastoSahbaei/practices/blob/master/Foundation/01-Variables.js

var2()

/*

function var1() {
    /!* Print "My name is XXXX" in the console *!/
    console.log("My name is Oscar");
}
*/

function var2() {
    /*
    Create variable and set it to 35.
    Print the value of the number (using "console.log")
    */

    let number = 35 // bra.
    console.log("The value is ", number)


    // Ctrl K-C ==> kommentera

    // var number = 35    // använd aldrig

    // let number = 35   // bra

        for ( let n = 0; n < 5; n++) {  //remove var Why until 5 if states minor than 5?
            console.log("n", n)
        }

    }
    /*    add3()
    function add3() {
    let x = 12;
    let y = 6;
    let z = x + y
        console.log("the sum is: ", z)
    }*/
    /*
        Create a variable "x" with the value 12
        Create a variable "y" with the value 6
        Create a variable "z" that sums the numbers
        Print the answer "Answer: 18"

}   */

/*var4()
function var4() {
    let x = 77
    let y = 44
    x = 55
    z = x + y
    console.log("the sum is: ", z)
}*/
/*
 Create a variable "x" with the value 77
 Create a variable "y" with the value 44
 Change the value of "x" to 55
 Create a variable "z" that sums the numbers
 Print the sum
*/

/*
var5()
function var5() {
    let number1 = "77"
    let number2 = "50"
    console.log("the sum is: ", number1 + number2)
}*/




// same as above

/*var6()
function var6() {
    const number1 = "77"
    let number2 = "50"
   // number1 = 2 we cant reasign a varibale if we use const
    console.log("the sum is: ", number1 + number2)
}*/
    /*
    Create a variable "number1" and set it to the string "77"
    Create a variable "number2" and set it to the string "50"
    Print number 1 + number 2 (should give 7750)
    Same as last exercise but let x be a constant (const)
Which error message appears?
*/



//The parseInt function parses a string argument and returns an integer.
/*var7()
function var7() {
    let number1 = "77"
    let number2 = 50
console.log(parseInt(number1) + number2)
    /!*
     Create a variable "number1" and set it to the string "77"
     Create a variable "number2" and set it to 50
     Use parseInt to convert "number1" to the number 77
     Print number 1 + number 2 (should give 127)
    *!/
}*/
/*var8()
function var8() {
    let a = 42
    console.log("My favorite number is ", a)
}*/
    /*
    Create variable number with the value 42.
    Print "My favorite number is 42"
    */

/*var9()  // whats teh pint to use backtick?
function var9() {
    let a = 42
        console.log(`My favorite number is`, a)
    /!* Use backtick (i.e. the character `) to solve the problem above *!/

}*/
/*
var10()
function var10() {
    let dinner = "broccoli"
    let Dinner = "pasta"
    console.log(dinner)
    }
*/

    /*
        Create a variable "dinner" and set it to 'broccoli'
        Create a variable "Dinner" and set it to 'pasta'
        Print the value of "dinner"
    */

/*var11()
function var11() {
    let x = 12
    let y = true
    let  z = "Monday"
    let w;
    console.log(typeof x )
    console.log(typeof  y)
    console.log(typeof z )
    console.log(typeof w )

}*/
    /*
    Create a variable x with the value 12
    Create a variable y with the value true
    Create a variable z with the value 'Monday'
    Create a variable w without setting any value
    Print the type of these four variables using "typeof"
    */

/*var12() //he isNaN() function determines whether a value is an illegal number (Not-a-Number).
function var12() {

    let x = "fox"
    console.log(parseInt(x))
    console.log(isNaN(x))
    let y = "5"
    console.log(parseInt(y))
    console.log(isNaN(y))
}*/

    /*
    Create a variable "x". Set the value to "parseInt ('fox')"
    Print x (should give "NaN")
    Use "isNaN" to check if x is a non-number. Set y to that value (y will get the value true)
    Print y
    */

