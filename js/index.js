// Toggle search bar for mobile
// create variables
const menuButton = document.querySelector('.menu-btn');
const navCloseBtn = document.querySelector('nav .close-btn');
const mobileMenuModal = document.querySelector('.mobile-menu-modal');
const mobileMenuLinks = document.querySelector('.mobile');
const projectCloseBtn = document.querySelector('.profolio-preview-modal .close-btn');
const projectModalCard = document.querySelector('.profolio-preview-modal');

// add event listener for menu button to open mobile menu
menuButton.addEventListener('click', () => {
  mobileMenuModal.classList.toggle('close');
});

// add event listener for close button to close mobile menu
navCloseBtn.addEventListener('click', () => {
  mobileMenuModal.classList.toggle('close');
});

// add event listener to target each link item
mobileMenuLinks.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    mobileMenuModal.classList.toggle('close');
  }
});

// add event listener to the profolio preview modal card

projectCloseBtn.addEventListener('click', () => {
  projectModalCard.classList.toggle('close');
});
