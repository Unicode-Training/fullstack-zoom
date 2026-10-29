// import c, { a, b, doSomething as showMessage } from "./inc/utils.js";

// console.log(a, b);
// showMessage();
// //as = alias
// console.log(c);

// import hashing, { hashPassword, verifyPassword } from "./inc/hashing.js";

// hashPassword();
// verifyPassword();
// hashing();

// import * as hashing from "./inc/hashing.js";

// hashing.hashPassword();

//Tình huống
/*
project
    - modules
        - products
            - add.js
            - update.js
            - listing.js
            - delete.js
    - index.js
*/

// import { addProduct, updateProduct, deleteProduct, getListProduct } from "./modules/products/index.js";

//Trong module -> tự động bật strict mode
// x = 10;
// console.log(x);

//Tìm hiểu trước
// - npm (node package manager)
// - Build Tool vite
// - Hoàn thiện bài tập