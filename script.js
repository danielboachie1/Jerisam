// Page Loader
document.body.classList.add('loading');

window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  // Minimum display time so it doesn't flash on fast loads
  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.classList.remove('loading');
    // Remove from DOM after fade-out
    setTimeout(() => loader.remove(), 600);
  }, 800);
});


// Navbar scroll effect
const navbar = document.getElementById('navbar');
const onScroll = () => {
  if (window.scrollY > 30) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll);
onScroll();

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const iconOpen = menuToggle.querySelector('[data-icon-open]');
const iconClose = menuToggle.querySelector('[data-icon-close]');

const setMenu = (open) => {
  mobileMenu.hidden = !open;
  iconOpen.hidden = open;
  iconClose.hidden = !open;
};
menuToggle.addEventListener('click', () => setMenu(mobileMenu.hidden));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));

// Contact form
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.hidden = false;
  status.textContent = "Thank you! We've received your enquiry and will be in touch within 24 hours.";
  form.reset();
  setTimeout(() => { status.hidden = true; }, 6000);
});

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();
