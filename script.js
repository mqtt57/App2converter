function showPage(id) {
  document.querySelectorAll('section.page').forEach(sec => {
    sec.style.display = sec.id === id ? 'block' : 'none';
  });
  const title = document.querySelector(`#${id}`).dataset.title;
  document.querySelector('.top-header h1').textContent = title;
}

document.querySelectorAll('.bottom-nav a').forEach(a => {
  a.addEventListener('click', evt => {
    evt.preventDefault();
    showPage(a.dataset.page);
  });
});

document.querySelectorAll('[data-link]').forEach(link => {
  link.addEventListener('click', evt => {
    evt.preventDefault();
    showPage(link.dataset.link);
  });
});

showPage('home');
