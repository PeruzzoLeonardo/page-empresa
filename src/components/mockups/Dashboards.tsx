"use client";

/**
 * Self-contained SVG dashboard mockups (no external images).
 * Dark, blue-accented UI that matches the LLDev aesthetic.
 */

export function DashboardMain({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 400"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Dashboard de desempenho"
    >
      <defs>
        <linearGradient id="dm-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#081226" />
          <stop offset="1" stopColor="#050b1a" />
        </linearGradient>
        <linearGradient id="dm-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0066FF" stopOpacity="0.55" />
          <stop offset="1" stopColor="#0066FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="dm-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3AA8FF" />
          <stop offset="1" stopColor="#00A8FF" />
        </linearGradient>
      </defs>

      <rect width="640" height="400" fill="url(#dm-bg)" />
      {/* sidebar */}
      <rect x="0" y="0" width="70" height="400" fill="#0a1428" />
      <rect x="18" y="22" width="34" height="10" rx="3" fill="#00A8FF" />
      {[70, 110, 150, 190, 230].map((y, i) => (
        <rect
          key={y}
          x="20"
          y={y}
          width="30"
          height="8"
          rx="4"
          fill={i === 1 ? "#3AA8FF" : "#1b2a45"}
        />
      ))}

      {/* header */}
      <rect x="92" y="22" width="120" height="12" rx="4" fill="#22334f" />
      <rect x="92" y="42" width="70" height="8" rx="4" fill="#16233c" />
      <circle cx="600" cy="30" r="12" fill="#12203a" />
      <rect x="540" y="24" width="42" height="12" rx="6" fill="#0066FF" />

      {/* stat cards */}
      {[
        { x: 92, label: "#16233c", val: "#2fd27a" },
        { x: 272, label: "#16233c", val: "#3AA8FF" },
        { x: 452, label: "#16233c", val: "#00A8FF" },
      ].map((c) => (
        <g key={c.x}>
          <rect
            x={c.x}
            y="70"
            width="156"
            height="70"
            rx="10"
            fill="#0c1830"
            stroke="rgba(255,255,255,.05)"
          />
          <rect x={c.x + 14} y="84" width="60" height="7" rx="3" fill="#1d2c48" />
          <rect
            x={c.x + 14}
            y="102"
            width="90"
            height="14"
            rx="4"
            fill={c.val}
            opacity="0.9"
          />
          <rect x={c.x + 14} y="124" width="40" height="6" rx="3" fill="#16233c" />
        </g>
      ))}

      {/* main chart */}
      <rect
        x="92"
        y="158"
        width="336"
        height="216"
        rx="12"
        fill="#0b1830"
        stroke="rgba(255,255,255,.05)"
      />
      <path
        d="M112 320 L150 300 L188 308 L226 270 L264 288 L302 240 L340 258 L378 210 L408 224 L408 352 L112 352 Z"
        fill="url(#dm-area)"
      />
      <path
        d="M112 320 L150 300 L188 308 L226 270 L264 288 L302 240 L340 258 L378 210 L408 224"
        fill="none"
        stroke="url(#dm-line)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[
        [226, 270],
        [302, 240],
        [378, 210],
      ].map(([cx, cy]) => (
        <circle key={cx} cx={cx} cy={cy} r="4" fill="#00A8FF" />
      ))}

      {/* donut */}
      <rect
        x="452"
        y="158"
        width="156"
        height="216"
        rx="12"
        fill="#0b1830"
        stroke="rgba(255,255,255,.05)"
      />
      <circle
        cx="530"
        cy="238"
        r="42"
        fill="none"
        stroke="#12233f"
        strokeWidth="14"
      />
      <circle
        cx="530"
        cy="238"
        r="42"
        fill="none"
        stroke="url(#dm-line)"
        strokeWidth="14"
        strokeDasharray="185 264"
        strokeLinecap="round"
        transform="rotate(-90 530 238)"
      />
      {[300, 322, 344].map((y) => (
        <rect key={y} x="472" y={y} width="116" height="8" rx="4" fill="#15263f" />
      ))}
    </svg>
  );
}

export function DashboardPhone({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 480"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="App de desempenho"
    >
      <defs>
        <linearGradient id="ph-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#08152c" />
          <stop offset="1" stopColor="#040a18" />
        </linearGradient>
        <linearGradient id="ph-bar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#0066FF" />
          <stop offset="1" stopColor="#00A8FF" />
        </linearGradient>
      </defs>
      <rect width="240" height="480" fill="url(#ph-bg)" />
      <rect x="20" y="34" width="90" height="10" rx="5" fill="#22334f" />
      <rect x="20" y="52" width="130" height="18" rx="5" fill="#3AA8FF" opacity="0.9" />

      <rect
        x="20"
        y="92"
        width="200"
        height="120"
        rx="14"
        fill="#0c1a34"
        stroke="rgba(255,255,255,.06)"
      />
      <rect x="36" y="108" width="80" height="9" rx="4" fill="#1d2c48" />
      <rect x="36" y="126" width="120" height="22" rx="5" fill="#2fd27a" opacity="0.85" />
      <path
        d="M36 190 L64 176 L92 182 L120 158 L148 168 L176 140 L204 150"
        fill="none"
        stroke="#00A8FF"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* bars */}
      <rect
        x="20"
        y="232"
        width="200"
        height="150"
        rx="14"
        fill="#0c1a34"
        stroke="rgba(255,255,255,.06)"
      />
      {[
        [40, 60],
        [72, 90],
        [104, 48],
        [136, 108],
        [168, 74],
      ].map(([x, h], i) => (
        <rect
          key={i}
          x={x}
          y={360 - h}
          width="18"
          height={h}
          rx="5"
          fill="url(#ph-bar)"
        />
      ))}

      {/* tab bar */}
      <rect x="20" y="404" width="200" height="52" rx="16" fill="#0a1730" />
      {[52, 100, 148, 196].map((cx, i) => (
        <circle
          key={cx}
          cx={cx}
          cy="430"
          r="8"
          fill={i === 0 ? "#00A8FF" : "#1c2c49"}
        />
      ))}
    </svg>
  );
}

export function DashboardTablet({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 480"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Painel em tablet"
    >
      <defs>
        <linearGradient id="tb-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#08152c" />
          <stop offset="1" stopColor="#040a18" />
        </linearGradient>
      </defs>
      <rect width="360" height="480" fill="url(#tb-bg)" />
      <rect x="28" y="30" width="120" height="14" rx="5" fill="#22334f" />
      <rect x="28" y="54" width="80" height="8" rx="4" fill="#16233c" />
      {[28, 176].map((x) => (
        <g key={x}>
          <rect
            x={x}
            y="88"
            width="156"
            height="90"
            rx="12"
            fill="#0c1a34"
            stroke="rgba(255,255,255,.06)"
          />
          <rect x={x + 16} y="104" width="60" height="8" rx="4" fill="#1d2c48" />
          <rect x={x + 16} y="122" width="90" height="18" rx="5" fill="#3AA8FF" opacity="0.85" />
        </g>
      ))}
      <rect
        x="28"
        y="196"
        width="304"
        height="256"
        rx="14"
        fill="#0c1a34"
        stroke="rgba(255,255,255,.06)"
      />
      <path
        d="M52 400 L96 372 L140 388 L184 336 L228 360 L272 300 L308 322"
        fill="none"
        stroke="#00A8FF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
