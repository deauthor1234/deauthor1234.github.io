//Dropdown Effect
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');

  select.addEventListener('click', () => {
    select.classList.toggle('clicked');
    caret.classList.toggle('rotate');
    menu.classList.toggle('open');
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText;
      select.classList.remove('clicked');
      caret.classList.remove('rotate');
      menu.classList.remove('open');
      options.forEach(option => {
        option.classList.remove('active');
      });

      option.classList.add('active');
    });
  });
});