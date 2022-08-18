const $btns = document.querySelectorAll('.tabs__btn');
$btns.forEach(($btn, index) => {
  $btn.addEventListener('click', () => {
    const $tabs = $btn.closest('.tabs');

    const $activeBtn = $tabs.querySelector('.tabs__btn_active');
    $activeBtn.classList.remove('tabs__btn_active');

    const $newActiveBtn = $tabs.querySelectorAll('.tabs__btn')[index];
    $newActiveBtn.classList.add('tabs__btn_active');

    const $activeTab = $tabs.querySelector('.tabs__item_active');
    $activeTab.classList.remove('tabs__item_active');

    const $newActiveTab = $tabs.querySelectorAll('.tabs__item')[index];
    $newActiveTab.classList.add('tabs__item_active');
  });
});