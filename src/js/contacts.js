import { moveElement } from "./helpers";
import Swiper, {Navigation} from 'swiper';

Swiper.use([Navigation]);

new Swiper('.contacts__slider-main', {
  direction: 'horizontal',
  slidesPerView: 1,
  speed: 400,
  watchOverflow: false,
  loop: true,
  navigation: {
    nextEl: '.contacts__next',
    prevEl: '.contacts__prev',
  }
});


const $socialList = document.querySelector('.contacts__social-list');

if ($socialList) {
  moveElement({
    element: '.contacts__social-list',
    from: '.contacts__social',
    to: '.contacts__social-mobile',
    width: 1200
  });

  window.addEventListener('resize', () => {
    moveElement({
      element: '.contacts__social-list',
      from: '.contacts__social',
      to: '.contacts__social-mobile',
      width: 1200
    });
  });
}