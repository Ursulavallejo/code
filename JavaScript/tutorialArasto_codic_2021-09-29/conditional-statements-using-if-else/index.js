// the code inside the curly brackets will be run depending on the condition (true-false).
// we dont need onöy to use boolean concept we can use numbers as well.

/*
if (true){
alert('the code inside the if statement was run!')
} 
*/

/* 
if (false){
    alert('the code inside the if statement was run!')
    } 
    //this wont run as the condition is false 
*/
/* 
if (1 + 1 == 2) {
    alert('the code inside the if statement was run!')
}
*/
/* 
if (1 + 1 == 3) {
    alert('the code inside the if statement was run!')
}  //this wont run as the condition is false 
*/
//------
const sword = 'Excalibur'
const wand = 'Elder wand'
const canEquipSword = false  // if is false wont run the code
const canEquipWand = false 

if (canEquipSword) {
    alert('You have equipped' + ' ' + sword)
} else if (canEquipWand) {
    alert('You have equipped' + ' ' + wand)
} else {
    alert('Your character cannot equipped swords or wands unfortunatelly')
}