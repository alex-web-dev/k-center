import { moveElement } from "./helpers";

const $teamItem = document.querySelector('.team-item');

if ($teamItem) {
  moveElement({
    element: '.team-item__description',
    from: '.team-item__inf',
    to: '.team-item__mobile-inf',
    width: 819
  });

  window.addEventListener('resize', () => {
    moveElement({
      element: '.team-item__description',
      from: '.team-item__inf',
      to: '.team-item__mobile-inf',
      width: 819
    });
  });
}