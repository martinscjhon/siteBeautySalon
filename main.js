// função hamburguer
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show') //toggle = adiciona
  })
}

// função click nos links
const links = document.querySelectorAll('nav ul li a')

for (const element of links) {
  element.addEventListener('click', function () {
    nav.classList.remove('show') //remove = remova
  })
}

// função scroll header com borda
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    //scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    //scroll é menor que a altura do header
    header.classList.remove('scroll')
  }
})

// Testimonials slider (swiper)
//configurações do slide
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: false,
  keyboard: true
})

// ScrollRevel
//configurações do scrollrevel
const scroll = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 850,
  reset: true
})

scroll.reveal(
  `
  #home .image, #home .text,
  #about .image, #about .text
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links
  `,
  { interval: 100 }
)
