function animateCss(item, action) {
    const element = document.querySelector(item);
    element.classList.add('animated', action);
}

animateCss(".main_nav", "bounceInDown");
animateCss(".header_title", "bounceInDown");
animateCss('.header_description', "bounceInDown");
animateCss('.form', "bounceInDown");

function submitAction() {
    const form = document.querySelector('.form_signup');
    const firstName = document.querySelector('#inputFirstName');
    const lastName = document.querySelector('#inputLastName');
    const phoneNumber = document.querySelector('#inputPhoneNumber');
    const email = document.querySelector('#inputEmail');
    const message = document.querySelector('#inputMessage');
    let empty = "";

    form.addEventListener("submit", function (e) {
        alert(`Thanks For Subscribing ${firstName.value}!`);
        e.preventDefault();
        firstName.value = empty;
        lastName.value = empty;
        phoneNumber.value = empty;
        email.value = empty;
        message.value = empty;
    });
}

submitAction();

