function animateCss(item, action, delay) {
    const element = document.querySelector(item);
    element.classList.add('animated', action, delay);
}

animateCss(".main_nav", "bounceInDown");
animateCss(".header_title", "bounceInDown");
animateCss('.header_description', "bounceInDown");
animateCss('.form', "bounceInDown");

function submitAction() {
    const form = document.querySelector('.form_signup');
    const newUser = document.querySelector('#inputFirstName');

    form.addEventListener("submit", function () {
        alert(`Thanks For Subscribing ${newUser.value} !`);
        window.open('/index.html');
    })
}

submitAction();