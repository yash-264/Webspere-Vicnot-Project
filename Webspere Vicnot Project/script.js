
    // Mobile menu toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      navLinks.classList.toggle('show');
    });

    // Keyboard accessibility for mobile menu toggle
    menuToggle.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        menuToggle.click();
      }
    });
  