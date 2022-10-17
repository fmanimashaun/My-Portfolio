// Toggle search bar for mobile
// create variables
const menuButton = document.querySelector('.menu-btn');
const closeButton = document.querySelector('.close-btn');
const mobileMenuModal = document.querySelector('.mobile-menu-modal');
const mobileMenuLinks = document.querySelector('.mobile');

// add event listener for menu button to open mobile menu
menuButton.addEventListener('click',  () => {
  mobileMenuModal.classList.toggle('close-menu');
});

// add event listener for close button to close mobile menu
closeButton.addEventListener('click', () => {
  mobileMenuModal.classList.toggle('close-menu');
});

// add event listener to target each link item
mobileMenuLinks.addEventListener('click', event => {
  if (event.target.matches('a')) {
    mobileMenuModal.classList.toggle('close-menu');
  }
});



