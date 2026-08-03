import ForjaShowcase from "@/components/ForjaShowcase";

/**
 * Forja Gestão Frotas — página de diferenciais do projeto.
 *
 * Conteúdo baseado nas funcionalidades reais do app (gerenciador-frota):
 * dashboard em tempo real, veículos com status, motoristas/CNH, abastecimento
 * e consumo, manutenção por KM, troca de pneus, multas, documentos (CRLV/
 * seguro), alertas de vencimento, exportação para Excel, conta por empresa e
 * PWA offline. Layout/tema e efeitos ficam em <ForjaShowcase>.
 */

const CONTENT = `
<a class="backlink" href="/">&larr; Voltar ao site</a>

<header class="hero">
  <canvas id="embers" aria-hidden="true"></canvas>
  <div class="wrap">
    <div class="brandline">
      <div class="brandmark">F</div>
      <div class="brandname">Forja Gestão Frotas <span>· gestão premium de frotas</span></div>
    </div>

    <p class="eyebrow">O que nos diferencia</p>
    <h1>Toda a frota, <span class="molten">sob controle.</span></h1>
    <p class="lede">
      Veículos, motoristas, abastecimento, manutenção e documentos num painel só —
      <strong>a operação da frota em tempo real</strong>. Cada empresa com a própria
      conta, no computador ou no celular.
    </p>

    <div class="stats">
      <div class="stat">
        <div class="n">tempo <em>real</em></div>
        <div class="l">Painel com KPIs e gráficos da frota</div>
      </div>
      <div class="stat">
        <div class="n"><em>∞</em> veículos</div>
        <div class="l">Cadastre toda a frota, cada um com seu status</div>
      </div>
      <div class="stat">
        <div class="n"><em>1</em> app</div>
        <div class="l">Instalável no celular, funciona offline</div>
      </div>
    </div>
  </div>
</header>

<main>
  <section class="wrap reveal" aria-labelledby="pilares">
    <div class="sec-head">
      <span class="kicker">Os 4 pilares</span>
      <h2 id="pilares">O que a Forja Frotas entrega</h2>
    </div>
    <div class="pillars">

      <article class="pillar">
        <svg class="ic" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 14 16 10"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
        <span class="tag">Painel ao vivo</span>
        <h3>Dashboard da frota em tempo real</h3>
        <p>Total de veículos, motoristas em atividade, combustível e manutenção do mês, multas pendentes e KM rodados — com gráficos de custos, consumo e status da frota num relance.</p>
      </article>

      <article class="pillar">
        <svg class="ic" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/><path d="M8 2v4M16 2v4"/><path d="M12 14v3"/><path d="M12 20h.01"/></svg>
        <span class="tag">Nada vence sem aviso</span>
        <h3>Alertas de vencimento</h3>
        <p>CNH, exame toxicológico, CRLV e seguro monitorados: o painel mostra o que está em dia e o que vai vencer, para nada pegar a empresa de surpresa.</p>
      </article>

      <article class="pillar">
        <svg class="ic" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.3L3 18v3h3l6.4-6.3a4 4 0 0 0 5.3-5.4l-2.3 2.3-2-2 2-2Z"/></svg>
        <span class="tag">Preventiva e corretiva</span>
        <h3>Manutenção controlada por KM</h3>
        <p>Histórico por veículo, troca de óleo e filtros com previsão da próxima pelo hodômetro, e controle de troca de pneus — a manutenção deixa de ser no susto.</p>
      </article>

      <article class="pillar">
        <svg class="ic" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/></svg>
        <span class="tag">Conta por empresa</span>
        <h3>Cada empresa, sua própria frota</h3>
        <p>Cada empresa cria sua conta e enxerga só os próprios veículos e motoristas. Os dados ficam na nuvem, acessíveis de qualquer lugar.</p>
      </article>

    </div>
  </section>

  <hr class="rule" />

  <section class="wrap reveal" aria-labelledby="operacao">
    <div class="sec-head">
      <span class="kicker">Visão do gestor</span>
      <h2 id="operacao">Cadastro e operação, ponta a ponta</h2>
      <p>Tudo o que a empresa precisa para registrar e acompanhar a frota sem planilha paralela.</p>
    </div>
    <div class="feat-grid">
      <div class="feat">
        <svg class="ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 17h4V5H2v12h3"/><path d="M14 9h4l3 3v5h-2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>
        <h4>Veículos com status</h4>
        <p>Cadastro por placa e situação — Disponível, Em Viagem ou Em Manutenção — com a frota inteira à vista.</p>
      </div>
      <div class="feat">
        <svg class="ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2.5"/><path d="M14 10h5M14 14h5"/></svg>
        <h4>Motoristas e CNH</h4>
        <p>Motorista com CNH, pontos, exame toxicológico e situação — ativo, em viagem ou folga.</p>
      </div>
      <div class="feat">
        <svg class="ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3" x2="15" y1="22" y2="22"/><line x1="4" x2="14" y1="9" y2="9"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0V9.83a2 2 0 0 0-.59-1.42L18 5"/></svg>
        <h4>Abastecimento</h4>
        <p>Cada abastecimento com litros, custo e KM — o consumo da frota fica registrado.</p>
      </div>
      <div class="feat">
        <svg class="ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 14 16 10"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
        <h4>Controle de KM</h4>
        <p>Registro de odômetro por veículo e KM rodados no mês — base para consumo e manutenção.</p>
      </div>
      <div class="feat">
        <svg class="ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M8 7h8M8 11h8M8 15h5"/></svg>
        <h4>Multas</h4>
        <p>Infração, data, valor e pontos na CNH; as multas pendentes ficam sempre à vista.</p>
      </div>
      <div class="feat">
        <svg class="ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h4"/></svg>
        <h4>Documentos</h4>
        <p>CRLV e seguro com emissão e vencimento, guardados por veículo.</p>
      </div>
    </div>
  </section>

  <hr class="rule" />

  <section class="wrap reveal" aria-labelledby="custos">
    <div class="sec-head">
      <span class="kicker">Decisão</span>
      <h2 id="custos">Custos e mobilidade sob a lupa</h2>
      <p>Os números que mostram para onde vai o dinheiro da frota.</p>
    </div>
    <div class="feat-grid">
      <div class="feat">
        <svg class="ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
        <h4>Distribuição de custos</h4>
        <p>Gráfico separando quanto foi para combustível e quanto para manutenção.</p>
      </div>
      <div class="feat">
        <svg class="ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.5S6 9 6 13a6 6 0 0 0 12 0c0-4-6-10.5-6-10.5Z"/></svg>
        <h4>Consumo médio km/L</h4>
        <p>Média de km/L por veículo — quem está eficiente e quem está bebendo combustível.</p>
      </div>
      <div class="feat">
        <svg class="ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3v18h18"/><rect x="7" y="10" width="3" height="7"/><rect x="12" y="6" width="3" height="11"/><rect x="17" y="13" width="3" height="4"/></svg>
        <h4>KM por veículo</h4>
        <p>Quanto cada veículo rodou no período, para equilibrar o uso da frota.</p>
      </div>
      <div class="feat">
        <svg class="ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/></svg>
        <h4>Troca de pneus</h4>
        <p>Controle de troca de pneus por veículo, com previsão da próxima pelo KM.</p>
      </div>
      <div class="feat">
        <svg class="ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h8M12 13v4"/></svg>
        <h4>Exportar para Excel</h4>
        <p>Relatórios da frota exportados em planilha, prontos para a contabilidade.</p>
      </div>
      <div class="feat">
        <svg class="ic" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>
        <h4>Instala como app</h4>
        <p>PWA na tela inicial do celular, com modo offline — a frota na palma da mão.</p>
      </div>
    </div>
  </section>

  <hr class="rule" />

  <section class="wrap close reveal">
    <h2>Da placa ao pneu, <span class="molten">a frota forjada num painel.</span></h2>
    <p>Forja Gestão Frotas reúne veículos, motoristas, custos e documentos em tempo real — para a empresa rodar sem surpresa e sem planilha paralela.</p>
    <a class="cta" href="https://gerenciador-frota.vercel.app/" target="_blank" rel="noopener noreferrer">
      Acessar o app
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
    </a>
  </section>

  <p class="foot">Forja Gestão Frotas · Diferenciais da plataforma</p>
</main>
`;

export default function ForjaFrotasPage() {
  return <ForjaShowcase content={CONTENT} />;
}
