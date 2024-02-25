const menuBtn = document.querySelector('.menu-btn');
const popupMenu = document.querySelector('.popup-menu');
const main = document.querySelector('.main');
const returnBtn = document.querySelector('.return-btn');

menuBtn.addEventListener('click', () => {
    popupMenu.classList.add('active');
    main.classList.add('active');
});

returnBtn.addEventListener('click', () => {
    popupMenu.classList.remove('active');
    main.classList.remove('active');
});