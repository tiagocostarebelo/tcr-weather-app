//VARIABLES
const menuBtn = document.querySelector('.header__nav-mobile');
const navMenu = document.querySelector('.header__nav-access');
const content = document.querySelector('main');
const footer = document.querySelector('footer');


// EVENT LISTENERS
menuBtn.addEventListener('click', mobileMenu);
navLinks.forEach(link => {
  link.addEventListener('click', mobileMenu);
});
buttons.forEach(button => {
  button.addEventListener('click', scrollToForm);
});
submitBtn.addEventListener('submit', thankYouMessage);


//HELPER FUNCTIONS
// This function grabs the height of the header and applies it to the top property of the navigation menu
function heightAdjust() {
  const header = document.querySelector('header');
  const headerHeight = header.offsetHeight - 1;
  navMenu.style.top = `${headerHeight}px`;
}


//This function activates/removes the mobile navigation menu while invoking the heightAdjust function when active
//to keep the nav menu leveled with the header
function mobileMenu() {
  if (navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    menuBtn.classList.remove('toggle');
    content.classList.remove('blur');
    footer.classList.remove('blur');
    navMenu.style.top = '-51px';
  } else {
    navMenu.classList.add('active');
    menuBtn.classList.add('toggle');
    content.classList.add('blur');
    footer.classList.add('blur');
    heightAdjust();
  }
}