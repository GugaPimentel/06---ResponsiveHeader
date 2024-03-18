const openButton = document.getElementById('open-menu-mobile')
const menuMobile = document.querySelector('.mobile-menu')

function openClose() {
  menuMobile.classList.toggle('hide')
  openButton.classList.toggle('active')
}