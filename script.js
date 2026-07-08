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

  // Contact form -> abre o WhatsApp com a mensagem preenchida (site estático, sem backend de e-mail)
  const WHATSAPP_NUMBER = '5549999149603';
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formStatus.textContent = '';
    formStatus.style.color = '';

    const nome = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const tipoProjeto = form.elements['tipo_projeto'].value.trim();
    const mensagem = form.elements['message'].value.trim();

    if (!nome || !email || !mensagem) {
      formStatus.textContent = 'Preencha nome, e-mail e mensagem antes de enviar.';
      formStatus.style.color = '#ef4444';
      return;
    }

    const texto = `Olá! Vim pelo site da LLDev e gostaria de um orçamento.\nNome: ${nome}\nE-mail: ${email}\nTipo de projeto: ${tipoProjeto}\nMensagem: ${mensagem}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;

    formStatus.textContent = 'Abrindo o WhatsApp...';
    formStatus.style.color = '#22c55e';
    window.open(whatsappUrl, '_blank');
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
