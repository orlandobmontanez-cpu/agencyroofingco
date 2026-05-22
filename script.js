/* ============================================================
   AGENCY ROOFING CO. — script.js
   Progressive enhancement only. Site works without it.
   ============================================================ */

(function () {
  'use strict';

  /* ------------ Year stamp ------------ */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ------------ Sticky nav scroll state ------------ */
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () {
      if (window.scrollY > 24) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ------------ Mobile menu toggle ------------ */
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('mobileMenu');

  if (toggle && menu) {
    var setMenu = function (open) {
      toggle.classList.toggle('open', open);
      menu.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      menu.setAttribute('aria-hidden', open ? 'false' : 'true');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };

    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.contains('open');
      setMenu(!isOpen);
    });

    /* Close menu when any link inside it is tapped */
    Array.prototype.forEach.call(menu.querySelectorAll('a'), function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });

    /* Close menu on escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) setMenu(false);
    });
  }

  /* ------------ Contact form → mailto fallback ------------
     GitHub Pages has no backend. Compose a prefilled email
     and hand it off to the user's mail client.
  ------------------------------------------------------------ */
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = (document.getElementById('name').value || '').trim();
      var phone = (document.getElementById('phone').value || '').trim();
      var email = (document.getElementById('email').value || '').trim();
      var projectType = (document.getElementById('projectType').value || '').trim();
      var message = (document.getElementById('message').value || '').trim();

      /* Light validation — require name + phone */
      if (!name || !phone) {
        alert('Please add at least your name and phone so we can reach you.');
        if (!name) document.getElementById('name').focus();
        else document.getElementById('phone').focus();
        return;
      }

      var subject = 'Agency Roofing Estimate Request — ' + name;

      var bodyLines = [
        'Hi Orlando,',
        '',
        'I\'d like to request an estimate from Agency Roofing Co.',
        '',
        '— Name: ' + name,
        '— Phone: ' + phone
      ];
      if (email) bodyLines.push('— Email: ' + email);
      if (projectType) bodyLines.push('— Project type: ' + projectType);
      if (message) {
        bodyLines.push('');
        bodyLines.push('Details:');
        bodyLines.push(message);
      }
      bodyLines.push('');
      bodyLines.push('Thanks,');
      bodyLines.push(name);

      var body = bodyLines.join('\n');

      var mailto = 'mailto:agencyroofingco@gmail.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(body);

      window.location.href = mailto;
    });
  }

})();
