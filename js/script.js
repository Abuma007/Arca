

window.addEventListener('DOMContentLoaded', () => {
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.header_menu'),
      menuItem = document.querySelector('header_mnu'),
      noScroll = document.querySelector('body');


hamburger.addEventListener('click', open);
noScroll.addEventListener('click', close);


function open() {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('header_menu_active');
};

function close() {
    if (hamburger.classList.contains('hamburger_active')){
        noScroll.style.overflow = 'hidden'
    } else {
        noScroll.style.overflow = 'visible'
    }
}


// for (const i = 0; i < menuItem.length; i++) {
//     menuItem[i].onclick = function() {
//       if (getComputedStyle(header_menu).display === 'flex') {
//         header_menu.style.display = 'none';
//       } else {
//         header_menu.style.display = 'flex';
//       }
//       this.classList.toggle('hamburger');
//     }
//   }

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('hamburger_active');
        menu.classList.remove('menu_active');
    })
})
})
