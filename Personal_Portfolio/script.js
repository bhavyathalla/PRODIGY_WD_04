let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active')
};

ScrollReveal().reveal('.home-content ,heading', { origin:'top' });
ScrollReveal().reveal('.home-img,  .img-skills, .services-container, .project-content, .cer-img, .contact form',
    {origin:'button'});
ScrollReveal().reveal('.home-content h1', {origin:'left'});
ScrollReveal().reveal('.home-content p, .about-section',{origin:'right'});
  