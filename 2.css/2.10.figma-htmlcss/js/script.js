const includeList = document.querySelectorAll('x-include');
includeList.forEach((includeEl) => {
    const filePath = includeEl.getAttribute('src');
    fetch(filePath).then(res => res.text()).then(html => {
        includeEl.outerHTML = html;
    })
})
