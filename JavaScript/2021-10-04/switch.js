console.log('Switch')

//syntax
//if else

/*
if (true) {
    //code block
} else if (true) {
    //code block
} else {
    //code block
}

// Switch
switch (expression) {
    case x:
        //Code block
        break
    case y:
        //Code block
        break
    default:
    //Code block
}*/

let todaysDate = new Date().getDay()
console.log(todaysDate)  // day 0 is sunday work as an array
//let day = 'fail, not supposed to happen' // Global variabel
let day = ''

switch (todaysDate){
    case 0: case 7:
        day = 'Söndag'
        break
    case 1:
        day = 'Måndag'
        break
    case 2:
        day = 'Tisdag'
        break
    case 3:
        day = 'Onsdag'
        break
    case 4:
        day = 'Torsdag'
        break
    case 5:
        day = 'Fredag'
        break
    case 6:
        day = 'Lördag'
        break
    default :
        day = 'fail, not supposed to happen'

}
console.log('day', day)