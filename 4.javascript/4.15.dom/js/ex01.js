//DOM: Document Object Model
//Giải quyết: 
// - HTML tải từ server về -> Trình duyệt -> Mô hình hóa thành Object -> JavaScript can thiệp để thay đổi
// - Node: Object để hiện 1 thông tin ở trên tài liệu html: Element, Text, Attribute

// console.log(document);
// console.log(document.body.children[0].innerHTML);
// document.body.children[0].innerHTML = 'Chào JavaScript';

//Làm sao truy cập được vào các node có sẵn (Node Element)
//1. document.getElementById(id) -> Trả về node element đầu tiên khớp với ID
// const titleEl = document.getElementById('title');
// console.log(titleEl);

//2. document.getElemtsByClassName(class) -> Trả về 1 list chứa các node khớp với class
// const list = document.getElementsByClassName('title');
// console.log(list);
// list[1].innerHTML = 'OK chưa?'

//3. document.getElementsByTagName(tagname) ->  Trả về 1 list chứa các node khớp với tên thẻ html
// const list = document.getElementsByTagName('h1');
// console.log(list);

//4. document.querySelector(css-selector) -> Trả về phần tử đầu tiên khớp với css selector
// const titleEl = document.querySelector('.box .title');
// console.log(titleEl);

//5. document.querySelectorAll(css-selector) -> Trả về danh sách các phần tử khớp với css-selector
// const list = document.querySelectorAll('.title');
// console.log(list);

//Ngoại lệ
//1. Truy cập vào body: document.body
//2. Truy cập vào title: document.title
//3. Form

// const emailEl = document['login-form'].email;
// const passwordEl = document['login-form'].password;
// console.log(passwordEl);

//Truy cập vào danh sách các phần tử con (Gần nhất) -> children
// const ul = document.querySelector('ul');
// console.log(ul.children);

//Truy cập vào phần tử cha (Gần nhất) -> parentElement
// const btn = document.querySelector('button');
// console.log(btn.parentElement.parentElement.parentElement);

//Truy cập vào phần tử anh em (Trước, sau)
// const btn = document.querySelector('button');
// console.log(btn.nextElementSibling);
// console.log(btn.previousElementSibling);
