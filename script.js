// Mobile menu
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));

  // Contact form (no backend yet) -> fallback to mailto
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = form.querySelectorAll('input, textarea, select');
    const [nome, email] = inputs;
    const tipo = form.querySelector('select').value;
    const msg = form.querySelector('textarea').value;
    const body = encodeURIComponent(`Nome: ${nome.value}\nE-mail: ${email.value}\nTipo de projeto: ${tipo}\n\nMensagem:\n${msg}`);
    window.location.href = `mailto:contato@devtech.com.br?subject=Orçamento de projeto&body=${body}`;
  });
