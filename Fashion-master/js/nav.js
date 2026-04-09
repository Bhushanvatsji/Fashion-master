
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    // toggle nav
    nav.classList.toggle('nav-active');

    // animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`;
      }
    });

    burger.classList.toggle('toggle');
  });
};

navSlide();

const images = [
  "images/index-img/photo/Off-the-Wall.jpg",
  "images/index-img/photo/photo1.jpg",
  "images/index-img/photo/photo2.jpg",
  "images/index-img/photo/photo3.jpg",
  "images/index-img/photo/photo4.jpg",
  "images/index-img/photo/photo5.jpg",
  "images/index-img/photo/photo6.jpg",
  
];

let index = 0;
const imgElement = document.getElementById("main-index-img");

setInterval(() => {
  index = (index + 1) % images.length; // loop back to start
  imgElement.src = images[index]; 
}, 5000); // change every 5 sec
