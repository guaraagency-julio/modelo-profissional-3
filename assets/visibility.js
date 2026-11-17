(() => {
  const sections = document.querySelectorAll('.reveal, .scroll-section');
  const show = section => {
    section.classList.add('is-revealed', 'section-in-view');
  };
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    sections.forEach(show);
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      show(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.05 });
  sections.forEach(section => observer.observe(section));
})();
