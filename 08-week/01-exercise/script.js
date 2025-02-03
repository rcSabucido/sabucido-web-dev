const header = document.querySelector('.paragraph');
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    header.textContent = "You clicked the button!";
    });