// const sum = (a: number, b: number): number => {
//     return a + b;
// };
// console.log(sum(10, 20));

// import { User } from "./type"

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

// type User = {
//     id: number;
//     name?: string;
//     age: number;
//     password: string;
// }

// const user: User = {
//     id: 10,
//     name: 'An',
//     age: 34,
//     password: '123456'
// }

// const customer: Omit<User, 'password' | 'age'> = {
//     id: 10,
//     name: 'An',
// }

// type Name = string[]

// const names: Name = ['User 1', 'User 2', 'User 3'];

// const users: Name = ['An', 'Dung'];


// const user: User = {
//     id: 10,
//     name: 'An',
//     age: 34
// }

// const customer: User = {
//     id: 50,
//     name: 'Hoang An',
//     age: 32
// }

// const users: User[] = [
//     {
//         id: 1,
//         name: 'User 1',
//         age: 1
//     },
//     {
//         id: 2,
//         name: 'User 2',
//         age: 2
//     }
// ]

// type User = {
//     id: number;
//     name: string;
// }

// const user: User = {
//     id: 1,
//     name: 'An'
// }

// const customer: User | {
//     age: number;
// } = {
//     id: 10,
//     name: 'An',
//     age: 34
// }

// const value: number | string = 'an';

//Interface

// interface User {
//     id: number;
//     name: string;
// }

// interface UserWithStatus extends User {
//     status: boolean;
// }

// interface User {
//     age?: number;
// }

// const user: User = {
//     id: 10,
//     name: 'An',
//     age: 10
// }

// const customer: UserWithStatus = {
//     id: 10,
//     name: 'An',
//     status: false
// }


//Class
// - Phạm vi: private | protected | public
// private: Chỉ dùng trong nội bộ class
// protected: Dùng trong nội bộ class và class kế thừa
// public: Mọi nơi
// interface IUser {
//     name: string;
//     email: string;
//     age: number;
//     status: boolean | null;
//     getName(): string;
//     showInfo(): void;
// }
// class User implements IUser {
//     public name: string;
//     public email: string;
//     public age: number;
//     public status: boolean | null = null;
//     constructor(name: string, email: string, age: number) {
//         this.name = name;
//         this.email = email;
//         this.age = age;
//     }
//     getName(): string {
//         return this.name;
//     }
//     showInfo(): void {
//         console.log('hello anh em');
//     }
// }
// const user = new User('An', 'an@gmail.com', 34);

try {
    const error = new Error("Lỗi gì đó...");
    error.status = 500;
    throw error;
} catch (error) {
    console.log(error.message);
    console.log(error.status);
}