const toggle = document.querySelector('#toggle');
const burgerMenu = document.querySelector('.burger-menu')
const menu = document.querySelector('.menu');
const viber = document.querySelector('.fa-viber');
const phoneNumber = document.querySelector('#phone-number');
const telegram = document.querySelector('.fa-telegram');
const buttonContact = document.querySelector('.button');




toggle.addEventListener('click', () => {
    if (toggle.classList.toggle('visible')) {
        burgerMenu.style.setProperty('display', 'block');
        menu.style.setProperty('display', 'none');

    } else [
        burgerMenu.style.removeProperty('display'),
        menu.style.removeProperty('display')
    ]

})

viber.addEventListener('click', () => {
    phoneNumber.textContent = `Viber number: 
    0931566815`;
    phoneNumber.style.setProperty('color', '#665CAC');

})
telegram.addEventListener('click', () => {
    phoneNumber.textContent = `Telegram number: 
    0931566815`
    phoneNumber.style.setProperty('color', '#0088cc');
})

