const $burger = document.querySelector('#burger');
const $menu = document.querySelector('#menu');

$burger.addEventListener('click', () => {
  const menuIsHidden = $menu.classList.contains('hidden');

  if (menuIsHidden) {
    $menu.classList.remove('hidden');
  } else {
    $menu.classList.add('hidden');
  }
});
