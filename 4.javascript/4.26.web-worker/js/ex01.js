const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const worker = new Worker('./js/worker.js');

const renderSpan = (data) => {
    const span = document.querySelector('span');
    span.innerHTML = data;
}

btn1.addEventListener('click', () => {
    // console.log(fibonacci(45));
    worker.postMessage({
        type: 'CALC_FIBONACCI',
        payload: 45
    });

    renderSpan('Đang tính...');
});

btn2.addEventListener('click', () => {
    const arr = [72, 101, 108, 108, 111];
    const uint8Array = new Uint8Array(arr);
    const arrayBuffer = uint8Array.buffer;
    worker.postMessage({
        type: 'DEMO_ARRAY_BUFFER',
        payload: arrayBuffer
    }, [arrayBuffer]);
});

//Lắng nghe event từ worker bắn sang
worker.addEventListener('message', ({ data }) => {
    switch (data.type) {
        case 'CALC_FIBONACCI':
            renderSpan(data.payload);
            break;

        default:
            throw new Error(`type ${data.type} not found`)

    }
})

//Nếu fibonacci vào event loop (setTimeout)
//fibonacci là CPU Bound -> Mở luồng mới -> Nhờ vào runtime (Browser, Node) -> Worker (Web, Thread)

//Chỉ hỗ trợ: ArrayBuffer, MessagePort, ImageBitmap, OffscreenCanvas.