export const render = (content, el = '#app') => {
    const app = document.querySelector(el);
    app.innerHTML = content;
}