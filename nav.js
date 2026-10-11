// Hamburger menu and Services dropdown for the site navigation
(function () {
  var nav = document.querySelector('.abi-nav');
  if (!nav) return;

  var burger = nav.querySelector('.abi-nav__burger');
  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open);
  });

  nav.querySelectorAll('.abi-nav__sub-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var open = btn.parentElement.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open);
    });
  });

  // Close the menu when clicking outside it or pressing Escape
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target)) nav.classList.remove('is-open');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', false);
    }
  });

  // Highlight the current page
  var page = decodeURIComponent(location.pathname.split('/').pop()) || 'index.html';
  nav.querySelectorAll('.abi-nav__menu a').forEach(function (a) {
    if (decodeURIComponent(a.getAttribute('href')) === page) a.setAttribute('aria-current', 'page');
  });
})();
