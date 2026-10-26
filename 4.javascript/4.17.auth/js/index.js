const getProfile = async () => {
    //Lấy accessToken
    const accessToken = localStorage.getItem('accessToken');
    const response = await fetch(`${BASE_URL}/profile/me`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
    if (!response.ok) {
        renderProfile(false, null);
    } else {
        const { user } = await response.json();
        renderProfile(true, user);
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

getProfile();
addEventLogout();