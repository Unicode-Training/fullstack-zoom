const BASE_URL = 'https://shop-api.unicode.vn';

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,

});

const getNewToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
        return false;
    }
    try {
        const response = await api.post('/auth/refresh', {
            refreshToken
        });
        return response.data;
    } catch {
        return false;
    }
}

api.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

let refreshTokenPromise = null;

api.interceptors.response.use(response => response, async (error) => {
    if (error.status === 401 && error.config.url !== '/auth/refresh') {
        if (!refreshTokenPromise) {
            refreshTokenPromise = getNewToken()
        }
        const newToken = await refreshTokenPromise;
        refreshTokenPromise = null;
        if (newToken) {
            localStorage.setItem('accessToken', newToken.accessToken);
            localStorage.setItem('refreshToken', newToken.refreshToken);
            return api(error.config); //retry
        }

        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    }
    return Promise.reject(error);
})

//request -> interceptor request -> backend -> interceptor response -> client