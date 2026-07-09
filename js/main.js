/* ============================================================
   FIREFLY PROPANE — main.js
   ============================================================ */

/* ---- Partial Loader ---- */
(function () {
  const depth = window.location.pathname.split('/').filter(p => p.length > 0 && p.endsWith('.html') === false).length;
  const isInSubfolder = window.location.pathname.includes('/pages/');
  const root = isInSubfolder ? '../' : './';

  function loadPartial(selector, file, callback) {
    const el = document.querySelector(selector);
    if (!el) return;
    fetch(root + 'partials/' + file)
      .then(r => r.text())
      .then(html => {
        el.outerHTML = html.replaceAll('__ROOT__', root);
        if (callback) callback();
      })
      .catch(err => console.warn('Could not load partial:', file, err));
  }

  document.addEventListener('DOMContentLoaded', function () {
    loadPartial('#nav-placeholder', 'nav.html', function () {
      initAfterNav();
    });
    loadPartial('#footer-placeholder', 'footer.html');
  });

  function initAfterNav() {
    /* ---- Mobile nav toggle ---- */
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (toggle && navLinks) {
      toggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        toggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
      });
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
      });
    }

    /* ---- Mark active nav link ---- */
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
      const href = link.getAttribute('href') || '';
      const linkPage = href.split('/').pop().split('#')[0];
      if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
      }
    });

    /* ---- Firefly dot animation (hero) ---- */
    const container = document.querySelector('.hero-fireflies');
    if (container) {
      for (let i = 0; i < 18; i++) {
        const dot = document.createElement('div');
        dot.classList.add('ff-dot');
        const size = Math.random() * 8 + 4;
        dot.style.cssText = `
          width: ${size}px; height: ${size}px;
          top: ${Math.random() * 90}%;
          left: ${Math.random() * 95}%;
          animation-delay: ${Math.random() * 5}s;
          animation-duration: ${3 + Math.random() * 4}s;
        `;
        container.appendChild(dot);
      }
    }
  }
})();

/* ---- Everything else runs after DOM is ready ---- */
document.addEventListener('DOMContentLoaded', () => {

  /* ---- Anniversary Coupon ---- */
  const couponBtn = document.getElementById('couponBtn');
  const couponBox = document.getElementById('couponBox');
  if (couponBtn && couponBox) {
    couponBtn.addEventListener('click', () => {
      couponBox.classList.add('visible');
      couponBtn.innerHTML = '<i class="ti ti-gift" aria-hidden="true"></i> Coupon Revealed!';
      couponBtn.disabled = true;
      couponBtn.style.opacity = '0.7';
    });
  }

  /* ---- Contact form — Formspree ---- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const success = document.querySelector('.form-success');
      const errorEl = document.querySelector('.form-error');
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
      if (errorEl) errorEl.classList.remove('visible');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending…';
      }
      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          if (success) success.classList.add('visible');
          contactForm.reset();
        } else {
          if (errorEl) errorEl.classList.add('visible');
        }
      } catch (err) {
        if (errorEl) errorEl.classList.add('visible');
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }
      }
    });
  }

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => obs.observe(el));
  }

  /* ---- FAQ Accordion ---- */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      const list = item.closest('.faq-list');
      if (list) {
        list.querySelectorAll('.faq-item.open').forEach(openItem => {
          if (openItem !== item) openItem.classList.remove('open');
        });
      }
      item.classList.toggle('open', !wasOpen);
    });
  });

});