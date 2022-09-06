const links = document.querySelectorAll('header ul li a');
const sections = document.querySelectorAll('section');

function changeLinkState() {

   let index = sections.length;

   while(--index && window.scrollY + 200 < sections[index].offsetTop) {}

   links.forEach((link) => link.classList.remove('active'));
   links[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);