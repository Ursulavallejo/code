// source: https://github.com/ArastoSahbaei/practices/blob/master/Foundation/02-Arrays.js
/*arr1()
function arr1() {
    let cities = ["Stockholm", "Gothenburg", "New York"]
    console.log(cities[0])
    console.log(cities[1])
    console.log(cities[2])
    console.log(cities[3])
}*/
    /*
        I---------I---------I---------I
        0         1         2         3

        Create an array of "cities" with the cities Stockholm, Gothenburg and New York
        Print the first, second, and third elements of the array
        What happens if you try to access the fourth element (which does not exist)?
    */

/*arr2()
function arr2() {
    let cities = ["Stockholm", "Gothenburg", "New York"]
    cities.push("Krakow")
    console.log(cities[0])
    console.log(cities[1])
    console.log(cities[2])
    console.log(cities[3])
}*/
    /*
        Create an array of "cities" with the cities Stockholm, Gothenburg and New York
        Add another city "Krakow" using "push"
        Print the fourth element in "cities" ("Krakow")
        The push() method adds new items to the end of an array.

push() changes the length of the array and returns the new length.
Tip: To add items at the beginning of an array, use unshift().
    */



/*arr3()
function arr3() {
    let cities = ["Stockholm", "Gothenburg", "New York"]
    cities.push("Krakow")
    cities.push("Berlin")
    console.log("number arrays", cities.length)
    console.log("My favorite cities are " + cities[1] + " and " + cities[3] )
}*/



    /*
        Create an array of "cities" with the cities of Stockholm, Gothenburg and New York
        Add another city "Krakow" using "push"
        Add another city "Berlin" using "push"
        Print the number of cities in the array
        Pick the second and fourth cities in the list. Print "My favorite cities are Gothenburg and Krakow"
    */

/*arr4()
function arr4() {
    let cities = ["Stockholm", "Gothenburg", "New York"]
    let poppedCity = cities.pop()
    console.log(cities.length)
    console.log(poppedCity)
    console.log(cities[1])
}*/
    /* pop() Remove the last element of an array.
        Create an array of "cities" with the cities of Stockholm, Gothenburg and New York
        Use "pop" to pick out the last city and place in a variable "poppedCity"
        Print the length of the list (2)
        Print the popped city (New York)
        Use cities.length to pick the last item in the list (Gothenburg) ????
    */

/*arr5()
function arr5() {
let numbers = [5 , 66 , 777 , 12]
    console.log(numbers.length)
    console.log(numbers[2])
}*/
    /*
        Create an array of "numbers" with the numbers 5,66,777,12
        Print the number of numbers in the list (4)
        Print the third number in the list (777)
    */

/*
arr6()
function arr6() {
    let numbers = [5 , 66 , 777 ,12]
    console.log(numbers.sort())   //print: [ 12, 5, 66, 777 ]

    console.log(numbers.sort((a, b) => a-b))  //print: [ 5, 12, 66, 777 ]
}
*/

    /*
        Create an array of "numbers" with the numbers 5,66,777,12
        Sort the numbers by typing: numbers.sort();
        Sort the numbers by typing: numbers.sort((a, b) => a-b);
        Print the value of "numbers"
        Compare the two results
    */

/*arr7()
function arr7() {
    let numbers = [5 , 66 , 777 ,12]
    console.log(numbers.sort((a, b) => b-a))  //print: [ 5, 12, 66, 777 ]
}*/
    /* points.sort(function(a, b){return b-a})
        Sort the list backwards
    */

arr8()
function arr8() {
    let numbers = [5 , 66 , 777 ,12]
    console.log(numbers.reverse())
    /*
        Create an array of "numbers" with the numbers 5,66,777,12
        Reverse the order using "reverse"
        Print the array ([12, 777, 66, 5])
    */
}
