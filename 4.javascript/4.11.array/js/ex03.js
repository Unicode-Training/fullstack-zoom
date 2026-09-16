
// const numbers = [1, 3, 11, 5, 7, 9]

//Kiểm tra trong mảng numbers có số chẵn hay không?

// const result = numbers.some((val, index) => {
//     return val % 2 === 0;
// });
// console.log(result);

//Kiểm tra trong numbers xem tất cả có phải số lẻ không?
// const result = numbers.every((val, index) => {
//     return val % 2 !== 0;
// });
// console.log(result);

// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const result = numbers.findIndex((val) => val % 2 === 0);
// console.log(result);

//Sự khác nhau với indexOf() -> Logic chỉ so sánh bằng
// const numbers = [1, 2, 3, 4, 5, 6, 7];
//Ví dụ: Tìm index của value = 2;
// const index = numbers.indexOf(2);
// console.log(index);

// const users = [
//     [
//         'User 1'
//     ],
//     [
//         'User 2'
//     ],
//     [
//         'User 3'
//     ]
// ];

//Tìm index của value ['User 2']
// const index = users.indexOf(['User 2']);
// console.log(index);

// const search = ['User 2'];
// const index = users.findIndex((val) => {
//     console.log(val);
//     return val[0] === search[0];
// });
// console.log(index);

// const numbers = [1, 2, 3, [4, 5, [6, [7, [8]]]]];
// console.log(numbers);

// const flatNumber = numbers.flat(Infinity);
// console.log(flatNumber);

// const number = [5, 10, 15, 20, 25, 30];
// console.log(number);
// const result = number.reduce((acc, cur, index) => {
//     console.log(`acc: ${acc}. cur: ${cur}. index: ${index}`);
//     return cur + acc;
// }, 0)

// console.log(result);

//Ví dụ: Tìm max trong mảng
// const numbers = [2, 8, 1, 7, 3];
// let max = numbers[0];
// numbers.forEach((val) => {
//     if (max < val) {
//         max = val;
//     }
// });
// console.log(max);
// const max = numbers.reduce((acc, cur) => {
//     if (acc < cur) {
//         return cur;
//     }
//     return acc;
// });
// console.log(max);

//Ví dụ: Lọc trùng mảng
// const users = ['User 1', 'User 2', 'User 3', 'User 2', 'User 4'];
// const usersUnique = users.reduce((acc, cur) => {
//     if (!acc.includes(cur)) {
//         acc.push(cur);
//     }
//     return acc;
// }, []);
// console.log(usersUnique);

//Bài tập: 
// const arr1 = [1, 2, 3, 5];
// const arr2 = [3, 5, 9];

//Yêu cầu: Tìm các phần tử khác giữa arr1 và arr2 (Có trong arr1 nhưng không có trong arr2)
//[1,2]
//Dùng reduce

// const diffArr = arr1.reduce((acc, cur) => {
//     if (!arr2.includes(cur)) {
//         acc.push(cur);
//     }
//     return acc;
// }, []);
// console.log(diffArr);

//Ví dụ: Chunk array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const size = 2;
// //Output: [[1,2], [3,4], [5,6], [7,8], [9]]
// const result = numbers.reduce((acc, cur, index) => {
//     if (index % size === 0) {
//         const chunk = numbers.slice(index, index + size);
//         acc.push(chunk);
//     }
//     return acc;
// }, []);
// console.log(result);

//So sánh mảng

// let a = 'An';
// const users = ['An'];

// console.log(a);
// console.log(users[0]);

// const arr1 = ['Item 1', 1, true, ['An', [[[1]]]]];
// const arr2 = ['Item 1', 1, true, ['An', [[[1]]]]];

// const compareArray = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     return arr1.every((item, index) => {
//         if (Array.isArray(item) && Array.isArray(arr2[index])) {
//             return compareArray(item, arr2[index]);
//         }
//         return arr2[index] === item;
//     })
// }
// console.log(compareArray(arr1, arr2));

// console.log(_.isEqual(arr1, arr2));

//Trong các ngôn lập trình -> Tồn tại định dạng dữ liệu giúp giao tiếp giữa các nền tảng với nhau -> JSON

// const arr1 = ['An', [30], 'an@gmail.com', () => { }];
// const arr2 = arr1.slice(0);

//Shallow copy
// const arr2 = [...arr1]; //spread
// arr2[0] = 'An Unicode';
// arr2[1][0] = 35;

//Deep copy
// - Chuyển về JSON
// const json = JSON.stringify(arr1);
// // - Chuyển ngược lại
// const arr2 = JSON.parse(json);

// const arr2 = _.cloneDeep(arr1);

// arr2[1][0] = 35;

// console.log(arr1);
// console.log(arr2);

//Destructuring Array
// const users = ['An', 'an@gmail.com', 35, 'Hà Nội'];
// const fullname = users[0];
// const email = users[1];
// const [fullname, email, _, address] = users;
// console.log(fullname);
// console.log(email);
// console.log(address);

// let [fullname, ...data] = users;
// console.log(fullname);
// console.log(data);
// fullname = 'ABC';

// console.log(fullname);

//Spread
// const arr1 = ['A', 'B', 'C'];
// const arr2 = [1, ...arr1, 2];
// console.log(arr2);

// const users = [
//     [
//         'User 1',
//         'user1@gmail.com'
//     ],
//     [
//         'User 2',
//         'user2@gmail.com'
//     ],
//     [
//         'User 3',
//         'user3@gmail.com'
//     ]
// ]

// const newUsers = users.map((user) => {
//     const clone = [...user];
//     if (clone.includes('user2@gmail.com')) {
//         clone.push(30);
//     }
//     return clone;
// });
// console.log(newUsers);
// console.log(users);

// const user = [...users.find((user) => {
//     return user.includes('user2@gmail.com');
// })];
// user.push(30);
// console.log(user);
// console.log(users);

//Array.from() --> Chuyển Array-like -> Array
//Spread
// const pList = document.getElementsByTagName('p');
// // Array.from(pList).map((val) => {
// //     console.log(val);
// // })
// [...pList].map((val) => {
//     console.log(val);
// })

// function doSomething() {
//     [...arguments].forEach((val) => {
//         console.log(val);
//     })
// }
// doSomething(1, 2, 3, 4, 5);

// const pagesArray = [...Array(50).keys()].map((val) => {
//     return val + 1;
// });
// console.log(pagesArray);

// const pages = [];
// for (let i = 1; i <= 10; i++) {
//     pages.push(i);
// }
// console.log(pages);

//Lời khuyên: Nên dùng các method có sẵn của array, dùng đúng mục đích
