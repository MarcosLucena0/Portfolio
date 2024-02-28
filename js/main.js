let scrollContainer = document.querySelector(".formacao-caixa");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", ()=> {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 200;
});

backBtn.addEventListener("click", ()=> {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 200;
});


//modo dark
const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const home = document.getElementById('home');
    const sobre = document.getElementById('sobre');
    const projetos = document.getElementById('projetos');
    const formacao = document.getElementById('formacao');
    const contato = document.getElementById('contato');

    if(mode.classList.contains('bi-moon-fill')){
        mode.classList.remove('bi-moon-fill');
        mode.classList.add('bi-brightness-high-fill');

        home.classList.add('dark');
        sobre.classList.add('dark');
        projetos.classList.add('dark');
        formacao.classList.add('dark');
        contato.classList.add('dark');
        return;
    }
    mode.classList.add('bi-moon-fill');
    mode.classList.remove('bi-brightness-high-fill');
    home.classList.remove('dark');
    sobre.classList.remove('dark');
    projetos.classList.remove('dark');
    formacao.classList.remove('dark');
    contato.classList.remove('dark');
});

//interação do menu mobile
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})


//interação do efeito de rolagem dinamico
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 10;
  smoothScrollTo(0, distanceFromTheTop);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 900;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}

//interacao do botao scroll 
window.addEventListener('scroll', function(){
  let scroll = document.querySelector('.scrollTop')
    scroll.classList.toggle('active', window.scrollY > 450)
})

function backTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

