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
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// ButtonTop
//Aparecer ao rolar a tela
function changeBackToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// Testimonials slider (swiper)
//configurações do slide
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: false,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
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
  #services header, #services .containerCard, .card
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

// When Sroll
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  changeBackToTop()
})
