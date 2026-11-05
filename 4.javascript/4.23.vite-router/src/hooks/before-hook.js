import { router } from "../route";
import { render } from "../utils/utils";

export const beforeHook = async (done, match) => {
    const url = match.url;
    if (!url.startsWith('auth')) {
        //Render header
        render(`<header>
            <a href="/" data-navigo>Home</a>
            <a href="/about" data-navigo>About</a>
            <a href="/products" data-navigo>Products</a>
            <a href="/contact" data-navigo>Contact</a>
            </header>`, '#header');
    }

    const app = document.querySelector('#app');
    app.innerHTML = `Loading`;
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    })
    let isAuth = false;

    if (url.startsWith('account') && !isAuth) {
        router.navigate('/auth/login');
    }

    done();
}