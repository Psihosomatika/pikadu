const menuToggle = document.querySelector('#menu-toggle');
const menu = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function (event) {
    event.preventDefault();//отменяет стандартное поведение ссылки
    menu.classList.toggle('visible');
})