import { router } from "../route";
import { render } from "../utils/utils";

export const contact = () => {
    render(`
        <form>
        <input type="text" />
        <button>Subm9t</button>
        </form>
    `);

    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        //Logic
        router.navigate('/');
    })
}