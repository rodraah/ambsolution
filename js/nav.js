let navBotao = document.getElementById("navBotao");
let nav = document.querySelector('nav');
let links = document.getElementsByClassName("links");
let logoImg = document.querySelector('.headerLogo');

// se o botão da barra de navegação é tocado,
// a classe 'noDisplay' é alternada, o que 
// esconde a imagem e mostra os links
navBotao.addEventListener('click', function() {
  for (var i = 0; i < links.length; i++) {
    links[i].classList.toggle('noDisplay');
  };
  logoImg.classList.toggle("noDisplay");
  nav.classList.toggle("navLinks");
});
