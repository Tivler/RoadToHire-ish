function animateCss (item , action , delay) {
    const element =  document.querySelector(item);
    element.classList.add('animated', action , delay);
}

animateCss(".main_nav" , "bounceInDown" );
animateCss(".header_title", "bounceInDown");
animateCss('.header_description' , "bounceInDown");
animateCss('.button' , "bounceInDown");


function navEffect () {
    const nav = document.querySelector('.main_nav');

    window.addEventListener('scroll' , function() {
        if(window.scrollY >= 541.8181762695312) {
            nav.classList.add('blue');
        } else {
            nav.classList.remove('blue');
        }
    })
}

navEffect();
