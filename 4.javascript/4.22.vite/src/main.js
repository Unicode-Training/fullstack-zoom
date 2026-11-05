import moment from "moment";
import { renderHeader } from "@/components/headers/header";
import "@/styles/style.css";
import { renderFooter } from "@/components/footer";
// import config from "./config.json";
import { ENV } from "./configs/config";
import { doSomething } from "@/utils/utils";
import image01 from "@/assets/images/unicode-jobs-2026-11-02.png";
const app = document.querySelector('#app');
doSomething();

const hello = () => {
    try {
        // a
    } catch {
        //b
    }
}
hello();

app.innerHTML = `
<div class="max-w-300 mx-auto py-5">
${renderHeader()}
<h1>Hello anh em 123</h1>
<h2>${moment().format('DD/MM/YYY HH:mm:ss')}</h2>
${renderFooter()}
<p>Backend url: ${ENV.BACKEND_URL}</p>
<img src="${image01}" width="400"/>
<img src="/images/lam-chu-quy-trinh-deploy-web-tu-dong-voi-vps-va-docker-tu-con-so-khong-1793681547.png" width="400"/>
<a href="/khoa-hoc/fullstack" data-link>Khóa học Fullstack</a>
</div>
`

const allDataLink = document.querySelectorAll('[data-link]');
allDataLink.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pathname = link.getAttribute('href');
        window.history.pushState(null, null, pathname);
        //Xử lý render giao diện tương ứng
    });
});

const pathname = window.location.pathname;
if (pathname === '/khoa-hoc/fullstack') {
    //Render giao diện tương ứng
}

//Làm việc với media (ảnh, video)
//Xử lý Routing: https://www.npmjs.com/package/navigo

//static assets

//Linter

//MVP