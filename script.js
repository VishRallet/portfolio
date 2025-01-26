document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  const name = document.getElementById('name').value;
  alert('Thank you, ' + name + '! Your message has been sent.');
  document.getElementById('contactForm').reset();
});
window.addEventListener('scroll', function() {
  const projectsSection = document.querySelector('#projects');
  const sectionPosition = projectsSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;
  if (sectionPosition < screenPosition) {
    projectsSection.style.opacity = '1';
    projectsSection.style.transform = 'translateY(0)';
  }
});
window.onscroll = function() {
  scrollFunction();
};
function scrollFunction() {
  const scrollBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}