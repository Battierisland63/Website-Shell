document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  }

  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const isExpanded = header.getAttribute('aria-expanded') === 'true';

      accordionHeaders.forEach(otherHeader => {
        otherHeader.classList.remove('active');
        otherHeader.setAttribute('aria-expanded', 'false');
      });

      if (!isExpanded) {
        header.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
