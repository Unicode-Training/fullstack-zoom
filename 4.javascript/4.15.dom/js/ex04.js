const form = document.querySelector('form');
const resetError = () => {
    const errorList = form.querySelectorAll(`[class*="js-error-"]`);
    console.log(errorList);

    errorList.forEach((errorEl) => {
        errorEl.innerText = '';
        errorEl.previousElementSibling.classList.remove('border-red-600');
        errorEl.previousElementSibling.classList.add('border-gay-200')
    })
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    resetError();
    const emailEl = form.querySelector('.js-email');
    const passwordEl = form.querySelector('.js-password');

    const email = emailEl.value;
    const password = passwordEl.value;

    const errors = {}
    if (!email) {
        errors.email = 'Email không được để trống';
    }

    if (!password) {
        errors.password = 'Password không được để trống';
    }

    if (!Object.keys(errors).length) {
        console.log('Thành công');
    } else {
        Object.keys(errors).forEach((key) => {
            const errorEl = form.querySelector(`.js-error-${key}`);
            errorEl.innerText = errors[key];
            errorEl.previousElementSibling.classList.add('border-red-600');
            errorEl.previousElementSibling.classList.remove('border-gay-200')
        })
    }

})

//Tìm hiểu trước
// - Xem lại video
// - DOM CSS
// - ôn lại css (transtion, transform,...)