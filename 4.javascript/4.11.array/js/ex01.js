//Array

console.log(Array.prototype);


//Khai báo
// const myArr = ['Item 1', 'Item 2', 1, 2, 3];

//Thêm phần tử
// myArr[myArr.length] = 'An';
// myArr[myArr.length] = 'Thắng';

//Cập nhật phần tử
// myArr[1] = 'Ok chưa?';

//Lấy ra giá trị phần tử
// console.log(myArr[2]);

//Duyệt từng phần tử
// for (let i = 0; i < myArr.length; i++) {
//     console.log(myArr[i]);
// }

// for (const index in myArr) {
//     console.log(myArr[index]);
// }

// for (const value in myArr) {
//     console.log(value);
// }

// console.log(myArr);

//Xóa phần tử
// - Tạo mảng mới
// - Duyệt qua từng phần tử của mảng cũ -> thêm vào mảng mới + loại trừ index cần xóa
// const indexDel = 1; //Index cần xóa
// const newArr = [];
// for (const index in myArr) {
//     if (+index === indexDel) {
//         continue;
//     }
//     const value = myArr[index];
//     newArr[newArr.length] = value;
// }
// console.log(newArr);

// const myArr = [
//     [
//         'An',
//         'an@gmail.com'
//     ],
//     [
//         'Thắng',
//         'thang@gmail.com'
//     ]
// ];
// console.log(myArr);
// console.log(myArr[0][1]);

// const myArr = [
//     {
//         //key: value
//         id: 1,
//         name: "User 1"
//     },
//     {
//         id: 2,
//         name: "User 2"
//     }
// ]
// console.log(myArr[0].name);

//Bài toán: Lọc trùng mảng sau
// - Tạo mảng mới
// - Duyệt qua mảng cũ -> Thêm từng phần tử vào mảng mới (Kiểm tra nếu không có phần tử cần thêm thì mới thêm)
const users = ['User 1', 'User 2', 'User 3', 'User 2', 'User 4'];

const uniqueUsers = [];
const userNotExisting = (value) => {
    let status = true;
    for (const item of uniqueUsers) {
        if (item === value) {
            status = false;
            break;
        }
    }
    return status;
}
for (const user of users) {
    if (userNotExisting(user)) {
        uniqueUsers[uniqueUsers.length] = user;
    }

}
console.log(uniqueUsers);
