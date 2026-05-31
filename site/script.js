/* The JettAways — interactions */

/* Mobile nav toggle */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  /* Highlight active nav link based on current page filename */
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* Gallery lightbox */
  const lightbox = document.querySelector('.lightbox');
  const lightboxContent = document.querySelector('.lightbox-content');
  const lightboxClose = document.querySelector('.lightbox-close');
  if (lightbox) {
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        lightboxContent.innerHTML = '';
        if (img) {
          const bigImg = document.createElement('img');
          bigImg.src = img.src;
          bigImg.alt = img.alt || '';
          lightboxContent.appendChild(bigImg);
          lightboxContent.classList.add('has-image');
        } else {
          const label = item.dataset.label || 'PHOTO';
          lightboxContent.textContent = label;
          lightboxContent.classList.remove('has-image');
        }
        lightbox.classList.add('open');
      });
    });
    lightboxClose?.addEventListener('click', () => lightbox.classList.remove('open'));
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) lightbox.classList.remove('open');
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') lightbox.classList.remove('open');
    });
  }
});
