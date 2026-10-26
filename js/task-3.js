'use strict'

const nameInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
    output.textContent = event.target.value.trim();
    if (event.target.value.trim() === '') {
        output.textContent = 'Anonymous'
    }
});