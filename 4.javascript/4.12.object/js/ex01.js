// const myObj = {
//     name: 'An',
//     email: 'an@gmail.com',
//     age: 34,
//     address: 'Hà Nội',
// }

//Thêm
// myObj.position = 'Teacher';

// myObj['billingAddress'] = 'HCM';

// //Truy cập
// console.log(myObj.email);
// console.log(myObj['age']);

// //Xóa
// delete myObj.position;

// const key = 'email';
// console.log(myObj[key]);

//Duyệt danh sách key
// for (const key in myObj) {
//     console.log(key, myObj[key]);
// }

// console.log(myObj);

// const myArr = [
//     [
//         'name',
//         'An'
//     ],
//     [
//         'email',
//         'an@gmail.com'
//     ],
//     [
//         'age',
//         34
//     ]
// ]

// console.log(Object.fromEntries(myArr));

//Ví dụ: Lấy dữ liệu từ form
// const form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const formData = new FormData(form);
//     // const data = Object.fromEntries(formData.entries());
//     // console.log(data);
//     const name = formData.get('name');
//     const email = formData.get('email');
// })

// const obj1 = { x: 10, y: 20 };
// const obj2 = { a: 'An', b: 'Tùng' }
// const obj3 = { name: "Tuấn" }

// const combinedObject = Object.assign({}, obj1, obj2, obj3);
// console.log(combinedObject);
// console.log(obj1);

// const combinedObject = {
//     ...obj1,
//     ...obj2,
//     ...obj3
// }
// console.log(combinedObject);

// const box = document.querySelector('.box');
// box.style.color = 'red';
// box.style.backgroundColor = 'yellow';

// const css = {
//     color: 'red',
//     backgroundColor: 'yellow'
// }

// Object.assign(box.style, css);

// const myObj = {
//     name: 'An', //Thuộc tính
//     info: {
//         address: 'Hà Nội'
//     },
//     history: [
//         {
//             value: 'One'
//         },
//         {
//             value: 'Two'
//         }
//     ],
//     //Phương thức
//     getName() {
//         console.log('Chào An');
//     }
// }
// console.log(myObj);
// myObj.getName();
// console.log(myObj.info.address);

// myObj.history.forEach((val) => {
//     console.log(val.value);
// })

//Bài tập: Làm đẹp error message
// const initErrors = [
//     {
//         "code": "too_small",
//         "minimum": 3,
//         "type": "string",
//         "inclusive": true,
//         "exact": false,
//         "message": "Tên đăng nhập phải có ít nhất 3 ký tự",
//         "path": ["username"]
//     },
//     {
//         "validation": "email",
//         "code": "invalid_string",
//         "message": "Email không đúng định dạng",
//         "path": ["email"]
//     },
//     {
//         "code": "too_small",
//         "minimum": 18,
//         "type": "number",
//         "inclusive": true,
//         "exact": false,
//         "message": "Bạn phải từ 18 tuổi trở lên",
//         "path": ["age"]
//     }
// ]

//Output:
/*
{
    username: "Tên đăng nhập phải có ít nhất 3 ký tự",
    email: "Email không đúng định dạng",
    age: "Bạn phải từ 18 tuổi trở lên"
}
*/
// const error = {}
// initErrors.forEach((err) => {
//     const key = err.path[0];
//     const value = err.message;
//     error[key] = value;
// })
// console.log(error);

// const error = Object.fromEntries(initErrors.map((err) => [err.path[0], err.message]));
// console.log(error);

// const myObject = {
//     fullname: 'An',
//     email: 'an@gmail.com',
//     getName() {
//         // this = 'A';
//         console.log(this.fullname);
//     },
//     getInfo() {
//         return {
//             age: 34,
//             getAge() {
//                 console.log(this.age);
//             },
//             getEmail: () => {
//                 console.log(this.email);
//             }
//         }
//     }
// }
// myObject.getInfo().getEmail();

// myObject.getName();

// function sayHi() {
//     "use strict";
//     console.log(this);
// }
// sayHi();

// const doSomething = function (val) {
//     console.log(this);
//     console.log(val);

// }
// const point = {
//     x: 10,
//     y: 20
// }

// const newFunc = doSomething.bind(point);
// newFunc('Ahihi');

// const doSomething = function (a, b) {
//     console.log(this);
//     console.log(a, b);
// }
// const point = {
//     x: 10,
//     y: 20
// }
// const values = [50, 100]
// doSomething.call(point, 50, 100);
// doSomething.apply(point, values);
// doSomething.call(point, ...values);

// const app = {
//     start() {
//         //bind
//         this.handleClick = this.handleClick.bind(this);
//         this.count = 0;
//         this.render();
//     },
//     showResult() {
//         const span = document.querySelector('span');
//         span.innerText = this.count;
//     },
//     handleClick() {
//         this.count++;
//         this.showResult();
//     },
//     render() {
//         const btn = document.querySelector('button');
//         btn.addEventListener('click', this.handleClick);
//     }
// }

// app.start();
//start() -> render() -> handleClick() -> showResult()

// Object.prototype.message = 'Học lập trình không khó';

// const obj1 = {
//     x: 10,
//     y: 20,
// }
// const obj2 = {
//     a: 50,
//     b: 100
// }
// console.log(obj1);
// console.log(obj2);

// console.log(obj1.message);
// console.log(obj2.message);

//obj1, obj2 là instance của Object (cụ tổ)
// const age = 34; //Number (tạm thời) -> Object
// console.log(age.message);

// const fullname = 'An'; //String -> Object
// console.log(fullname.message);

// const myArr = []; //Array -> Object
// console.log(myArr.message);

// const isVerified = false; //Boolean -> Object
// console.log(isVerified.message);

// const id = Symbol('id'); //Symbol -> Object
// console.log(id.message);

// const price = 123n; //BigInt -> Object
// console.log(price.message);

// const doSomething = function () { } //Function -> Object
// console.log(doSomething.message);

// Array.prototype.latest = function () {
//     return this[this.length - 1];
// }
// const myArr = ['Item 1', 'Item 2', 'Item 3'];
// console.log(myArr.latest());

//Tạo 2 object có 2 thuộc tính, 2 phương thức (Chỉ khác dữ liệu)

//Quy tắc: PascalCase
// const User = function (name, email) {
//     this.name = name;
//     this.email = email;
//     this.getName = function () {
//         return this.name;
//     }
//     this.getEmail = function () {
//         return this.email;
//     }
// }

// class User {
//     #name = null;
//     #email = null;
//     static message = 'Học lập trình không khó';
//     constructor(name, email) {
//         this.#name = name;
//         this.#email = email;
//     }

//     //non-static
//     getName() {
//         console.log(this);
//         return this.#name;
//     }

//     #getEmail() {
//         return this.#email;
//     }

//     static getMessage() {
//         console.log(this);
//         console.log('Ok chưa?');
//     }
// }

// // User.prototype.message = 'Hello anh em';

// //Tạo instance
// const user1 = new User('An', 'an@gmail.com');
// // console.log(user1.message);
// user1.getName()
// //Array.isArray() --> Static
// //Object.keys() --> Static

// console.log(User.message);
// User.getMessage();

//Cách gọi chéo giữa static và non-static

class User {
    static PAGE_NUMBER = 10;
    age = 30; //non-static
    showRecord() {
        //chuyển this từ instance thành class
        //this.constructor -> class User
        console.log(this.constructor.PAGE_NUMBER);
    }
    static doSomething() {
        //Chuyển this từ class thành instance
        const instance = new this();
        console.log(instance.age);
    }
}

// const user = new User();
// user.showRecord();
User.doSomething();

//Design Pattern: Sington