function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const fullscreenNav = document.querySelector('.fullscreen-nav');
    const fullNavLink = document.querySelector('.full-nav-link')

    hamburger.classList.toggle('active');
    fullscreenNav.classList.toggle('active');
    fullNavLink.classList.toggle('active')
}