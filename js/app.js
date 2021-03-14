// const ls = document.querySelector('#lightToggle');
// const lsIcon = ls.querySelectorAll('svg');
// const bodyTag = document.querySelector('body');

// ls.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (bodyTag.classList.contains('dark')) {
//         bodyTag.classList.remove('dark');
//     } else {
//         bodyTag.classList.add('dark');
//     }
//     toggleLsIcon();
// });

// // Toggle Dark mode
// function toggleLsIcon() {
//     lsIcon.forEach((lsi) => {
//         if (lsi.classList.contains('hidden')) {
//             lsi.classList.remove('hidden');
//         } else {
//             lsi.classList.add('hidden');
//         }
//     });
// }

const mobileMenu = document.querySelector ('#mobile-menu');
const mobileMenuIcons = mobileMenu.querySelectorAll('a');
const nav = document.querySelector ('nav');
const menuItems = document.querySelector('.menu-items')
const menuIcons = document.querySelector('.menu-icons');


// Functions
function toggleBurger() {
    mobileMenuIcons.forEach((mmi) => {
        if (mmi.classList.contains('hidden')) {
            mmi.classList.remove('hidden');
        } else {
            mmi.classList.add('hidden');
        }
    });
}

mobileMenu.addEventListener("click", (e) => {
    e.preventDefault();
    if (menuItems.classList.contains("hidden")) {
        menuItems.classList.remove("hidden");
        menuItems.classList.add("flex");
        nav.classList.add("h-screen");
        menuIcons.classList.remove("hidden");
    } else {
        menuItems.classList.add("hidden");
        menuItems.classList.remove("flex");
        menuIcons.classList.add("hidden");
        nav.classList.remove("h-screen");
    }
    toggleBurger();
});