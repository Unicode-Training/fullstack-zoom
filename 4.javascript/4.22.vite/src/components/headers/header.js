import style from "@/styles/header.module.css";
export const renderHeader = () => {
    return `<div>
    <h2 class="text-3xl mb-3 font-medium">Header</h2>
    <button class="${style.btn}">Click me</button>
    </div>`
}