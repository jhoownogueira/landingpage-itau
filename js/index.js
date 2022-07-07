const btnParaVoce = document.getElementById('btn-accordion-para-voce');
const btnAjuda = document.getElementById('btn-accordion-ajuda');
const menuParaVoce = document.querySelector('.accordion');
const menuAjuda = document.querySelector('.accordion.ajuda');

btnAjuda.addEventListener('click', (e) => {
    e.preventDefault();
    removeClass(menuParaVoce);
    toggleClass(menuAjuda);
    menuAjuda.addEventListener('mouseleave', () => {
        removeClass(menuAjuda);
    })
})

btnParaVoce.addEventListener('click', (e) => {
    e.preventDefault();
    removeClass(menuAjuda);
    toggleClass(menuParaVoce);
    menuParaVoce.addEventListener('mouseleave', () => {
        removeClass(menuParaVoce);
    })
})

const contentMenuMobile = document.getElementById('content-menu-mobile');
const menuHamburguer = document.getElementById('menu-hamburguer');

const btnMobileParaVoce = document.getElementById('btn-mobile-accordion-para-voce');
const accordionParaVoceMobile = document.querySelector('.mobile-accordion.para-voce');

const btnMobileAjuda = document.getElementById('btn-mobile-accordion-ajuda');
const accordionAjudaMobile = document.querySelector('.mobile-accordion.ajuda');
console.log(accordionAjudaMobile)


menuHamburguer.addEventListener('click', () => {
    toggleClass(contentMenuMobile);
})

btnMobileParaVoce.addEventListener('click', (e) => {
    e.preventDefault();
    toggleClass(accordionParaVoceMobile);
})

btnMobileAjuda.addEventListener('click', (e) => {
    e.preventDefault();
    toggleClass(accordionAjudaMobile);
})

function toggleClass(item) {
    item.classList.toggle('active');
}
function removeClass(item) {
    item.classList.remove('active')
}
