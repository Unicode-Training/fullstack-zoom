//Scroll

const btn = document.querySelector('.btn');

window.addEventListener('scroll', () => {
    const pos = window.scrollY;
    if (pos > 100) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
})

btn.addEventListener('click', () => {
    window.scroll({
        top: 100,
        behavior: "smooth"
    })
})

// const box = document.querySelector('.box');
// box.addEventListener('scroll', () => {
//     console.log('box');
// })