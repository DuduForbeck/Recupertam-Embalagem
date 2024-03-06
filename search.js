const carousel = document.querySelector('.carousel');
const banners = document.querySelectorAll('.banner');
let currentIndex = 0;
let bannerWidth = banners[0].clientWidth;

function nextSlide() {
    currentIndex = (currentIndex + 1) % banners.length;
    carousel.style.transform = `translateX(-${currentIndex * bannerWidth}px)`;
}

setInterval(nextSlide, 5000); // Muda o slide a cada 5 segundos (5000 milissegundos)


