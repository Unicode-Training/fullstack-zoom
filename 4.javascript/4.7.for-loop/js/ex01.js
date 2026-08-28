// for (let i = 1; i <= 10; i++) {
//     console.log('Lân lặp thứ: ', i);
// }

// for (let i = 10; i >= 1; i--) {
//     console.log('Lân lặp thứ: ', i);
// }

// for (let i = 1; i <= 5; i++) {
//     for (j = 1; j <= 5; j++) {
//         for (let k = 1; k <= 5; k++) {
//             console.log(`i = ${i}, j = ${j}, k = ${k}`);
//         }
//     }
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     if (i === 5) {
//         break;
//     }
// }

//Ví dụ: Tìm số chẵn nhỏ nhất trong khoảng từ begin đến end
// let begin = 5;
// let end = 21;
// let result;
// for (let i = begin; i <= end; i++) {
//     if (i % 2 === 0) {
//         result = i;
//         break;
//     }
// }
// console.log(result);

// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log(i);
// }

//Ví dụ: Tính tổng các số chẵn
// let total = 0;
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 !== 0) {
//         continue;
//     }

//     total += i;
// }
// console.log(total);

//Ví dụ: Tính giai thừa
// let n = 5; // 1 * 2 * 3 * 4 * 5
// let result = 1;
// for (let i = 2; i <= n; i++) {
//     result *= i;
// }
// console.log(result);

//Ví dụ: Kiểm tra 1 số xem có phải số nguyên tố hay không?
// - Số tự nhiên (Số nguyên dương)
// - > 1
// - CHỈ chia hết cho 1 và chính nó

//Kỹ thuật cắm cờ
// let isPrime = true;
// let n = 5;
// if (n % 1 !== 0 || n <= 1) {
//     isPrime = false;
// } else {
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }
// if (isPrime) {
//     console.log(`${n} là số nguyên tố`);
// } else {
//     console.log(`${n} không phải số nguyên tố`);
// }

//Ví dụ: Tính giá trị biểu thức
//S = 1 + 1*2 + 1*2*3 + ... + 1*2*3*...*n
//n = 5 --> 1 + 1*2 + 1*2*3 + 1*2*3*4 + 1*2*3*4*5

// let n = 5;
// let temp = 1;
// let total = 0;
// for (let i = 1; i <= n; i++) {
//     temp *= i;
//     total += temp;
// }
// console.log(total);

// let html = '';
// for (let i = 1; i <= 10; i++) {
//     html += `<h2>Hello anh em</h2>\n`;
// }
// document.body.innerHTML = html;

let html = ``;

let rows = 8;
let cols = 8;

for (let i = 1; i <= rows; i++) {
    html += `<div class="row">`;
    for (let j = 1; j <= cols; j++) {
        let total = i + j;
        let className = 'col';
        if (total % 2 !== 0) {
            className = 'col black';
        }
        html += `<div class="${className}"></div>`
    }
    html += `</div>`
}

document.body.innerHTML = html;    