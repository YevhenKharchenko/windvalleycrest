import Swiper from 'swiper';
import 'swiper/css/bundle';

const faqLeftArrow = document.getElementById('faqLeftArrow');
const faqRightArrow = document.getElementById('faqRightArrow');

let faqSwiper;

faqSwiper = new Swiper('.faq-swiper-container', {
  direction: 'horizontal',
  loop: false,
  centeredSlides: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  initialSlide: 0,
  spaceBetween: 22,
  speed: 500,
  allowTouchMove: true,
  grabCursor: true,
  watchOverflow: true,
  breakpoints: {
    1440: {
      centeredSlides: false,
      allowTouchMove: false,
      grabCursor: false,
      slidesPerView: 6,
      spaceBetween: 0,
    },
  },

  on: {
    init(swiper) {
      document.querySelector('.faq-swiper-container').classList.add('show');
      updateFaqArrows(swiper);
    },
    slideChange(swiper) {
      updateFaqArrows(swiper);
    },
    reachEnd(swiper) {
      updateFaqArrows(swiper);
    },
    reachBeginning(swiper) {
      updateFaqArrows(swiper);
    },
  },
});

updateFaqArrows(faqSwiper);

function updateFaqArrows(swiper) {
  faqLeftArrow.disabled = swiper.isBeginning;
  faqRightArrow.disabled = swiper.isEnd;
}

faqLeftArrow.addEventListener('click', () => {
  faqSwiper.slidePrev();
});

faqRightArrow.addEventListener('click', () => {
  faqSwiper.slideNext();
});
