const wrapper = document.querySelector('.wrapper');
const loginLinks = document.querySelectorAll('.centered4');
const iconClose = document.querySelector('.icon-close');
// Show popup when header about me is clicked
loginLinks[0].addEventListener('click', () => {
  wrapper.classList.add('active-popup');
});

// Close popup
iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
});


const wrapper1 = document.querySelector('.wrapper_resume');
const loginLinks1 = document.querySelectorAll('.centered3');
const iconClose1 = document.querySelector('.icon-close1');
// Show popup when header about me is clicked
loginLinks1[0].addEventListener('click', () => {
  wrapper1.classList.add('active-popup');
});

// Close popup
iconClose1.addEventListener('click', () => {
  wrapper1.classList.remove('active-popup');
});

