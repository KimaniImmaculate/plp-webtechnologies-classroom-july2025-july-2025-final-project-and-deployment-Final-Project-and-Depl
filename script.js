//  Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

//  Contact Modal Logic 
const contactModal = document.getElementById('contactModal');
const contactModalBtn = document.getElementById('contactModalBtn');
const contactCloseBtn = contactModal.querySelector('.close-btn');

contactModalBtn.addEventListener('click', () => {
  contactModal.style.display = 'flex';
});

contactCloseBtn.addEventListener('click', () => {
  contactModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = 'none';
  }
});

//  Modal Logic 
const modal = document.getElementById('getStartedModal');
const openModalBtn = document.getElementById('openModal');
const closeBtn = document.querySelector('.close-btn');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// === Dark Mode Toggle ===
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});


// === Contact Form Validation ===
const form = document.getElementById('questionForm');
const response = document.getElementById('formResponse');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    response.textContent = "Please fill out all fields.";
    response.style.color = "#EF4444"; // red
    return;
  }

  // Simulate success message
  response.textContent = "Thanks for reaching out! We'll get back to you soon.";
  response.style.color = "#10B981"; // green
  form.reset();
});
