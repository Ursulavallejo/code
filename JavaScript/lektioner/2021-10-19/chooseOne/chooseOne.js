let userName = ''
const userQuestion = 'Next Class representant are:'
let randomNumber = Math.floor(Math.random() * 13) //
let classRep = ''

/*userName === 'Jane' ? console.log(`Hello, ${userName}`) : console.log(`Hello!`)*/

console.log(` ${userQuestion}`)

switch (randomNumber){
    case 0:
        classRep = 'Aram'
        break;
    case 1:
        classRep = 'Christopher'
        break;
    case 2:
        classRep = 'Carin'
        break;
    case 3:
        classRep = 'Susana'
        break;
    case 4:
        classRep = 'Michaella'
        break;
    case 5:
        classRep = 'Nimat'
        break;
    case 6:
        classRep = 'Hampus'
        break;
    case 7:
        classRep = 'Alpha'
        break;
    case 8:
        classRep = 'Ursula'
        break;
    case 9:
        classRep = 'Farhad'
        break;
    case 10:
        classRep = 'Emil'
        break;
    case 11:
        classRep = 'Kimmie'
        break;
    case 12:
        classRep = 'Samantha'
        break;
}
console.log(classRep)
