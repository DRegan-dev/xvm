const menuBtn = document.querySelector('.menu-btn');
const popupMenu = document.querySelector('.popup-menu');
const main = document.querySelector('.main');

menuBtn.addEventListener('click', () => {
    popupMenu.classList.add('active');
    main.classList.add('active');
});