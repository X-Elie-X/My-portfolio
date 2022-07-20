const listInfo = document.getElementById('listinfo');
const icon = document.getElementById('menu-icon');
const btn = document.querySelectorAll('#btn');
const popup = document.getElementById('popup1');
const close = document.querySelector('#close-popup');
function mobileMenu() {
  if (listInfo.style.display === 'block') {
    icon.innerHTML = '<i class="fa fa-bars 2x"></i>';
    listInfo.style.display = 'none';
  } else {
    icon.innerHTML = '<i class="fa fa-times-circle"></i>';
    listInfo.style.display = 'block';
  }
}
const element = document.getElementById('menu-icon');
element.addEventListener('click', mobileMenu);

function openPopup() {
  popup.style.display = 'block';
}
btn.forEach((btn) => {
  btn.addEventListener('click', openPopup);
});

function closePopup() {
  popup.style.display = 'none';
}
close.addEventListener('click', closePopup);

// function on() {
//   document.getElementById('#overlay').style.display = 'bloack';
// }

// function off() {
//   document.getElementById('#overlay').style.display = 'none';
// }
