(function() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', (evt) => {
    if (window.scrollY) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  });
})();