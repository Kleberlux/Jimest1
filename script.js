// script.js
// Efeito parallax na imagem hero
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const heroImg = document.querySelector('.hero-img');
  if (heroImg) {
    heroImg.style.transform = `translateY(${scrollY * -0.3}px)`;
  }
});

// Controle do carrossel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function moveSlide(direction) {
  currentSlide += direction;
  
  // Verifica os limites
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  
  // Atualiza a posição do carrossel
  const carouselInner = document.querySelector('.carousel-inner');
  carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
  
  // Atualiza a classe active
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

// Inicializa o carrossel
function initCarousel() {
  if (slides.length > 0) {
    slides[0].classList.add('active');
    
    // Opcional: Auto-rotacionar o carrossel
    setInterval(() => {
      moveSlide(1);
    }, 5000);
  }
}

// Inicia quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initCarousel);