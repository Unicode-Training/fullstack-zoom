const navLinkItems = document.querySelectorAll('nav a');
const tabs = document.querySelector('.js-tabs');

const defaultValue = tabs.dataset.value;
navLinkItems.forEach((navItem) => {
    const href = navItem.getAttribute('href');

    if (href === defaultValue) {
        navItem.classList.add('bg-red-600');
        navItem.classList.remove('bg-green-600');
        const tabPanel = document.querySelector(`.js-tab-content ${defaultValue}`);
        tabPanel.classList.add('active');
    }

    navItem.addEventListener('click', (e) => {
        e.preventDefault();

        if (!href) {
            return;
        }

        const tabPanel = document.querySelector(`.js-tab-content ${href}`);
        if (!tabPanel) {
            return;
        }

        const panelActive = document.querySelector('.js-tab-content .active');
        if (panelActive) {
            panelActive.style.transition = 'opacity .3s ease';
            panelActive.style.opacity = 0;
            setTimeout(() => {
                panelActive.classList.remove('active');
                tabPanel.classList.add('active');
                setTimeout(() => {
                    panelActive.style.transition = null;
                    panelActive.style.opacity = null;
                }, 0);
            }, 200);
        }

        //Xử lý navItem
        //1. Chọn tab hiện tại
        const itemActive = document.querySelector('nav a.bg-red-600');
        if (itemActive) {
            itemActive.classList.remove('bg-red-600');
            itemActive.classList.add('bg-green-600');
        }

        navItem.classList.add('bg-red-600');
        navItem.classList.remove('bg-green-600');

    });
});

tabs.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowRight') {
        const itemActive = document.querySelector('nav a.bg-red-600');
        let nextItem = itemActive.parentElement.nextElementSibling;

        if (!nextItem) {
            nextItem = tabs.querySelector('nav li:first-child');
        }

        const navItem = nextItem.children[0];
        itemActive.classList.remove('bg-red-600');
        itemActive.classList.add('bg-green-600');
        navItem.classList.add('bg-red-600');
        navItem.classList.remove('bg-green-600');

        const panelActive = document.querySelector('.js-tab-content .active');
        let nextPanel = panelActive.nextElementSibling;
        if (!nextPanel) {
            nextPanel = document.querySelector('.js-tab-content > *:first-child');
        }

        panelActive.style.transition = 'opacity .3s ease';
        panelActive.style.opacity = 0;
        setTimeout(() => {
            panelActive.classList.remove('active');
            nextPanel.classList.add('active');
            setTimeout(() => {
                panelActive.style.transition = null;
                panelActive.style.opacity = null;
            }, 0);
        }, 200);
    }

    if (e.key === 'ArrowLeft') {
        const itemActive = document.querySelector('nav a.bg-red-600');
        let nextItem = itemActive.parentElement.previousElementSibling;
        if (!nextItem) {
            nextItem = tabs.querySelector('nav li:last-child');
        }

        const navItem = nextItem.children[0];
        itemActive.classList.remove('bg-red-600');
        itemActive.classList.add('bg-green-600');
        navItem.classList.add('bg-red-600');
        navItem.classList.remove('bg-green-600');

        const panelActive = document.querySelector('.js-tab-content .active');
        let nextPanel = panelActive.previousElementSibling;
        if (!nextPanel) {
            nextPanel = document.querySelector('.js-tab-content > *:last-child');
        }

        panelActive.style.transition = 'opacity .3s ease';
        panelActive.style.opacity = 0;
        setTimeout(() => {
            panelActive.classList.remove('active');
            nextPanel.classList.add('active');
            setTimeout(() => {
                panelActive.style.transition = null;
                panelActive.style.opacity = null;
            }, 0);
        }, 200);
    }
})