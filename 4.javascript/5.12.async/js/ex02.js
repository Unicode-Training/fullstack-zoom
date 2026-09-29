//async function: Bọc promise
// const doSomething = async () => {
//     return 'Hello anh em';
// }
// console.log(doSomething());


//await keyword
// - Tạm dừng đoạn code bên dưới để chờ Promise trả về kết quả
// - Cú pháp: await ten-promise
const getUsers = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = ['User 1', 'User 2', 'User 3'];
            resolve(users)
            // reject('Lỗi lấy users')
        }, 1000);
    })
}
// const display = async () => {
//     console.log('Start');
//     try {
//         // throw 'Có lỗi';
//         const users = await getUsers();
//         console.log(users);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log('Hoàn thành');
//     }
// }
// display();
// console.log('Ok chưa?');

const users = await getUsers();
console.log(users);
