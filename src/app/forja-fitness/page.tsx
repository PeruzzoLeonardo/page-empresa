import ForjaShowcase from "@/components/ForjaShowcase";

/**
 * Forja Fitness — página de diferenciais do projeto.
 *
 * O layout/tema (brasa/forja) e os efeitos vivem em <ForjaShowcase>; aqui
 * fica só o conteúdo específico do Forja Fitness, injetado como HTML para
 * preservar os ícones SVG fiéis ao original.
 */

const CONTENT = `
<a class="backlink" href="/">&larr; Voltar ao site</a>

<header class="hero">
  <canvas id="embers" aria-hidden="true"></canvas>
  <div class="wrap">
    <div class="brandline">
      <div class="brandmark">F</div>
      <div class="brandname">Forja Fitness <span>· plataforma para personal trainers</span></div>
    </div>

    <p class="eyebrow">O que nos diferencia</p>
    <h1>Cada personal, <span class="molten">sua própria academia.</span></h1>
    <p class="lede">
      Um app onde <strong>cada professor comanda o próprio mundo</strong> — treinos,
      avaliações, comunidade e um Coach de IA — e o aluno só enxerga o que é dele.
      Presencial ou online, tudo no mesmo lugar.
    </p>

    <div class="stats">
      <div class="stat">
        <div class="n"><em>1</em> app</div>
        <div class="l">Vira app instalável no celular, funciona offline</div>
      </div>
      <div class="stat">
        <div class="n"><em>∞</em> academias</div>
        <div class="l">Cada professor isolado, com seus próprios alunos</div>
      </div>
      <div class="stat">
        <div class="n">IA <em>nativa</em></div>
        <div class="l">Coach com IA para aluno e para professor</div>
      </div>
    </div>
  </div>
</header>

<main>
  <section class="wrap reveal" aria-labelledby="pilares">
    <div class="sec-head">
      <span class="kicker">Os 4 pilares</span>
      <h2 id="pilares">O que só a Forja entrega</h2>
    </div>
    <div class="pillars">

      <article class="pillar">
        <svg class="ic" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="M9 4v16"/></svg>
        <span class="tag">Multi-inquilino</span>
        <h3>Academia isolada por professor</h3>
        <p>Na prática, um app white-label por personal: o aluno só vê os treinos, a comunidade e as avaliações do seu próprio professor. O isolamento é garantido no banco, não só na tela.</p>
      </article>

      <article class="pillar">
        <svg class="ic" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a4 4 0 0 1 4 4c0 1.2-.5 2-1 2.7.8.6 2 1.8 2 3.8a5 5 0 0 1-10 0c0-2 1.2-3.2 2-3.8-.5-.7-1-1.5-1-2.7a4 4 0 0 1 4-4Z"/><path d="M12 17v4"/><path d="M9 21h6"/></svg>
        <span class="tag">Coach IA · Claude</span>
        <h3>Inteligência que treina junto</h3>
        <p>Para o aluno: ajusta treino, explica execução e sugere alimentação — com cautela para dor e lesão. Para o professor: monta progressões, redige mensagens e lê o engajamento da turma.</p>
      </article>

      <article class="pillar">
        <svg class="ic" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 12h6"/><path d="M9 16h4"/></svg>
        <span class="tag">Sob medida</span>
        <h3>Anamnese 100% personalizável</h3>
        <p>O professor monta a própria ficha — texto, número, sim/não, múltipla escolha, obrigatórias ou não — e o aluno responde já no cadastro. Nada de formulário engessado.</p>
      </article>

      <article class="pillar">
        <svg class="ic" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.5 6.5 17.5 17.5"/><path d="M4 8l-1 1 3 3-2 2 2 2 2-2 3 3 1-1"/><path d="M16 4l4 4"/><circle cx="18" cy="6" r="2"/></svg>
        <span class="tag">Execução guiada</span>
        <h3>Treino que acontece na tela</h3>
        <p>Timer de descanso, peso por série, intensidade e "treino ativo" que não se perde. Só libera o próximo depois de concluir — e o professor pode travar os ajustes quando quiser.</p>
      </article>

    </div>
  </section>

  <hr class="rule" />

  <section class="wrap reveal" aria-labelledby="gestao">
    <div class="sec-head">
      <span class="kicker">Visão do professor</span>
      <h2 id="gestao">Gestão do aluno, ponta a ponta</h2>
      <p>Tudo o que um personal precisa para acompanhar cada aluno sem planilha paralela.</p>
    </div>
    <div class="feat-grid">
      <div class="feat">
        <svg class="ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg>
        <h4>Cadastro rico</h4>
        <p>Nome, aniversário, profissão, modalidade presencial/online, plano de pagamento e anamnese — de uma vez.</p>
      </div>
      <div class="feat">
        <svg class="ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m5 19 4-4 3 3 3-4 4 5"/></svg>
        <h4>Avaliação com fotos</h4>
        <p>Histórico de avaliações e protocolo de periodicidade, com aviso quando é hora de novas fotos.</p>
      </div>
      <div class="feat">
        <svg class="ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/><path d="M7 15h4"/></svg>
        <h4>Mensalidade sob controle</h4>
        <p>Ciclo de renovação por aluno e alertas de "vence em X dias" ou "vencido" — sem deixar dinheiro na mesa.</p>
      </div>
      <div class="feat">
        <svg class="ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 12h8"/><path d="M12 8v8"/><circle cx="12" cy="12" r="9"/></svg>
        <h4>Acesso à comunidade</h4>
        <p>Liga ou desliga a comunidade por aluno — ideal para quem é só online e não entra no grupo.</p>
      </div>
      <div class="feat">
        <svg class="ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
        <h4>Radar de engajamento</h4>
        <p>Painel mostra quem está treinando e quem sumiu, para agir antes de perder o aluno.</p>
      </div>
      <div class="feat">
        <svg class="ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20a8 8 0 1 0-8-8"/><path d="M12 6v6l4 2"/><path d="M4 12H2m2.6-5.4L3 5"/></svg>
        <h4>Nutrição e agenda</h4>
        <p>Cardápios com horário das refeições e agenda — o acompanhamento não para no treino.</p>
      </div>
    </div>
  </section>

  <hr class="rule" />

  <section class="wrap reveal" aria-labelledby="engaja">
    <div class="sec-head">
      <span class="kicker">Vínculo</span>
      <h2 id="engaja">Engajamento que segura o aluno</h2>
      <p>O que faz o aluno abrir o app todo dia — e não largar o plano.</p>
    </div>
    <div class="feat-grid">
      <div class="feat">
        <svg class="ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/></svg>
        <h4>Comunidade da academia</h4>
        <p>Feed e chat do grupo, com foto e nome próprios, indicador de não lidas e divisa "novas mensagens".</p>
      </div>
      <div class="feat">
        <svg class="ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 10h8M8 14h5"/><path d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H9l-5 4V5a1 1 0 0 1 1-1Z"/></svg>
        <h4>Chat direto com o professor</h4>
        <p>Conversa individual aluno ↔ professor, com editar e apagar mensagem.</p>
      </div>
      <div class="feat">
        <svg class="ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 21h8M12 17v4"/><path d="M7 4h10v4a5 5 0 0 1-10 0Z"/><path d="M5 4H3v2a3 3 0 0 0 3 3M19 4h2v2a3 3 0 0 1-3 3"/></svg>
        <h4>Desafios e ranking</h4>
        <p>Desafios com curtidas e ranking mensal da turma — a competição saudável que vira hábito.</p>
      </div>
      <div class="feat">
        <svg class="ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 8 3 8H3s3-1 3-8"/><path d="M10.3 20a2 2 0 0 0 3.4 0"/></svg>
        <h4>Notificações push</h4>
        <p>Avisos no celular e badge no ícone somando mensagens e comunidade — o app chama de volta.</p>
      </div>
      <div class="feat">
        <svg class="ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>
        <h4>Instala como app</h4>
        <p>PWA na tela inicial do celular, com modo offline e navegação por deslize entre abas.</p>
      </div>
      <div class="feat">
        <svg class="ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z"/></svg>
        <h4>Presencial e online juntos</h4>
        <p>A mesma plataforma atende quem treina na academia e quem é acompanhado à distância.</p>
      </div>
    </div>
  </section>

  <hr class="rule" />

  <section class="wrap close reveal">
    <h2>Do cadastro ao ranking, <span class="molten">forjado num só app.</span></h2>
    <p>Forja Fitness junta gestão, treino, avaliação, comunidade e IA na palma da mão — para o professor crescer sem virar refém de planilhas.</p>
    <a class="cta" href="https://academia-app-three-iota.vercel.app/?instalar" target="_blank" rel="noopener noreferrer">
      Acessar o app
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
    </a>
  </section>

  <p class="foot">Forja Fitness · Diferenciais da plataforma</p>
</main>
`;

export default function ForjaFitnessPage() {
  return <ForjaShowcase content={CONTENT} />;
}
