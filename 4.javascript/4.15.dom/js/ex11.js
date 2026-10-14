const header = document.querySelector('header');
const headerHeight = header.clientHeight;

window.addEventListener('scroll', () => {
    const pos = window.scrollY;
    if (pos >= headerHeight) {
        header.classList.add('fixed');
        document.body.style.paddingTop = `${headerHeight}px`;
    } else {
        header.classList.remove('fixed');
        document.body.style.paddingTop = null;
    }
})

const links = document.querySelectorAll('header ul li a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const hash = e.target.getAttribute('href');
        const section = document.querySelector(hash);
        if (section) {
            const offsetTop = section.offsetTop;
            window.scroll({
                top: `${offsetTop - headerHeight - 15}`,
                behavior: "smooth"
            })
        }
    })
})

const options = {
    root: null,       // null nghĩa là lấy toàn bộ khung nhìn màn hình (viewport)
    rootMargin: '0px',// Khoảng cách biên xung quanh root (như margin trong CSS)
    threshold: 0.5    // Kích hoạt khi ít nhất 50% phần tử xuất hiện trên màn hình
};

const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const id = target.id;
            const link = document.querySelector(`header ul li a[href="#${id}"]`);
            const linkActive = document.querySelector('header ul li a.active');
            if (linkActive) {
                linkActive.classList.remove('active');
            }
            link.classList.add('active');
        }
    })
}

const observer = new IntersectionObserver(callback, options);
const sectionList = document.querySelectorAll('section');
sectionList.forEach((section) => {
    observer.observe(section)
})
//IntersectionObserver-> Phát hiện phần tử đang theo dõi xuất hiện trên viewport