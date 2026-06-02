import Swiper from 'swiper';
import 'swiper/css/bundle';

const galleryDots = document.querySelectorAll('.gallery-dot');

let gallerySwiper;

gallerySwiper = new Swiper('.gallery-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 28,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  breakpoints: {
    1440: {
      initialSlide: 2,
      slidesPerView: 'auto',
    },
  },
  on: {
    init: () => {
      document.querySelector('.gallery-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updateGalleryDots(this.realIndex);
    },
  },
});

function updateGalleryDots(index) {
  galleryDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

galleryDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    gallerySwiper.slideTo(index);
  });
});
