function animateCss (item , action , delay) {
    const element =  document.querySelector(item);
    element.classList.add('animated', action , delay);
}

animateCss(".main_nav" , "bounceInDown" );
animateCss(".main_header--title", "bounceInUp");
animateCss('.header--description' , "bounceInUp");
animateCss('.button' , "bounceInUp");


function navEffect () {
    const nav = document.querySelector('.main_nav');

    window.addEventListener('scroll' , function() {
        if(window.scrollY) {
            nav.classList.add('blue');
        } else {
            nav.classList.remove('blue');
        }
    })
}

navEffect();
