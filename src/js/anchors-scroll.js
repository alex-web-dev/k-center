import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

const $anchors = document.querySelectorAll('a[href*="#"]');
$anchors.forEach($anchor => {
  $anchor.addEventListener('click', e => {
    e.preventDefault();
    
    const id = $anchor.getAttribute('href');
    if (id === '#') {
      return;
    }

    const $elem = document.querySelector(id);
    if ($elem) {
      const offsetTop = $elem.getBoundingClientRect().top;
      window.scrollBy({ top: (offsetTop), left: 0, behavior: 'smooth' });
    }
  });
});