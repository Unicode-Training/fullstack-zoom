// self.addEventListener('message', ({ data }) => {
//     if (data.type === 'HIGHLIGHT_LIST') {
//         //Xử lý mảng -> Thêm span
//         const { students, value } = data.payload;
//         console.log(value);

//         const newStudents = students.map(item => {
//             // console.log(item);
//             if (value) {
//                 const pos = item.fullName.indexOf(value);
//                 if (pos !== -1) {
//                     return `<li>${item.fullName.slice(0, pos)}<span>${item.fullName.slice(pos, pos + value.length)}</span>${item.fullName.slice(pos + value.length)}</li>`
//                 }
//             }
//             return `<li>${item.fullName}</li>`
//         });

//         self.postMessage({
//             type: 'HIGHLIGHT_LIST',
//             students: newStudents
//         })
//     }
// })

// self.addEventListener('message', ({ data }) => {
//     const { students, value } = data.payload;
//     console.log(value);
// })

self.onmessage = () => {
    console.log('a');
}

self.onmessage = () => {
    console.log('b');
}