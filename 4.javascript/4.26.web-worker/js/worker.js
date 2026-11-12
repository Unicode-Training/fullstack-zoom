const fibonacci = (n) => {
    if (n === 1 || n === 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

self.addEventListener('message', ({ data }) => {
    switch (data.type) {
        case 'CALC_FIBONACCI':
            const reuslt = fibonacci(data.payload);
            self.postMessage({
                type: 'CALC_FIBONACCI',
                payload: reuslt
            })
            break;
        case 'DEMO_ARRAY_BUFFER':
            const arr = [...new Uint8Array(data.payload)];
            console.log(arr);
            //Logic -> Bắn ngược lại
            break;
        default:
            throw new Error(`type ${data.type} not found`)

    }
});