//async function

// console.log('Start');
// const myPromise = Promise.resolve('Hello anh em');
// myPromise.then(data => {
//     console.log(data);
// })
// console.log('End');


//Callstack
// - Start
// - myPromise.then()
// - End

//Event loop

//Microtask Queue
//-> callback của then

//Async await event loop
// const myPromise = Promise.resolve('Hello anh em');
// const display = async () => {
//     console.log('Start');
//     // const data = await myPromise;
//     // console.log(data);
//     // console.log('End');
//     myPromise.then(data => {
//         console.log(data);
//         console.log('End');
//     })
// }
// display();


//Callstack
// - display()
// - Start
// - Tạm dừng những đoạn code bên dưới await (callback của promise) -> Đẩy callback vào Microtask queue
// - Giải phóng hàm display ra khỏi call stack -> Nhường chỗ cho các lệnh khác

//Event loop
// - Check call stack trống -> đẩy callback từ microtask queue lên

//Microtask Queue
// - callback của promise (Các đoạn phía dưới await)

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve('Hello anh em');
//             const error = new Error("Có lỗi khi lấy dữ liệu");
//             reject(error);
//         }, 1000);
//     })
// }

// const display = async () => {
//     try {
//         return await getPromise();
//     } catch {
//         throw new Error("Lỗi custom");
//     }
// }

//display -> return -> Promise.resolve(giatrireturn)

// display().then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error.message);
//     console.log(error.stack);
// })

//TH1: không có await
//display -> Promise.resolve(getPromise). display().then(data => console.log(data)) --> unwrap

//TH2: Có await
//display -> Promise.resolve('Hello anh em') 

// const getUsers = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const users = ['User 1', 'User 2', 'User 3'];
//             resolve(users)
//             // reject('Lỗi lấy users')
//         }, 1000);
//     })
// }

// const getProducts = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const products = ['Product 1', 'Product 2', 'Product 3'];
//             // resolve(products);
//             reject('Lỗi lấy products')
//         }, 2000);
//     })
// }

// const getPosts = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const posts = ['Post 1', 'Post 2', 'Post 3'];
//             resolve(posts)
//             // reject('Lỗi khi lấy posts');
//         }, 1500);
//     })
// }

// const getHome = async () => {
//     const start = Date.now();
//     const [users, products, posts] = await Promise.allSettled([getUsers(), getProducts(), getPosts()]);
//     if (users.status === "fulfilled") {
//         console.log(users.value);
//     } else {
//         console.log(`Lỗi: ${users.reason}`);
//     }
//     if (products.status === "fulfilled") {
//         console.log(products.value);
//     } else {
//         console.log(`Lỗi: ${products.reason}`);
//     }
//     if (posts.status === "fulfilled") {
//         console.log(posts.value);
//     } else {
//         console.log(`Lỗi: ${posts.reason}`);
//     }

//     const end = Date.now();
//     console.log(`${end - start}ms`);
// }
// getHome();
