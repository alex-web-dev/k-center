import Choices from 'choices.js';

const $simpleFields = document.querySelectorAll('.js-select-simple .select__field');
$simpleFields.forEach($input => {
  new Choices($input, {
    searchEnabled: false,
    itemSelectText: '',
    placeholder: true,
    allowHTML: true,
    noResultsText: 'Не найдено',
  });
});


const $programsFields = document.querySelectorAll('.js-select-programs .select__field');
$programsFields.forEach($field => {
  new Choices($field, {
    searchEnabled: false,
    itemSelectText: '',
    placeholder: true,
    allowHTML: true,
    removeItemButton: true,
    noResultsText: 'Не найдено',
  });

  $field.addEventListener('addItem', (e) => {
    const text = $field.dataset.selectText;
    if (!text || !e.detail.value) {
      return;
    }
  
    const $select = $field.closest('.select');
    const $innerItem = $select.querySelector('.choices__inner .choices__item');
    $innerItem.childNodes[0].textContent = `${text}: ${e.detail.label}`;
  }, false);
});