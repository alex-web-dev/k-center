import { isMobile } from "./helpers";

window.addEventListener('load', () => {
  const $menu = document.querySelector('.menu');

  if ($menu) {
    const $menuLinks = $menu.querySelectorAll('.menu__link');
    $menuLinks.forEach($link => {
      $link.addEventListener('mouseover', () => {
        if (isMobile()) {
          return;
        }

        if ($link.closest('.menu__item_has_children')) {
          $menu.classList.add('menu_show');
        } else {
          $menu.classList.remove('menu_show');
        }
      });

      $link.addEventListener('click', e => {
        if (!isMobile()) {
          return;
        }

        const $hasChilrenItem = $link.closest('.menu__item_has_children');
        if ($hasChilrenItem) {
          e.preventDefault();
          $hasChilrenItem.classList.toggle('menu__item_active');
        }
      });
    });

    $menu.addEventListener('mouseleave', () => {
      if (!isMobile()) {
        $menu.classList.remove('menu_show');
      }
    });

    const $toggle = $menu.querySelector('.menu__toggle');
    $toggle.addEventListener('click', () => {
      $menu.classList.toggle('menu_active');
    });

    if (!isMobile()) {
      $menu.classList.add('menu_loaded');

      const minHeight = getSubMinHeight();
  
      const $menuBg = $menu.querySelector('.menu__bg');
      $menuBg.style.height = `${minHeight}px`;
    }
  }

  window.addEventListener('resize', () => {
    if (!isMobile() && !$menu.classList.contains('menu_loaded')) {
      $menu.classList.add('menu_loaded');
    }
  });
});

function getSubMinHeight() {
  const $menu = document.querySelector('.menu');
  const $subElems = $menu.querySelectorAll('.menu__sub');
  const subElemsHeights = [...$subElems].map($subElem => $subElem.offsetHeight);
  const minHeight = Math.min(...subElemsHeights);

  return minHeight;
}