//Truy cập vào nội dung của thẻ html
// const boxEl = document.querySelector('.box');
// console.log(boxEl.innerHTML);
// boxEl.innerHTML = `<i>Học js</i>`

// console.log(boxEl.innerText);
// boxEl.innerText = `<i>Học js</i>`

// console.log(boxEl.textContent);
// boxEl.textContent = `<i>Học js</i>`

// console.log(boxEl.outerHTML);
// boxEl.outerHTML = `<i>Học js</i>`;

//Truy cập vào các thuộc tính
// - Thuộc tính có sẵn -> Tự động tạo ra setter, getter trùng tên với thuộc tính
// - Thuộc tính tự tạo (data-attribute)

// const a = document.querySelector('a');
// console.log(a.id);
// console.log(a.className);
// console.log(a.href);
// console.log(a.title);
// console.log(a.target);

// a.href = 'https://google.com';

// console.log(a.getAttribute('data-width'));
// a.setAttribute('data-width', 300);

// console.log(a.dataset.width);
// a.dataset.width = 300;
// a.dataset.animation = "true";
// a.dataset.animationTimingFunction = 'ease';

// console.log(a.dataset.animationTimingFunction);

// delete a.dataset.width;
// delete a.title; //failed

// a.removeAttribute('title'); //Xóa tất cả các loại thuộc tính

// const aList = document.querySelectorAll('a');
// aList.forEach((a) => {
//     // console.log(a.href);
//     // console.log(a.getAttribute('href'));

// })

//Xóa thẻ html ra khỏi cây DOM
// a.remove();

//Cách làm việc với class
// const box = document.querySelector('.box');
// console.log(box.className);
// const array = box.className.split(' ');
// array.push('active');
// box.className = array.join(' ');

// console.log(box.classList);
// box.classList.add('active', 'open');

// box.classList.remove('active', 'open');

// box.classList.replace('box-3', 'ok');

// console.log(box.classList.contains('box-3'));

// box.classList.toggle('active');
// box.classList.toggle('active');