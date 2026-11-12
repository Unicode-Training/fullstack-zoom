// const sum = (a: number, b: number): number => {
//     return a + b;
// };
// console.log(sum(10, 20));

// const getValue = (val: number) => val;
// let a: unknown = 10;
// getValue(a as number);

// let a = '10';
// let b: number = a as unknown as number;
// console.log(b);

//compile time vs runtime

// const a: number[] = [1, 2, 3, 4];
// const b: string[][] = [['A'], ['B'], ['C']];
// const c: [number, string, boolean] = [10, 'An', false];

// const user: {
//     id: number;
//     name: string;
//     email?: string;
// } = {
//     id: 10,
//     name: 'An',
//     // email: 10
// }

// const users: {
//     id: number;
//     name: string;
//     age?: number;
// }[] = [
//         {
//             id: 10,
//             name: 'An'
//         },
//         {
//             id: 12,
//             name: 'Tuấn',
//             age: 30
//         }
//     ]

// function getMessage(a: number, b?: boolean) {
// }

// getMessage(10);

//Type
//Interface
//Union Type
//&, |
//keyof, typeof
//Generic

type User = {
    id: number;
    name: string;
    age: number;
    password: string;
}

const user: User = {
    id: 10,
    name: 'An',
    age: 34,
    password: '123456'
}

const customer: Omit<User, 'password' | 'age'> = {
    id: 10,
    name: 'An',
}