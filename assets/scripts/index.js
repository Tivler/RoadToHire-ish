// let navStuff = () => {
//     let offset = window.pageYOffset;
//     if (offset >= )
// }

let offset = window.pageYOffset;
console.log(offset);

function parallax () {
    const parallax = document.querySelector('.parallax');

    window.addEventListener('scroll' ,  function () {
        let offset = window.pageYOffset;
        parallax.style.backgroundPositionY = offset * 0.4 + 'px' ; 
    });
}

function animateCss (item , action) {
    const element =  document.querySelector(item);
    element.classList.add('animated', action);
}

parallax();

animateCss(".main_nav" , "bounceInDown");
animateCss(".main_header--title", "bounceInUp");


