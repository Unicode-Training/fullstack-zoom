
const getNewToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
        return;
    }
    const response = await fetch(`${BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ refreshToken })
    });
    if (!response.ok) {
        return;
    }
    return response.json();
}
let refreshTokenPromise = null;
const fetchWrapper = async (url, options = {}) => {
    //Xử lý ở đây
    const accessToken = localStorage.getItem('accessToken');
    const allHeaders = new Headers(options.headers || {})
    if (accessToken) {
        allHeaders.set('Authorization', `Bearer ${accessToken}`);
    }
    const response = await fetch(url, {
        ...options,
        headers: allHeaders
    });

    if (response.status === 401) {
        if (!refreshTokenPromise) {
            refreshTokenPromise = getNewToken();
        }
        const newToken = await refreshTokenPromise;
        refreshTokenPromise = null;
        if (newToken) {
            localStorage.setItem('accessToken', newToken.accessToken);
            localStorage.setItem('refreshToken', newToken.refreshToken);
            return fetchWrapper(url, options);
        } else {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
        }
    }

    return response;
}

/*
fetchWrapper(url, {
    headers: {
        "x-abc": "123"
    }
})
*/