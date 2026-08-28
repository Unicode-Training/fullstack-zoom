// let age = 1;
// if (age >= 18) {
//     console.log('Đủ tuổi');
// } else {
//     console.log('Không đủ tuổi');
// }

// if (age < 0) {
//     console.log('Không hợp lệ');
// } else if (age <= 3) {
//     console.log('Trẻ sơ sinh');
// } else if (age <= 5) {
//     console.log('Mầm non');
// } else if (age <= 10) {
//     console.log('Trẻ con');
// } else if (age <= 18) {
//     console.log('Vị thành niên');
// } else {
//     console.log('Trưởng thành');
// }

// let email = '1';
// let password = '2';

// if (!email || !password) {
//     if (!email) {
//         console.log('Email không được để trống');
//     } else {
//         console.log('Password không được để trống');
//     }
// } else {
//     console.log('Hợp lệ');
// }

//Bài toán: Tính thu nhập của 1 người sau khi đã trừ thuế
/*
Lương <= 5tr -> 0%
5tr > lương <= 10tr -> 3%
10tr > lương <= 15tr -> 5%
lương > 15tr -> 7%
*/

// const THRESHOLD_1 = 5000000;
// const THRESHOLD_2 = 10000000;
// const THRESHOLD_3 = 15000000;

// const TAX_RATE_1 = 0;
// const TAX_RATE_2 = 3;
// const TAX_RATE_3 = 5;
// const TAX_RATE_4 = 7;

// let taxRate;
// let income;
// let salary = 7500000;

// if (salary < 0) {
//     console.log('Không thỏa mãn điều kiện');
// } else if (salary <= THRESHOLD_1) {
//     taxRate = TAX_RATE_1;
// } else if (salary <= THRESHOLD_2) {
//     taxRate = TAX_RATE_2;
// } else if (salary <= THRESHOLD_3) {
//     taxRate = TAX_RATE_3;
// } else {
//     taxRate = TAX_RATE_4;
// }

// if (taxRate) {
//     income = salary - (salary * taxRate) / 100;
//     console.log(`Thu nhập: ${income}`);
// }

//Hardcode

//Bài toán: Tính tiền cước taxi
/*
- km <= 1 -> 15.000 đ / km
- 1 > km <= 5 -> 13.500 đ / km
- km > 5 -> 11.000 đ / km
- km > 120 -> Giảm tiếp 10%
*/
let km = 4;

//TH1: km = 4 --> 1 * 15000 + (4 - 1) * 13500
//TH2: km = 6 --> 1 * 15000 + (5 - 1) * 13500 + (6-5) * 11500
//TH3: km = 130 -> (1 * 15000 + (5 - 1) * 13500 + (130-5) * 11500) - 10%