const btnMenu = document.querySelector('#btn-menu');
const menuIn = document.querySelector(".menu-in");
const menu = document.querySelector(".menu");

btnMenu.addEventListener('click', function(e) {
  e.preventDefault();

  menu.classList.toggle("invisivel");
  menuIn.classList.toggle("invisivel");
})

