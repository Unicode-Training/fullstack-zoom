const BASE_URL = 'https://shop-api.unicode.vn';

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
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

api.interceptors.response.use(response => response, async (error) => {
    if (error.status === 401) {
        const newToken = await getNewToken();
        if (newToken) {
            localStorage.setItem('accessToken', newToken.accessToken);
            localStorage.setItem('refreshToken', newToken.refreshToken);
            return api(error.config);
        }

    }
    return Promise.reject(error);
})