// const array: string[] = []
//
// array.push('Alex')

const title: string = 'On the road';
const author: string = 'Jack Kerouac';
const pages: number = 320;
const isSold: boolean = true;
const updatedAt: Date = new Date();
const hasReviews: boolean = true;


const tags: Array<string> = ['Book', 'Beat', 'Classics'];
// const tags: string[] = ['Book', 'Beat', 'Classics'];

interface IBook {

}

class Book implements IBook {}

const book: IBook = new Book();


// The other option as teh example we have above
// interface IObject{
// id:number,
// name:string,
// }
//
//
// const obj: IObject= {
//     id:1,
//     name:'Alex'
// }

const obj: { id:number, name:string } = {
    id:1,
    name:'Alex'
}

// const myFunc:(msg: string)=> void = (msg:string): void => {
//     console.log(msg)
// }

const myFunc = (msg: string): void =>  {
    console.log(msg)
}

function myFunc2(msg:string): void{ }

const add = (a:number, b:number): number | undefined => {
    return a + b;
}

// const add = (a:number, b:number): number | undefined => {
//     return ;
// }

const  logger = (msg:string): void => console.log(msg);

logger('One');

const arr: string[] | number[] = [];

interface IUser {
    id:number;
    name: string;
    printName: () => void;
    setName: (name:string) => void;
}
export const user ={
    id:1,
    name:'Alex',
    printName: function(): void {
        console.log(`${this.name}`)
},
    setName: function (name:string): void {
        this.name = name;
    },

    // printName: (): string => 'Name',
    // printName: (): string => {
    //     return ''
    // }
};


// const size: { height: number; width: number } = {
//     height: 20,
//     width: 10,
// };
//
// const logMsg: (msg: string) => void = (msg: string) => {
//     console.log(`${msg}`);
// };