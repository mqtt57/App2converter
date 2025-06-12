document.addEventListener('DOMContentLoaded', () => {
  const pages = document.querySelectorAll('.page');
  const topBar = document.getElementById('top-bar');
  const bottomButtons = document.querySelectorAll('.bottom-nav button');

  function showPage(id) {
    pages.forEach(p => p.classList.remove('active'));
    const page = document.getElementById(id);
    if (page) {
      page.classList.add('active');
      topBar.textContent = page.querySelector('h2') ? page.querySelector('h2').textContent : 'Accueil';
    }
  }

  bottomButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      showPage(btn.dataset.page);
    });
  });

  document.getElementById('view-services').addEventListener('click', () => {
    showPage('services');
  });

  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      showPage(link.dataset.page);
    });
  });

  const form = document.getElementById('contact-form');
  const confirmation = document.getElementById('confirmation');
  form.addEventListener('submit', e => {
    e.preventDefault();
    confirmation.classList.remove('hidden');
    form.reset();
  });

  // Splash screen
  setTimeout(() => {
    document.getElementById('splash').style.display = 'none';
    showPage('home');
  }, 2000);
});
