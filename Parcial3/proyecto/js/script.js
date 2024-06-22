/* 
    Equipo: Sebastian Vizcarra Salas & Azul Rodriguez Ruiz
    2AmPr ISSI
*/
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}