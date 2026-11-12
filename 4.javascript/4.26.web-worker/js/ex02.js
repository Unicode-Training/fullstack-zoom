import students from "./students.json" with { type: "json" }
const worker = new Worker('./worker/list-worker.js');
const render = (data) => {
    const ul = document.querySelector('ul');
    ul.innerHTML = data.map(item => {
        // console.log(item);
        // if (value) {
        //     const pos = item.fullName.indexOf(value);
        //     if (pos !== -1) {
        //         return `<li>${item.fullName.slice(0, pos)}<span>${item.fullName.slice(pos, pos + value.length)}</span>${item.fullName.slice(pos + value.length)}</li>`
        //     }
        // }
        return `<li>${item.fullName}</li>`
    }).join('')
}

render(students);

const input = document.querySelector('input');
input.addEventListener('input', (e) => {
    worker.postMessage({
        type: 'HIGHLIGHT_LIST',
        payload: {
            value: e.target.value,
            students
        }
    })
});

worker.addEventListener('message', ({ data }) => {
    if (data.type === 'HIGHLIGHT_LIST') {
        const ul = document.querySelector('ul');
        ul.innerHTML = data.students.join('')
    }
})