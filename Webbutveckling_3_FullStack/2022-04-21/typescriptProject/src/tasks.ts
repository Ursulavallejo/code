interface ITask {
    id:number;
    name: string;
    task: string;
    printName: () => void;
    setName: (name:string) => void;
}


export const ursulaTasks : ITask= {
    id: 1,
    name: 'Ursula',
    task: 'dansar',
    printName: function (): void {
        console.log(`${this.name}`)
    },
    setName: function (name:string): void {
        this.name = name;
    },
}


const tasks : ITask[] = []
tasks.push(ursulaTasks)
