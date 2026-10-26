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
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
    });
    if (!response.ok) {
        return false;
    }
    return response.json();
}