let person = {
    name:'Jane',
    city: 'San Francisco',
    children: ['child1', 'child2'],
    livesIn: function (){
        return this.name + ' lives in ' + this.city
    }
}


console.log('-----------------------------')
console.log(person)
console.log('-----------------------------')
console.log(person.name)
console.log(person.children)
console.log('-----------------------------')
console.log(person.children.slice(0,1))
console.log(person.children.slice(1,2))
console.log('-----------------------------')
console.log(person.children[0])
console.log(person.children[1])
console.log('-----------------------------')
console.log(`${ person.name} lives in ${person.city}`)
console.log(person.livesIn())
console.log('-----------------------------')

let persons = [
    {
        name: 'Lars',
        city: 'Göteborg'
    },
    {
        name: 'Aram',
        city: 'Stenungsund'
    },

]

console.log(persons)
console.log('-----------------------------')

persons.push( {
    name: 'Kimmie',
    city: 'Mölndal'
},)

console.log(persons)
console.log('-----------------------------')
console.log(persons[2].name)
console.log('-----------------------------')
console.log(persons[2])
console.log('-----------------------------')
console.log(persons[1])
console.log('-----------------------------')
console.log(persons[1].city)
console.log('-----------------------------')

persons.push( {
    name: 'Ursula',
    city: 'Hisingen'
},)
console.log(persons)
console.log('-----------------------------')

