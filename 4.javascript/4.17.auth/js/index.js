const getProfile = async () => {
    //Lấy accessToken
    // const accessToken = localStorage.getItem('accessToken');
    // const response = await fetch(`${BASE_URL}/profile/me`, {
    //     headers: {
    //         Authorization: `Bearer ${accessToken}`
    //     }
    // });
    // if (!response.ok) {
    //     if (response.status !== 401) {
    //         renderProfile(false, null);
    //     } else {
    //         //xử lý refresh token
    //         const newToken = await getNewToken();
    //         if (!newToken) {
    //             localStorage.removeItem('accessToken');
    //             localStorage.removeItem('refreshToken');
    //             renderProfile(false, null);
    //             return;
    //         }
    //         localStorage.setItem('accessToken', newToken.accessToken);
    //         localStorage.setItem('refreshToken', newToken.refreshToken);
    //         getProfile();
    //     }

    // } else {
    //     const { user } = await response.json();
    //     renderProfile(true, user);
    // }

    const response = await fetchWrapper(`${BASE_URL}/profile/me`);
    if (!response.ok) {
        return renderProfile(false, null);
    }
    const { user } = await response.json();
    renderProfile(true, user);

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
            const accessToken = localStorage.getItem('accessToken');
            await fetch(`${BASE_URL}/auth/logout`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            window.location.reload();
        }
    })
}

const getShoppingCart = async () => {
    const response = await fetchWrapper(`${BASE_URL}/shopping-cart`);
    const { items } = await response.json();
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
}

getProfile();
getShoppingCart();
addEventLogout();