const $popup = document.querySelector('.popup_callback');
if ($popup) {
  const $form = $popup.querySelector('.popup__callback-form');
  $form.addEventListener('submit', e => {
    e.preventDefault();

    
    popupSuccess($popup);
  });
}

function popupSuccess($popup) {
  const $subtitle = $popup.querySelector('.popup__subtitle');
  const $form = $popup.querySelector('.popup__callback-form');

  $subtitle.innerText = 'Сообщение отправлено, мы обязательно вам ответим';
  $form.remove();
}