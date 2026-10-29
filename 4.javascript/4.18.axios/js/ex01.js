const api = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 5000,
    headers: {
        "x-api-key": "ahihi"
    },
    withCredentials: true
});
//Interceptor Request
api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer abc`;
    return config;
});

//Interceptor Response
api.interceptors.response.use((response) => {
    response.headers['x-total'] = response.data.total;
    response.data = response.data.posts.map(({ userId, ...val }) => ({ ...val, user_id: userId }));
    return response;
}, (error) => {
    console.log(error);
    //retry: return api(error.config)
    return Promise.reject(error);
})

//Interceptor Response
const getPosts = async () => {
    try {
        const response = await api.get('/posts');
        console.log(response.data);
        const total = response.headers['x-total'];
        console.log(total);

    } catch (error) {
        console.dir(error);
        console.log(error.message);
    }
};
getPosts();

//get -> axios.get(url, options)
//post -> axios.post(url, body, options)
//put -> axios.put(url, body, options)
//patch -> axios.patch(url, body, options)
//delete -> axios.delete(url, options)

//backend: api.unicode.vn
//Frontend: unicode.vn