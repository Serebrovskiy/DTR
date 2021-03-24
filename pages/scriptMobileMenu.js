//откритие/закрытие мобильного меню
const btnHeader = document.getElementById('header');
// const btnMenu = document.getElementById('menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinkList = document.querySelectorAll('.mobile__navigatoin-link-text');


function toggleClass() {
  mobileMenu.classList.toggle('mobile-menu_opened');
}
function removeClass() {
  mobileMenu.classList.remove('mobile-menu_opened');
}

btnHeader.addEventListener('click', toggleClass);
for (let link of mobileLinkList) {
  link.addEventListener('click', removeClass);
}




  // if (mobileMenu.classList.contains('mobile-menu_opened')) {
  // mobileMenu.classList.remove('mobile-menu_opened');
  // }
  // else {
  //   mobileMenu.classList.add('mobile-menu_opened');
  // }
// btnHeader.addEventListener('click', addClass);
// btnMenu.addEventListener('click', removeClass);
