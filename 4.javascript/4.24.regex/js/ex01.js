//Pattern
// const pattern = /bieuthuc/;
// console.dir(pattern);

// const pattern = new RegExp('bieuthuc', 'g');
// console.dir(pattern);

//Method xử lý

// - Kiểm tra: pattern.test(string)
// - Cắt chuỗi: string.match(pattern)
// - Thay thế: string.replace(pattern)

// const pattern = /^0\d{9}$/;
// const string = '0394822896';
// console.log(pattern.test(string));

//Tháng-Năm
// const pattern = /^\d{1,2}(-|\/)\d{4}$/;
// const input = '4/2026';
// console.log(pattern.test(input));

// let content = `Lorem Ipsum is simply dummy text of the printing and typesetting 0388875179 industry. Lorem Ipsum has been the industry's standard 0394822896 dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.`;

// const pattern = /0\d{9}/g;

// const results = content.match(pattern);
// console.log(results);

// let newContent = content.replace(pattern, '***');
// console.log(newContent);

// const url = `https://unicode.vn/khoa-hoc`;
// const pattern = /(?:http|https):\/\/(?<domain>\w+\.[a-z]{2,})[\/\w-]+/;

// const results = url.match(pattern);
// console.log(results);

// let content = `Lorem Ipsum is simply dummy text of the printing and typesetting https://vnexpress.net/thoi-su industry. Lorem Ipsum has been the industry's standard https://unicode.vn/khoa-hoc dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.`;

// const pattern = /(?:http|https):\/\/(?<domain>\w+\.[a-z]{2,})[\/\w-]+/g;

// const results = content.match(pattern);
// const domainList = [];
// results.forEach((url) => {
//     const pattern = /(?:http|https):\/\/(?<domain>\w+\.[a-z]{2,})[\/\w-]+/;
//     const result = url.match(pattern);
//     domainList.push(result.groups.domain);
// });
// console.log(domainList);

// const html = `<img src="https://unicode.vn/images/a.jpg" width="200"/>`;

// const pattern = /<img.*src="(.+?)"/;
// const result = html.match(pattern);
// console.log(result);

// let content = `Lorem Ipsum is 0394822896 simply dummy text of the printing and typesetting https://vnexpress.net/thoi-su industry. Lorem Ipsum has been the industry's standard https://unicode.vn/khoa-hoc dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining 0388875179 essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.`;

// const pattern = /((?:http|https):\/\/(\w+\.[a-z]{2,})[\/\w-]+)/g;

// let newContent = content.replace(pattern, `<a href="$1" target="_blank" title="URL của $2">$1</a>`);
// console.log(newContent);

// document.body.innerHTML = newContent;