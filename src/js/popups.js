const $openBtns = document.querySelectorAll('.js-open-popup');
$openBtns.forEach($btn => {
  $btn.addEventListener('click', e => {
    const popupName = $btn.dataset.popupName;
    const $popup = document.querySelector(`.popup_${popupName}`);

    if ($popup) {
      e.preventDefault();

      show($popup);
    }
  });
});

const $popups = document.querySelectorAll('.popup');
$popups.forEach($popup => {
  $popup.addEventListener('click', e => {
    if (e.target === $popup) {
      hide($popup);
    }
  });

  const $closeBtn = $popup.querySelector('.popup__close');
  $closeBtn.addEventListener('click', () => {
    hide($popup);
  });
});

function show($popup) {
  const $body = document.querySelector('.body');
  $body.classList.add('body_lock');
  $popup.classList.add('popup_show');
}

function hide($popup) {
  const $body = document.querySelector('.body');
  $body.classList.remove('body_lock');
  $popup.classList.remove('popup_show');
}