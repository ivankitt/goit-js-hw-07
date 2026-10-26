'use strict'

const loginForm = document.querySelector('.login-form')

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const infoForm = new FormData(event.target);
    infoForm.set('email', infoForm.get('email').trim());
    infoForm.set('password', infoForm.get('password').trim());
    if (infoForm.get('email') != '' && infoForm.get('password') != ''){
        const userInfo = {
            email: infoForm.get('email'),
            password: infoForm.get('password'),
        }
        console.log(userInfo);
        loginForm.reset();
    } else {
        alert("All form fields must be filled in");
    }
})

