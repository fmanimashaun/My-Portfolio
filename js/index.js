// Toggle search bar for mobile
// create variables
const menuButton = document.querySelector('.menu-btn');
const navCloseBtn = document.querySelector('nav .close-btn');
const mobileMenuModal = document.querySelector('.mobile-menu-modal');
const mobileMenuLinks = document.querySelector('.mobile');
const projectCloseBtn = document.querySelector('.profolio-preview-modal .close-btn');
const projectModalCard = document.querySelector('.profolio-preview-modal');
const projectCards = document.querySelectorAll('.project-item');
const cardList = Array.from(projectCards);

// create a project info list

const projectDetails = [
  {
    name: 'Multi-Post Stories Gain+Glory (Project 1)',
    desc: "[Project 1]Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imgSrc: {
      mobile: 'img/Snapshoot_portfolio_mobile_1.png',
      desktop: 'img/Snapshoot_portfolio_desktop_1.png',
    },
    tech: [
      'Ruby on rails 1', 'css 1', 'JavaScript 1', 'html 1'],
    liveLink: '#1',
    sourceLink: '#1',
  },
  {
    name: 'Multi-Post Stories Gain+Glory (Project 2)',
    desc: "[Project 2]Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imgSrc: {
      mobile: 'img/Snapshoot_portfolio_mobile_2.png',
      desktop: 'img/Snapshoot_portfolio_desktop_2.png',
    },
    tech: [
      'Ruby on rails 2', 'css 2', 'JavaScript 2', 'html 2'],
    liveLink: '#2',
    sourceLink: '#2',
  },
  {
    name: 'Multi-Post Stories Gain+Glory (Project 3)',
    desc: "[Project 3]Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imgSrc: {
      mobile: 'img/Snapshoot_portfolio_mobile_3.png',
      desktop: 'img/Snapshoot_portfolio_desktop_3.png',
    },
    tech: [
      'Ruby on rails 3', 'css 3', 'JavaScript 3', 'html 3'],
    liveLink: '#3',
    sourceLink: '#3',
  },
  {
    name: 'Multi-Post Stories Gain+Glory (Project 4)',
    desc: "[Project 4]Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imgSrc: {
      mobile: 'img/Snapshoot_portfolio_mobile_4.png',
      desktop: 'img/Snapshoot_portfolio_desktop_4.png',
    },
    tech: [
      'Ruby on rails 4', 'css 4', 'JavaScript 4', 'html 4'],
    liveLink: '#4',
    sourceLink: '#4',
  },
  {
    name: 'Multi-Post Stories Gain+Glory (Project 5)',
    desc: "[Project 5]Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imgSrc: {
      mobile: 'img/Snapshoot_portfolio_mobile_5.png',
      desktop: 'img/Snapshoot_portfolio_desktop_5.png',
    },
    tech: [
      'Ruby on rails 5', 'css 5', 'JavaScript 5', 'html 5'],
    liveLink: '#5',
    sourceLink: '#5',
  },
  {
    name: 'Multi-Post Stories Gain+Glory (Project 6)',
    desc: "[Project 6]Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imgSrc: {
      mobile: 'img/Snapshoot_portfolio_mobile_6.png',
      desktop: 'img/Snapshoot_portfolio_desktop_6.png',
    },
    tech: [
      'Ruby on rails 6', 'css 6', 'JavaScript 6', 'html 6'],
    liveLink: '#6',
    sourceLink: '#6',
  },
];

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

// looping through the card list to listen to botton clicks
cardList.forEach((card, index) => {
  // Find the card btn
  const cardBtn = card.querySelector('.project-item-btn');

  // Add event listener to the accordion header
  cardBtn.addEventListener('click', () => {
    // get the elements in the modal card
    const previewTitle = projectModalCard.querySelector('.preview-title');
    const previewDesc = projectModalCard.querySelector('.preview-desc-text');
    const previewImgMobile = projectModalCard.querySelector('.preview-mobile-img');
    const previewImgDesktop = projectModalCard.querySelector('.preview-desktop-img');
    const previewTech = projectModalCard.querySelector('.preview-tech');
    const previewLiveLink = projectModalCard.querySelector('.preview-live-btn');
    const previewSourceLink = projectModalCard.querySelector('.preview-source-btn');

    // reasign values to the variables based on the clicked project
    previewTitle.textContent = projectDetails[index].name;
    previewDesc.textContent = projectDetails[index].desc;
    previewImgMobile.src = projectDetails[index].imgSrc.mobile;
    previewImgDesktop.src = projectDetails[index].imgSrc.desktop;
    previewTech.innerHTML = ''; // remove the initial list items
    // add new list items
    projectDetails[index].tech.forEach((item) => {
      previewTech.innerHTML += `<li>${item}</li>`;
    });
    previewLiveLink.href = projectDetails[index].liveLink;
    previewSourceLink.href = projectDetails[index].sourceLink;
    projectModalCard.classList.toggle('close');
  });
});

// add event listener to the profolio preview modal card
projectCloseBtn.addEventListener('click', () => {
  projectModalCard.classList.toggle('close');
});

// Getting form elements
const form = document.querySelector('.contact-content-form');
const submitBtn = document.querySelector('input[type="submit"]');
const fullName = document.querySelector('#full_name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const EMAIL_REQUIRED = 'Please enter your email, form yet to be submitted';
const EMAIL_INVALID = 'Please enter email in lowercase, form yet to be submitted';

const isRequired = (value) => {
  if (value === '') {
    return false;
  }
  return true;
};

const showError = (input, message) => {
  // add the error class
  input.classList.remove('success');
  input.classList.add('error');

  // show the error message
  const error = submitBtn.parentNode.querySelector('span');
  error.classList.add('error');
  error.textContent = message;
};

const showSuccess = (input) => {
  // remove the error class
  input.classList.remove('error');
  input.classList.add('success');

  // hide the error message
  const error = submitBtn.parentNode.querySelector('span');
  error.textContent = '';
};

const isEmailValid = (email) => {
  const regExp = /^([a-z0-9_\-.]+)@([a-z0-9_\-.]+)\.([a-z]+)$/;
  return regExp.test(email);
};

const checkEmail = () => {
  let valid = false;
  const emailAddress = email.value.trim();

  if (!isRequired(emailAddress)) {
    showError(email, EMAIL_REQUIRED);
  } else if (!isEmailValid(emailAddress)) {
    showError(email, EMAIL_INVALID);
  } else {
    showSuccess(email);
    valid = true;
  }
  return valid;
};

form.addEventListener('submit', (event) => {
  // prevent the form from submitting
  event.preventDefault();

  // validate fields
  const isEmailValid = checkEmail();

  // submit to the server if the form is valid
  if (isEmailValid) {
    form.submit();
  }
});

// Creating form data object

const formData = {
  name: fullName.value,
  email: email.value,
  message: message.value,
};

// To confirm if the page has been visited previously
if (!localStorage.getItem('email')) {
  populateStorage();
} else {
  prefillForm();
}

// prefilling the form element
function prefillForm() {
  // retrieving stored data
  const StoreData = localStorage.getItem('contactFormData');
  const data = JSON.parse(StoreData);
  fullName.value = data.name;
  email.value = data.email;
  message.value = data.message;
}

// Storing value to local storage
function populateStorage() {
  localStorage.setItem('contactFormData', JSON.stringify(formData));
  prefillForm();
}

// adding event listener to form
form.addEventListener(('change'), () => {
  formData.name = fullName.value;
  formData.email = email.value;
  formData.message = message.value;
  populateStorage();
});
