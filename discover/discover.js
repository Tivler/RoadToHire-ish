function animateCss(item, action) {
    const element = document.querySelector(item);
    element.classList.add('animated', action);
}

animateCss(".main_nav", "bounceInDown");
animateCss(".header_title", "bounceInUp");

function navEffect() {
    const nav = document.querySelector('.main_nav');

    window.addEventListener('scroll', function () {
        if (window.scrollY >= 108) {
            nav.classList.add('blue');
        } else {
            nav.classList.remove('blue');
        }
    })
}

navEffect();