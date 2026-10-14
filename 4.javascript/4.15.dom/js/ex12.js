// const box = document.querySelector('.box');
// //Kích hoạt shadow DOM
// const shadow = box.attachShadow({
//     mode: 'open'
// });
// const htmlBox = box.innerHTML;
// box.innerHTML = '';
// shadow.innerHTML = htmlBox;
// const style = document.createElement('style');
// style.textContent = `
// h2 {
//     color: red;
// }
// p {
//     color: green;
// }    
// `
// shadow.append(style);

// class Counter extends HTMLElement {
//     constructor() {
//         super();
//         this.shadow = this.attachShadow({
//             mode: 'open'
//         });
//         this.render();
//         this.style();
//     }

//     render() {
//         const init = this.getAttribute('data-init-count');
//         const h1 = document.createElement('h1');
//         h1.innerText = `Count: ${init}`;
//         const button = document.createElement('button');
//         button.innerText = '+';
//         this.shadow.append(h1);
//         this.shadow.append(button);
//     }

//     style() {
//         const style = document.createElement('style');
//         style.textContent = `
//         h1 {
//             color: red
//         }
//         button {
//             border: 0;
//             background: green;
//             color: #fff;
//         }    
//         `
//         this.shadow.append(style);
//     }
// }

// customElements.define('app-counter', Counter);

//React 
//Native (html, css)
import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class CounterComponent extends LitElement {

    // Khai báo kiểu dữ liệu cho các Reactive Properties
    static get properties() {
        return {
            count: { type: Number }
        };
    }

    // Định nghĩa CSS đóng gói (Scoped Styles)
    static get styles() {
        return css`
      button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
      }
      p {
        font-family: sans-serif;
        font-size: 1.2rem;
      }
    `;
    }

    constructor() {
        super();
        // Khởi tạo giá trị mặc định cho property
        this.count = 0;
    }

    // Hàm xử lý sự kiện tăng số
    _increment() {
        this.count += 1;
    }

    // Khai báo cấu trúc UI bằng hàm html
    render() {
        return html`
      <p>Số lần click: <strong>${this.count}</strong></p>
      <button @click="${this._increment}">Tăng lên</button>
    `;
    }
}

// 3. Đăng ký Custom Element với trình duyệt
customElements.define('app-counter', CounterComponent);

//2 event
//document.addEventListener('DOMContentLoaded') -> Cây dom hình thành
//window.addEventListener('load') --> Tất cả tài nguyên tải xong