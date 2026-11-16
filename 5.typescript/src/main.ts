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
// interface AppError extends Error {
//     status?: number;
// }
// try {
//     const error: AppError = new Error("Lỗi gì đó...");
//     error.status = 500;
//     throw error;
// } catch (error) {
//     // if (error instanceof Error) {
//     //     const err: AppError = error;
//     //     console.log(err.message);
//     //     console.log(err.status);
//     // }
//     const err = error as AppError;
//     console.log(err.message);
//     console.log(err.status);
// }

//Union Type
// const user = {
//     id: 10,
//     name: 'An',
//     age: 34
// }
// const key: "id" | "name" | "age" = "name";
// console.log(user[key]);

// const getOption = (key: "name" | "email" | "password") => { }
// getOption("password")

// const user = {
//     id: 10,
//     name: 'An',
//     age: 34,
//     address: 'HN'
// }

// const getUser = (key: keyof typeof user) => {
//     return user[key];
// }
// getUser("name")

// const a = ['10', '20'];
// type A = typeof a;

// interface User {
//     id: number;
//     name: string
// }

// const getUser = (user: User, key: keyof User) => {
//     return user[key];
// }

// getUser({
//     id: 10,
//     name: 'An'
// }, 'name')

// type Info = {
//     [key: string]: unknown;
// }

// const info: Info = {
//     name: 'An',
//     email: 'an@gmail.com',
//     age: 32,
//     status: 0
// }

// const a: string = info.name

// const value: number | undefined = undefined;
// const getValue = (val: number) => { }
// getValue(value!);

//user!.name

//Từ khóa readonly
// type User = {
//     readonly id: number;
//     name: string;
//     status: boolean
// }
// const user = {
//     id: 10,
//     name: 'An',
//     status: false
// } as const;

// user.name = 'An';

// const a = ["An"] as const;
// a.fill('a')

// const a: readonly number[] = [1, 2, 3];

// const a: number = 10;

// type User<T> = {
//     id: number;
//     name: string;
//     info: T
// }

// const user1: User<{
//     address: string;
//     province: string;
// }> = {
//     id: 1,
//     name: 'An',
//     info: {
//         address: 'HN',
//         province: 'Hn'
//     }
// }

// const user2: User<{
//     ward: string;
//     district: string;
// }> = {
//     id: 1,
//     name: 'Quý',
//     info: {
//         ward: 'Tây Mỗ',
//         district: 'Từ Liêm'
//     }
// }

// const getUser = <T>(user: T) => {

// }

// function getUser<T>(user: T, key: keyof T) {
//     console.log(user[key]);
// }

// type User = {
//     id: number;
//     name: string
// }

// getUser<User>({ id: 1, name: 'An' }, "name")

// class User<T> {
//     public data: T
//     constructor(data: T) {
//         this.data = data;
//     }
// }

// const user = new User<{ id: number }>({ id: 1 })

//Khai báo kiểu là hàm: (thamso1: kieu, thamso2: kieu) => giatritrave

// type User = {
//     showInfo: () => void;
//     getName(): string;
// }

// const debounce = (callback: (...args: unknown[]) => void, timeout = 500) => {
//     let id: number;
//     return (...args: unknown[]) => {
//         if (id) {
//             clearTimeout(id);
//         }
//         id = setTimeout(() => {
//             callback(...args);
//         }, timeout);
//     }
// }

// debounce((a: number, b: number) => {
//     console.log(a);
//     console.log(b);
// }, 1000);

// type User = {
//     id: number;
//     name: string;
//     email: string;
// }

// type User2 = Partial<User>;

// type User = {
//     id?: number;
//     name?: string;
//     email?: string;
// }

// type User2 = Required<User>;

// type User = {
//     id: number;
//     name: string;
//     email: string;
// }
// type User2 = Omit<User, 'email' | 'id'>;

// type User = {
//     id: number;
//     name: string;
//     email: string;
// }
// type User2 = Readonly<User>

// const sum = (a: number, b: number) => a + b;
// type Sum = ReturnType<typeof sum>;

// type User = {
//     id: number;
//     name: string;
//     email: string;
// }
// type User2 = Pick<User, 'name' | 'email'>;

type User = {
    id: number;
    name: string;
    email: string;
}

// const data: Record<"x" | "y", User> = {
//     x: { id: 1, name: 'An', email: 'an@gmail.com' },
//     y: { id: 2, name: 'Tuấn', email: 'tuan@gmail.com' }
// }

const data: Record<"x" | "y", string[] | number[]> = {
    x: [1, 2, 3],
    y: ['A', 'B', 'C']
}