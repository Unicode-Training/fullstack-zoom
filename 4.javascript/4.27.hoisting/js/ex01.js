//Hoisting: Cơ chế tự động đẩy phần khai báo lên phía trước
// - var
// - decrlation function


// hello();

// const hello = () => {
//     console.log('ok');
// }

// class User { };
// new User();

function hello1() {
    console.log('hello1');
    hello2();
    hello3();
    hello4();
}

hello1();

function hello2() {
    console.log('hello2');
}

function hello3() {
    console.log('hello3');
}

function hello4() {
    console.log('hello4');
}

