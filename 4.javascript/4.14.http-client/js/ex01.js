//XHR

// const requestApi = (url, method = 'GET', body = null) => {
//     const statusMap = {
//         400: 'Bad Request',
//         401: 'Unauthorized',
//         403: 'Forbidden',
//         404: 'Not Found',
//         429: 'Too Many Requests',
//         500: 'Internal Server Error',
//         502: 'Bad Gateway',
//         503: 'Service Unavailable'
//     };
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();


//         xhr.open(method, url);
//         if (body) {
//             xhr.setRequestHeader('Content-Type', 'application/json');
//         }
//         xhr.send(JSON.stringify(body));

//         xhr.onload = () => {
//             if (statusMap[xhr.status]) {
//                 reject(statusMap[xhr.status])
//             } else {
//                 const data = JSON.parse(xhr.responseText);
//                 resolve(data);
//             }

//         }

//         xhr.onerror = () => {
//             reject(new Error('Network request'));
//         }

//     })
// }

//Lấy danh sách posts
// const getPosts = async () => {
//     try {
//         const posts = await requestApi(`https://shop-api.unicode.vn/shopping-cart`);
//         console.log(posts);
//     } catch (error) {
//         console.log(error);

//     }
// }
// getPosts();

// const createPost = async () => {
//     const data = await requestApi('https://jsonplaceholder.typicode.com/posts', 'POST', {
//         userId: 1,
//         title: "Hello anh em"
//     });
//     console.log(data);
// }
// createPost();

//GET -> Lấy dữ liệu
//POST -> Thêm mới dữ liệu
//PUT -> Cập nhật (Ghi đè dữ liệu)
//PATCH -> Cập nhật (Chỉ cập nhật trường gửi lên)
//DELETE -> Xóa

//Tiêu chuẩn RESTful

//Fetch -> tự động trả về Promise
// fetch(`https://jsonplaceholder.typicode.com/posts`).then(response => {
//     // console.log(response);
//     // console.log(Array.from(response.headers.entries()));
//     // console.log(response.headers.get("content-type"));
//     return response.text();
// }).then(data => {
//     console.log(data);
// });

// const getPosts = async () => {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com1/posts`);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getPosts();


const createPost = async () => {
    const response = await fetch(`http://localhost:3000/posts`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: "Ahihi" })
    });
    const data = await response.json();
    console.log(data);
}

createPost();