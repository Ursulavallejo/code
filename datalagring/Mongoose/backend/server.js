// getting-started.js
const mongoose = require('mongoose')

main().catch(err => console.log(err))

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test')
}

console.clear()
console.log('hello World!!')

const kittySchema = new mongoose.Schema({
    name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {
    const greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
    console.log(greeting);
};
kittySchema.query.byName = function (name){
    return this.where({name: new RegExp(name, 'i')})
}

const Kitten = mongoose.model('Kitten', kittySchema);

// const silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); // 'Silence'
//
// const fluffy = new Kitten({ name: 'fluffy' });
// fluffy.speak(); // "Meow name is fluffy"
//
// fluffy.save();
// fluffy.speak();


// let found = Kitten.find({ name: /^fluff/ });
// console.log(found)

K


