// const box = document.querySelector('.box');

// const bodyWidth = document.body.clientWidth;

// box.style.backgroundColor = 'yellow';
// box.style.color = 'red';
// box.style.height = `1000px`;

// box.style.width = `${bodyWidth * 2 / 3}px`;
// window.addEventListener('resize', () => {
//     console.log('resize');
//     const bodyWidth = document.body.clientWidth;
//     box.style.width = `${bodyWidth * 2 / 3}px`;
// })


//Lắng nghe event trong 1 danh sách
// const list = document.querySelectorAll('li');
// list.forEach((li) => {
//     li.addEventListener('click', () => {
//         // console.log(li);
//         li.style.color = 'red';
//     })
// })

//Event object
// const btn = document.querySelector('button');
// btn.addEventListener('click', function (e) {
//     // console.log(e.target);
//     // console.log(this);
//     // e.target.style.color = 'red';
//     console.log(e.offsetX);
//     console.log(e.target);
// })

//Áp dụng event target
// const list = document.querySelectorAll('li');
// const ul = document.querySelector('ul');
// const btn = document.querySelector('button');
// list.forEach((li) => {
//     li.addEventListener('click', () => {
//         li.style.color = 'red';
//     })
// });
// btn.addEventListener('click', () => {
//     ul.innerHTML += `<li>Hello anh em</li>`;
//     const list = document.querySelectorAll('li');
//     list.forEach((li) => {
//         li.addEventListener('click', () => {
//             li.style.color = 'red';
//         })
//     });
// })
//Action 1 -> html1 -> action 2 -> html 2 -> action 3 -> html 3
const ul = document.querySelector('ul');
const btn = document.querySelector('button');
ul.addEventListener('click', (e) => {
    if (e.target.nodeName === 'LI') {
        e.target.style.color = 'red';
    }

    const deleteIcon = e.target.closest('.remove');
    if (deleteIcon) {
        deleteIcon.parentElement.remove();
    }
})
btn.addEventListener('click', () => {
    ul.innerHTML += `<li>Hello anh em  <svg
          class="remove"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="16px"
          height="16px"
          fill="red"  
        >
          <path
            d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"
          /></svg></li>`;
})