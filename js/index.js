//Toggle search bar for mobile

//create variables
const menuButton = document.querySelector('.menu-btn');
const closeButton = document.querySelector('.close-btn');
const mobileMenuModal = document.querySelector('.mobile-menu-modal');
const mobileMenuLinks = document.querySelector(".mobile")
const bodyWidth = document.querySelector("body").innerWidth;

//add event listener for menu button to open mobile menu
menuButton.addEventListener('click', function () {
  mobileMenuModal.classList.toggle('close-menu');
});

//add event listener for close button to close mobile menu
closeButton.addEventListener('click', function () {
  mobileMenuModal.classList.toggle('close-menu');
});

//add event listener to target each link item
mobileMenuLinks.addEventListener('click', function (event) {
  if (event.target.matches('a')) {
    mobileMenuModal.classList.toggle('close-menu');
  }
});



