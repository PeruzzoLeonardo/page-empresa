# LLDev — Landing Page Premium

Landing page cinematográfica para a **LLDev**, empresa de desenvolvimento de sites, sistemas web, aplicativos e automações.

Visual inspirado em Apple / Linear / Stripe / Vercel: fundo vivo, animações de scroll, dispositivos 3D flutuantes e microinterações.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **TypeScript**
- **Tailwind CSS v4** (tokens via `@theme` em `globals.css`)
- **Framer Motion** — reveals, entradas, scroll progress
- **GSAP + ScrollTrigger** — coreografia do hero, timeline desenhada, zoom de imagens
- **Lucide Icons** (+ ícones de marca inline em `ui/BrandIcons.tsx`)

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção (estático)
```

## Estrutura

```
src/
  app/
    layout.tsx        # fontes Space Grotesk + Inter, metadata
    globals.css       # tokens de cor, utilitários, keyframes
    page.tsx          # composição das seções
  components/
    Background.tsx      # canvas de partículas + grid + glows reativos ao scroll
    CustomCursor.tsx    # cursor customizado (dot + ring)
    ScrollProgress.tsx  # barra de progresso no topo
    Navbar.tsx          # navbar transparente -> blur ao rolar
    Hero.tsx            # dispositivos 3D flutuantes + scroll choreography
    Impact.tsx          # texto surgindo palavra por palavra
    Services.tsx        # cards com tilt 3D
    Projects.tsx        # cards com fade/scale/blur + zoom no scroll
    Process.tsx         # timeline com linha desenhada no scroll
    About.tsx           # layout dividido + contadores animados
    CTA.tsx             # seção final com partículas + botão pulsante
    Footer.tsx
    ui/                 # MagneticButton, TiltCard, WordReveal, Logo, BrandIcons
    mockups/            # dashboards e telas de projeto em SVG (sem imagens externas)
  hooks/
    useMagnetic.ts      # hover magnético
    useCounter.ts       # contagem animada ao entrar em tela
  lib/
    gsap.ts             # registro dos plugins GSAP
```

## Detalhes de implementação

- **Sem imagens externas**: todos os dashboards e telas são SVG gerados em código.
- **Performance**: animações via `requestAnimationFrame`/`transform`, canvas com contagem de partículas proporcional à tela, `prefers-reduced-motion` respeitado.
- **Paleta**: `#030712` (bg), `#0066FF` / `#00A8FF` / `#3AA8FF` (azuis), `#9CA3AF` (texto secundário).

## Personalização rápida

- **Cores**: bloco `@theme` em `src/app/globals.css`.
- **WhatsApp / e-mail**: `src/components/CTA.tsx` (`wa.me/5500000000000`, `contato@lldev.com.br`).
- **Contato / redes**: `src/components/Footer.tsx`.
