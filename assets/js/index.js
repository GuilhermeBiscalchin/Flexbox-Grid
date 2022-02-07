/*Removendo a barra do menu */
const btnMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

function abrirMenu(){
    btnMenu.addEventListener('click',() => {
        menu.classList.toggle('menu-lateral--ativo')
    })
}

function main(){
    abrirMenu()
}

main()

