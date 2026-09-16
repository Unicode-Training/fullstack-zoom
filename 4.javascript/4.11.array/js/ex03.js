
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
const arr1 = [1, 2, 3, 5];
const arr2 = [3, 5, 9];

//Yêu cầu: Tìm các phần tử khác giữa arr1 và arr2 (Có trong arr1 nhưng không có trong arr2)
//[1,2]
//Dùng reduce