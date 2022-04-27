let iconMenu = document.getElementById('header-icon_menu');
let Menu = document.getElementById('header_menu');
let menuList= document.querySelectorAll('.header_menu-list');

let menuClose = document.querySelector('.header_menu-close img')

window.addEventListener('scroll', ()=>{
    let header = document.getElementById('header-container');
    // let iconMenu = document.getElementById('header-icon_menu');

    header.classList.toggle('sticky',window.scrollY>0);
    iconMenu.classList.toggle('changeColor',window.scrollY>0)

})

const toggleMenu = () => {
    Menu.classList.toggle('showMenu');
    menuClose.classList.toggle('changeColor')
    iconMenu.classList.remove('toggleMenu')
    menuList.forEach(e=>{
        e.classList.toggle('showMenu_list')
    })
}

iconMenu.addEventListener('click', (e)=>{
    toggleMenu()
    iconMenu.classList.add('toggleMenu')
})
menuClose.addEventListener('click',(e)=>{
    toggleMenu();
    iconMenu.classList.remove('toggleMenu')
})