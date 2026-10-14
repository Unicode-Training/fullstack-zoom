const SERVER_API = 'https://dummyjson.com';
const app = {
    async getPosts(q = '') {
        const response = await fetch(`${SERVER_API}/posts/search?q=${q}`);
        const { posts } = await response.json();
        this.render(posts);
    },
    render(posts) {
        const postListEl = document.querySelector('.js-post-list');
        const html = posts.map((post) => `
        <div class="mb-3 pb-3 border-gray-200 border-b">
            <h3 class="mb-2 text-xl">${post.title}</h3>
            <p>${post.body}</p>
            <div class="flex gap-3 mt-3">
                ${post.tags.map(tag => `<span class="px-3 py-1 bg-white border border-gray-200">${tag}</span>`).join('')}
                
            </div>
        </div>
      `).join('');
        postListEl.innerHTML = html;
    },
    debounce(callback, timeout = 500) {
        let timeoutId;
        return (...args) => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                callback(...args);
            }, timeout);
        }
    },
    searchEvent() {
        const searchEl = document.querySelector('.js-search');
        searchEl.addEventListener('input', this.debounce((e) => {
            console.log(e);
            const value = searchEl.value;
            this.getPosts(value);
        }, 1000))
    },
    start() {
        this.getPosts();
        this.searchEvent();
    }
}

app.start();

//Debounce
// - Dựa vào thời gian của mỗi request để quyết định giữ hay bỏ
// - Ví dụ: 
// + Request 1
// + Request 2 -> Cách request 1 300ms -> Hủy request 1
// + Request 3 -> Cách request 2 400ms -> Hủy request 2

//Thiết lập timeout = 500