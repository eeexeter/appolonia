const menu = document.querySelector('.menu-toggle');
const menuIcon = menu.querySelector('use');
const navigation = document.querySelector('.nav');
const booking = document.querySelector('#booking');

function setMenu(open) {
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  menuIcon.setAttribute('href', open ? '#close-icon' : '#list');
}

menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !booking.open && menu.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menu.focus();
  }
});

if (typeof booking.showModal === 'function') {
  let bookingTrigger;

  booking.addEventListener('close', () => {
    bookingTrigger?.focus();
    bookingTrigger = undefined;
  });

  document.querySelectorAll('[data-book]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      bookingTrigger = link;
      setMenu(false);
      booking.showModal();
    });
  });
}
