//String
// let fullname = `An`;
// console.log(fullname);

//Number
// let age = 33;
// console.log(age);


//null
// let total = null;
// console.log(total);

//undefined
// let total = undefined;
// console.log(total);

//boolean
// let isVerified = true;
// console.log(isVerified);

//BigInt
// let age = 33n;
// let age = BigInt(33);
// console.log(age);

//Symbol
// let id = Symbol('id');
// console.log(id);

//Object
// const user = {
//     id: 10,
//     name: 'An',
//     email: 'an@gmail.com'
// }
// console.log(user);
// console.log(user.name);

// const users = ['An', 'Dũng', 'Đạt'];
// console.log(users);
// console.log(users[1]);

//Ví dụ: Lưu trữ danh sách người dùng, mỗi người dùng bao gồm: id, name, email
// const users = [
//     {
//         id: 1,
//         name: 'User 1',
//         email: 'user1@gmail.com'
//     },
//     {
//         id: 2,
//         name: 'User 2',
//         email: 'user2@gmail.com'
//     },
//     {
//         id: 3,
//         name: 'User 3',
//         email: 'user3@gmail.com'
//     }
// ];

// for (const index in users) {
//     const user = users[index];
//     console.log(user.email);
// }

//Kiểm tra kiểu dữ liệu => Thường dùng từ khóa typeof
// const search = new URLSearchParams(window.location.search).get('search');
// console.log(search);
// console.log(typeof search);

// console.log(typeof null);
// let a = null;
// console.log(a === null);

// console.log(typeof []);

// function doSomething() {
//     console.log('doSomething');
// }
// // const doSomething = "";

// if (typeof doSomething === 'function') {
//     doSomething();
// }

//Ép kiểu
// let a = 1234;
// console.log(a);
// console.log(typeof a);

// a = a + "";
// a = a.toString();
// console.log(a);
// console.log(typeof a);

// let isVerified = false;
// console.log(isVerified);
// console.log(isVerified.toString());

// let a = NaN;
// console.log(Boolean(a));

// let a = "10a";
// let b = 20;

// a = Number(a);
// a = +a;

// let c = a + b; //NaN + 20 = NaN
// console.log(c);

// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     const numberA = document.querySelector('.input-1').value;
//     const numberB = document.querySelector('.input-2').value;
//     let total = +numberA + +numberB;
//     console.log(total);
// })

// let a = 0;
// if (a) {
//     console.log('ok');
// } else {
//     console.log('not ok');
// }

// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     const numberA = document.querySelector('.input-1').value;
//     const numberB = document.querySelector('.input-2').value;
//     let total = numberA - numberB;
//     console.log(total);
//     document.querySelector('.output').innerHTML = [1, 2, 3]
// })
