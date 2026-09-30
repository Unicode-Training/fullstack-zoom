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

const getUsers = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = ['User 1', 'User 2', 'User 3'];
            resolve(users)
            // reject('Lỗi lấy users')
        }, 1000);
    })
}

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const products = ['Product 1', 'Product 2', 'Product 3'];
            // resolve(products);
            reject('Lỗi lấy products')
        }, 2000);
    })
}

const getPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['Post 1', 'Post 2', 'Post 3'];
            resolve(posts)
            // reject('Lỗi khi lấy posts');
        }, 1500);
    })
}

// getUsers()
//     .then(users => {
//         console.log(users);
//         return getProducts();
//         //Lấy promise của getProducts bỏ vào promise của then
//     })
//     .catch(error => {
//         console.log(error);
//         return getProducts();
//     })
//     .finally(() => {
//         console.log('Hoàn thành');
//         return getProducts();
//     })
//     .then((products) => {
//         console.log(products);
//         return getPosts();
//     })
//     .catch(error => {
//         console.log(error);
//         return getPosts();
//     })
//     .finally(() => {
//         console.log('Hoàn thành');
//         return getPosts();
//     })
//     .then(posts => {
//         console.log(posts);
//     }).catch(error => {
//         console.log(error);
//     }).finally(() => {
//         console.log('Hoàn thành');
//     })

//Bài tập
// const getUser = (userId) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const users = [
//                 {
//                     id: 1,
//                     name: "User 1",
//                     salary: 1000
//                 },
//                 {
//                     id: 2,
//                     name: "User 2",
//                     salary: 2000
//                 },
//                 {
//                     id: 3,
//                     name: "User 3",
//                     salary: 3000
//                 }
//             ];
//             resolve(users.find((val) => val.id === userId));
//         }, Math.random() * 2000);
//     })
// }

// const ids = [1, 2, 3];

//Yêu cầu: Viết hàm tính tổng lương của các user có trong mảng ids -> Tái sử dụng được giá trị tổng
//Ràng buộc: Không được dùng Promise.all, async/await

// const getSalary = () => {
//     return new Promise((resolve) => {
//         let total = 0;
//         let count = 0;
//         for (let i = 0; i < ids.length; i++) {
//             getUser(ids[i]).then(data => {
//                 total += data.salary;
//                 count++;
//                 if (count === ids.length) {
//                     resolve(total);
//                 }
//             })
//         }
//     })
// }

// getSalary().then(data => {
//     console.log(data);
// });

//Promise.all(): Chạy song song các tác Promise sau đó trả về kết quả 1 lần
// const start = Date.now();
// Promise.all([getUsers(), getProducts(), getPosts()]).then(data => {
//     console.log(data);
//     const end = Date.now();
//     console.log(`${(end - start) / 1000}s`);
// }).catch(error => {
//     console.log(error);
// })
// Promise.race([getUsers(), getProducts(), getPosts()]).then(data => {
//     console.log(data);
// });
// const start = Date.now();
// let total = 0;
// getUsers()
//     .then(users => {
//         console.log(users);
//         const end = Date.now();
//         const diff = end - start;
//         total += diff;
//         return getProducts();
//     })
//     .then((products) => {
//         console.log(products);
//         const end = Date.now();
//         const diff = end - start;
//         total += diff;
//         return getPosts();
//     })
//     .then(posts => {
//         console.log(posts);
//         const end = Date.now();
//         const diff = end - start;
//         total += diff;

//         console.log(total / 1000);

//     })

// const getUser = (userId) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const users = [
//                 {
//                     id: 1,
//                     name: "User 1",
//                     salary: 1000
//                 },
//                 {
//                     id: 2,
//                     name: "User 2",
//                     salary: 2000
//                 },
//                 {
//                     id: 3,
//                     name: "User 3",
//                     salary: 3000
//                 }
//             ];
//             resolve(users.find((val) => val.id === userId));
//         }, Math.random() * 2000);
//     })
// }

// const ids = [1, 2, 3];

// const getSalary = () => {
//     return Promise.all(ids.map((id) => getUser(id))).then(data => {
//         const total = data.reduce((acc, cur) => acc + cur.salary, 0);
//         return total;
//     })
// }

// getSalary().then(data => {
//     console.log(data);

// });

