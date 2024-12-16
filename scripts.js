const menu = document.querySelector('.menu')
const croix = document.querySelector('.croix')
const menuOuvert = document.querySelector('.menuOuvert')

// carre.className = "truc"

menu.addEventListener('click', () => {
    menu.className = "displayNone"
    croix.className = "croix displayFlex"
    menuOuvert.className = "menuOuvert displayFlex"

})

croix.addEventListener('click', () => {
    menu.className = "menu displayFlex"
    croix.className = "croix displayNone"
    menuOuvert.className = "menuOuvert displayNone"
})