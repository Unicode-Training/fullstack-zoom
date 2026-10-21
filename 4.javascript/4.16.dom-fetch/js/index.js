const SERVER_API = 'https://dummyjson.com';
const LIMIT = 10;
const app = {
    postEditEl: null,
    postDeleteEl: null,
    page: 1,
    search: "",
    async getPosts() {
        const skip = (this.page - 1) * LIMIT;
        const response = await fetch(`${SERVER_API}/posts/search?q=${this.search}&limit=${LIMIT}&skip=${skip}`);
        const { posts, total } = await response.json();
        this.render(posts, total);
    },
    async getPost(id) {
        const response = await fetch(`${SERVER_API}/posts/${id}`);
        if (!response.ok) {
            throw new Error("Có lỗi khi lấy chi tiết bài viết");
        }
        return response.json();
    },
    async updatePost(id, body) {
        const response = await fetch(`${SERVER_API}/posts/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            throw new Error("Có lỗi khi cập nhật bài viết");
        }
        return response.json();
    },
    async createPost(body) {
        const response = await fetch(`${SERVER_API}/posts/add`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: 5,
                ...body
            })
        });
        if (!response.ok) {
            throw new Error("Có lỗi khi thêm bài viết");
        }
        return response.json();
    },
    async deletePost(id) {
        const response = await fetch(`${SERVER_API}/posts/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error("Có lỗi khi xóa bài viết");
        }
        return response.json();
    },
    render(posts, total) {

        const postListEl = document.querySelector('.js-post-list');
        const postPaginationEl = document.querySelector('.js-post-pagination');
        const html = posts.map((post) => `
        <div class="mb-3 pb-3 border-gray-200 border-b js-post-item">
            <h3 class="mb-2 text-xl js-post-title ">${post.title}</h3>
            <p class="js-post-body">${post.body}</p>
            <div class="flex gap-3 mt-3">
                ${post.tags.map(tag => `<span class="px-3 py-1 bg-white border border-gray-200">${tag}</span>`).join('')}
                
            </div>
            <div class="flex gap-3 mt-3">
                <button class="px-3 py-1 bg-white border border-gray-200 cursor-pointer" data-action="view" data-id="${post.id}">Xem</button>
                <button class="px-3 py-1 bg-white border border-gray-200 cursor-pointer" data-action="edit" data-id="${post.id}">Sửa</button>
                <button class="px-3 py-1 bg-red-600 text-white border border-gray-200 cursor-pointer" data-action="delete" data-id="${post.id}">Xóa</button>
            </div>
        </div>
      `).join('');
        postListEl.innerHTML = html;
        const pages = Math.ceil(total / LIMIT);
        postPaginationEl.innerHTML = [...Array(pages)].map((_, index) => `
        <button class="px-3 py-1 bg-green-600 text-white cursor-pointer ${this.page === (index + 1) ? 'bg-red-600' : 'hover:bg-red-600'}" data-page="${index + 1}">${index + 1}</button>
        `).join('')
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
            this.search = searchEl.value;
            this.getPosts();
        }, 1000))
    },
    actionEvent() {
        const postListEl = document.querySelector('.js-post-list');
        postListEl.addEventListener('click', ({ target }) => {
            const id = target.dataset.id;
            if (target.dataset.action === 'view') {
                this.showPostModal(id);
            }

            if (target.dataset.action === 'edit') {
                this.showFormUpdate(id);
                this.postEditEl = target.closest('.js-post-item');
            }

            if (target.dataset.action === 'delete') {
                this.postDeleteEl = target.closest('.js-post-item');
                this.showConfirmModal(id);
            }

        });
    },
    showConfirmModal(id) {
        this.openModal();
        const modalContentEl = document.querySelector('.js-modal-content');
        modalContentEl.innerHTML = `
        <h2 class="text-2xl font-medium mb-3">Bạn có chắc chắn muốn xóa?</h2>
        <p class="mb-3">Hãy suy nghĩ cho kỹ. Vì không khôi phục được</p>
        <div class="flex gap-3 justify-end">
            <button class="bg-green-600 text-white px-3 py-1 js-confirm-btn">Đồng ý</button>
            <button class="bg-red-600 text-white px-3 py-1 js-cancel-btn">Hủy</button>
        </button>
        <div class="js-msg mt-3 text-red-600"></div>
        `;

        const cancelBtn = modalContentEl.querySelector('.js-cancel-btn');
        const confirmBtn = modalContentEl.querySelector('.js-confirm-btn');
        const confirmBtnText = confirmBtn.innerText;
        const msgEl = modalContentEl.querySelector('.js-msg');
        cancelBtn.addEventListener('click', () => this.closeModal());
        confirmBtn.addEventListener('click', async () => {
            confirmBtn.innerText = 'Deleting...'
            msgEl.innerText = '';
            try {
                await this.deletePost(id);
                this.closeModal();
                this.postDeleteEl.remove();
            } catch (error) {
                msgEl.innerText = error.message;
            }
            finally {
                confirmBtn.innerText = confirmBtnText;
            }
            //Gọi api xóa
            //Đóng modal
            //Xóa post trên UI
        });
    },
    async showFormUpdate(id) {
        this.openModal();
        const modalContent = document.querySelector('.js-modal-content');
        modalContent.innerHTML = `
        <form class="relative p-5" data-id="${id}">
            <div class="js-form-overlay absolute top-0 right-0 left-0 bottom-0 bg-[#00000080] flex items-center justify-center">
                <img src="./images/spinner-icon.svg" class="w-15 h-15 animate-spin"/>
            </div>    
            <div class="mb-3">
                <label>Title</label>
                <input type="text" placeholder="Title" name="title" class="px-3 py-1 outline-none border border-gray-200 w-full"/>
            </div>
             <div class="mb-3">
                <label>Body</label>
                <textarea placeholder="Body" name="body" class="px-3 py-1 outline-none border border-gray-200 w-full"></textarea>
            </div>
            <button class="px-3 py-1 bg-green-600 text-white cursor-pointer js-btn disabled:opacity-50">Save</button>
            <div class="js-msg text-red-600 mt-3"></div>
        </form>
        `
        try {
            const post = await this.getPost(id);
            const titleEl = modalContent.querySelector('[name="title"]');
            const bodyEl = modalContent.querySelector('[name="body"]');
            titleEl.value = post.title;
            bodyEl.value = post.body;
        } catch (error) {
            const errorEl = document.createElement('p');
            errorEl.className = `text-2xl font-medium`;
            errorEl.innerText = error.message;
            modalContent.innerHTML = '';
            modalContent.append(errorEl);
        } finally {
            const formOverlay = document.querySelector('.js-form-overlay');
            formOverlay.remove();
        }
    },
    showFormAdd() {
        this.openModal();
        const modalContent = document.querySelector('.js-modal-content');
        modalContent.innerHTML = `
        <form class="relative p-5">
            <div class="mb-3">
                <label>Title</label>
                <input type="text" placeholder="Title" name="title" class="px-3 py-1 outline-none border border-gray-200 w-full"/>
            </div>
             <div class="mb-3">
                <label>Body</label>
                <textarea placeholder="Body" name="body" class="px-3 py-1 outline-none border border-gray-200 w-full"></textarea>
            </div>
            <button class="px-3 py-1 bg-green-600 text-white cursor-pointer js-btn disabled:opacity-50">Save</button>
            <div class="js-msg text-red-600 mt-3"></div>
        </form>
        `
    },
    addPostEvent() {
        const addBtn = document.querySelector('.js-add-btn');
        console.log(addBtn);

        addBtn.addEventListener('click', () => this.showFormAdd());
    },
    submitFormEvent() {
        const modalContent = document.querySelector('.js-modal-content');
        modalContent.addEventListener('submit', async (e) => {
            e.preventDefault();
            //FormData
            const formData = new FormData(e.target);
            const id = e.target.dataset.id;
            const title = formData.get('title');
            const body = formData.get('body');
            const btn = modalContent.querySelector('.js-btn');
            const msgEl = modalContent.querySelector('.js-msg');
            const btnText = btn.innerText;
            btn.innerText = 'Saving...';
            btn.disabled = true;
            msgEl.innerText = '';
            try {
                if (id) {
                    //Update
                    const data = await this.updatePost(id, { title, body });
                    const postTitleEl = this.postEditEl.querySelector('.js-post-title');
                    const postBodyEl = this.postEditEl.querySelector('.js-post-body');
                    postTitleEl.innerText = data.title;
                    postBodyEl.innerText = data.body;
                } else {
                    //Add
                    const data = await this.createPost({ title, body });
                    const newPostHtml = `
                    <div class="mb-3 pb-3 border-gray-200 border-b js-post-item">
                        <h3 class="mb-2 text-xl js-post-title ">${data.title}</h3>
                        <p class="js-post-body">${data.body}</p>
                        <div class="flex gap-3 mt-3">
                            <button class="px-3 py-1 bg-white border border-gray-200 cursor-pointer" data-action="view" data-id="${data.id}">Xem</button>
                            <button class="px-3 py-1 bg-white border border-gray-200 cursor-pointer" data-action="edit" data-id="${data.id}">Sửa</button>
                            <button class="px-3 py-1 bg-red-600 text-white border border-gray-200 cursor-pointer" data-action="delete" data-id="${data.id}">Xóa</button>
                        </div>
                    </div>
                    `
                    const postListEl = document.querySelector('.js-post-list');
                    postListEl.innerHTML = newPostHtml + postListEl.innerHTML;
                }

                this.closeModal();
            } catch (error) {
                msgEl.innerText = error.message;
            } finally {
                btn.innerText = btnText;
                btn.disabled = false;
            }
        })
    },
    async showPostModal(id) {
        this.openModal();
        const modalContent = document.querySelector('.js-modal-content');
        const loading = document.createElement('p');
        loading.innerText = 'Loading...';
        loading.className = `text-2xl font-medium`;
        modalContent.append(loading);
        try {
            const post = await this.getPost(id);
            const titleEl = document.createElement('h1');
            titleEl.className = 'text-xl font-medium mb-3';
            titleEl.innerText = post.title;
            const contentEl = document.createElement('p');
            contentEl.innerText = post.body;
            modalContent.append(titleEl);
            modalContent.append(contentEl);
        } catch (error) {
            const errorEl = document.createElement('p');
            errorEl.className = `text-2xl font-medium`;
            errorEl.innerText = error.message;
            modalContent.append(errorEl);
        } finally {
            modalContent.removeChild(loading);
        }
    },

    openModal() {
        const modalEl = document.querySelector('.js-modal');
        modalEl.classList.remove('hidden'); //Bật modal
    },
    closeModal() {
        const modalEl = document.querySelector('.js-modal');
        const modalContentEl = modalEl.querySelector('.js-modal-content');
        modalEl.classList.add('hidden');
        modalContentEl.innerText = '';
    },
    dismissModal() {
        const modalEl = document.querySelector('.js-modal');
        const modalOverlayEl = modalEl.querySelector('.js-modal-overlay');
        this.closeModal();
        modalOverlayEl.addEventListener('click', this.closeModal);
        document.addEventListener('keyup', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        })
    },
    paginationEvent() {
        const paginationEl = document.querySelector('.js-post-pagination');
        paginationEl.addEventListener('click', ({ target }) => {
            this.page = +target.dataset.page;
            window.scroll({
                top: 0,
                behavior: "smooth"
            })
            this.getPosts();
        });
    },
    start() {
        this.getPosts();
        this.searchEvent();
        this.actionEvent();
        this.dismissModal();
        this.submitFormEvent();
        this.addPostEvent();
        this.paginationEvent()
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

//UI -> Request Backend -> Response -> Update UI

//Lưu ý khi thao tác với api
// - Xử lý data (Response API trả về)
// - Loading
// - Error

//page -> skip = (page - 1) * limit

//Tránh: Khi hành động (nút bấm) -> Gọi api đồng bộ (await)
//Quy trình đúng: Hành động -> UI + Kèm loading -> Khi nào api trả về -> Update thêm vào giao diện -> Xóa loading