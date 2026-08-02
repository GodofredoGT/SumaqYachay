import { cn } from "@/lib/utils"

type LogoSYProps = {
  className?: string
  withName?: boolean
}

/**
 * Logo 3D vectorial (SVG) de la Academia Sumaq Yachay.
 * Escudo con monograma "SY" en dorado con efecto de extrusión 3D,
 * optimizado y escalable a cualquier tamaño sin pérdida de calidad.
 */

export function LogoSY({ className, withName = false }: LogoSYProps) {
  return (
    <svg
      viewBox="0 0 200 268"
      className={cn("h-auto w-full", className)}
      role="img"
      aria-label="Logo Academia Preuniversitaria Sumaq Yachay"
    >
      <defs>
        <linearGradient id="goldFace" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.92 0.12 95)" />
          <stop offset="55%" stopColor="oklch(0.82 0.16 86)" />
          <stop offset="100%" stopColor="oklch(0.68 0.15 72)" />
        </linearGradient>
        <linearGradient id="goldEdge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.12 66)" />
          <stop offset="100%" stopColor="oklch(0.4 0.09 60)" />
        </linearGradient>
        <linearGradient id="navyFace" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.27 0.08 264)" />
          <stop offset="100%" stopColor="oklch(0.16 0.06 264)" />
        </linearGradient>
        <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="oklch(0.1 0.05 264)" floodOpacity="0.55" />
        </filter>
      </defs>

      <g filter="url(#softShadow)">
        {/* Cuerpo del escudo */}
        <path
          d="M22 16 H178 V126 C178 188 138 220 100 240 C62 220 22 188 22 126 Z"
          fill="url(#navyFace)"
          stroke="url(#goldEdge)"
          strokeWidth="5"
        />
        {/* Borde interior dorado */}
        <path
          d="M34 28 H166 V124 C166 178 132 206 100 224 C68 206 34 178 34 124 Z"
          fill="none"
          stroke="url(#goldFace)"
          strokeWidth="4"
        />
      </g>

      {/* Texto superior */}
      <text
        x="100"
        y="52"
        textAnchor="middle"
        fontFamily="var(--font-space-grotesk), sans-serif"
        fontWeight="700"
        fontSize="13"
        letterSpacing="0.5"
        fill="url(#goldFace)"
      >
        ACADEMIA
      </text>
      <text
        x="100"
        y="66"
        textAnchor="middle"
        fontFamily="var(--font-space-grotesk), sans-serif"
        fontWeight="700"
        fontSize="9.5"
        letterSpacing="1"
        fill="url(#goldFace)"
      >
        PREUNIVERSITARIA
      </text>

      {/* Monograma SY con extrusión 3D (capa de profundidad) */}
      <text
        x="103"
        y="176"
        textAnchor="middle"
        fontFamily="var(--font-space-grotesk), sans-serif"
        fontWeight="700"
        fontSize="118"
        fill="url(#goldEdge)"
        fontStyle="italic"
      >
        SY
      </text>
      {/* Cara frontal del monograma */}
      <text
        x="100"
        y="172"
        textAnchor="middle"
        fontFamily="var(--font-space-grotesk), sans-serif"
        fontWeight="700"
        fontSize="118"
        fill="url(#goldFace)"
        fontStyle="italic"
      >
        SY
      </text>

      {withName && (
        <text
          x="100"
          y="262"
          textAnchor="middle"
          fontFamily="var(--font-space-grotesk), sans-serif"
          fontWeight="600"
          fontStyle="italic"
          fontSize="26"
          fill="url(#goldFace)"
        >
          Sumaq Yachay
        </text>
      )}
    </svg>
  )
}
