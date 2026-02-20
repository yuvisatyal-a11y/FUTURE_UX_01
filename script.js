// Mobile menu toggle
document.querySelector('.mobile-menu-btn')?.addEventListener('click', function() {
  document.querySelector('.nav').classList.toggle('open');
  this.setAttribute('aria-expanded', 
    document.querySelector('.nav').classList.contains('open')
  );
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav').classList.remove('open');
  });
});
