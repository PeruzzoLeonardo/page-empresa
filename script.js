// Mobile menu
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // Reveal on scroll
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
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
    window.location.href = `mailto:leolp.dev@gmail.com?subject=Orçamento de projeto&body=${body}`;
  });

  // Chatbot (FastBots)
  const chatToggle = document.getElementById('chatToggle');
  const chatWindow = document.getElementById('chatWindow');
  const chatClose = document.getElementById('chatClose');
  const chatIframe = document.getElementById('chatIframe');
  const chatTeaser = document.getElementById('chatTeaser');
  const CHATBOT_SRC = 'https://app.fastbots.ai/embed/cmrbdxex406iwpc1p097xbxqa';

  function openChat() {
    if (!chatIframe.src) chatIframe.src = CHATBOT_SRC; // carrega só no primeiro clique
    chatWindow.classList.add('open');
    chatTeaser.classList.remove('show');
  }
  function closeChat() {
    chatWindow.classList.remove('open');
  }

  chatToggle.addEventListener('click', () => {
    chatWindow.classList.contains('open') ? closeChat() : openChat();
  });
  chatClose.addEventListener('click', closeChat);
  chatTeaser.addEventListener('click', openChat);

  // Mostra o balão de chamada e mantém fixo (some só ao abrir o chat)
  setTimeout(() => {
    if (!chatWindow.classList.contains('open')) chatTeaser.classList.add('show');
  }, 1500);
