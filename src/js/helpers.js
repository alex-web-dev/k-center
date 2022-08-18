export function isMobile() {
  return window.innerWidth < 820;
}

export function moveElement({ element, from, to, width }) {
  const $elem = document.querySelector(element);
  const $from = document.querySelector(from);
  const $to = document.querySelector(to);

  if (!$elem || !$from || !$to) {
    return;
  }

  setTimeout(() => {
    if (window.innerWidth <= width && $elem.parentNode === $from) {
      $to.append($elem);
    } else if (window.innerWidth >= width && $elem.parentNode !== $from) {
      $from.append($elem);
    }
  });
}