function animateCss(item, action, delay) {
    const element = document.querySelector(item);
    element.classList.add('animated', action, delay);
}

animateCss(".main_nav", "bounceInDown");
animateCss(".header_title", "bounceInDown");
animateCss('.header_description', "bounceInDown");
animateCss('.button', "bounceInDown");
animateCss('.article_wrapper' ,"bounceInUp");


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
