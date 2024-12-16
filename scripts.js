const menu = document.querySelector('.menu')
const croix = document.querySelector('.croix')
const menuOuvert = document.querySelector('.menuOuvert')
const navbar = document.querySelector('.navbar')

navbar.addEventListener('click', () => {
    menu.classList.toggle("displayNone")
    croix.classList.toggle('displayFlex')
    menuOuvert.classList.toggle('displayFlex')

})