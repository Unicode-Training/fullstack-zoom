//Kế thừa: Tái sử dụng lại các thuộc tính, phương thức của class cha

// class User {
//     constructor(name, email) {
//         console.log(`Constructor User`);

//         this.name = name;
//         this.email = email;
//     }

//     getName() {
//         return this.name;
//     }

//     getEmail() {
//         return this.email;
//     }
// }

// class Auth extends User {

//     status = 'ACTIVE'; //ES2022

//     constructor(name, email, age) {
//         console.log(`Constructor Auth`);

//         super(name, email); //Gọi constructor của class cha
//         this.age = age;
//         this.email = 'abc';
//     }

//     getInfo() {
//         console.log(this.name);
//         console.log(this.email);

//     }

//     getEmail() {
//         // console.log(super.getEmail())
//         // console.log('new email');
//         console.log(this.email);
//     }
// }

// const auth = new Auth('An', 'an@gmail.com', 34);
// auth.getEmail();

//Setter, Getter
// class User {
//     #data = ['Item 1', 'Item 2', 'Item 3'];

//     get latest() {
//         //check logic
//         return this.#data.at(-1);
//     }

//     set latest(value) {
//         //check logic
//         this.#data.push(value);
//     }

//     get all() {
//         return this.#data;
//     }
// }

// const user = new User();
// // console.log(user.latest);

// //console.log(user.latest)
// //user.latest = 'new value';

// user.latest = 'new value';
// console.log(user.latest);
// console.log(user.all);

// //arr.length

// const btn = document.querySelector('button');
// const input = document.querySelector('input');
// const h1 = document.querySelector('h1');
// btn.addEventListener('click', () => {
//     // console.log(input.value);
//     // input.value = 'Thắng';
//     // console.log(h1.innerText);
//     // h1.innerText = 10;
//     // h1.innerText++;
// })

// class User {
//     #speed = 0;

//     get speed() {
//         return this.#speed;
//     }

//     set speed(val) {
//         this.#speed = val;
//     }
// }

// class Auth extends User {
//     get speed() {
//         return super.speed * 1.5;
//     }
// }

// const auth = new Auth();
// console.log(auth);
// auth.speed = 10; //read-only -> không có tác dụng
// console.log(auth.speed);

// const user = new User();
// user.speed = 10;
// console.log(user.speed);

//{get, set}
//{get}

//box.style = {}

// const box = document.querySelector('.box');
// box.style = {
//     color: 'red'
// }
// box.style.color = 'red';

// const myObj = { x: 10 };
// myObj = { a: 5 }
// myObj.x = 20;

//Định nghĩa setter, getter trong Literal Object
// const myObj = {
//     data: null,
//     get myName() {
//         return this.data;
//     },
//     set myName(val) {
//         this.data = val;
//     }
// }

// myObj.myName = 'ahihi';
// console.log(myObj.myName);

//Bất biến: Đóng băng object, không thay đổi được
// const user = {
//     name: 'An',
//     age: 34,
//     info: {
//         address: 'Hà Nội'
//     }
// }
// Object.freeze(user);
// user.info.address = 'HCM';

// user.name = 'Hoàng An';
// user.address = 'HN';

// console.log(user);

// const users = ['An', 'Đạt', 'Tùng'];
// Object.freeze(users);
// users.push('Tuấn');
// console.log(users[0]);

// console.log(config);

//Destructuring
// const user = {
//     name: 'An',
//     email: 'an@gmail.com',
//     age: null,
//     address: 'HN'
// }
// const { name: fullname, email, ...data } = user;
// console.log(fullname, email);
// console.log(data);

// const { age = 30 } = user;
// console.log(age);

// const users = [
//     {
//         id: 1,
//         name: "User 1"
//     },
//     {
//         id: 2,
//         name: "User 2"
//     },
//     {
//         id: 3,
//         name: "User 3"
//     }
// ]
// const getUser = (userId) => users.find(({ id }) => id === userId);
// console.log(getUser(1));

// const state = {
//     count: 10,
//     message: "Hello anh em",
//     products: ['Product 1', 'Product 2', 'Product 3']
// }
// Object.freeze(state);

//Tạo object state mới -> với Product 4 được thêm vào
// const newState = {
//     ...state,
//     products: [...state.products, 'Product 4']
// }
// console.log(newState);

// const fullname = 'Hoàng An';
// const email = 'hoangan.web@gmail.com';
// const age = undefined;
// const user = {
//     fullname,
//     email,
//     age //age: undefined
// }
// console.log(user);

//Kết hợp enhancement + destructuring -> Xây dựng function named arguments
// const doSomething = (a = 0, b = false, c = null) => {
//     console.log(`a = ${a}`);
//     console.log(`b = ${b}`);
//     console.log(`c = ${c}`);
// }

// doSomething(0, false, 'An');

// const doSomething = ({ a = 0, b = false, c = null }) => {
//     console.log(`a = ${a}`);
//     console.log(`b = ${b}`);
//     console.log(`c = ${c}`);
// }

// const c = 'An';
// doSomething({ c })

const menus = [
    {
        id: 1,
        name: "Menu 1",
        parent: 0
    },
    {
        id: 2,
        name: "Menu 2",
        parent: 0
    },
    {
        id: 3,
        name: "Menu 3",
        parent: 0
    },
    {
        id: 4,
        name: "Menu 2.1",
        parent: 2
    },
    {
        id: 5,
        name: "Menu 2.2",
        parent: 2
    },
    {
        id: 6,
        name: "Menu 2.3",
        parent: 2
    },
    {
        id: 7,
        name: "Menu 2.2.1",
        parent: 5
    },
    {
        id: 8,
        name: "Menu 2.2.1.1",
        parent: 7
    }
]

// const tree = [
//     {
//         id: 1,
//         name: "Menu 1",

//     },
//     {
//         id: 2,
//         name: "Menu 2",
//         children: [
//             {
//                 id: 4,
//                 name: "Menu 2.1",

//             },
//             {
//                 id: 5,
//                 name: "Menu 2.2",
//                 children: [
//                     {
//                         id: 7,
//                         name: "Menu 2.2.1",
//                     }
//                 ]
//             },
//             {
//                 id: 6,
//                 name: "Menu 2.3",
//             },
//         ]
//     },
//     {
//         id: 3,
//         name: "Menu 3",
//     },
// ]


// const newMenus = menus
//     .map((ele) => {
//         if (ele.parent === 0) {
//             delete ele.parent;
//             return ele;
//         }

//         const parentId = ele.parent;
//         const menu = menus.find((ele) => ele.id === parentId);

//         if (menu.children === undefined) {
//             menu.children = [ele];
//         } else {
//             menu.children.push(ele);
//         }

//         delete ele.parent;
//     })
//     .filter((ele) => ele);
// console.log(newMenus);

// const createMenu = (parent) => {
//     return menus
//         .filter(menu => menu.parent === parent)
//         .map(menu => ({
//             id: menu.id,
//             name: menu.name,
//             children: createMenu(menu.id)
//         }));
// };

// const result = createMenu(0);

// console.log(result);

// const buildTree = (menus = [], parent = 0) => {
//     let tree = [];
//     menus.forEach((menu) => {
//         if (menu.parent === parent) {
//             const clone = { ...menu };
//             delete clone.parent;
//             tree.push(clone);
//             const sub = buildTree(menus, menu.id);
//             if (sub.length) {
//                 clone.children = sub;
//             }
//         }
//     })
//     return tree;
// }

// const menuNested = buildTree(menus);

// const buildMenuOutput = (menuNested) => {
//     menuNested.forEach((menu) => {
//         html += `<li><a href="#">${menu.name}</a>`;
//         if (menu.children) {
//             html += `<ul class="sub-menu">`
//             buildMenuOutput(menu.children);
//             html += `</ul>`;
//         }
//         html += `</li>`;
//     })
// }

// let html = `<ul class="menu">`;
// buildMenuOutput(menuNested);
// html += `</ul>`

// document.body.innerHTML = html;

//Set: Tập hợp các giá trị không trùng nhau

// const user = {
//     x: 10
// }

// const mySet = new Set();
// mySet.add('An');
// mySet.add(10);
// mySet.add(user);

// const myArr = [...mySet];
// console.log(myArr);


// console.log(mySet);

//Iterable là các giá trị có thể dùng for...of để lặp: string, array
// const myArr = ['Item 1', 'Item 2', 'Item 1', 'Item 2', 'Item 3'];
// const uniqueArray = [...new Set(myArr)];
// console.log(uniqueArray);

//Map
// const myMap = new Map();
// const user = { x: 10 }
// myMap.set('name', 'An');
// myMap.set('email', 'an@gmail.com');
// myMap.set(user, 'Hello anh em');
// myMap.set(user, 'Hello anh em 1');

// // console.log(myMap.get(user));
// // console.log(myMap.get('name'));

// // myMap.delete('email');
// console.log(myMap.has('email'));


// myMap.forEach((val, key) => {
//     console.log(val, key);

// })

//Điểm lợi so với object
// - key có thể nhận bất kỳ kiểu dữ liệu nào
// - Có sắp xếp theo thứ tự
// - Hỗ trợ sẵn các method xử lý: set, get, delete, clear,...

//Buổi sau: Bất đồng bộ: Callback, Event Loop, Promise, Async/Await

const twoSum = (arr, K) => {
    const result = [];
    const seenNumbers = new Set();
    const uniquePairs = new Set();
    for (let i = 0; i < arr.length; i++) {
        const currentNum = arr[i];
        const complement = K - currentNum;
        const low = Math.min(complement, currentNum);
        const high = Math.max(complement, currentNum);
        const pairKey = `${low},${high}`;

        if (seenNumbers.has(complement)) {
            if (!uniquePairs.has(pairKey)) {
                result.push([complement, currentNum]);
                uniquePairs.add(pairKey);
            }
        }

        seenNumbers.add(currentNum);
    }

    return result;
}

console.log(twoSum([2, 4, 2, 4], 6));
