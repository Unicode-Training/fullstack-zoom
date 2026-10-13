//DOM Nodes

//- Lấy từ cây DOM có sẵn -> Update các bài toán phức tạp
//- Tạo node bằng JavaScript -> Gắn vào cây DOM

// const form = document.querySelector('form');
// const ul = document.querySelector('ul');
// const cleanXss = (html) => {
//     return html.replaceAll(`<`, '&lt;').replaceAll('>', '&gt;')
// }
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const value = form.querySelector('input').value;
//     const html = `<li>${cleanXss(value)}</li>`;
//     ul.innerHTML += html;
//     form.querySelector('input').value = '';
// })

// ul.addEventListener('click', (e) => {
//     if (e.target.nodeName === 'LI') {
//         e.target.style.textDecoration = 'line-through';
//     }
// })

//<img src="" onerror="window.location.href='https://google.com'" />
//XSS

//Nhược điểm: 
//1. Render cả trang
//2. XSS
//3. Đăng ký Event phức tạp

//Tiếp cận ngược
// - Tạo node
// - Xử lý logic ở node, event,...
// - Render vào cây DOM

//document.createElement('ten-the-html')
// const h1 = document.createElement('h1');
// h1.innerText = 'Học JS không khó';
// h1.className = 'title';
// h1.id = 'title';
// h1.addEventListener('click', () => {
//     h1.innerText = 'Học DOM';
// })

//Render
// const root = document.querySelector("#root");
//1. append -> Đẩy xuống cuối
//2. prepend -> Đẩy lên đầu
// root.append(h1);
// root.append(h1.cloneNode(true))

// const h2 = document.createElement('h2');
// h2.innerText = 'Hello anh em';
// root.prepend(h2);

//Ví dụ:
/*
<div class="container">
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
    </ul>
</div>
*/

// const div = document.createElement('div');
// div.className = 'container';

// const ul = document.createElement('ul');

// for (let i = 0; i < 3; i++) {
//     const li = document.createElement('li');
//     li.innerText = 'Item ' + (i + 1);
//     ul.append(li);
// }

// div.append(ul);

// const root = document.querySelector('#root');
// root.append(div);

// const root = document.querySelector('#root');
// const form = document.createElement("form");
// const input = document.createElement('input');
// const button = document.createElement('button');
// const ul = document.createElement('ul');
// button.innerText = 'Add';
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const value = input.value;
//     const li = document.createElement('li');
//     li.innerText = `${value}`;
//     ul.append(li);
//     input.value = '';
// });
// form.append(input);
// form.append(button);
// root.append(form);
// root.append(ul);

//parentNode.insertBefore()

//document.createElement('ten-the-html')
// const h1 = document.createElement('h1');
// h1.innerText = 'Học JS không khó';
// h1.className = 'title';
// h1.id = 'title';
// h1.addEventListener('click', () => {
//     h1.innerText = 'Học DOM';
// })

// //Render
// const root = document.querySelector("#root");
// //1. append -> Đẩy xuống cuối
// //2. prepend -> Đẩy lên đầu
// root.append(h1);

// const h2 = document.createElement('h2');
// h2.innerText = 'Hello anh em';
// root.append(h2);

// const h3 = document.createElement('h3');
// h3.innerText = 'Ok chưa?'
// root.insertBefore(h3, h1.nextElementSibling); //Sau h1

// //parentNode.replaceChild
// const p = document.createElement('p');
// p.innerText = 'Hoàng An';
// root.replaceChild(p, h3);

// // root.prepend(h3);

// //parentNode.removeChild(node): Xóa node đang nằm trong node cha
// root.removeChild(p);

//Ví dụ textnode
// const h1 = document.createElement('h1');
// h1.innerText = 'Count: ';
// const textNode = document.createTextNode(0);
// h1.append(textNode);

// const button = document.createElement('button');
// button.innerText = '+';
// button.addEventListener('click', () => {
//     textNode.data++;
// })

// const root = document.querySelector('#root');
// root.append(h1);
// root.append(button);