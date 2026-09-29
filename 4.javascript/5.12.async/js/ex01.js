// console.log('Step 1');
// console.log('Step 2');
// setTimeout(function () {
//     console.log('Ok chua?')
// }, 0);
// Promise.resolve('Hello anh em').then(data => {
//     console.log(data);
// });
// console.log('Step 3');
// console.log('Step 4');

// setTimeout(() => {
//     console.log('B');
// }, 0);

// console.log('A');

// const getUsers = (callback) => {
//     setTimeout(() => {
//         const users = ['User 1', 'User 2', 'User 3'];
//         if (typeof callback === 'function') {
//             callback(users);
//         }
//     }, 1000);
// }
// const getProducts = (callback) => {
//     setTimeout(() => {
//         const products = ['Product 1', 'Product 2', 'Product 3'];
//         if (typeof callback === 'function') {
//             callback(products);
//         }
//     }, 1000);
// }
// const getPosts = (callback) => {
//     setTimeout(() => {
//         const posts = ['Post 1', 'Post 2', 'Post 3'];
//         if (typeof callback === 'function') {
//             callback(posts);
//         }
//     }, 1000);
// }
// getUsers((users) => {
//     console.log(users);
//     getProducts((products) => {
//         console.log(products);
//         getPosts((posts) => {
//             console.log(posts);
//             console.log('Thành công');
//         })
//     })
// });
//Callback hell

//Promise
//1. Định nghĩa object Promise -> Đưa dữ liệu vào Promise
// const myPromise = new Promise((resolve, reject) => {
//     //resolve: Hàm sẽ được gọi nếu muốn đánh dấu là thành công
//     //reject: Hàm sẽ được gọi nếu muốn đánh dấu là thất bại
//     setTimeout(() => {
//         const users = ['User 1', 'User 2', 'User 3'];
//         reject("Đã có lỗi xảy ra")
//         resolve(users) //Tương đương với fulfilled
//     }, 2000);
// })


// //2. Cách truy cập vào dữ liệu của Promise (Khi có dữ liệu)
// myPromise.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })

//Crash

//Promise chaining
// const myPromise = new Promise((resolve) => {
//     const promise1 = Promise.resolve('Hoàng An');
//     const promise2 = Promise.resolve(promise1);
//     resolve(promise2)
// });

// myPromise.then(data => {
//     console.log(data);
// })

//Unwrap

// const getUsers = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const users = ['User 1', 'User 2', 'User 3'];
//             resolve(users)
//         }, 1000);
//     })
// }

// const getProducts = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const products = ['Product 1', 'Product 2', 'Product 3'];
//             resolve(products);
//         }, 1000);
//     })
// }

// const getPosts = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const posts = ['Post 1', 'Post 2', 'Post 3'];
//             resolve(posts)
//         }, 1000);
//     })
// }

// getUsers().then(users => {
//     console.log(users);
//     return getProducts();
//     //Lấy promise của getProducts bỏ vào promise của then
// }).then((products) => {
//     console.log(products);
//     return getPosts();
// }).then(posts => {
//     console.log(posts);
// })

//Bài tập
const getUser = (userId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users = [
                {
                    id: 1,
                    name: "User 1",
                    salary: 1000
                },
                {
                    id: 2,
                    name: "User 2",
                    salary: 2000
                },
                {
                    id: 3,
                    name: "User 3",
                    salary: 3000
                }
            ];
            resolve(users.find((val) => val.id === userId));
        }, Math.random() * 2000);
    })
}

const ids = [1, 2, 3];
let total = 0;
for (let i = 0; i < ids.length; i++) {
    getUser(ids[i]).then(data => {
        total += data.salary;
    })
}
console.log(total);

//Yêu cầu: Viết hàm tính tổng lương của các user có trong mảng ids -> Tái sử dụng được giá trị tổng
//Ràng buộc: Không được dùng Promise.all, async/await