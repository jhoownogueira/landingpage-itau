const btnParaVoce = document.getElementById('btn-accordion-para-voce');
const btnAjuda = document.getElementById('btn-accordion-ajuda');
const menuParaVoce = document.querySelector('.accordion');
const menuAjuda = document.querySelector('.accordion.ajuda');
console.log(menuAjuda)


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

function toggleClass(item) {
    item.classList.toggle('active');
}
function removeClass(item) {
    item.classList.remove('active')
}
