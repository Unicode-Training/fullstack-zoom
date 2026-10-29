const form = document.querySelector('form');
const msg = document.querySelector('.js-msg');
const btn = form.querySelector('button');
const btnText = btn.innerText;
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    msg.innerText = '';
    btn.innerText = 'Loading...';
    btn.disabled = true;

    const token = await login({ email, password });

    if (!token) {
        msg.innerText = 'Email hoặc mật khẩu không chính xác';
    } else {
        //Xử lý
        localStorage.setItem('accessToken', token.accessToken);
        localStorage.setItem('refreshToken', token.refreshToken);
        window.location.href = './index.html';
    }

    //Tắt loading
    btn.innerText = btnText;
    btn.disabled = false;
})

const login = async (loginData) => {
    try {
        const response = await api.post('/auth/login', loginData);
        return response.data;
    } catch {
        return false;
    }
}