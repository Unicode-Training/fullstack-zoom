// const box = document.querySelector('.box');
// const btn = document.querySelector('button');
// box.addEventListener('click', () => {
//     console.log('Box');
// })
// btn.addEventListener('click', (e) => {
//     e.stopPropagation();
//     console.log('Button');
// });

const chatbox = document.querySelector('.js-chatbox');
const chatboxTitle = chatbox.querySelector('.js-title');
const chatboxClose = chatbox.querySelector('.js-close');

const handleClickTitle = (e) => {
    if (!chatboxClose.contains(e.target)) {
        chatbox.classList.add('open');
    }
}

chatboxTitle.addEventListener('click', handleClickTitle);

chatboxClose.addEventListener('click', (e) => {
    // e.stopPropagation(); //Chặn nổi bọt
    chatbox.classList.remove('open');
});

document.addEventListener('click', (e) => {
    if (!chatbox.contains(e.target)) {
        chatbox.classList.remove('open');
    }
});

//Kéo thả
// - Bấm chuột xuống
// - Giữ chuột, kéo đi
// - Nhả chuột

let offsetX = 0;

//Tính padding của title
const style = window.getComputedStyle(chatboxTitle);
const padding = Number(style.paddingLeft.replace('px', ''));

//Tính width của viewport
const viewportWidth = document.body.clientWidth;

//Tính width của chatbox
const chatboxWidth = chatbox.clientWidth;

//Tính khoảng cách trống của chatbox với viewport
const distance = viewportWidth - chatboxWidth;

const handleDrag = (e) => {
    const clientX = e.clientX;
    let x = clientX - offsetX - padding;
    //Xóa event bật chatbox
    chatboxTitle.removeEventListener('click', handleClickTitle);
    if (x < 0) {
        x = 0;
    }
    if (x > distance) {
        x = distance;
    }
    chatbox.style.left = `${x}px`
}
chatboxTitle.addEventListener('mousedown', (e) => {
    e.preventDefault();
    document.addEventListener('mousemove', handleDrag);
    if (!chatboxClose.contains(e.target)) {
        offsetX = e.offsetX;
    } else {
        const closeLeft = chatboxClose.offsetLeft;
        offsetX = closeLeft - e.offsetX;
    }

});

document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', handleDrag);
    offsetX = 0;
    setTimeout(() => {
        chatboxTitle.addEventListener('click', handleClickTitle); //Đăng ký lại event khi kéo thả xong
    })
})