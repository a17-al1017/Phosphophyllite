// Phosphophyllite — shared site behavior

document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Product filter tabs (products.html)
  var tabs = document.querySelectorAll('.filter-tabs button');
  var cards = document.querySelectorAll('[data-category]');
  if (tabs.length && cards.length) {
    tabs.forEach(function (btn) {
      btn.addEventListener('click', function () {
        tabs.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var cat = btn.getAttribute('data-filter');
        cards.forEach(function (card) {
          if (cat === 'all' || card.getAttribute('data-category') === cat) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Contact form (demo only — no backend wired up)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var success = document.getElementById('form-success');
      if (success) {
        success.classList.add('show');
        success.setAttribute('tabindex', '-1');
        success.focus();
      }
      form.reset();
    });
  }

});
