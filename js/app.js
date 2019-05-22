const mainNav = document.getElementById('mainNav')
const topOfNav = mainNav.offsetTop;

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if(link.style.animation){
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.9}s`
      }
    });
    
  });
}

function stickyNav(){
  if(window.scrollY >= topOfNav){
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
  } 
}

window.addEventListener('scroll', stickyNav);
navSlide();
