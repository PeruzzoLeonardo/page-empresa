// Altura real da tela (corrige 100vh/dvh quebrado em navegadores in-app, ex: WhatsApp)
  function setRealVh() {
    document.documentElement.style.setProperty('--vh', (window.innerHeight * 0.01) + 'px');
  }
  setRealVh();
  window.addEventListener('resize', setRealVh);
  window.addEventListener('orientationchange', setRealVh);

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

  // Contact form -> envia via Formspree (sem sair do site)
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/SEU_FORM_ID'; // TODO: substituir pelo endpoint gerado em formspree.io
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    formStatus.textContent = '';
    formStatus.style.color = '';

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form),
      });

      if (response.ok) {
        formStatus.textContent = 'Mensagem enviada com sucesso! Retornaremos em breve.';
        formStatus.style.color = '#22c55e';
        form.reset();
      } else {
        throw new Error('Falha no envio');
      }
    } catch (err) {
      formStatus.textContent = 'Não foi possível enviar. Tente novamente ou chame no WhatsApp.';
      formStatus.style.color = '#ef4444';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar mensagem';
    }
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
