//Ví dụ 1: Lấy ra username của email
//1. Tìm vị trí của @
//2. Cắt chuỗi từ 0 đến vị trí @

// let email = 'hoangan@unicode.vn';

// const pos = email.indexOf('@');
// const username = email.slice(0, pos);

// const domain = email.slice(pos + 1);
// console.log(domain);

//Ví dụ: Tên hợp lệ là tên phải viết HOA toàn bộ
// const fullname = 'TẠ HOÀNG An';
// if (fullname === fullname.toUpperCase()) {
//     console.log('Tên hợp lệ');
// } else {
//     console.log('Tên không hợp lệ');
// }

//Ví dụ: Chuyển ký tự đầu tiên của chuỗi thành viết HOA
// const str = 'hello anh em'; //Hello anh em
//Tách:
// - P1: Ký tự đầu tiên -> Chuyển thành chữ hoa
// - P2: Từ sau ký tự đầu tiên đến hết chuỗi
// const part1 = str.charAt(0).toUpperCase();

// const part2 = str.slice(1);

// //Nối lại
// const strValid = part1 + part2;
// console.log(strValid);

//Ví dụ: Chuyển ký tự đầu của mỗi từ thành chữ HOA
// let str = 'hello anh em fullstack'; //Hello Anh Em Fullstack
// str = str.charAt(0).toUpperCase() + str.slice(1);

// for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) === ' ' && str.charAt(i + 1) !== ' ') {
//         const pos = i + 1;
//         str = str.slice(0, pos) + str.charAt(pos).toUpperCase() + str.slice(pos + 1);
//     }
// }
// console.log(str);

//Bài tập: Lấy tên từ họ và tên
//Yêu cầu: Chỉ được dùng các kiến thức đã học

// let fullname = 'Phạm Viết Thắng'; //Thắng
// const pos = fullname.lastIndexOf(' ');
// const firstName = fullname.slice(pos + 1);
// console.log(firstName);

//Ví dụ: Highligt text
let content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
      accusantium aliquid tempore autem dolores ullam sint nostrum eligendi
      vitae, maiores aperiam odio magni inventore non possimus, harum libero
      suscipit quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Labore, accusantium aliquid tempore autem dolores ullam sint nostrum
      eligendi vitae, maiores aperiam odio magni inventore non possimus, harum
      libero suscipit quos. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Labore, accusantium aliquid tempore autem dolores ullam sint nostrum
      eligendi vitae, maiores aperiam odio magni inventore non possimus, harum
      libero suscipit quos.`;

let keyword = 'ELIT';

let pos = content.toLowerCase().indexOf(keyword.toLowerCase());

let newContent = '';

if (pos !== -1) {
    newContent = content.slice(0, pos) + `<span>${content.slice(pos, pos + keyword.length)}</span>` + content.slice(pos + keyword.length);
}

document.body.innerHTML = `
<h2>Keyword: ${keyword}</h2>
<h2>${newContent}</h2>
<h2>Tìm được: 1</h2>
`;  
