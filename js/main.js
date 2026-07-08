/* ============================================================
   FIREFLY PROPANE — main.js
   ============================================================ */

/* ---- Mobile nav toggle ---- */
document.addEventListener('DOMContentLoaded', () => {

  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });

    // Close nav on link click (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  /* ---- Mark active nav link ---- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
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

  /* ---- Contact form — real submission via Formspree ---- */
  /* SETUP: replace YOUR_FORM_ID below with your real Formspree form ID (see README) */
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

  /* ---- Scroll reveal (simple) ---- */
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

      // Close any sibling FAQ items within the same list (single-open accordion)
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
