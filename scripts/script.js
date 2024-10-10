//document.querySelector('.menu-toggle').addEventListener('click', () => {
    //document.querySelector('.navbar').classList.toggle('active');
//});

const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('active'); // Para animar ou mudar o ícone, se necessário
});