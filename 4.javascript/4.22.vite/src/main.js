import moment from "moment";
import { renderHeader } from "@/components/headers/header";
import "@/styles/style.css";
import { renderFooter } from "@/components/footer";
// import config from "./config.json";
import { ENV } from "./configs/config";
import { doSomething } from "@/utils/utils";
const app = document.querySelector('#app');
doSomething();
app.innerHTML = `
<div class="max-w-300 mx-auto py-5">
${renderHeader()}
<h1>Hello anh em 123</h1>
<h2>${moment().format('DD/MM/YYY HH:mm:ss')}</h2>
${renderFooter()}
<p>Backend url: ${ENV.BACKEND_URL}</p>
</div>
`

//Làm việc với media (ảnh, video)
//Xử lý Routing: https://www.npmjs.com/package/navigo