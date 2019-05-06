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
    const lastName = document.querySelector('#inputLastName');
    const phoneNumber = document.querySelector('#inputPhoneNumber');
    const email = document.querySelector('#inputEmail');
    const message = document.querySelector('#inputMessage');
    let empty = "";

    form.addEventListener("submit", function (e) {
        alert(`Thanks For Subscribing ${newUser.value} !`);
        e.preventDefault();
        newUser.value = empty;
        lastName.value = empty;
        phoneNumber.value = empty;
        email.value = empty;
        message.value = empty;
    });
}

submitAction();