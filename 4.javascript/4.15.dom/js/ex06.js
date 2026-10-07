const navLinkItems = document.querySelectorAll('nav a');

navLinkItems.forEach((navItem) => {
    navItem.addEventListener('click', (e) => {
        e.preventDefault();
        const href = navItem.getAttribute('href');
        if (!href) {
            return;
        }
        const tabPanel = document.querySelector(`.js-tab-content ${href}`);
        if (!tabPanel) {
            return;
        }

        const panelActive = document.querySelector('.js-tab-content .active');
        if (panelActive) {
            panelActive.classList.remove('active');
        }
        tabPanel.classList.add('active'); //Hiển thị tab

    });
})