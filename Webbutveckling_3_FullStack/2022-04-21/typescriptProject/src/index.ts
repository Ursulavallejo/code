//example of Alex
// import {user} from './array'

// exercise with tasks
import {ursulaTasks} from './tasks'

console.log('Hey!! Hello World');
console.log(this);

// user.setName('Bob')
ursulaTasks.printName()

//TUPLE
//enum (interface + object)

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
};

class Drink {
    color: string = ''
    carbonated: boolean;
    sugar: number;
    constructor() {
        console.log('I am a drink');
    }
}

type TupleDrink = [string, boolean,number];

const pepsi: TupleDrink = ['brown', true, 40];

pepsi.forEach((item) => console.log(item))

enum Direction {
    NORTH,
    SOUTH,
    WEST,
    EAST,
}

// const position: {x:number, y:number}= {
//     x:0,
//     y:0
// }

interface PLayer {
    move:(direction: Direction) => void;
}

class Player{}

function printString(array:string[]): void {
    for (let i =0; i < array.length; i++){
        console.log(array[i]);
    }
}

function printNumbers(array:number[]): void {
    for (let i =0; i < array.length; i++){
        console.log(array[i]);
    }
}

function printWhatever<T>(array:T[]) {
    for (let i =0; i < array.length; i++){
        console.log(array[i]);
    }
}
// printWhatever<string>(['one','two','three'])
// printWhatever<number>([1,2,3,4])


// class PrintNumbers {
//     collection: number[];
//
//     constructor(collection:number[]) {
//         this.collection = collection;
//     }
// }

// short version of above

// class PrintNumbers {
//     constructor(public collection:number[]) {
//     }
// }

class PrintNumbers {
    constructor(public collection:number[]) {}
    printCollection ()  {
        for (let i =0; i < this.collection.length; i++){
        console.log(this.collection[i]);
    }
    }
}

class PrintWhatever<T> {
    collection: T[];

    constructor(coll: T[]) {
        this.collection = coll;
    }
    printCollection() {
        for (let i = 0; i < this.collection.length; i++) {
            console.log(this.collection[i]);
        }
    }
}

// const  newObj = new PrintNumbers([1,2,3])

const newObj = new PrintWhatever<number>([1, 2, 3]);
newObj.printCollection();

console.log(newObj.collection);


// Exercise 1:

// interface Animal {
//     name:string;
//     printName: () => void;
//
// }
//
// class Duck implements Animal {
//     constructor(public name:string) {}
//     printName(){
//         console.log(this.name);
//     }
// }
// const duck: Animal = new Duck('Bob');
// duck.printName(); // My name is Bob

//version 2
// class Animal {
//     constructor(public name: string) {}
//
//     printName() {
//         console.log(this.name);
//     }
// }
//
// class Duck extends Animal {
//     sayQuack() {
//         console.log('Quack');
//     }
// }
//
// const duck: Duck = new Duck('Bob');
// duck.printName(); // My name is Bob
// duck.sayQuack();


//Version 3
// class Animal {
//     constructor(public name: string) {}
//
//     printName() {
//         console.log(this.name);
//     }
// }
//
// class Duck extends Animal {
//     constructor(public sound:string, name:string) {
//         super(name);
//         this.sound = sound
//     }
//     sayQuack() {
//         console.log('Quack');
//     }
// }
//
// const duck: Animal = new Duck('Bob', 'Quack');
// duck.printName(); // My name is Bob

// version 3
interface Animal {
    printName: () => void;
}

class Duck implements Animal {
    constructor(public name: string) {}
    printName() {
        console.log(this.name);
    }
}

const duck: Animal = new Duck('Bob');
duck.printName(); // My name is Bob

// ---------------------------------------------------------------

// Exercise 2:

interface IUser {
    id:number;
    name: string;
    age: number;

}

const users: IUser[] = [
    {
        id: 1,
        name: 'Lana Del Rey',
        age: 35,
    },
    {
        id: 2,
        name: 'Bob Dylan',
        age: 80,
    },
    {
        id: 3,
        name: 'Thåström',
        age: 55,
    },
];

const logger = (user: IUser): void =>{
    console.log(`Id: ${user.id} - Name: ${user.name} - Age: ${user.age}`)
};

users.forEach(logger);