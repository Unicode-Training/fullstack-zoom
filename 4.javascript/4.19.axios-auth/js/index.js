const getProfile = async () => {
    try {
        const { data } = await api.get('/profile/me');
        renderProfile(true, data.user);
    } catch {
        renderProfile(false, null);
    }
}

const renderProfile = (status, data) => {
    const authRenderEl = document.querySelector('.auth-render');
    authRenderEl.innerHTML = status ? `
    <div class="flex gap-3 items-center">
        <p class="text-xl font-medium">Chào bạn: ${data.fullName}</p>
        <button class="px-3 py-1 bg-red-600 text-white js-logout-btn">Logout</button>
    </div>
    ` : `<a
        href="./login.html"
        class="inline-block px-3 py-1 border border-green-400"
        >Login</a>`
}

const addEventLogout = () => {
    const authRenderEl = document.querySelector('.auth-render');
    authRenderEl.addEventListener('click', async (e) => {

        if (e.target.classList.contains('js-logout-btn')) {
            try {
                await api.post('/auth/logout');
            } catch { }
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            window.location.reload();
        }
    })
}

const getShoppingCart = async () => {
    try {
        const { data } = await api.get('/shopping-cart');
        const { items } = data;
        const html = items.map((item) => {
            return `
        <div class="mb-3 border-b border-gray-200 pb-3">
        <p>Tên: ${item.name}</p>
        <p>Giá: ${item.price}</p>
        <p>Số lượng: ${item.quantity}</p>
        <p>Thành tiền: ${item.total}</p>
        </div>
        `;
        }).join('');
        const cartRenderEl = document.querySelector('.cart-render');
        cartRenderEl.innerHTML = html;
    } catch {
        //
    }
}

getProfile();
// getShoppingCart();
addEventLogout();