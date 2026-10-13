const ul = document.querySelector('ul');

ul.addEventListener('click', (e) => {
    const item = e.target.closest('li');
    if (e.target.classList.contains('down')) {
        if (!item.nextElementSibling) {
            return;
        }
        ul.insertBefore(item.nextElementSibling, item);
    }
    if (e.target.classList.contains('up')) {
        if (!item.previousElementSibling) {
            return;
        }
        ul.insertBefore(item, item.previousElementSibling);
    }
})

