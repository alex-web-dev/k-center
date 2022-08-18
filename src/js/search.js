const $search = document.querySelector('.search');

if ($search) {
  const $input = $search.querySelector('.search__input');
  $input.addEventListener('input', () => {
    if ($input.value) {
      $search.classList.add('search_complete');
    } else {
      $search.classList.remove('search_complete');
    }
  });

  const $clear = $search.querySelector('.search__clear');
  $clear.addEventListener('click', () => {
    $input.value = '';
    $search.classList.remove('search_complete');
  });
}