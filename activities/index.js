function animateCss(item, action) {
    const element = document.querySelector(item);
    element.classList.add('animated', action);
}

animateCss(".main_nav", "bounceInDown");
animateCss(".header_title", "bounceInUp");
animateCss('.header_description', "bounceInUp");
animateCss('.form', "bounceInDown");