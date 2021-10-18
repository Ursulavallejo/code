if (true) {
    console.log('true')
}

if (false) {
    console.log('false')
}
if (!true) {
    console.log('true')
}

if (!false) {
    console.log('false')
}

let isTrue = true;
if (isTrue){
    console.log('isTrue')
}
console.log('----------------------------------------------')
console.log('|| OR')

if (true || false) {
    console.log('true || false')
}
if (false || true) {
    console.log('false || true')
}

if (true || true) {
    console.log('true || true')
}

if (false || false) {
    console.log('false || false')
}
console.log('----------------------------------------------')
console.log('&& AND')
if (true && false) {
    console.log('true && false')
}
if (false && true) {
    console.log('false && true')
}
if (true && true) {
    console.log('true && true')
}
if (false && false) {
    console.log('false && false')
}

let name = 'Lars'
if (name==='lars' || name === 'Christoffer'){
    console.log('Evaluation Success');
}else {
    console.log('Evaluation Failed');
    console.log('nothing is true');
}

if (name.toLocaleLowerCase() === 'lars'.toLowerCase() ||
    name.toLowerCase() === 'Christoffer'.toLowerCase()){
    console.log('Evaluation Success with .toLowerCase()');
}else {
    console.log('Evaluation Failed');
    console.log('nothing is true');
}
