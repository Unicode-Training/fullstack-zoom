//Định nghĩa hàm
// function showMessage(msg, status = 'success') {
//     console.log('Hello anh em', msg, status);
// }

//Gọi hàm
// console.log('Function');
// showMessage('A', null);
// showMessage('B', 'error');
// showMessage(1);
// showMessage(2);

// function getTotal(a, b) {
//     const total = a + b
//     return total
// }

// const result = getTotal(10, 20);
// console.log(result);

// function doSomething() {
//     let a = 10;
//     let b = 20;
//     let total = a + b;
//     return total *= 2, total;
// }
// console.log(doSomething());

// let data = 'Học Js không khó'; //Toàn cục
// function getMessage() {
//     let a = 10;
//     console.log(a);
//     let data = 'Học JavaScript';
//     // console.log(data);
// }
// getMessage();
// console.log(data);

//Memory Leak -> Rò rỉ bộ nhớ

// function doSomething(a, b, ...args) {
//     console.log(a, b);
//     console.log(args);
// }
// doSomething(10, 20, 30, 40, 50, 60);

// function doSomething(...args) {
//     console.log(args);
// }
// doSomething(10, 20, 30, 40, 50, 60);


// function doSomething(a, b) {
//     console.log(a, b);
// }

// const values = [10, 20];
// doSomething(...values); //Spread

// const doSomething = function () {
//     console.log('doSomething');
// }

// if (typeof doSomething === 'function') {
//     doSomething();
// }

// function display(a, callback, ...args) {
//     console.log(a);
//     if (typeof callback === 'function') {
//         callback(...args);
//     }
//     /*
//     b = function() {
//         console.log('Xin chào anh em');
//     }
//     */
// };
// const handler = function (value) {
//     console.log('Xin chào anh em', value);
// };
// display(10, function () {
//     handler('An');
// });

// display(10, function (value, status) {
//     console.log('Xin chào anh em', value, status);
// }, 'An', 'success')

//setTimeout
// setTimeout(function (a, b) {
//     console.log('Hello anh em', a, b);
// }, 2000, 10, 20);

//Viết hàm kiểm tra số nguyên tố và định dạng output
// const checkPrime = function (number, callback) {
//     let status = true;
//     if (number <= 1 || number % 1 !== 0) {
//         status = false
//     } else {
//         for (let i = 2; i < number; i++) {
//             if (number % i === 0) {
//                 status = false;
//                 break;
//             }
//         }
//     }

//     if (typeof callback === 'function') {
//         callback(number, status);
//         return; //Thoát
//     };

//     return status;
// }

// checkPrime(5, function (number, status) {
//     if (status) {
//         console.log(`${number} là số nguyên tố`);
//     } else {
//         console.log(`${number} không phải số nguyên tố`);
//     }
// });

// checkPrime(10, function (number, status) {
//     document.body.innerHTML = `${number} là ${status ? 'Số nguyên tố' : 'Không phải số nguyên tố'}`
// });

// const isPrime = checkPrime(3);
// console.log(isPrime);

// const button = document.querySelector('button');
// button.addEventListener('click', function () {
//     console.log('Hello');

// });

//A
//B
//C
//B gọi A
//C gọi B


// const funcC = function () {
//     funcB();
//     console.log('funcC');
// }

// const funcB = function () {
//     funcA();
//     console.log('funcB');
// }

// const funcA = function () {
//     console.log('funcA');
// }


// funcC();

// let a = 10;

// const display = function (msg) {
//     let b = 20;
//     const showMessage = function () {
//         console.log('showMessage');
//         console.log(`a`, a);
//         console.log(`b`, b);
//         console.log(`msg`, msg);
//     }
//     showMessage(); //Hàm Closure
// }

// display('Hello');

// const counter = function () {
//     let count = 0;
//     return function () {
//         count++;
//         console.log(count);
//     }
// }

// const increment = counter();
// increment();
// increment();
// increment();
// increment();

// const increment2 = counter();
// increment2()
// increment2()
// increment2()
// increment2()

// let count = 0;
// const increment = function () {
//     count++;
//     console.log(count);
// }
// increment();
// increment();
// increment();
// increment();

// count = 0;
// increment();
// increment();
// increment();
// increment();

// const getMessage = (msg) => {
//     console.log('Hello anh em');
//     console.log(msg);
// }
// getMessage('An');

// const sum = (a, b) => a + b; //return a + b;
// console.log(sum(10, 20));

//{x: 10}
// const getPoint = () => ({ x: 10 });
// console.log(getPoint());

// const users = [
//     {
//         id: 1,
//         name: 'An'
//     },
//     {
//         id: 2,
//         name: 'Dũng'
//     },
//     {
//         id: 3,
//         name: 'Đạt'
//     }
// ];

// const getUser = (userId) => users.find(user => user.id === userId);
// console.log(getUser(2));

// const getUser = function (userId) {
//     return users.find(function (user) {
//         return user.id === userId;
//     })
// }
// console.log(getUser(2));

// (function (msg) {
//     console.log('Hello anh em', msg);
// })('An');

// ((msg) => {
//     console.log(msg);
// })('An');

// const showNumber = (number) => {
//     console.log(number);
//     if (number === 1) {
//         return;
//     }
//     showNumber(number);
// }
// showNumber(10);

//S = 1 + 2 + 3 + 4 + 5 + .. + 10
const getTotal = (n) => {
    if (n === 1) {
        return 1;
    }
    const result = n + getTotal(n - 1);
    console.log(n);

    return result;
}
console.log(getTotal(10));

//10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1