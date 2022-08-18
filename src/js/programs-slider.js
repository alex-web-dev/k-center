import Swiper, {Navigation} from 'swiper';

Swiper.use([Navigation]);

new Swiper('.programs-slider', {
  direction: 'horizontal',
  slidesPerView: 1,
  speed: 400,
  watchOverflow: false,
  loop: true,
  navigation: {
    nextEl: '.programs-slider__next',
    prevEl: '.programs-slider__prev',
  }
});