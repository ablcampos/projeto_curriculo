var btnMenu    =document.querySelector('.btn-menu');
var menu       =document.querySelector('.menu');
/*
console.log(btnMenu);
console.log(menu);
*/
//funcao para manipular o menu
function menuSite(){
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');
}


//eventos

btnMenu.addEventListener('click',menuSite);