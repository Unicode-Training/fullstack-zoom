// console.log(Array.prototype);

// const myArr = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

// console.log(myArr);

// const newArr = myArr.concat([1, 2, 3], ['A', 'B', 'C'])
// console.log(newArr);

// const newArr = myArr.concat('An');
// console.log(newArr);

// const newArr = myArr.fill(1);

// console.log(myArr);
// console.log(newArr);

// console.log(myArr.indexOf('Item 2'));

// console.log(myArr.lastIndexOf('Item 2'));

// console.log(myArr.includes('Item 2'));

// console.log(myArr.slice(-2));

//Ví dụ: Tạo mảng mới (Bỏ phần tử cuối cùng)

//Chaining
// let fullname = 'Tạ Hoàng An';
// let firstName = fullname.split(' ').at(-1);
// console.log(firstName);

// myArr.splice(1, 0, 'New Value 1', 'New Value 2');
// console.log(myArr);

// myArr.unshift('New 1', 'New 2');
// myArr.shift();
// console.log(myArr);

// const result = myArr.join(' ');
// console.log(result);

// const reverseArray = myArr.reverse();

// console.log(myArr);
// console.log(reverseArray);
// console.log(myArr === reverseArray);

// const names = [
//     'Dung',
//     'Thang',
//     'An',
//     'Tung',
//     'Hung',
// ]

// names.sort().reverse();

// console.log(names);

// const numbers = [10, 1, 6, 9, 3, 8];
// numbers.sort((a, b) => {
//     //return
//     //- Nếu số âm: a đứng trước b
//     //- Nếu số dương: b đứng trước a
//     //- Nếu số 0: Giữ nguyên
//     // if (a < b) {
//     //     return -1;
//     // }
//     // return a - b; //Tăng dần
//     // return b - a; //Giảm dần
// });

// console.log(numbers);

//Ví dụ: Sắp xếp mảng sau theo thứ tự tăng dần của độ dài từng loại quả
// const fruits = ["Apple", "Banana", "Orange", "Mango", "Watermelon", "Durian", "Avocado", "Longan"];
// fruits.sort((a, b) => {
//     return a.length - b.length;
// });
// console.log(fruits);

//Bài tập: Sắp xếp danh sách sau theo thứ tự tăng dần theo tên
// const names = [
//     "Phạm Minh Dũng",
//     "Hoàng Thu Thảo",
//     "Nguyễn Văn An",
//     'Trương Minh Đức',
//     "Vũ Hải Yến",
//     "Trần Thị Bình",
//     "Lê Hoàng Cường",
// ];

// const getFirstname = (fullname) => fullname.split(' ').at(-1);

// names.sort((a, b) => {
//     if (getFirstname(a).localeCompare(getFirstname(b), "vi") < 0) {
//         return -1;
//     }
// });
// console.log(names);

// myArr.forEach((value, index) => {
//     console.log(value, index);
// })

// const newArr = myArr.map((value, index) => {
//     // return `${index + 1}: ${value}`
//     return value.split(' ').at(0);
// });

// console.log(newArr);

//Semantic

// const number = [1, 2, 3, 4, 5, 6, 7];
// const newArr = number.filter((value, index) => {
//     // return value % 2 === 0;
//     return index;
// })
// console.log(newArr);

//Ví dụ: Tìm giao giữa 2 nảng: [3,8]
// const arr1 = [
//     5, 2, 9, 3, 8
// ];

// const arr2 = [
//     3, 8, 1, 4
// ]

// const result = arr1.filter((value) => {
//     return arr2.includes(value);
// });
// console.log(result);
