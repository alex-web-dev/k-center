import Swiper, {Navigation} from 'swiper';

Swiper.use([Navigation]);

new Swiper('.images-slider__list', {
  direction: 'horizontal',
  slidesPerView: 1,
  speed: 400,
  spaceBetween: 20,
  watchOverflow: false,
  loop: true,
  navigation: {
    nextEl: '.images-slider__next',
    prevEl: '.images-slider__prev',
  },
  breakpoints: {
    819: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    }
  }
});