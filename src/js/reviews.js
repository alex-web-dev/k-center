import Swiper, {Pagination, Navigation} from 'swiper';

Swiper.use([Pagination, Navigation]);

new Swiper('.reviews__list', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 400,
  watchOverflow: false,
  loop: true,
  navigation: {
    nextEl: '.reviews__next',
    prevEl: '.reviews__prev',
  }
});