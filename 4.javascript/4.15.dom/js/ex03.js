//Sự kiện là hành vi mà người tác động lên các thẻ html
//User sẽ tương tác với thẻ html -> Trình duyệt nhận biết tương tác đó là loại sự kiện gì -> Phát sự kiện (Fire, dispatch)
//Việc của lập trình viên: Viết code lắng nghe sự kiện tương ứng với phần tử html đó và viết logic xử lý

//Ví dụ lắng nghe sự kiện
// const btn = document.querySelector('button');

//1. Event Handler
// btn.onclick = (e) => {
//     //e = event object
//     console.log('clicked');
//     // console.log(e);
// }

// btn.onclick = () => {
//     console.log('clicked 2');
// }

//2. Event Listener
// const handleClick = (e) => {
//     console.log('clicked');
// }
// btn.addEventListener('click', (e) => {
//     console.log('clicked');
// })

//Page 1: addEventListener
//Page 2: Không có event

//Luồng: page-1 (addEvent), chuyển page-2, chuyển lại page-1

// const btn1 = document.querySelector('.add');
// const btn2 = document.querySelector('.remove');
// let count = 0;
// const handleClick = () => {
//     console.log(++count);
// };
// btn1.addEventListener('click', handleClick)
// btn2.addEventListener('click', () => {
//     btn1.removeEventListener('click', handleClick)
// })

//Danh sách các event
//1. click
//2. dblclick
//3. mousedown
//4. mouseup
//5. mousemove
//6. keyup
//7. keydown
//8. input (Nhập liệu văn bản vào các ô có thể nhập)
//7. mouseover
//8. mouseout
//9. change: Thay đổi dữ liệu trong form
//10. focus: Focus vào các thẻ của form
//11. blur: Thoát focus
//12. submit: Submit form

// const input = document.querySelector('input');
// input.addEventListener('change', () => {
//     console.log('changed');
// })
// input.addEventListener('input', () => {
//     console.log('input');
// })

// input.addEventListener('focus', () => {
//     console.log('focus');
// })
// input.addEventListener('blur', () => {
//     console.log('blur');
// })

// const form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log('ok');
// });

document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        console.log('ok');

    }
})