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

// ---------------------------------------------------------------



// Exercise 3: Generic nested array
// Create a function that accepts an array of arrays and logs out each nested array. The array could be of any(not the type 'any) type.
//
interface ICandy<T> {
    id:number;
    name: string;
    color: string;
    amountStock: number;
}

const candies: ICandy<any>[] = [
    {
        id:1,
        name: 'Chocolate',
        color: 'Brown',
        amountStock: 5,
    },
    {
        id:2,
        name: 'Licorice',
        color: 'Black',
        amountStock: 4,
    },
    {
        id:3,
        name: 'Chewing Gum',
        color: 'Pink',
        amountStock: 20,
    },
];



function candyNestedArrays <T>(candy: ICandy<T>): void {
    console.log(`Id: ${candy.id} - Name: ${candy.name} - Color: ${candy.color} - AmountStock:${candy.amountStock} `)
        }

candies.forEach(candyNestedArrays);

// ---------------------------------------------------------------

//Exercise 4: Repository pattern
//Create an interface, types and in-memory database for the following repository class

class ArtistRepository {
    public _db: any[];

    constructor(db: any[]) {
        this._db = db;
    }

    getArtists = () => this._db;

    getArtist = (id: number) => this._db.filter((item: any) => item.id === id);

    createArtist = (artist: any) => {
        this._db.push(artist);
    };

    updateArtist = (id: number, artist: any) => {
        const itemToUpdate = this.getArtist(id);
        this._db[itemToUpdate[0].id - 1] = artist;
        return this;
    };

    deleteArtist = (id: number) => {
        this._db = this._db.filter((item: any) => item.id !== id);
    };

    addAlbumToArtist = (artistId: number, album: any) => {
        const artist = this.getArtist(artistId);
        console.log(artist[0].albums?.push(album));
    };

    getArtistAlbums = (id: number) => {
        const artist = this.getArtist(id);
        if (artist[0].albums) {
            return artist[0].albums;
        }
        return `${artist[0].name}`;
    };
}

// ---------------------------------------------------------------
//Example Tutorial:

//1.Creating Type-Safe Generics

function fun<T>(args:T):T {
    return args;
}

let result = fun<string>("Hello World");
let result2 = fun<number>(200);

console.log(result);
console.log(result2);
// ---------------------------------------------------------------
//2.Using Generics with Parameters of Many Types :If there are many parameters in a function, you can use different letters to denote the types. You don’t have to only use T:
//This will return the third argument, false.

function fun2 <T, U, V>(args1:T, args2: U, args3: V): V {
    return args3;
}

let result3 = fun2<string, number, boolean>('hey', 3, false);

console.log(result3);

// ---------------------------------------------------------------
//3.Creating Generic Classes

class customArray<T> {
    private arr: T[] = [];

    getItems(arr: T[]) {
        return this.arr = arr;
    }

    addItem(item:T) {
        this.arr.push(item);
    }

    removeItem(item: T) {
        let index = this.arr.indexOf(item);
        if(index > -1)
            this.arr.splice(index, 1);
    }
}

let numObj = new customArray<number>();
numObj.addItem(10);

let strObj = new customArray<string>();
strObj.addItem('Robin');

console.log(numObj);
console.log(strObj);

// ---------------------------------------------------------------
//4.Understanding Generic Constraints


interface funcArgs {
    length: number;
}

function getLength<T extends funcArgs>(args: T) : number {
    return args.length;
}

// let result4 = getLength(3); // give error since a value for the length parameter is not included

let result4 = getLength({ length: 5, name: 'Hello'});

console.log(result4);


